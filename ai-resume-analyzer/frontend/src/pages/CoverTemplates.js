import { useState } from "react";

const templates = [
  {
    id: 1,
    name: "Modern",
    desc: "Clean and professional design",
    preview: "Dear Hiring Manager,\nI am excited to apply...",
  },
  {
    id: 2,
    name: "Creative",
    desc: "Stylish and eye-catching",
    preview: "Hello,\nI would love to join your team...",
  },
  {
    id: 3,
    name: "Corporate",
    desc: "Formal and ATS-friendly",
    preview: "Respected Sir/Madam,\nI am writing to apply...",
  },
];

function CoverTemplates() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container">
      <h2 className="fw-bold mb-4">Cover Letter Templates 📋</h2>

      <div className="row">
        {/* LEFT: TEMPLATE LIST */}
        <div className="col-md-5">
          {templates.map((t) => (
            <div
              key={t.id}
              className={`card p-3 mb-3 shadow ${
                selected?.id === t.id ? "border-primary" : ""
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => setSelected(t)}
            >
              <h5>{t.name}</h5>
              <p className="text-muted">{t.desc}</p>
            </div>
          ))}
        </div>

        {/* RIGHT: PREVIEW */}
        <div className="col-md-7">
          <div className="card p-4 shadow">
            <h5>Preview</h5>

            {selected ? (
              <>
                <pre style={{ whiteSpace: "pre-wrap" }}>{selected.preview}</pre>

                <button className="btn btn-primary mt-3">
                  Use This Template 🚀
                </button>
              </>
            ) : (
              <p className="text-muted">Select a template to preview</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverTemplates;
