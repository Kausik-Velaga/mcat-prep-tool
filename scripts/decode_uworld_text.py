from __future__ import annotations

from pathlib import Path
import re


COMMON_WORDS = {
    "the",
    "and",
    "that",
    "this",
    "with",
    "passage",
    "question",
    "questions",
    "answer",
    "chapter",
    "lesson",
    "cars",
    "author",
    "main",
    "idea",
    "because",
    "which",
    "would",
    "should",
}


def shift_decode(text: str) -> str:
    decoded: list[str] = []
    for char in text:
        code = ord(char)
        if char in "\n\r\t ":
            decoded.append(char)
        elif code < 128:
            decoded.append(chr(code + 29))
        else:
            decoded.append(char)
    return "".join(decoded)


def score_english(text: str) -> int:
    lowered = text.lower()
    words = [part.strip(".,;:?!()[]{}\"'") for part in lowered.split()]
    common_score = sum(2 for word in words if word in COMMON_WORDS)
    vowel_score = sum(1 for char in lowered if char in "aeiou")
    control_penalty = sum(3 for char in text if ord(char) < 32 and char not in "\n\r\t")
    odd_token_penalty = lowered.count("\\") + lowered.count("^") + lowered.count("`")
    return common_score + vowel_score - control_penalty - odd_token_penalty


def decode_line(line: str) -> str:
    raw = line.replace("\x00", "")
    decoded = shift_decode(raw)
    chosen = decoded if score_english(decoded) > score_english(raw) else raw
    return decode_embedded_tokens(chosen).replace("’", "D")


def decode_embedded_tokens(text: str) -> str:
    def replace_token(match: re.Match[str]) -> str:
        token = match.group(0)
        if token.isdigit():
            return token
        decoded = shift_decode(token)
        letters = [char for char in decoded if char.isalpha()]
        if len(letters) < 3:
            return token
        if sum(char.lower() in "aeiou" for char in letters) == 0:
            return token
        if not all(char.isalpha() or char in "'-." for char in decoded):
            return token
        return decoded

    return re.sub(r"[$%&0-9:;<=>A-Z]{3,}", replace_token, text)


def main() -> None:
    source = Path("extracted/uworld-cars-raw.txt")
    target = Path("extracted/uworld-cars-decoded.txt")
    target.write_text("".join(decode_line(line) for line in source.read_text(errors="ignore").splitlines(True)))


if __name__ == "__main__":
    main()
