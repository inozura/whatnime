import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link class="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-md-auto">
            <li class="nav-item active">
              <Link to="/" class="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/" class="nav-link">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
