"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
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
            <button type="button" className="navbar-icon-btn" aria-label="Toggle theme">
              <span className="theme-sun-icon" aria-hidden="true">
                <span className="theme-sun-core" />
              </span>
            </button>

            <Link href="/admin-login" className="navbar-admin-btn" onClick={closeMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
                <path d="M12 8v4" />
                <circle cx="12" cy="16" r="1" />
              </svg>
              <span>Admin</span>
            </Link>

            <button
              type="button"
              className={`navbar-burger ${open ? "navbar-burger-open" : ""}`}
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Open navigation menu"
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
                  x
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

                <motion.li
                  initial={{ x: 16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.24, delay: 0.32 }}
                >
                  <Link
                    href="/admin-login"
                    className="navbar-drawer-link navbar-drawer-link-admin"
                    onClick={closeMenu}
                  >
                    <span>Admin Login</span>
                    <span className="navbar-drawer-arrow">&gt;</span>
                  </Link>
                </motion.li>
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
