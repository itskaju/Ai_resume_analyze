import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [coverOpen, setCoverOpen] = useState(false);

  return (
    <header className="bg-white border-bottom px-4 py-2">
      <div className="d-flex align-items-center justify-content-between">
        {/* LOGO */}
        <div className="fw-bold text-primary fs-5">ATS AI 🚀</div>

        {/* NAV */}
        <ul className="nav gap-4 fw-semibold align-items-center">
          <li>
            <Link className="nav-link text-dark" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="nav-link text-dark" to="/analysis">
              Resume
            </Link>
          </li>

          <li>
            <Link className="nav-link text-dark" to="/upload">
              CV
            </Link>
          </li>

          {/* 🔥 COVER LETTER DROPDOWN (REPLACED) */}
          <li
            className="position-relative"
            onMouseEnter={() => setCoverOpen(true)}
            onMouseLeave={() => setCoverOpen(false)}
          >
            <span className="nav-link text-dark" style={{ cursor: "pointer" }}>
              Cover Letter ▾
            </span>

            {coverOpen && (
              <div
                className="position-absolute bg-white shadow rounded p-4"
                style={{
                  width: "380px",
                  top: "40px",
                  left: "0",
                  zIndex: 1000,
                }}
              >
                {/* TOP FEATURE */}
                <Link
                  to="/cover-builder"
                  className="d-flex gap-3 text-decoration-none mb-3"
                >
                  <div style={{ fontSize: "28px" }}>📄</div>
                  <div>
                    <h6 className="fw-bold mb-1">Cover Letter Builder</h6>
                    <small className="text-muted">
                      Create a cover letter in 5 minutes
                    </small>
                  </div>
                </Link>

                <hr />

                <Link className="dropdown-item py-2" to="/cover-templates">
                  📋 Templates
                </Link>

                <Link className="dropdown-item py-2" to="/cover-examples">
                  📄 Examples
                </Link>

                <Link className="dropdown-item py-2" to="/cover-format">
                  🧾 Format
                </Link>

                <Link className="dropdown-item py-2" to="/cover-guide">
                  ✍️ Guide
                </Link>

                <Link className="dropdown-item py-2" to="/cover-help">
                  🆘 Help
                </Link>
              </div>
            )}
          </li>

          {/* 🔥 ABOUT DROPDOWN */}
          <li
            className="position-relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <span className="nav-link text-dark" style={{ cursor: "pointer" }}>
              About ▾
            </span>

            {aboutOpen && (
              <div
                className="position-absolute bg-white shadow rounded p-4"
                style={{
                  width: "350px",
                  top: "40px",
                  right: "0",
                  zIndex: 1000,
                }}
              >
                <div className="mb-3">
                  <h6 className="fw-bold">About</h6>
                  <p className="text-muted small">
                    Learn more about our AI resume tools
                  </p>
                </div>

                <hr />

                <Link
                  to="/pricing"
                  className="d-block text-decoration-none mb-2"
                >
                  💰 <strong>Pricing</strong>
                </Link>

                <Link
                  to="/contact"
                  className="d-block text-decoration-none mb-2"
                >
                  📞 <strong>Contact</strong>
                </Link>

                <Link
                  to="/reviews"
                  className="d-block text-decoration-none mb-2"
                >
                  ⭐ <strong>Reviews</strong>
                </Link>

                <Link to="/about" className="d-block text-decoration-none">
                  📘 <strong>Company</strong>
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* ACCOUNT */}
        <Link to="/login" className="btn btn-primary rounded-pill px-4">
          My Account
        </Link>
      </div>
    </header>
  );
}

export default Header;
