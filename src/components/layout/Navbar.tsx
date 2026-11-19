"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Selected Work", href: "#selected" },
    { name: "Services", href: "#capabilities" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
    { name: "About", href: "#studio" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="navbar-logo" onClick={closeMenu}>
          METACAP
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a href="#contact" className="navbar-cta">
          Let's talk
          <ArrowUpRight size={15} />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="navbar-menu-button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-menu"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={closeMenu}>
              {link.name}
            </a>
          ))}

          <a href="#contact" className="mobile-menu-cta" onClick={closeMenu}>
            Let's talk
            <ArrowUpRight size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}