import React from "react";

function Navbar() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        {/* Logo */}
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex text-decoration-none fs-4 fw-bold text-primary"
          >
            ATS AI
          </a>
        </div>

        {/* Navigation */}
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" className="nav-link px-2 link-secondary">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              About
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="col-md-3 text-end">
          <button className="btn btn-outline-primary me-2">Login</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
