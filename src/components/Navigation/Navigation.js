import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <nav className="nav">
      <div className="logo-container" onClick={() => navigate("/")}>
        <img
          src="/images/logo.png"
          width="150px"
          alt="logo"
          className="logo"
        />
      </div>

      <div
        className={`menu ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Beranda</NavLink>
        </li>
        <li>
          <NavLink to="/about">Tentang Kami</NavLink>
        </li>
        <li>
          <NavLink to="/history">Sejarah</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Kontak</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
