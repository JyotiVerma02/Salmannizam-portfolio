"use client";

import "@/styles/navbar.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/", anchor: "home" },
  { label: "About", href: "/about", anchor: "about" },
  { label: "Skills", href: "/skills", anchor: "skills" },
  { label: "Experience", href: "/experience", anchor: "experience" },
  { label: "Projects", href: "/projects", anchor: "projects" },
  { label: "Case Studies", href: "/case-studies", anchor: "case-studies" },
  { label: "Testimonials", href: "/testimonials", anchor: "testimonials" },
  { label: "Blog", href: "/blog", anchor: "blog" },
  { label: "Contact", href: "/contact", anchor: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionElements = Array.from(
      document.querySelectorAll<HTMLElement>("section[id], #home"),
    );

    if (sectionElements.length === 0) {
      setActiveSection("home");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id || "home");
          }
        });
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0.3,
      },
    );

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <motion.header
        className="navbar-header"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <nav className={`navbar-shell ${scrolled ? "scrolled" : ""}`} aria-label="Primary navigation">
          <motion.div
            initial={{ x: -24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Link href="/" className="navbar-logo" aria-label="Go to home page">
              Salman <span className="navbar-logo-accent">Nizam</span>
            </Link>
          </motion.div>

          <div className="navbar-desktop-menu">
            <ul className="navbar-menu-list">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href || (pathname === "/" && activeSection === item.anchor);
                const linkHref = pathname === "/" ? `#${item.anchor}` : item.href;
                return (
                  <motion.li
                    key={item.label}
                    className="navbar-menu-item"
                    initial={{ y: -8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.35, delay: 0.12 + index * 0.04 }}
                  >
                    <Link
                      href={linkHref}
                      className={`navbar-link ${isActive ? "navbar-link-active" : ""}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                      <span className="navbar-link-glow" />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          <button
            type="button"
            className={`navbar-burger ${open ? "navbar-burger-open" : ""}`}
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
          >
            <span className="navbar-burger-line" />
            <span className="navbar-burger-line" />
            <span className="navbar-burger-line" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="navbar-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              id="mobile-nav-drawer"
              className="navbar-mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              role="dialog"
              aria-label="Mobile navigation menu"
            >
              <div className="navbar-drawer-top">
                <span className="navbar-drawer-title">Navigate</span>
                <button
                  type="button"
                  className="navbar-drawer-close"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                >
                  ×
                </button>
              </div>

              <ul className="navbar-drawer-list">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href || (pathname === "/" && activeSection === item.anchor);
                  const linkHref = pathname === "/" ? `#${item.anchor}` : item.href;
                  return (
                    <motion.li
                      key={item.label}
                      initial={{ x: 16, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.24, delay: 0.05 + index * 0.04 }}
                    >
                      <Link
                        href={linkHref}
                        className={`navbar-drawer-link ${isActive ? "navbar-drawer-link-active" : ""}`}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setOpen(false)}
                      >
                        <span>{item.label}</span>
                        <span className="navbar-drawer-arrow">↗</span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}