(function () {
function createSession(questionCount) {
  return {
    currentQuestionIndex: 0,
    selectedSentenceIndex: null,
    answeredQuestionIds: new Set(),
    correctQuestionIds: new Set(),
    feedbackResult: null,
    questionCount
  };
}

function selectSentence(session, sentenceIndex) {
  session.selectedSentenceIndex = sentenceIndex;
  session.feedbackResult = null;
}

function clearSelection(session) {
  session.selectedSentenceIndex = null;
  session.feedbackResult = null;
}

function recordAnswer(session, question, isCorrect) {
  session.answeredQuestionIds.add(question.id);

  if (isCorrect) {
    session.correctQuestionIds.add(question.id);
  } else {
    session.correctQuestionIds.delete(question.id);
  }
}

function moveToNextQuestion(session) {
  session.currentQuestionIndex = (session.currentQuestionIndex + 1) % session.questionCount;
  session.selectedSentenceIndex = null;
  session.feedbackResult = null;
}

function setFeedback(session, result) {
  session.feedbackResult = result;
}

window.CARS_STATE = {
  clearSelection,
  createSession,
  moveToNextQuestion,
  recordAnswer,
  selectSentence,
  setFeedback
};
})();
