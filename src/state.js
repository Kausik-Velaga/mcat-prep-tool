(function () {
function createSession(questionCount) {
  return {
    currentQuestionIndex: 0,
    selectedSentenceIndex: null,
    answeredQuestionIds: new Set(),
    correctQuestionIds: new Set(),
    questionCount
  };
}

function selectSentence(session, sentenceIndex) {
  session.selectedSentenceIndex = sentenceIndex;
}

function clearSelection(session) {
  session.selectedSentenceIndex = null;
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
}

window.CARS_STATE = {
  clearSelection,
  createSession,
  moveToNextQuestion,
  recordAnswer,
  selectSentence
};
})();
