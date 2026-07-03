"use client";

import "@/styles/navbar.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },

  
  { label: "Projects", href: "/projects" },
  
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveSection(pathname || "/");
  }, [pathname]);

  return (
    <>
      <motion.header
        className="navbar-header"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
   <nav className={`navbar-shell ${scrolled ? "scrolled" : ""}`}>
  
  {/* LEFT - LOGO */}
  <div className="navbar-left">
    <Link href="/" className="navbar-logo">
      Salman <span className="navbar-logo-accent">Nizam</span>
    </Link>
  </div>

  {/* CENTER - MENU */}
  <div className="navbar-center">
    <ul className="navbar-menu-list">
      {navItems.map((item, index) => {
        const isActive = activeSection === item.href;

        return (
          <motion.li key={item.label} className="navbar-menu-item">
            <Link
              href={item.href}
              className={`navbar-link ${isActive ? "navbar-link-active" : ""}`}
            >
              {item.label}
              <span className="navbar-link-glow" />
            </Link>
          </motion.li>
        );
      })}
    </ul>
  </div>

  {/* RIGHT - ACTIONS */}
  <div className="navbar-right">
    
    {/* Theme Toggle */}
    <button className="navbar-icon-btn">
      🌙
    </button>

    {/* Logout / CTA */}
    <button className="navbar-logout-btn">
      Logout
    </button>

    {/* Mobile Burger */}
    <button
      type="button"
      className={`navbar-burger ${open ? "navbar-burger-open" : ""}`}
      onClick={() => setOpen((prev) => !prev)}
    >
      <span className="navbar-burger-line" />
      <span className="navbar-burger-line" />
      <span className="navbar-burger-line" />
    </button>

  </div>
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
                  const isActive = activeSection === item.href;
                  return (
                    <motion.li
                      key={item.label}
                      initial={{ x: 16, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.24,
                        delay: 0.05 + index * 0.04,
                      }}
                    >
                      <Link
                        href={item.href}
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
