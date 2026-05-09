(function () {
  function normalizeProgress(row) {
    return {
      answeredQuestionIds: Array.isArray(row?.answered_question_ids) ? row.answered_question_ids : [],
      correctQuestionIds: Array.isArray(row?.correct_question_ids) ? row.correct_question_ids : [],
      stats: window.CARS_STATS?.normalizeStats(row?.stats)
    };
  }

  function isMissingStatsColumn(error) {
    return error?.message?.includes("stats") && error?.message?.includes("column");
  }

  async function getProgress(exerciseId) {
    const client = window.CARS_AUTH?.getClient();
    const user = await window.CARS_AUTH?.getUser();

    if (!client || !user) {
      return null;
    }

    let response = await client
      .from("user_progress")
      .select("answered_question_ids, correct_question_ids, stats")
      .eq("user_id", user.id)
      .eq("exercise_id", exerciseId)
      .maybeSingle();

    if (isMissingStatsColumn(response.error)) {
      response = await client
        .from("user_progress")
        .select("answered_question_ids, correct_question_ids")
        .eq("user_id", user.id)
        .eq("exercise_id", exerciseId)
        .maybeSingle();
    }

    const { data, error } = response;

    if (error) {
      console.warn("Unable to load cloud progress.", error.message);
      return null;
    }

    return data ? normalizeProgress(data) : null;
  }

  async function getAllProgress() {
    const client = window.CARS_AUTH?.getClient();
    const user = await window.CARS_AUTH?.getUser();

    if (!client || !user) {
      return {};
    }

    let response = await client
      .from("user_progress")
      .select("exercise_id, answered_question_ids, correct_question_ids, stats")
      .eq("user_id", user.id);

    if (isMissingStatsColumn(response.error)) {
      response = await client
        .from("user_progress")
        .select("exercise_id, answered_question_ids, correct_question_ids")
        .eq("user_id", user.id);
    }

    const { data, error } = response;

    if (error) {
      console.warn("Unable to load cloud progress.", error.message);
      return {};
    }

    return Object.fromEntries(
      (data || []).map((row) => [
        row.exercise_id,
        normalizeProgress(row)
      ])
    );
  }

  async function saveProgress(exerciseId, progress) {
    const client = window.CARS_AUTH?.getClient();
    const user = await window.CARS_AUTH?.getUser();

    if (!client || !user) {
      return;
    }

    const row = {
      user_id: user.id,
      exercise_id: exerciseId,
      answered_question_ids: progress.answeredQuestionIds,
      correct_question_ids: progress.correctQuestionIds
    };

    if (progress.stats) {
      row.stats = progress.stats;
    }

    let { error } = await client.from("user_progress").upsert(
      row,
      { onConflict: "user_id,exercise_id" }
    );

    if (isMissingStatsColumn(error)) {
      delete row.stats;
      ({ error } = await client.from("user_progress").upsert(
        row,
        { onConflict: "user_id,exercise_id" }
      ));
    }

    if (error) {
      console.warn("Unable to save cloud progress.", error.message);
    }
  }

  window.CARS_CLOUD_PROGRESS = {
    getAllProgress,
    getProgress,
    saveProgress
  };
})();
