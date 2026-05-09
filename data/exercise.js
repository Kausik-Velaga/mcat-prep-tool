export const exercise = {
  title: "Basic Information: CARS",
  source: "Extracted from the local UWorld MCAT CARS PDF, Chapter 1: Introduction to CARS.",
  paragraphs: [
    [0, 1, 2, 3],
    [4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19]
  ],
  sentences: [
    "Critical Analysis and Reasoning Skills, or CARS, is one of the four sections of the MCAT, representing what was previously called Verbal Reasoning.",
    "It is the only section of the exam that is not based on scientific knowledge; rather, it is designed to test how well you comprehend and think critically about what you have read.",
    "Accordingly, no outside knowledge is required to answer the questions connected with a CARS passage.",
    "Like the other sections of the MCAT, the scoring for CARS ranges from 118 to 132 and counts for 25% of your overall MCAT score.",
    "The CARS section comprises nine passages of 500-600 words, each of which is followed by a set of five to seven multiple-choice questions, for a grand total of 53 questions.",
    "These questions fall into three skill types: Foundations of Comprehension (CMP), or general understanding of passage content; Reasoning Within the Text (RWT), or more critical analysis of passage material; and Reasoning Beyond the Text (RBT), or broader application of principles or ideas from the passage.",
    "On any single exam, roughly 30% of the questions come from CMP, 30% from RWT, and 40% from RBT.",
    "All the information you need to answer the questions is contained within the passage, although some RBT questions may also introduce new information in the question itself.",
    "CARS passages tend to be complex, which means you must read carefully and think deeply about what you read.",
    "During the exam, you will have 90 minutes to complete the entire section, an average of 10 minutes per passage and question set.",
    "The primary purpose of the CARS section is to test your reading skills and ability to reason logically based on passage content.",
    "CARS also tests whether you can apply what you learn from that content to external situations or in conjunction with new information.",
    "In other words, this section evaluates whether you can process complex information and think on your feet.",
    "CARS questions may ask you to identify the main idea of the passage; to consider how the passage's themes or concepts are related; to recognize how the author uses a particular term or supports an argument; or to discern viewpoints and attitudes, draw conclusions, and complete analogies.",
    "In other words, you must be able not only to understand but also to analyze, synthesize, interpret, apply, and extrapolate from the material provided in the passage.",
    "All CARS passages concern subjects from either the humanities or social sciences.",
    "These passages are typically excerpted from articles published in scholarly journals, covering a broad range of disciplines including literature, history, art, music, dance, religion, philosophy, anthropology, archaeology, geography, economics, political science, and psychology, among others.",
    "On exam day, you can expect a mix of passage topics.",
    "As no specific subject area dominates CARS, it is unlikely that any subject you particularly dread will be overrepresented.",
    "However, it is likely that some passages will seem easier or harder to you than others depending on their subject matter and the author's writing style."
  ],
  questions: [
    {
      id: "no-outside-knowledge",
      type: "Foundations",
      prompt: "Which sentence most directly supports the idea that CARS questions should be answered from the passage rather than from outside facts?",
      answerSentenceIndex: 2,
      explanation: "The sentence explicitly says no outside knowledge is required."
    },
    {
      id: "skill-breakdown",
      type: "Structure",
      prompt: "Which sentence identifies the three major skill categories tested by CARS questions?",
      answerSentenceIndex: 5,
      explanation: "This sentence lists CMP, RWT, and RBT and defines each category."
    },
    {
      id: "timing",
      type: "Detail",
      prompt: "Which sentence gives the time pressure a student faces for each passage and question set?",
      answerSentenceIndex: 9,
      explanation: "The sentence converts the 90-minute section into an average of 10 minutes per passage set."
    },
    {
      id: "purpose",
      type: "Main Idea",
      prompt: "Which sentence best states the central purpose of the CARS section?",
      answerSentenceIndex: 10,
      explanation: "This sentence directly states that CARS tests reading skills and logical reasoning from passage content."
    },
    {
      id: "subject-areas",
      type: "Detail",
      prompt: "Which sentence establishes the broad academic domains from which CARS passages are drawn?",
      answerSentenceIndex: 15,
      explanation: "The sentence names humanities and social sciences as the passage domains."
    },
    {
      id: "topic-variation",
      type: "Inference",
      prompt: "Which sentence explains why students should not expect one dreaded subject to appear disproportionately often?",
      answerSentenceIndex: 18,
      explanation: "The sentence says no specific subject area dominates CARS."
    }
  ]
};
