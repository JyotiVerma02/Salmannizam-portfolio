"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar container">

        {/* LOGO */}
        <a href="#" className="nav__logo">
          Salman <span>Nizam</span>
        </a>

        {/* BURGER */}
        <button
          className="navbar__burger"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* MENU */}
        <div className={`navbar__menu ${open ? "active" : ""}`}>
          <ul className="navbar__list">
            {navItems.map((item) => (
              <li key={item.label} className="navbar__item">
                <a className="navbar__link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </header>
  );
}