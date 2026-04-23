function CoverGuide() {
  return (
    <div className="container">
      <h2 className="fw-bold mb-4">How to Write a Cover Letter ✍️</h2>

      <div className="row">
        {/* LEFT: STEPS */}
        <div className="col-md-6">
          <div className="card p-4 shadow mb-3">
            <h5>Step 1: Start with a strong opening</h5>
            <p className="text-muted">
              Clearly mention the job role and why you're interested.
            </p>
          </div>

          <div className="card p-4 shadow mb-3">
            <h5>Step 2: Show your skills</h5>
            <p className="text-muted">
              Highlight your experience and relevant skills.
            </p>
          </div>

          <div className="card p-4 shadow mb-3">
            <h5>Step 3: Match job description</h5>
            <p className="text-muted">
              Use keywords from the job description for ATS.
            </p>
          </div>

          <div className="card p-4 shadow mb-3">
            <h5>Step 4: Add achievements</h5>
            <p className="text-muted">
              Include measurable results (e.g., increased sales by 20%).
            </p>
          </div>

          <div className="card p-4 shadow">
            <h5>Step 5: End confidently</h5>
            <p className="text-muted">
              Thank the employer and express interest in an interview.
            </p>
          </div>
        </div>

        {/* RIGHT: DOs & DON'Ts */}
        <div className="col-md-6">
          <div className="card p-4 shadow mb-3">
            <h5>✔ Do's</h5>
            <ul>
              <li>Keep it short (1 page)</li>
              <li>Use professional language</li>
              <li>Customize for each job</li>
              <li>Highlight achievements</li>
            </ul>
          </div>

          <div className="card p-4 shadow mb-3">
            <h5>❌ Don'ts</h5>
            <ul>
              <li>Don’t copy-paste generic content</li>
              <li>Don’t make it too long</li>
              <li>Don’t use informal tone</li>
              <li>Don’t forget proofreading</li>
            </ul>
          </div>

          <div className="card p-4 shadow">
            <h5>Quick Example</h5>
            <pre style={{ whiteSpace: "pre-wrap" }}>
              {`Dear Hiring Manager,

I am excited to apply for the Frontend Developer role. I have experience in React and modern UI development.

I have built multiple projects that improved user experience and performance.

Thank you for your time.

Sincerely,
Your Name`}
            </pre>

            <button className="btn btn-primary mt-3">Use This Guide 🚀</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverGuide;
