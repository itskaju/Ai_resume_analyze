function About() {
  return (
    <div className="container py-5">
      {/* HERO */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">About ATS AI 🚀</h1>
        <p className="text-muted">
          Smart AI-powered resume analyzer to boost your job success
        </p>
      </div>

      {/* FEATURES */}
      <div className="row text-center mb-5">
        <div className="col-md-4">
          <div className="p-4 shadow rounded">
            <h5>⚡ Fast Analysis</h5>
            <p>Get ATS score instantly using AI</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 shadow rounded">
            <h5>🎯 Accurate Results</h5>
            <p>Keyword & skill matching with job description</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 shadow rounded">
            <h5>💡 Smart Suggestions</h5>
            <p>Improve resume with actionable insights</p>
          </div>
        </div>
      </div>

      {/* MISSION */}
      <div className="bg-light p-5 rounded text-center">
        <h3 className="fw-bold">Our Mission</h3>
        <p className="text-muted">
          Help students and professionals build ATS-friendly resumes and
          increase their chances of getting hired.
        </p>
      </div>
    </div>
  );
}

export default About;
