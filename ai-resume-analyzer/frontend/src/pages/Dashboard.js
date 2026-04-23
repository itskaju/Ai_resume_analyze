import React, { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [file, setFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [score, setScore] = useState(0);
  const [skills, setSkills] = useState([]);
  const [result, setResult] = useState(null); // ✅ NEW
  const [error, setError] = useState(null); // ✅ NEW
  const [loading, setLoading] = useState(false);

  // ✅ FIXED API
  const API = "http://127.0.0.1:8000/api/v1";

  const handleSubmit = async () => {
    if (!file) return alert("Upload resume first");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("job_desc", jobDesc || "developer");

    try {
      setLoading(true);
      setError(null);

      // ✅ FIXED ENDPOINT
      const res = await axios.post(`${API}/resume/analyze`, formData);

      console.log("✅ SUCCESS:", res.data);

      setResult(res.data);
      setScore(res.data.ats_score);
      setSkills(res.data.skills_found || []);
    } catch (err) {
      console.log("❌ FULL ERROR:", err);

      if (err.response) {
        setError(err.response.data?.detail || "Server error");
      } else if (err.request) {
        setError("Cannot connect to backend (server not running)");
      } else {
        setError("Unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <h2 className="mb-3 fw-bold">AI Resume Analyzer 🚀</h2>

      {/* ERROR UI */}
      {error && <div className="alert alert-danger">❌ {error}</div>}

      {/* HERO */}
      <div
        className="p-4 rounded text-white mb-4"
        style={{ background: "linear-gradient(90deg, #2563eb, #9333ea)" }}
      >
        <h3>Improve Your Resume Score</h3>
        <p>Get AI-powered ATS analysis</p>
      </div>

      {/* SCORE */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card p-4 text-center shadow">
            <h5>Overall Score</h5>

            <div className="d-flex justify-content-center mt-3">
              <div style={{ width: 120, height: 120 }}>
                <svg width="120" height="120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#eee"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#4f46e5"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="314"
                    strokeDashoffset={314 - (score / 100) * 314}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="text-center fw-bold fs-4">{score}</div>
              </div>
            </div>
          </div>
        </div>

        {/* STATIC CARDS */}
        <div className="col-md-6">
          <div className="row g-3">
            {[
              { name: "Impact", val: 53 },
              { name: "Brevity", val: 80 },
              { name: "Style", val: 49 },
              { name: "Skills", val: 100 },
            ].map((item, i) => (
              <div className="col-6" key={i}>
                <div className="card p-3 shadow text-center">
                  <h6>{item.name}</h6>
                  <strong>{item.val}/100</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* UPLOAD */}
      <div className="card p-4 shadow mb-4">
        <h5>Upload Resume</h5>

        <input
          type="file"
          className="form-control mb-3"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <textarea
          className="form-control mb-3"
          rows="4"
          placeholder="Paste job description..."
          onChange={(e) => setJobDesc(e.target.value)}
        />

        <button onClick={handleSubmit} className="btn btn-primary">
          {loading ? "Analyzing..." : "Analyze Resume 🚀"}
        </button>
      </div>

      {/* SKILLS */}
      <div className="card p-4 shadow mb-4">
        <h5>Skills Detected</h5>

        {skills.length > 0 ? (
          <div className="d-flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <span key={i} className="badge bg-primary">
                {s}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-muted">No skills detected</p>
        )}
      </div>

      {/* FULL RESULT */}
      {result && (
        <div className="card p-4 shadow">
          <h5>⚠ Missing Keywords</h5>
          <ul>
            {result.missing_keywords.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>

          <h5>💡 Suggestions</h5>
          <ul>
            {result.suggestions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
