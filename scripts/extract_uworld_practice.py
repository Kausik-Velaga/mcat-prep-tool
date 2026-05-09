from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any


TEXT_PATH = Path("extracted/uworld-cars-decoded.txt")
OUT_PATH = Path("extracted/uworld-cars-practice.json")
REPORT_PATH = Path("extracted/uworld-cars-practice-report.json")

PASSAGE_RE = re.compile(r"^\s*Passage\s+([A-L]):\s*(.+?)\s*$")
QUESTION_RE = re.compile(r"^\s*([123][a-g]\.\s+.+?\s+Question\s+\d+)\s*$")
CHOICE_RE = re.compile(r"^\s*([A-D])\.\s*(.+?)\s*$")
PRACTICE_COUNT_RE = re.compile(r"\((\d+)\s+Practice Questions\)")


def clean_text(text: str) -> str:
    text = text.replace("\u008b", "")
    text = text.replace("\u0087", "-")
    text = text.replace("\u0095", '"')
    text = re.sub(r"\s+", " ", text)
    text = text.replace(" W ords", " Words")
    text = text.replace("D ivine", "Divine")
    text = text.replace("D isease", "Disease")
    text = text.replace("D ay", "Day")
    text = text.replace("D irect", "Direct")
    text = re.sub(r"\b([A-Za-z]+) s\b", r"\1's", text)
    return text.strip()


def line_text(line: str) -> str:
    return line.strip()


def is_noise_line(text: str) -> bool:
    if not text:
        return True
    if re.fullmatch(r"\d+", text):
        return True
    if text.startswith("Chapter "):
        return True
    if "Annotations for this passage" in text:
        return True
    return False


def extract_passages(lines: list[str]) -> dict[str, dict[str, Any]]:
    passages: dict[str, dict[str, Any]] = {}
    for index, line in enumerate(lines):
        match = PASSAGE_RE.match(line)
        if not match or "Excerpt" in line:
            continue

        passage_id, title = match.groups()
        title = clean_text(title)
        if passage_id in passages:
            continue

        body_lines: list[str] = []
        cursor = index + 1
        while cursor < len(lines):
            stripped = line_text(lines[cursor])
            if "Annotations for this passage" in stripped:
                break
            if PASSAGE_RE.match(lines[cursor]) and cursor != index + 1:
                break
            if stripped and not stripped.startswith("Chapter ") and not re.fullmatch(r"\d+", stripped):
                body_lines.append(stripped)
            cursor += 1

        while body_lines and ("UWorld" in body_lines[-1] or clean_text(body_lines[-1]).startswith(title[:12])):
            body_lines.pop()

        passages[passage_id] = {
            "id": f"uworld-passage-{passage_id.lower()}",
            "bookPassageId": passage_id,
            "title": title,
            "sourceLine": index + 1,
            "text": clean_text(" ".join(body_lines)),
            "rawLines": body_lines,
        }

    return passages


def nearest_passage_id(lines: list[str], question_index: int) -> str | None:
    for cursor in range(question_index, -1, -1):
        match = PASSAGE_RE.match(lines[cursor])
        if match and "Excerpt" not in lines[cursor]:
            return match.group(1)
    return None


def parse_question_block(block_lines: list[str]) -> tuple[str, list[dict[str, Any]]]:
    stem_lines: list[str] = []
    choices: list[dict[str, Any]] = []
    current_choice: dict[str, Any] | None = None

    for raw_line in block_lines:
        text = line_text(raw_line)
        if is_noise_line(text):
            continue

        choice_match = CHOICE_RE.match(text)
        if choice_match:
            if current_choice:
                choices.append(current_choice)
            current_choice = {
                "label": choice_match.group(1),
                "text": choice_match.group(2),
            }
            continue

        if current_choice:
            current_choice["text"] = f"{current_choice['text']} {text}"
        else:
            stem_lines.append(text)

    if current_choice:
        choices.append(current_choice)

    return clean_text(" ".join(stem_lines)), [
        {"label": choice["label"], "text": clean_text(choice["text"])} for choice in choices
    ]


def find_correct_choice(lines: list[str], start_index: int, stop_index: int) -> str | None:
    explanation = clean_text(" ".join(line_text(line) for line in lines[start_index:stop_index]))
    patterns = [
        r"Choice\s+([A-D])\s+is\s+the\s+correct\s+answer",
        r"Choice\s+([A-D])\s+is\s+correct",
        r"Choice\s+([A-D])\s+should\s+be\s+the\s+correct\s+answer",
        r"Choice\s+([A-D])\s+[^.]{0,140}\s+is\s+the\s+correct\s+answer",
        r"Choice\s+([A-D])\s+[^.]{0,140}\s+is\s+correct",
        r"Choice\s+([A-D])\s+[^.]{0,140}\s+is\s+the\s+best\s+answer",
        r"Therefore,\s+Choice\s+([A-D])",
        r"the\s+correct\s+answer\s+is\s+Choice\s+([A-D])",
        r"correct\s+answer\s+[^.]{0,120}\s+Choice\s+([A-D])",
        r"making\s+Choice\s+([A-D])\s+(?:the\s+)?(?:correct|best|better)",
        r"leaving\s+Choice\s+([A-D])\s+as\s+the\s+(?:correct|best|better)",
        r"Choice\s+([A-D])\s+is\s+the\s+more",
        r"Choice\s+([A-D])\s+best",
        r"Choice\s+is\s+the\s+correct\s+answer\s*([A-D])",
    ]
    for pattern in patterns:
        match = re.search(pattern, explanation)
        if match:
            return match.group(1)
    return None


def extract_questions(lines: list[str]) -> list[dict[str, Any]]:
    questions: list[dict[str, Any]] = []
    index = 0
    while index < len(lines):
        match = QUESTION_RE.match(lines[index])
        if not match:
            index += 1
            continue

        see_next_index = None
        for cursor in range(index + 1, min(index + 40, len(lines))):
            if "See next page for the strategy-based explanation" in lines[cursor]:
                see_next_index = cursor
                break

        if see_next_index is None:
            index += 1
            continue

        next_prompt_index = len(lines)
        for cursor in range(see_next_index + 1, len(lines)):
            if cursor > see_next_index + 20 and PASSAGE_RE.match(lines[cursor]) and "Excerpt" not in lines[cursor]:
                next_prompt_index = cursor
                break
            if cursor > see_next_index + 20 and QUESTION_RE.match(lines[cursor]):
                next_prompt_index = cursor
                break

        skill_label = clean_text(match.group(1))
        stem, choices = parse_question_block(lines[index + 1 : see_next_index])
        passage_id = nearest_passage_id(lines, index)
        explanation_text = clean_text(" ".join(line_text(line) for line in lines[see_next_index + 1 : next_prompt_index]))
        correct_choice = find_correct_choice(lines, see_next_index + 1, next_prompt_index)

        questions.append(
            {
                "id": f"uworld-{skill_label.lower().replace(' ', '-').replace('.', '').replace(':', '')}",
                "bookQuestionLabel": skill_label,
                "bookPassageId": passage_id,
                "sourceLine": index + 1,
                "originalPrompt": stem,
                "choices": choices,
                "correctChoiceLabel": correct_choice,
                "explanationText": explanation_text,
            }
        )
        index = see_next_index + 1

    return questions


def main() -> None:
    lines = TEXT_PATH.read_text().splitlines()
    passages = extract_passages(lines)
    questions = extract_questions(lines)
    expected_questions = sum(int(match.group(1)) for line in lines if (match := PRACTICE_COUNT_RE.search(line)))

    data = {
        "source": "UWorld MCAT CARS local PDF extraction",
        "extractionNotes": [
            "Generated from Ghostscript txtwrite output because the PDF's embedded text layer/font encoding is damaged.",
            "This is a first-pass extraction intended for local review before app import.",
        ],
        "passages": list(passages.values()),
        "questions": questions,
    }
    report = {
        "passageCount": len(passages),
        "questionCount": len(questions),
        "expectedQuestionCountFromSectionHeaders": expected_questions,
        "questionsMissingChoices": [q["id"] for q in questions if len(q["choices"]) != 4],
        "questionsMissingCorrectChoice": [q["id"] for q in questions if not q["correctChoiceLabel"]],
    }
    OUT_PATH.write_text(json.dumps(data, indent=2))
    REPORT_PATH.write_text(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()
