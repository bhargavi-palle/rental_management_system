import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [fullName, setFullName] =
    useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://rental-management-system-j8qk.onrender.com/api/register",
        {
          fullName,
          email,
          password,
        }
      );

      alert(response.data.message);

      window.location.href = "/login";
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
      }}
    >
      <div
        className="card shadow border-0 p-4"
        style={{
          width: "450px",
          borderRadius: "15px",
        }}
      >
        <h2
          className="text-center fw-bold"
          style={{ color: "#2563eb" }}
        >
          Create Account
        </h2>

        <p className="text-center text-muted">
          Register as a Property Manager
        </p>

        <form onSubmit={handleRegister}>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value)
              }
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />
          </div>

          <button
            className="btn btn-primary w-100"
            type="submit"
          >
            Register
          </button>

          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-decoration-none fw-bold"
            >
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Register;