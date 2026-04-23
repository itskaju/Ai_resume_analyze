import re

def clean_text(text: str) -> str:
    # remove extra spaces
    text = re.sub(r"\s+", " ", text)

    # remove special characters
    text = re.sub(r"[^a-zA-Z0-9\s]", "", text)

    return text.lower()