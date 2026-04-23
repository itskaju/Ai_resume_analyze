from pydantic import BaseModel
from typing import List

class AnalyzeResponse(BaseModel):
    ats_score: int
    skills_found: List[str]
    missing_keywords: List[str]
    suggestions: List[str]