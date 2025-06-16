"use client";
import React, { useState } from "react";
import "../styles/_header.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${menuOpen ? "menu-open" : ""}`}>
      <div className="logo-title">
        {/* <Image
          src="/logo.png"
          alt="Logo Panoply PVC"
          width={100}
          height={100}
          className="logo"
          priority
        /> */}
        <span>Eglise Saint Pierre </span>
      </div>

      <button className="burger" onClick={toggleMenu}>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
      </button>

      <nav className={`menu-link ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#title-pdt" onClick={closeMenu}>Cartes</a>
        <a href="#cards-realisations" onClick={closeMenu}>Agenda</a>
        <a href="#nous-concernant" onClick={closeMenu}>Nos Clergés</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}
