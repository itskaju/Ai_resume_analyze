import React from "react";

export default function Analysis() {
  const score = 78;

  return (
    <div className="container-fluid">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Resume Analysis 📊</h2>
        <button className="btn btn-primary">Re-Upload</button>
      </div>

      <div className="row">
        {/* LEFT PANEL */}
        <div className="col-md-7">
          {/* SCORE CARD */}
          <div className="card p-4 shadow mb-4">
            <h5 className="mb-3">Your ATS Score</h5>

            <div className="d-flex align-items-center gap-4">
              {/* Circular Score */}
              <div
                className="position-relative"
                style={{ width: 120, height: 120 }}
              >
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
                    stroke="#22c55e"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="314"
                    strokeDashoffset={314 - (score / 100) * 314}
                    strokeLinecap="round"
                  />
                </svg>

                <div className="position-absolute top-50 start-50 translate-middle fw-bold fs-4">
                  {score}
                </div>
              </div>

              {/* Description */}
              <div>
                <h6 className="fw-bold">Good Score 👍</h6>
                <p className="text-muted mb-0">
                  Your resume performs well, but improvements can boost your
                  chances.
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  style={{ width: `${score}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* SCORE BREAKDOWN */}
          <div className="row g-3 mb-4">
            {[
              { name: "Impact", val: 53, color: "danger" },
              { name: "Brevity", val: 80, color: "warning" },
              { name: "Style", val: 49, color: "danger" },
              { name: "Skills", val: 100, color: "success" },
            ].map((item, i) => (
              <div className="col-md-6" key={i}>
                <div className="card p-3 shadow text-center">
                  <h6>{item.name}</h6>
                  <h5 className={`text-${item.color}`}>{item.val}/100</h5>
                </div>
              </div>
            ))}
          </div>

          {/* AI SUGGESTIONS */}
          <div className="card p-4 shadow">
            <h5 className="mb-3">AI Suggestions 💡</h5>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                ❌ Add measurable achievements (e.g. increased sales by 20%)
              </li>
              <li className="list-group-item">
                ❌ Use more action verbs (built, developed, optimized)
              </li>
              <li className="list-group-item">
                ❌ Improve formatting consistency
              </li>
              <li className="list-group-item">
                ❌ Add more relevant keywords for ATS
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT PANEL (RESUME PREVIEW) */}
        <div className="col-md-5">
          <div className="card p-3 shadow h-100">
            <h5 className="mb-3">Resume Preview 📄</h5>

            {/* Fake Preview */}
            <div
              style={{
                height: "500px",
                overflowY: "scroll",
                background: "#f9f9f9",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <p>
                <strong>Name:</strong> Kajal Kumari
              </p>
              <p>
                <strong>Role:</strong> Full Stack Developer
              </p>
              <hr />

              <h6>Experience</h6>
              <ul>
                <li>Built web apps using React & Node</li>
                <li>Worked on AI-based resume analyzer</li>
              </ul>

              <h6>Skills</h6>
              <p>Python, React, FastAPI, Machine Learning</p>

              <h6>Projects</h6>
              <ul>
                <li>AI Resume Analyzer</li>
                <li>E-commerce Backend System</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
