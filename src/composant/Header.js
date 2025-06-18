"use client";
import React, { useState } from "react";
import "../styles/_Header.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${menuOpen ? "menu-open" : ""}`}>
      <div className="logo-title">
        <img className="logo-header" src="/logo - Copie.png" />
        {/* <span>Eglise Saint Pierre </span> */}
      </div>

      <button className="burger" onClick={toggleMenu}>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
      </button>

      <nav className={`menu-link ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#gallery-section" onClick={closeMenu}>Cartes</a>
        <a href="#messes-table-container" onClick={closeMenu}>Agenda</a>
        <a href="#clerge-section" onClick={closeMenu}>Le Clergé</a>
        <a href="#contact-section" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}
