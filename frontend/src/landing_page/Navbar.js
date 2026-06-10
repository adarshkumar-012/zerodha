import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top custom-navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container">

        {/* LOGO */}
        <Link className="navbar-brand" to="/">
          <img
            src="/media/images/logo.svg"
            alt="Zerodha Logo"
            className="navbar-logo"
          />
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV ITEMS */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active-nav" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active-nav" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/product" ? "active-nav" : ""
                }`}
                to="/product"
              >
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/pricing" ? "active-nav" : ""
                }`}
                to="/pricing"
              >
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/support" ? "active-nav" : ""
                }`}
                to="/support"
              >
                Support
              </Link>
            </li>

            {!token ? (
              <>
                <li className="nav-item">
                  <Link className="btn login-btn" to="/login">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="btn signup-btn" to="/signup">
                    Signup
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button
                  className="btn logout-btn"
                  onClick={logoutHandler}
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

export default Navbar;