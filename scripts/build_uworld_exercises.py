from __future__ import annotations

import json
import re
from collections import Counter
from pathlib import Path
from typing import Any


SOURCE_PATH = Path("extracted/uworld-cars-practice.json")
OUT_PATH = Path("data/uworld-exercises.js")

STOPWORDS = {
    "a",
    "about",
    "above",
    "after",
    "again",
    "against",
    "all",
    "also",
    "an",
    "and",
    "any",
    "are",
    "as",
    "at",
    "author",
    "be",
    "because",
    "been",
    "being",
    "best",
    "between",
    "but",
    "by",
    "can",
    "claim",
    "could",
    "does",
    "following",
    "for",
    "from",
    "given",
    "had",
    "has",
    "have",
    "how",
    "if",
    "in",
    "information",
    "into",
    "is",
    "it",
    "its",
    "likely",
    "may",
    "most",
    "of",
    "on",
    "one",
    "or",
    "passage",
    "question",
    "readers",
    "should",
    "statement",
    "such",
    "than",
    "that",
    "the",
    "their",
    "them",
    "then",
    "there",
    "these",
    "they",
    "this",
    "to",
    "true",
    "was",
    "were",
    "what",
    "when",
    "which",
    "who",
    "why",
    "will",
    "with",
    "would",
}

QUESTION_TYPE_LABELS = {
    "1a": "Main Idea",
    "1b": "Meaning of Term",
    "1c": "Direct Claim",
    "1d": "Implicit Claim",
    "1e": "Perspective",
    "1f": "Further Implication",
    "2a": "Logical Relationship",
    "2b": "Claim Function",
    "2c": "Evidence Scope",
    "2d": "Evidence Connection",
    "2e": "Perspective",
    "2f": "Inference",
    "3a": "Exemplar",
    "3b": "Application",
    "3c": "New Claim",
    "3d": "Challenge or Support",
    "3e": "Applied Perspective",
    "3f": "New Information",
    "3g": "Analogy",
}

PARAGRAPH_STARTS = {
    "A": [
        "The seal of the Knights Templar",
        "The first Templars were nine knights",
        "However, this growing power",
        "Ultimately, the impoverished Philip the Fair",
        "Not everyone believed these charges",
    ],
    "B": [
        "Born in New York in 1929",
        "It is unsurprising that this woman",
        "In a brief composition",
        "Although Ms. Bouvier went on to decline",
    ],
    "C": [
        "The idea of probability is frequently misunderstood",
        "It might be objected",
        "In particular, we must be wary",
        "It is tempting to go beyond",
        "For instance, suppose again",
        "Similarly, the existence of intelligent beings",
    ],
    "D": [
        "Locomotives were invented in England",
        "A revitalized and advanced railway system",
        "To invest in a modern network",
        "It is true that developing",
    ],
    "E": [
        "From his bare feet",
        "As Socrates himself explains",
        "Some scholars have dismissed",
        "Despite the political amnesty",
        "Nevertheless, in his defense speech",
    ],
    "F": [
        "Lasting roughly from 1820",
        "Historically, messages could be conveyed",
        "After countless attempts by scientists",
        "There was, as Tom Standage observes",
        "Predictably, newer forms",
    ],
    "G": [
        "Because frequent consumption",
        "In the Harvard Public Health Review",
        "In particular, the idea",
        "Given this recognition",
        "On the other hand",
    ],
    "H": [
        "In nineteenth-century America",
        "As Richard Menke portrays events",
        "Tragically, however",
        "As the president's condition worsened",
    ],
    "I": [
        "Of late it has become popular",
        "The absurdity of the view",
        "However, this observation",
        "To think otherwise",
        "Different readers may come",
    ],
    "J": [
        "For almost 100 years now",
        "The now iconic inkblots",
        "Traditionally, psychoanalysts",
        "Rorschach experimented",
        "Ironically, however",
    ],
    "K": [
        "There may be reasons",
        "It is a curious fact",
        "An additional advantage",
        "To this proposal, however",
        "However, this point speaks",
        "Second is that schools",
        "With this one change",
    ],
    "L": [
        "Suppose a prosecutor",
        "Why is it not shocking",
        "It is worth distinguishing",
        "Moreover, the role of court-appointed attorneys",
        "It is doubtful that private defense attorneys",
    ],
}

TEXT_REPLACEMENTS = {
    "\u0087": "-",
    "\u008b": "",
    "\u0095": '"',
    "†": " - ",
    "«": "...",
    "Pe\"alvo": "Penalvo",
    "schogood ol day. None of them, however, are reasons.": "school day. None of them, however, are good reasons.",
    "thnot guilty. Nevertheless, he feels e suspect is confident": "the suspect is not guilty. Nevertheless, he feels confident",
    "diffor all we know and what remains ference between is": "difference between for all we know and what remains is",
    "theomeaning rists to assert that a work's depends": "theorists to assert that a work's meaning depends",
    "Smreally meant. He may ith not": "Smith really meant. He may not",
    "hbillion sides, that analysis as not six but six is unaffected": "has not six but six billion sides, that analysis is unaffected",
    "howeverHarvard Public Health Review. In , Kates": "however. In the Harvard Public Health Review, Kates",
    "iApology": "in the Apology",
    "oagreeing": "of agreeing",
    '"ethical" herprofessional e.': '"ethical" here. Professional',
    "this situation highlights how wealth and class injustice. While some contribute to defendants possess": "this situation highlights how wealth and class contribute to injustice. While some defendants possess",
    "daimonion loomed": "daimonion loomed",
}


def normalize_text(text: str) -> str:
    for old, new in TEXT_REPLACEMENTS.items():
        text = text.replace(old, new)
    text = re.sub(r"\s+", " ", text)
    text = re.sub(r"\s+([,.;:!?])", r"\1", text)
    text = re.sub(r"([([{])\s+", r"\1", text)
    text = re.sub(r"\s+([])}])", r"\1", text)
    text = re.sub(r"\s+-\s+", " - ", text)
    text = re.sub(r"\b([A-Za-z]+) s\b", r"\1's", text)
    return text.strip()


def protect_abbreviations(text: str) -> str:
    abbreviations = [
        "Mr.",
        "Mrs.",
        "Ms.",
        "Dr.",
        "Prof.",
        "St.",
        "U.S.",
        "D.C.",
        "F.B.",
        "e.g.",
        "i.e.",
        "et al.",
    ]
    for abbreviation in abbreviations:
        text = text.replace(abbreviation, abbreviation.replace(".", "<dot>"))
    text = re.sub(r"\b([A-Z])\.(?=\s+[A-Z])", r"\1<dot>", text)
    return text


def split_sentences(text: str) -> list[str]:
    protected = protect_abbreviations(normalize_text(text))
    protected = re.sub(r"([.!?][\"'])\s+(?=[A-Z0-9])", r"\1<SPLIT>", protected)
    protected = re.sub(r"([.!?])\s+(?=[\"'(\[]?[A-Z0-9])", r"\1<SPLIT>", protected)
    parts = protected.split("<SPLIT>")
    return [part.replace("<dot>", ".").strip() for part in parts if part.strip()]


def sentence_start_indices(sentences: list[str], passage_id: str) -> list[int]:
    starts = []
    for snippet in PARAGRAPH_STARTS[passage_id]:
        match_index = next(
            (
                index
                for index, sentence in enumerate(sentences)
                if normalize_text(sentence).startswith(snippet)
            ),
            None,
        )
        if match_index is None:
            raise ValueError(f"Could not find paragraph start for Passage {passage_id}: {snippet}")
        starts.append(match_index)
    return sorted(set(starts))


def build_paragraphs(sentences: list[str], passage_id: str) -> list[list[int]]:
    starts = sentence_start_indices(sentences, passage_id)
    paragraphs = []
    for position, start in enumerate(starts):
        end = starts[position + 1] if position + 1 < len(starts) else len(sentences)
        paragraphs.append(list(range(start, end)))
    return paragraphs


def slugify(text: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    return slug or "question"


def tokenize(text: str) -> list[str]:
    return [
        token
        for token in re.findall(r"[a-z][a-z']{2,}", normalize_text(text).lower())
        if token not in STOPWORDS
    ]


def choice_text(question: dict[str, Any], label: str | None) -> str:
    if not label:
        return ""
    for choice in question["choices"]:
        if choice["label"] == label:
            return choice["text"]
    return ""


def evidence_query(question: dict[str, Any]) -> str:
    correct_choice = choice_text(question, question.get("correctChoiceLabel"))
    all_choices = " ".join(choice["text"] for choice in question["choices"])
    explanation = question.get("explanationText", "")
    if correct_choice:
        return f"{question['originalPrompt']} {correct_choice} {explanation}"
    return f"{question['originalPrompt']} {all_choices} {explanation}"


def evidence_sentence_index(question: dict[str, Any], sentences: list[str]) -> int:
    query_tokens = Counter(tokenize(evidence_query(question)))
    prompt_tokens = Counter(tokenize(question["originalPrompt"]))
    if not query_tokens:
        return 0

    scored = []
    for index, sentence in enumerate(sentences):
        sentence_tokens = Counter(tokenize(sentence))
        overlap = sum(min(count, query_tokens[token]) for token, count in sentence_tokens.items())
        prompt_overlap = sum(min(count, prompt_tokens[token]) for token, count in sentence_tokens.items())
        unique_overlap = len(set(sentence_tokens) & set(query_tokens))
        length_penalty = max(len(sentence_tokens), 8) ** 0.42
        score = (overlap + 0.75 * prompt_overlap + 0.2 * unique_overlap) / length_penalty
        scored.append((score, index))

    return max(scored, key=lambda item: item[0])[1]


def question_type(label: str) -> str:
    prefix = label.split(".", 1)[0]
    return QUESTION_TYPE_LABELS.get(prefix, "CARS Reasoning")


def build_question(question: dict[str, Any], sentences: list[str]) -> dict[str, Any]:
    correct_choice = question.get("correctChoiceLabel")
    answer_index = evidence_sentence_index(question, sentences)
    output = {
        "id": question["id"],
        "type": question_type(question["bookQuestionLabel"]),
        "originalPrompt": normalize_text(question["originalPrompt"]),
        "choices": [normalize_text(choice["text"]) for choice in question["choices"]],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": answer_index,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": question["bookQuestionLabel"],
    }
    if correct_choice:
        output["correctChoice"] = correct_choice
    return output


def build_exercise(passage: dict[str, Any], questions: list[dict[str, Any]]) -> dict[str, Any]:
    sentences = split_sentences(passage["text"])
    passage_id = passage["bookPassageId"]
    return {
        "id": passage["id"],
        "title": passage["title"],
        "source": "Extracted from the local UWorld MCAT CARS PDF practice passages.",
        "paragraphs": build_paragraphs(sentences, passage_id),
        "sentences": sentences,
        "questions": [build_question(question, sentences) for question in questions],
    }


def main() -> None:
    source = json.loads(SOURCE_PATH.read_text())
    questions_by_passage: dict[str, list[dict[str, Any]]] = {}
    for question in source["questions"]:
        questions_by_passage.setdefault(question["bookPassageId"], []).append(question)

    exercises = [
        build_exercise(passage, questions_by_passage.get(passage["bookPassageId"], []))
        for passage in source["passages"]
    ]

    payload = json.dumps(exercises, indent=2, ensure_ascii=True)
    OUT_PATH.write_text(
        "(() => {\n"
        "  const store = window.CARS_EXERCISE_STORE;\n"
        "  if (!store) {\n"
        "    throw new Error(\"Load data/exercise-store.js before data/uworld-exercises.js.\");\n"
        "  }\n"
        f"  const uworldExercises = {payload};\n"
        "  const existingIds = new Set(store.exercises.map((exercise) => exercise.id));\n"
        "  uworldExercises.forEach((exercise) => {\n"
        "    if (!existingIds.has(exercise.id)) {\n"
        "      store.exercises.push(exercise);\n"
        "    }\n"
        "  });\n"
        "  store.activeExerciseId = \"uworld-passage-a\";\n"
        "})();\n"
    )

    question_count = sum(len(exercise["questions"]) for exercise in exercises)
    print(f"Wrote {len(exercises)} exercises and {question_count} questions to {OUT_PATH}")


if __name__ == "__main__":
    main()
