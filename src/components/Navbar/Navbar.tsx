"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/Common/ThemeProvider";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const SunIcon = () => (
  <span className="theme-sun-icon" aria-hidden="true">
    <span className="theme-sun-core" />
  </span>
);

const MoonIcon = () => (
  <span className="theme-moon-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  </span>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);



  useEffect(() => {
    setOpen(false);

    const currentPath = pathname === "/" ? "/" : `/${pathname.split("/")[1]}`;
    const matchedItem = navItems.find((item) => item.href === currentPath);
    setActiveSection(matchedItem ? matchedItem.href : "/");
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <motion.header
        className="navbar-header"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div className="navbar-progress" style={{ scaleX }} />

        <nav className={`navbar-shell ${scrolled ? "scrolled" : ""}`}>
          <div className="navbar-left">
            <Link href="/#home" className="navbar-logo" onClick={closeMenu}>
              Salman <span className="navbar-logo-accent">Nizam</span>
            </Link>
          </div>

          <div className="navbar-center">
            <ul className="navbar-menu-list">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <motion.li
                    key={item.label}
                    className={`navbar-menu-item ${isActive ? "active" : ""}`}
                  >
                    <Link
                      href={item.href}
                      className={`navbar-link ${isActive ? "navbar-link-active" : ""}`}
                      aria-current={isActive ? "page" : undefined}
                      onClick={closeMenu}
                    >
                      {item.label}
                      <span className="navbar-link-glow" />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          <div className="navbar-right">
            <button
              type="button"
              className="navbar-icon-btn"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              onClick={toggleTheme}
            >
              {theme === "light" ? <SunIcon /> : <MoonIcon />}
            </button>


            <button
              type="button"
              className={`navbar-burger ${open ? "navbar-burger-open" : ""}`}
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
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
              onClick={closeMenu}
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
                  onClick={closeMenu}
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
                      transition={{ duration: 0.24, delay: 0.05 + index * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        className={`navbar-drawer-link ${isActive ? "navbar-drawer-link-active" : ""}`}
                        aria-current={isActive ? "page" : undefined}
                        onClick={closeMenu}
                      >
                        <span>{item.label}</span>
                        <span className="navbar-drawer-arrow">&gt;</span>
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






