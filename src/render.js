export function renderPassage(container, exercise, selectedSentenceIndex, answerSentenceIndex = null) {
  const paragraphGroups = exercise.paragraphs ?? [exercise.sentences.map((_, index) => index)];

  container.replaceChildren(
    ...paragraphGroups.map((sentenceIndexes) => {
      const paragraph = document.createElement("p");
      paragraph.className = "passage-paragraph";

      sentenceIndexes.forEach((index) => {
        const sentenceNode = document.createElement("span");
        sentenceNode.className = "sentence";
        sentenceNode.dataset.sentenceIndex = String(index);
        sentenceNode.role = "button";
        sentenceNode.tabIndex = 0;
        sentenceNode.textContent = exercise.sentences[index];

      if (index === selectedSentenceIndex) {
          sentenceNode.classList.add("is-selected");
      }

      if (index === answerSentenceIndex) {
          sentenceNode.classList.add("is-answer");
      }

        paragraph.append(sentenceNode, " ");
      });

      return paragraph;
    })
  );
}

export function renderQuestion(elements, exercise, session) {
  const question = exercise.questions[session.currentQuestionIndex];
  const selectedSentence = exercise.sentences[session.selectedSentenceIndex];

  elements.passageTitle.textContent = exercise.title;
  elements.questionPrompt.textContent = question.prompt;
  elements.questionType.textContent = question.type;
  elements.progressText.textContent = `Question ${session.currentQuestionIndex + 1} of ${exercise.questions.length}`;
  elements.scoreText.textContent = `${session.correctQuestionIds.size} correct`;
  elements.selectedSentence.textContent = selectedSentence ?? "Click a sentence in the passage.";
  elements.selectedSentence.classList.toggle("is-empty", selectedSentence === undefined);
  elements.feedback.replaceChildren();
}

export function renderFeedback(container, result) {
  const title = document.createElement("strong");
  title.textContent = result.isCorrect ? "Correct" : "Try that evidence again";

  const body = document.createElement("p");
  body.textContent = result.message;

  container.className = `feedback ${result.isCorrect ? "is-correct" : "is-incorrect"}`;
  container.replaceChildren(title, body);
}
