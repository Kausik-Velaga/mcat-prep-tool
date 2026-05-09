(function () {
const exerciseStore = window.CARS_EXERCISE_STORE;
const requestedExerciseId = new URLSearchParams(window.location.search).get("exercise");
const exercise =
  exerciseStore?.exercises.find((candidate) => candidate.id === requestedExerciseId) ||
  exerciseStore?.exercises.find((candidate) => candidate.id === exerciseStore.activeExerciseId) ||
  exerciseStore?.exercises[0];
const { clearSelection, createSession, moveToNextQuestion, recordAnswer, selectSentence } = window.CARS_STATE;
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

function loadProgress() {
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

function saveProgress() {
  localStorage.setItem(
    progressKey,
    JSON.stringify({
      answeredQuestionIds: Array.from(session.answeredQuestionIds),
      correctQuestionIds: Array.from(session.correctQuestionIds)
    })
  );
}

const savedProgress = loadProgress();
savedProgress.answeredQuestionIds.forEach((questionId) => session.answeredQuestionIds.add(questionId));
savedProgress.correctQuestionIds.forEach((questionId) => session.correctQuestionIds.add(questionId));

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
    renderFeedback(elements.feedback, {
      isCorrect: false,
      message: "Select the sentence that best answers the question before checking."
    });
    return;
  }

  const isCorrect = session.selectedSentenceIndex === question.answerSentenceIndex;
  recordAnswer(session, question, isCorrect);
  saveProgress();
  rerender(question.answerSentenceIndex);
  renderFeedback(elements.feedback, {
    isCorrect,
    message: isCorrect
      ? question.explanation
      : `The best evidence is: "${exercise.sentences[question.answerSentenceIndex]}"`
  });
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
})();
