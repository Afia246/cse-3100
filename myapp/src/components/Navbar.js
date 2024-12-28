// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom"; // We'll use react-router for navigation

const Navbar = () => {
  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between", // Separate left and right content
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#f5f5f5", // Light background
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Optional shadow
      }}
    >
      {/* Heading on the left */}
      <h1
        style={{
          margin: 0,
          fontSize: "24px",
          color: "#333",
        }}
      >
        Purrfect Adoption
      </h1>

      {/* Navigation buttons on the right */}
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          margin: 0,
          padding: 0,
          gap: "20px", // Spacing between links
        }}
      >
        <li>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#007BFF", // Link color
              fontWeight: "bold",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/available-cats"
            style={{
              textDecoration: "none",
              color: "#007BFF",
              fontWeight: "bold",
            }}
          >
            Available Cats
          </Link>
        </li>
        <li>
          <Link
            to="/about-us"
            style={{
              textDecoration: "none",
              color: "#007BFF",
              fontWeight: "bold",
            }}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/contact-us"
            style={{
              textDecoration: "none",
              color: "#007BFF",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
