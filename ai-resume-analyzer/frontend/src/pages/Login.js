import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false); // ✅ state

  const handleLogin = () => {
    setSuccess(true); // show success message

    setTimeout(() => {
      navigate("/"); // redirect after 1.5 sec
    }, 1500);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="bg-white p-5 shadow rounded" style={{ width: "400px" }}>
        {/* LOGO */}
        <div className="text-center mb-4">
          <h4 className="fw-bold text-primary">kajusingh</h4>
        </div>

        {/* ✅ SUCCESS MESSAGE */}
        {success && (
          <div className="alert alert-success text-center">
            ✅ Login Successful!
          </div>
        )}

        {/* TITLE */}
        <h5 className="text-center mb-4">Welcome back! Please sign in.</h5>

        {/* SOCIAL LOGIN */}
        <button className="btn btn-dark w-100 mb-3 rounded-pill">
          🍎 Sign in with Apple
        </button>

        <button className="btn btn-outline-secondary w-100 mb-3 rounded-pill">
          🔍 Sign in with Google
        </button>

        <button className="btn btn-outline-primary w-100 mb-3 rounded-pill">
          📘 Sign in with Facebook
        </button>

        {/* OR */}
        <div className="text-center my-3">OR</div>

        {/* EMAIL */}
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email address"
        />

        {/* PASSWORD */}
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
        />

        <small className="text-muted">
          Password should be between 6–16 characters.
        </small>

        {/* FORGOT */}
        <div className="text-end mt-2 mb-3">
          <a href="/" className="text-primary small">
            Forgot your password?
          </a>
        </div>

        {/* SUBMIT */}
        <button
          onClick={handleLogin}
          className="btn btn-warning w-100 rounded-pill fw-bold"
        >
          SUBMIT
        </button>

        {/* TERMS */}
        <p className="text-center small mt-3 text-muted">
          By clicking 'Submit' you agree to our Terms & Conditions
        </p>
      </div>
    </div>
  );
}

export default Login;
