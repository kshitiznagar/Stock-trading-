import React from "react";
import "../index.css";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand mx-4 logo" href="#">
          <img src="/media/images/logo.svg" />
        </a>
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
                <a class="nav-link" aria-current="page" href="#">
                  Signup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="#">
                  Product
                </a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="#">
                  Support
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
