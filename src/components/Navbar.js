import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { isLoggedIn, setLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  //const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    //navigate("/login"); // redirect to login page after logout
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>LostLink</h2>
      </div>

      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>

        {isLoggedIn ? (
          <>
            <Link to="/lost" onClick={() => setIsOpen(false)}>
              Lost Items
            </Link>
            <Link to="/found" onClick={() => setIsOpen(false)}>
              Found Items
            </Link>
            <Link to="/report" onClick={() => setIsOpen(false)}>
              Report Items
            </Link>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" onClick={() => setIsOpen(false)}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
