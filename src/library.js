(function () {
  const list = document.querySelector("#libraryList");
  const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
  const store = window.CARS_EXERCISE_STORE;
  const exercises = store?.exercises || [];
  let activeFilter = "all";
  let cloudProgressByExerciseId = {};

  function getSavedProgress(exercise) {
    if (Object.prototype.hasOwnProperty.call(cloudProgressByExerciseId, exercise.id)) {
      return cloudProgressByExerciseId[exercise.id];
    }

    try {
      const savedProgress = JSON.parse(localStorage.getItem(`cars-progress:${exercise.id}`) || "{}");
      const answeredQuestionIds = Array.isArray(savedProgress.answeredQuestionIds) ? savedProgress.answeredQuestionIds : [];
      const correctQuestionIds = Array.isArray(savedProgress.correctQuestionIds) ? savedProgress.correctQuestionIds : [];

      return {
        answeredQuestionIds,
        correctQuestionIds
      };
    } catch (error) {
      return {
        answeredQuestionIds: [],
        correctQuestionIds: []
      };
    }
  }

  function getExerciseProgress(exercise) {
    const savedProgress = getSavedProgress(exercise);
    const answeredCount = savedProgress.answeredQuestionIds.length;
    const totalCount = exercise.questions.length;
    const percent = totalCount === 0 ? 0 : Math.round((answeredCount / totalCount) * 100);
    const status = answeredCount === 0 ? "not-started" : answeredCount >= totalCount ? "finished" : "started";

    return {
      answeredCount,
      correctCount: savedProgress.correctQuestionIds.length,
      percent,
      status,
      totalCount
    };
  }

  function formatStatus(status) {
    if (status === "not-started") {
      return "Not Started";
    }

    if (status === "finished") {
      return "Finished";
    }

    return "Started";
  }

  function createProgressCell(progress) {
    const wrapper = document.createElement("div");
    const label = document.createElement("div");
    const track = document.createElement("div");
    const fill = document.createElement("span");

    wrapper.className = "progress-cell";
    label.className = "progress-label";
    label.textContent = `${progress.answeredCount}/${progress.totalCount} questions · ${progress.percent}%`;
    track.className = "progress-track";
    fill.style.width = `${progress.percent}%`;

    track.append(fill);
    wrapper.append(label, track);
    return wrapper;
  }

  function createStatusBadge(status) {
    const badge = document.createElement("span");
    badge.className = `status-badge is-${status}`;
    badge.textContent = formatStatus(status);
    return badge;
  }

  function renderLibrary() {
    if (!list) {
      return;
    }

    if (exercises.length === 0) {
      list.innerHTML = '<p class="empty-state">No exercises are available yet.</p>';
      return;
    }

    const rows = exercises
      .map((exercise) => ({
        exercise,
        progress: getExerciseProgress(exercise)
      }))
      .filter(({ progress }) => activeFilter === "all" || progress.status === activeFilter);

    if (rows.length === 0) {
      list.innerHTML = '<p class="empty-state">No exercises match this filter.</p>';
      return;
    }

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    table.className = "library-table";
    thead.innerHTML = `
      <tr>
        <th scope="col">Passage</th>
        <th scope="col">Questions</th>
        <th scope="col">Status</th>
        <th scope="col">Progress</th>
        <th scope="col">Action</th>
      </tr>
    `;

    rows.forEach(({ exercise, progress }) => {
      const row = document.createElement("tr");
      const titleCell = document.createElement("td");
      const countCell = document.createElement("td");
      const statusCell = document.createElement("td");
      const progressCell = document.createElement("td");
      const actionCell = document.createElement("td");
      const title = document.createElement("strong");
      const source = document.createElement("span");
      const link = document.createElement("a");

      title.textContent = exercise.title;
      source.textContent = exercise.source;
      titleCell.className = "passage-title-cell";
      titleCell.append(title, source);
      countCell.textContent = String(exercise.questions.length);
      statusCell.append(createStatusBadge(progress.status));
      progressCell.append(createProgressCell(progress));
      link.className = "secondary-link table-action";
      link.href = `./practice.html?exercise=${encodeURIComponent(exercise.id)}`;
      link.textContent = progress.status === "not-started" ? "Start" : "Continue";
      actionCell.append(link);
      row.append(titleCell, countCell, statusCell, progressCell, actionCell);
      tbody.append(row);
    });

    table.append(thead, tbody);
    list.replaceChildren(table);
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      filterButtons.forEach((candidate) => candidate.classList.toggle("is-active", candidate === button));
      renderLibrary();
    });
  });

  renderLibrary();

  window.CARS_CLOUD_PROGRESS?.getAllProgress().then((progressByExerciseId) => {
    cloudProgressByExerciseId = progressByExerciseId;
    renderLibrary();
  });
})();
