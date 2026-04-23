import { useState } from "react";

const examples = [
  {
    id: 1,
    title: "Software Developer",
    text: `Dear Hiring Manager,

I am excited to apply for the Software Developer position. With strong experience in React and Python, I can contribute effectively to your team.

Thank you for your time.

Sincerely,
Your Name`,
  },
  {
    id: 2,
    title: "Frontend Developer",
    text: `Dear Hiring Manager,

I am applying for the Frontend Developer role. I specialize in building responsive UI using React and modern CSS.

Looking forward to hearing from you.

Sincerely,
Your Name`,
  },
  {
    id: 3,
    title: "Data Analyst",
    text: `Dear Sir/Madam,

I am writing to apply for the Data Analyst position. I have experience in SQL, Python, and data visualization.

Thank you for your consideration.

Sincerely,
Your Name`,
  },
];

function CoverExamples() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container">
      <h2 className="fw-bold mb-4">Cover Letter Examples 📄</h2>

      <div className="row">
        {/* LEFT: LIST */}
        <div className="col-md-5">
          {examples.map((ex) => (
            <div
              key={ex.id}
              className={`card p-3 mb-3 shadow ${
                selected?.id === ex.id ? "border-primary" : ""
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => setSelected(ex)}
            >
              <h5>{ex.title}</h5>
              <p className="text-muted">Click to preview example</p>
            </div>
          ))}
        </div>

        {/* RIGHT: PREVIEW */}
        <div className="col-md-7">
          <div className="card p-4 shadow">
            <h5>Preview</h5>

            {selected ? (
              <>
                <pre style={{ whiteSpace: "pre-wrap" }}>{selected.text}</pre>

                <button className="btn btn-primary mt-3">
                  Use This Example 🚀
                </button>
              </>
            ) : (
              <p className="text-muted">Select an example to preview</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverExamples;
