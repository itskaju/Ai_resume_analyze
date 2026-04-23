SKILLS = ["python", "java", "react", "node", "sql", "fastapi"]

def extract_skills(text):
    text = text.lower()
    found = [skill for skill in SKILLS if skill in text]
    return found