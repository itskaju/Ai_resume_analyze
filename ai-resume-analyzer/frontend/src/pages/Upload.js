import React, { useState } from "react";
import axios from "axios";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // ✅ Correct API base
  const API = "https://ai-resume-analyze-jsrs.onrender.com/api/v1";
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) return alert("Upload resume first");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("job_desc", jobDesc || "developer");

    try {
      setLoading(true);
      setError(null);

      const res = await axios.post(`${API}/resume/analyze`, formData);

      console.log("✅ SUCCESS:", res.data);
      setResult(res.data);
    } catch (err) {
      console.log("❌ FULL ERROR:", err);

      if (err.response) {
        setError(err.response.data?.detail || "Server error");
      } else if (err.request) {
        setError("Cannot connect to backend 🚫");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      {/* HEADER */}
      <div className="mb-4">
        <h2 className="fw-bold">Upload Resume 📄</h2>
        <p className="text-muted">
          Upload your resume and get an instant ATS score
        </p>
      </div>

      <div className="row g-4">
        {/* LEFT SIDE */}
        <div className="col-md-7">
          <div className="card p-5 shadow text-center">
            <label className="upload-box">
              <input type="file" hidden onChange={handleFile} />
              <div>
                <h4>📂 Drag & Drop Resume</h4>
                <p className="text-muted">or click to browse</p>
              </div>
            </label>

            {/* FILE NAME */}
            {file && (
              <div className="mt-3 text-success fw-bold">✅ {file.name}</div>
            )}

            {/* JOB DESC */}
            <textarea
              className="form-control mt-4"
              rows="5"
              placeholder="Paste Job Description..."
              onChange={(e) => setJobDesc(e.target.value)}
            />

            {/* BUTTON */}
            <button
              onClick={handleSubmit}
              className="btn btn-primary mt-4 w-100"
            >
              {loading ? "Analyzing..." : "Analyze Resume 🚀"}
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-5">
          <div className="card p-4 shadow h-100">
            <h5 className="fw-bold">📊 What You’ll Get</h5>
            <ul className="text-muted">
              <li>✔ ATS Score</li>
              <li>✔ Skills Detection</li>
              <li>✔ Missing Keywords</li>
              <li>✔ AI Suggestions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ❌ ERROR UI */}
      {error && <div className="alert alert-danger mt-4">❌ {error}</div>}

      {/* ✅ RESULT UI */}
      {result && (
        <div className="card p-4 shadow mt-4">
          <h4>📊 ATS Score: {result.ats_score}</h4>

          <h5 className="mt-3">🧠 Skills Found:</h5>
          <div className="d-flex flex-wrap gap-2">
            {result.skills_found.map((s, i) => (
              <span key={i} className="badge bg-primary">
                {s}
              </span>
            ))}
          </div>

          <h5 className="mt-3">⚠ Missing Keywords:</h5>
          <ul>
            {result.missing_keywords.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>

          <h5 className="mt-3">💡 Suggestions:</h5>
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
