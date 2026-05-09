(function () {
const exerciseStore = window.CARS_EXERCISE_STORE;
const requestedExerciseId = new URLSearchParams(window.location.search).get("exercise");
const exercise =
  exerciseStore?.exercises.find((candidate) => candidate.id === requestedExerciseId) ||
  exerciseStore?.exercises.find((candidate) => candidate.id === exerciseStore.activeExerciseId) ||
  exerciseStore?.exercises[0];
const { clearSelection, createSession, moveToNextQuestion, recordAnswer, selectSentence, setFeedback } = window.CARS_STATE;
const { renderFeedback, renderPassage, renderQuestion } = window.CARS_RENDER;

if (!exercise) {
  throw new Error("No CARS exercise data found. Load data/exercise-store.js before src/main.js.");
}

const elements = {
  passageTitle: document.querySelector("#passageTitle"),
  passageText: document.querySelector("#passageText"),
  originalQuestionText: document.querySelector("#originalQuestionText"),
  answerChoices: document.querySelector("#answerChoices"),
  questionPrompt: document.querySelector("#questionPrompt"),
  questionType: document.querySelector("#questionType"),
  progressText: document.querySelector("#progressText"),
  scoreText: document.querySelector("#scoreText"),
  selectedSentence: document.querySelector("#selectedSentence"),
  feedback: document.querySelector("#feedback"),
  checkButton: document.querySelector("#checkButton"),
  nextButton: document.querySelector("#nextButton"),
  clearSelectionButton: document.querySelector("#clearSelectionButton")
};

const session = createSession(exercise.questions.length);
const progressKey = `cars-progress:${exercise.id}`;

function readLocalProgress() {
  try {
    const savedProgress = JSON.parse(localStorage.getItem(progressKey) || "{}");
    return {
      answeredQuestionIds: Array.isArray(savedProgress.answeredQuestionIds) ? savedProgress.answeredQuestionIds : [],
      correctQuestionIds: Array.isArray(savedProgress.correctQuestionIds) ? savedProgress.correctQuestionIds : []
    };
  } catch (error) {
    return {
      answeredQuestionIds: [],
      correctQuestionIds: []
    };
  }
}

function currentProgress() {
  return {
    answeredQuestionIds: Array.from(session.answeredQuestionIds),
    correctQuestionIds: Array.from(session.correctQuestionIds)
  };
}

function applyProgress(progress) {
  session.answeredQuestionIds.clear();
  session.correctQuestionIds.clear();
  progress.answeredQuestionIds.forEach((questionId) => session.answeredQuestionIds.add(questionId));
  progress.correctQuestionIds.forEach((questionId) => session.correctQuestionIds.add(questionId));
}

function saveProgress() {
  const progress = currentProgress();

  localStorage.setItem(
    progressKey,
    JSON.stringify(progress)
  );

  window.CARS_CLOUD_PROGRESS?.saveProgress(exercise.id, progress);
}

applyProgress(readLocalProgress());

function currentQuestion() {
  return exercise.questions[session.currentQuestionIndex];
}

function rerender(answerSentenceIndex = null) {
  renderQuestion(elements, exercise, session);
  renderPassage(elements.passageText, exercise, session.selectedSentenceIndex, answerSentenceIndex);
}

function handleSentenceClick(event) {
  const eventTarget = event.target.nodeType === Node.TEXT_NODE ? event.target.parentElement : event.target;
  const sentenceButton = eventTarget.closest("[data-sentence-index]");

  if (!sentenceButton) {
    return;
  }

  selectSentence(session, Number(sentenceButton.dataset.sentenceIndex));
  rerender();
}

function handleCheckAnswer() {
  const question = currentQuestion();

  if (session.selectedSentenceIndex === null) {
    setFeedback(session, {
      isCorrect: false,
      message: "Select the sentence that best answers the question before checking."
    });
    rerender();
    return;
  }

  const isCorrect = session.selectedSentenceIndex === question.answerSentenceIndex;

  if (!isCorrect) {
    setFeedback(session, {
      isCorrect: false,
      message: "Not quite. Choose another sentence and try again."
    });
    rerender();
    return;
  }

  recordAnswer(session, question, true);
  saveProgress();
  setFeedback(session, {
    isCorrect: true,
    message: question.explanation
  });
  rerender(question.answerSentenceIndex);
}

function handleNextQuestion() {
  moveToNextQuestion(session);
  rerender();
}

function handleClearSelection() {
  clearSelection(session);
  rerender();
}

elements.passageText.addEventListener("click", handleSentenceClick);
elements.passageText.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    handleSentenceClick(event);
    event.preventDefault();
  }
});
elements.checkButton.addEventListener("click", handleCheckAnswer);
elements.nextButton.addEventListener("click", handleNextQuestion);
elements.clearSelectionButton.addEventListener("click", handleClearSelection);

rerender();

window.CARS_CLOUD_PROGRESS?.getProgress(exercise.id).then((cloudProgress) => {
  if (!cloudProgress) {
    return;
  }

  applyProgress(cloudProgress);
  rerender();
});
})();
