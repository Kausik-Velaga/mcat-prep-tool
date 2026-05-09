(function () {
  function emptyStats() {
    return {
      completedQuestionIds: [],
      correctAttempts: 0,
      incorrectAttempts: 0,
      questionAttempts: {},
      totalTimeSeconds: 0
    };
  }

  function uniqueList(value) {
    return Array.from(new Set(Array.isArray(value) ? value : []));
  }

  function normalizeStats(value) {
    const stats = value && typeof value === "object" ? value : {};
    return {
      completedQuestionIds: uniqueList(stats.completedQuestionIds),
      correctAttempts: Number.isFinite(stats.correctAttempts) ? stats.correctAttempts : 0,
      incorrectAttempts: Number.isFinite(stats.incorrectAttempts) ? stats.incorrectAttempts : 0,
      questionAttempts: stats.questionAttempts && typeof stats.questionAttempts === "object" ? stats.questionAttempts : {},
      totalTimeSeconds: Number.isFinite(stats.totalTimeSeconds) ? stats.totalTimeSeconds : 0
    };
  }

  function recordAttempt(stats, questionId, isCorrect) {
    const currentAttempts = Number(stats.questionAttempts[questionId] || 0);
    stats.questionAttempts[questionId] = currentAttempts + 1;

    if (isCorrect) {
      stats.correctAttempts += 1;
      stats.completedQuestionIds = uniqueList([...stats.completedQuestionIds, questionId]);
    } else {
      stats.incorrectAttempts += 1;
    }
  }

  function addTime(stats, seconds) {
    stats.totalTimeSeconds += Math.max(0, Math.floor(seconds));
  }

  function totalAttempts(stats) {
    return stats.correctAttempts + stats.incorrectAttempts;
  }

  function accuracy(stats) {
    const attempts = totalAttempts(stats);
    return attempts === 0 ? 0 : Math.round((stats.correctAttempts / attempts) * 100);
  }

  function formatElapsed(seconds) {
    const safeSeconds = Math.max(0, Math.floor(seconds));
    const minutes = Math.floor(safeSeconds / 60);
    const remainingSeconds = safeSeconds % 60;
    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
  }

  window.CARS_STATS = {
    accuracy,
    addTime,
    emptyStats,
    formatElapsed,
    normalizeStats,
    recordAttempt,
    totalAttempts
  };
})();
