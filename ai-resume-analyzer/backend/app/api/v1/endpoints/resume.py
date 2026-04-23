from fastapi import APIRouter, UploadFile, File, Form
from app.services.ai_service import analyze_resume

router = APIRouter()

@router.post("/analyze")
async def analyze(file: UploadFile = File(...), job_desc: str = Form(...)):
    return analyze_resume(file, job_desc)