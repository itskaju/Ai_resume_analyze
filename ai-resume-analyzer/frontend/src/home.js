<nav className="navbar navbar-expand-lg bg-white border-bottom px-5 py-3">
  {/* LOGO */}
  <a
    className="navbar-brand fw-bold text-dark d-flex align-items-center"
    href="#"
  >
    <span className="fs-4">zety</span>
    <span className="ms-1 text-primary fs-4">▶</span>
  </a>

  {/* TOGGLE (mobile) */}
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNav"
  >
    <span className="navbar-toggler-icon"></span>
  </button>

  {/* MENU */}
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto align-items-center gap-3">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-dark" href="#">
          Tools
        </a>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-dark" href="#">
          Resume
        </a>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-dark" href="#">
          CV
        </a>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-dark" href="#">
          Cover Letter
        </a>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-dark" href="#">
          Career Blog
        </a>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-dark" href="#">
          About
        </a>
      </li>

      {/* BUTTON */}
      <li className="nav-item">
        <button
          className="btn text-white px-4 py-2 rounded-pill"
          style={{ backgroundColor: "#1E2A78" }}
        >
          My Account
        </button>
      </li>
    </ul>
  </div>
</nav>;
