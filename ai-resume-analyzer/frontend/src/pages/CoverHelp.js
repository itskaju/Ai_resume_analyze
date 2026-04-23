import { useNavigate } from "react-router-dom";

function CoverHelp() {
  const navigate = useNavigate();

  const improvedText = `Dear Hiring Manager,

I am excited to apply for the Software Developer position. With strong experience in React, Python, and problem-solving, I have built scalable applications and improved performance.

I am confident I can contribute effectively to your team.

Thank you for your time and consideration.

Sincerely,
Your Name`;

  return (
    <div className="container">
      <h2 className="fw-bold mb-4">Cover Letter Help 🆘</h2>

      <div className="row">
        {/* LEFT: MISTAKES */}
        <div className="col-md-6">
          <div className="card p-4 shadow mb-3">
            <h5>❌ Common Mistakes</h5>
            <ul>
              <li>Using generic content</li>
              <li>Too long or too short</li>
              <li>No job-specific keywords</li>
              <li>Spelling & grammar errors</li>
            </ul>
          </div>

          <div className="card p-4 shadow">
            <h5>✔ Quick Fix Tips</h5>
            <ul>
              <li>Customize for each job</li>
              <li>Use action verbs</li>
              <li>Highlight achievements</li>
              <li>Keep it 1 page</li>
            </ul>
          </div>
        </div>

        {/* RIGHT: BEFORE / AFTER */}
        <div className="col-md-6">
          <div className="card p-4 shadow mb-3">
            <h5>Before ❌</h5>
            <pre style={{ whiteSpace: "pre-wrap" }}>
              {`I am applying for job. I am hardworking and good person.`}
            </pre>
          </div>

          <div className="card p-4 shadow">
            <h5>Improved Version ✅</h5>
            <pre style={{ whiteSpace: "pre-wrap" }}>{improvedText}</pre>

            {/* 🔥 BUTTON */}
            <button
              className="btn btn-primary mt-3"
              onClick={() =>
                navigate("/cover-builder", {
                  state: { text: improvedText },
                })
              }
            >
              Use Improved Version 🚀
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverHelp;
