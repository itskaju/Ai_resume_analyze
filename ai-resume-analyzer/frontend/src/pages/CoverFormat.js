function CoverFormat() {
  return (
    <div className="container">
      <h2 className="fw-bold mb-4">Cover Letter Format 🧾</h2>

      <div className="row">
        {/* LEFT: FORMAT STRUCTURE */}
        <div className="col-md-5">
          <div className="card p-4 shadow">
            <h5>Structure</h5>

            <ul className="mt-3">
              <li>📌 Header (Name, Email, Date)</li>
              <li>👋 Greeting (Dear Hiring Manager)</li>
              <li>🚀 Opening Paragraph</li>
              <li>💼 Body (Skills & Experience)</li>
              <li>🎯 Closing Paragraph</li>
              <li>✍️ Signature</li>
            </ul>
          </div>

          <div className="card p-4 shadow mt-3">
            <h5>Tips</h5>
            <ul>
              <li>✔ Keep it 1 page</li>
              <li>✔ Use simple language</li>
              <li>✔ Match job keywords</li>
              <li>✔ Highlight achievements</li>
            </ul>
          </div>
        </div>

        {/* RIGHT: FORMAT EXAMPLE */}
        <div className="col-md-7">
          <div className="card p-4 shadow">
            <h5>Example Format</h5>

            <pre style={{ whiteSpace: "pre-wrap" }}>
              {`Your Name
Email | Phone | Date

Hiring Manager Name
Company Name

Dear Hiring Manager,

I am writing to apply for the [Job Role] position at [Company Name].

I have experience in [Skills], and I have successfully worked on [Projects/Achievements].

I am confident that my skills will contribute to your team.

Thank you for your time and consideration.

Sincerely,
Your Name`}
            </pre>

            <button className="btn btn-primary mt-3">Use This Format 🚀</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverFormat;
