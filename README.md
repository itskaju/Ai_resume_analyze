# 🚀 AI Resume Analyzer

An AI-powered web application that analyzes resumes and provides an ATS (Applicant Tracking System) score along with skill insights and improvement suggestions.

---

## 🌐 Live Demo

* 🔗 Frontend: https://ai-resume-analyze-drab.vercel.app
* 🔗 Backend API: https://ai-resume-analyze-jsrs.onrender.com

---

## ✨ Features

* 📄 Upload Resume (PDF)
* 📊 ATS Score Calculation
* 🧠 Skill Detection
* ⚠ Missing Keywords Identification
* 💡 AI-based Suggestions
* ⚡ Fast & Simple UI

---

## 🏗 Tech Stack

### Frontend

* React.js
* Axios
* Bootstrap

### Backend

* FastAPI (Python)
* PyPDF2 (PDF parsing)

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 📂 Project Structure

```
ai-resume-analyzer/
│
├── backend/
│   ├── app/
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/itskaju/Ai_resume_analyze.git
cd Ai_resume_analyze
```

---

### 🔹 2. Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

👉 Backend runs on: `http://127.0.0.1:8000`

---

### 🔹 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

👉 Frontend runs on: `http://localhost:3000`

---

## 🔌 API Endpoint

```
POST /api/v1/resume/analyze
```

### Request:

* FormData:

  * `file`: Resume PDF
  * `job_desc`: Job description (optional)

### Response:

```json
{
  "ats_score": 85,
  "skills_found": ["Python", "React"],
  "missing_keywords": ["Docker"],
  "suggestions": ["Add more project experience"]
}
```

---

## 🚀 Deployment

### Frontend (Vercel)

* Root Directory: `frontend`
* Build Command: `npm run build`
* Output Directory: `dist`

### Backend (Render)

* Root Directory: `backend`
* Build Command: `pip install -r requirements.txt`
* Start Command:

```bash
uvicorn app.main:app --host 0.0.0.0 --port 10000
```

---

## ⚠️ Important Notes

* Enable CORS in FastAPI for frontend connection
* Replace `localhost` with deployed backend URL in frontend
* Render free tier may sleep (first request delay)

---

## 📸 Screenshots

(Add your UI screenshots here)

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📜 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

* Kajal Kumari
* GitHub: https://github.com/itskaju

---

⭐ If you like this project, give it a star!

