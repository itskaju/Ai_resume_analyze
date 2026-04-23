import re
from app.utils.parser import extract_text
from app.utils.text_cleaner import clean_text   # ✅ HERE

def analyze_resume(file, job_desc):
    text = extract_text(file)
    text = clean_text(text)

    job_words = job_desc.lower().split()

    matched = [w for w in job_words if w in text]
    missing = [w for w in job_words if w not in text]

    score = int((len(matched) / len(job_words)) * 100) if job_words else 0

    skills = list(set(re.findall(r"\b(python|react|node|sql|ml)\b", text)))

    return {
        "ats_score": score,
        "skills_found": skills,
        "missing_keywords": missing,
        "suggestions": ["Improve formatting", "Add keywords"]
    }