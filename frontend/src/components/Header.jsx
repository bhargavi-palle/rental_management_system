import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg rental-navbar fixed-top shadow-sm">
      <div className="container">

        <Link className="navbar-brand" to="/">
          <div className="brand-main">RentalHub</div>
          <div className="brand-sub">
            Smart Property Management
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            {user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/properties">
                    Properties
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/tenants">
                    Tenants
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/payments">
                    Payments
                  </Link>
                </li>
              </>
            )}

{user && (
  <li className="nav-item">
    <Link className="nav-link" to="/profile">
      Profile
    </Link>
  </li>
)} 

            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>

            {!user ? (
              <li className="nav-item">
                <Link
                  className="login-btn text-decoration-none"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <button
                  className="logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;