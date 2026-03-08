import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom sticky-top">
      <div class="container-fluid">
        <Link class="navbar-brand mx-4 logo" to="/">
          <img src="/media/images/logo.svg" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex nav-options" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="about">
                  About
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link" to="product">
                  Product
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link" to="pricing">
                  Pricing
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link" to="support">
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
