import React from "react";

export default function Suggestions() {
  const suggestions = [
    {
      title: "Add measurable achievements",
      desc: "Use numbers like 'increased revenue by 30%' to show impact.",
      priority: "High",
    },
    {
      title: "Improve action verbs",
      desc: "Replace weak words with strong verbs like built, optimized, designed.",
      priority: "High",
    },
    {
      title: "Fix formatting",
      desc: "Ensure consistent font size, spacing, and alignment.",
      priority: "Medium",
    },
    {
      title: "Add relevant keywords",
      desc: "Include job-specific keywords for better ATS matching.",
      priority: "High",
    },
    {
      title: "Shorten content",
      desc: "Keep resume concise and avoid unnecessary details.",
      priority: "Low",
    },
  ];

  const getBadge = (priority) => {
    if (priority === "High") return "danger";
    if (priority === "Medium") return "warning";
    return "secondary";
  };

  return (
    <div className="container-fluid">
      {/* HEADER */}
      <div className="mb-4">
        <h2 className="fw-bold">Suggestions 💡</h2>
        <p className="text-muted">
          Improve your resume with AI-powered recommendations
        </p>
      </div>

      {/* SCORE SUMMARY */}
      <div className="card p-4 shadow mb-4">
        <h5>
          Your Resume Score: <span className="text-primary">78/100</span>
        </h5>

        <div className="progress mt-3">
          <div
            className="progress-bar bg-success"
            style={{ width: "78%" }}
          ></div>
        </div>
      </div>

      {/* SUGGESTIONS LIST */}
      <div className="row g-4">
        {suggestions.map((item, i) => (
          <div className="col-md-6" key={i}>
            <div className="card p-4 shadow h-100">
              {/* TITLE + BADGE */}
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="fw-bold mb-0">{item.title}</h6>
                <span className={`badge bg-${getBadge(item.priority)}`}>
                  {item.priority}
                </span>
              </div>

              {/* DESCRIPTION */}
              <p className="text-muted mb-3">{item.desc}</p>

              {/* ACTION BUTTON */}
              <button className="btn btn-outline-primary btn-sm">
                Fix Suggestion
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FINAL TIP SECTION */}
      <div className="card p-4 shadow mt-5 text-center">
        <h5 className="mb-2">🚀 Pro Tip</h5>
        <p className="text-muted">
          Tailor your resume for each job description to maximize ATS score.
        </p>
        <button className="btn btn-primary">Re-Analyze Resume</button>
      </div>
    </div>
  );
}
