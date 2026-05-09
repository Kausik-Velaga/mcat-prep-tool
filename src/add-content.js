(function () {
  const input = document.querySelector("#exerciseInput");
  const button = document.querySelector("#previewExerciseButton");
  const preview = document.querySelector("#exercisePreview");

  function renderMessage(message, isValid) {
    preview.className = `template-preview ${isValid ? "is-valid" : "is-invalid"}`;
    preview.textContent = message;
  }

  function validateExercise(candidate) {
    const requiredFields = ["id", "title", "source", "paragraphs", "sentences", "questions"];
    const missingFields = requiredFields.filter((field) => candidate[field] === undefined);

    if (missingFields.length > 0) {
      return `Missing required fields: ${missingFields.join(", ")}.`;
    }

    if (!Array.isArray(candidate.sentences) || candidate.sentences.length === 0) {
      return "The sentences field must be a non-empty array.";
    }

    if (!Array.isArray(candidate.questions) || candidate.questions.length === 0) {
      return "The questions field must be a non-empty array.";
    }

    const invalidQuestion = candidate.questions.find((question) => {
      return (
        typeof question.prompt !== "string" ||
        !Number.isInteger(question.answerSentenceIndex) ||
        !candidate.sentences[question.answerSentenceIndex]
      );
    });

    if (invalidQuestion) {
      return "Each question needs a prompt and a valid answerSentenceIndex.";
    }

    return "";
  }

  button?.addEventListener("click", () => {
    try {
      const candidate = JSON.parse(input.value);
      const validationError = validateExercise(candidate);

      if (validationError) {
        renderMessage(validationError, false);
        return;
      }

      renderMessage(
        `Looks readable: "${candidate.title}" has ${candidate.sentences.length} sentences and ${candidate.questions.length} questions.`,
        true
      );
    } catch (error) {
      renderMessage(`JSON could not be parsed: ${error.message}`, false);
    }
  });
})();
