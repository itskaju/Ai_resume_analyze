function Pricing() {
  return (
    <div className="container py-5">
      {/* HERO */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Simple pricing with one goal</h1>
        <h3 className="text-muted">To get you hired 🚀</h3>

        <div className="mt-3">
          <p>⬆ 30% higher chance of getting a job</p>
          <p>⬆ 40% higher recruiter response</p>
        </div>

        <div className="mt-4 d-flex justify-content-center gap-3">
          <button className="btn btn-primary px-4 rounded-pill">
            Import Resume
          </button>
          <button className="btn btn-warning px-4 rounded-pill">
            Build Resume
          </button>
        </div>
      </div>

      {/* PRICING CARDS */}
      <div className="row g-4">
        {/* FREE */}
        <div className="col-md-4">
          <div className="card p-4 shadow text-center h-100">
            <h5>Basic Package</h5>
            <h2 className="fw-bold">FREE</h2>
            <p className="text-muted">Start building your resume</p>

            <ul className="list-unstyled mt-3">
              <li>✔ Resume Builder</li>
              <li>✔ Basic Analysis</li>
              <li>✔ Limited Suggestions</li>
            </ul>

            <button className="btn btn-outline-primary mt-3">
              Get Started
            </button>
          </div>
        </div>

        {/* PRO */}
        <div className="col-md-4">
          <div className="card p-4 shadow text-center h-100 border-primary">
            <span className="badge bg-primary mb-2">Most Popular</span>

            <h5>Pro Package</h5>
            <h2 className="fw-bold">₹195</h2>
            <p className="text-muted">Full AI analysis</p>

            <ul className="list-unstyled mt-3">
              <li>✔ Advanced ATS Score</li>
              <li>✔ Skill Matching</li>
              <li>✔ Smart Suggestions</li>
              <li>✔ Resume Optimization</li>
            </ul>

            <button className="btn btn-primary mt-3">Upgrade Now</button>
          </div>
        </div>

        {/* ANNUAL */}
        <div className="col-md-4">
          <div className="card p-4 shadow text-center h-100">
            <span className="badge bg-success mb-2">Best Value</span>

            <h5>Annual Package</h5>
            <h2 className="fw-bold">₹99/month</h2>
            <p className="text-muted">Save more yearly</p>

            <ul className="list-unstyled mt-3">
              <li>✔ Everything in Pro</li>
              <li>✔ Unlimited Analysis</li>
              <li>✔ Priority Support</li>
            </ul>

            <button className="btn btn-success mt-3">Go Premium</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
