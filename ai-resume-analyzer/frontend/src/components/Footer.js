import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-light pt-5 mt-5"
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
      }}
    >
      <div className="container">
        <div className="row">
          {/* 🔥 BRAND */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold text-primary">ATS AI 🚀</h4>
            <p className="text-muted">
              AI-powered resume and cover letter analyzer to help you land your
              dream job.
            </p>
          </div>

          {/* 🔹 PRODUCT */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Product</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/analysis" className="footer-link">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/cover-builder" className="footer-link">
                  Cover Builder
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="footer-link">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* 🔹 COMPANY */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="footer-link">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* 🔹 SUBSCRIBE */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Subscribe</h6>
            <p className="text-muted">Get career tips & updates</p>

            <div className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter email"
              />
              <button className="btn btn-primary">Join</button>
            </div>
          </div>
        </div>

        {/* 🔥 SOCIAL + COPYRIGHT */}
        <div className="border-top pt-3 mt-3 d-flex justify-content-between align-items-center flex-wrap">
          <p className="mb-0 text-muted">© 2026 ATS AI. All rights reserved.</p>

          <div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="footer-social me-3"
            >
              📸 Instagram
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="footer-social"
            >
              👍 Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
