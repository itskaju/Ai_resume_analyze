function Contact() {
  return (
    <div className="container py-5">
      {/* HERO */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Let us know if you need any help!</h1>
        <p className="text-muted">Our support team is here to assist you 🚀</p>

        <button className="btn btn-warning px-4 rounded-pill mt-3">
          Chat With Us
        </button>

        <p className="mt-3">📞 +91 6206134809</p>
      </div>

      {/* TRUST LOGOS */}
      <div className="text-center mb-5">
        <p className="text-muted">Our users got hired at</p>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          <span>Microsoft</span>
          <span>Amazon</span>
          <span>Google</span>
          <span>Walmart</span>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="row">
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <h5>Send Message</h5>

            <input className="form-control mb-3" placeholder="Your Name" />
            <input className="form-control mb-3" placeholder="Email" />

            <textarea
              className="form-control mb-3"
              rows="4"
              placeholder="Your Message"
            />

            <button className="btn btn-primary w-100">Submit</button>
          </div>
        </div>

        {/* SUPPORT INFO */}
        <div className="col-md-6">
          <div className="p-4">
            <h5>We’re here to help</h5>

            <p>🇮🇳 India Support: +91 6206134809</p>
            <p>🇺🇸 US Support: +1 800-123-4567</p>

            <p className="text-muted mt-3">Email: kajal13march05@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
