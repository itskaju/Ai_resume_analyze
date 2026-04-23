import React from "react";

export default function CoverBuilder() {
  return (
    <div className="container">
      <h2 className="fw-bold mb-3">Cover Letter Builder ✉️</h2>
      <p>Create a professional cover letter in minutes.</p>

      <div className="card p-4 shadow">
        <textarea
          className="form-control mb-3"
          rows="6"
          placeholder="Write your cover letter..."
        />

        <button className="btn btn-primary">Generate Cover Letter 🚀</button>
      </div>
    </div>
  );
}
