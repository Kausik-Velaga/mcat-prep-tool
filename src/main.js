import { exercise } from "../data/exercise.js";
import { clearSelection, createSession, moveToNextQuestion, recordAnswer, selectSentence } from "./state.js";
import { renderFeedback, renderPassage, renderQuestion } from "./render.js";

const elements = {
  passageTitle: document.querySelector("#passageTitle"),
  passageText: document.querySelector("#passageText"),
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

function currentQuestion() {
  return exercise.questions[session.currentQuestionIndex];
}

function rerender(answerSentenceIndex = null) {
  renderQuestion(elements, exercise, session);
  renderPassage(elements.passageText, exercise, session.selectedSentenceIndex, answerSentenceIndex);
}

function handleSentenceClick(event) {
  const sentenceButton = event.target.closest("[data-sentence-index]");

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
