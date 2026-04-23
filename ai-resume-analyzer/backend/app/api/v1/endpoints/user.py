from fastapi import APIRouter

router = APIRouter()

@router.get("/profile")
def profile():
    return {"name": "User", "role": "Developer"}