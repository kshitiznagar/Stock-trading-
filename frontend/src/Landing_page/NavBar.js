import React, { useEffect, useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");
    if (userToken) {
      setIsLoggedIn(true);
      setToken(userToken);
      setUsername(storedUsername || "");
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setToken("");
    setUsername("");
    window.location.reload();
  };

  const dashboardUrl = isLoggedIn
    ? `http://localhost:3001/?token=${encodeURIComponent(token)}&username=${encodeURIComponent(username)}`
    : "http://localhost:3001/";

  return (
    <nav className="navbar navbar-expand-lg border-bottom sticky-top bg-white">
      <div className="container-fluid">
        <Link className="navbar-brand mx-4 logo" to="/">
          <img src="/media/images/Screenshot_2026-03-19_at_8.53.18_AM-removebg-preview.png" alt="Zerodha Clone Logo" style={{height:"4rem"}} onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=150&q=80"; e.target.style.height = "2.5rem"; }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex ms-auto nav-options" role="search" onSubmit={(e) => e.preventDefault()}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <a className="nav-dashboard-btn" href={dashboardUrl}>
                      <i className="fa-solid fa-chart-line me-1"></i> Go to Dashboard ({username})
                    </a>
                  </li>
                  <li className="nav-item ms-lg-2">
                    <button className="nav-link btn btn-link text-danger fw-semibold border-0 bg-transparent py-0" onClick={handleLogout} style={{ textDecoration: 'none' }}>
                      <i className="fa-solid fa-arrow-right-from-bracket me-1"></i> Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
