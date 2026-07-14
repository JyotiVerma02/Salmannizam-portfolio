"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const getNavbarOffset = () => (window.innerWidth <= 640 ? 84 : 96);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/#home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });

  useEffect(() => {
    // Check authentication status
    const auth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(auth === "true");
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    
    const currentPath = pathname === '/' ? '/' : `/${pathname.split('/')[1]}`;
    const matchedItem = navItems.find(item => item.href === currentPath);
    if (matchedItem) {
      setActiveSection(matchedItem.href);
    } else {
      setActiveSection("/");
    }
  }, [pathname]);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    window.location.href = "/";
  };

  // Don't show navbar on admin pages
  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      <motion.header
        className="navbar-header"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className="navbar-progress"
          style={{ scaleX }}
        />

        <nav className={`navbar-shell ${scrolled ? "scrolled" : ""}`}>
          <div className="navbar-left">
            <Link
              href="/#home"
              className="navbar-logo"
              onClick={(event) => handleNavClick(event, "/#home")}
            >
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
                      onClick={(event) => handleNavClick(event, item.href)}
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

            {/* Admin Button - Shows different states based on auth */}
            {isAuthenticated ? (
              <div className="navbar-admin-group">
                <Link href="/admin" className="navbar-admin-btn">
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
                  >
                    <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/>
                    <path d="M12 8v4"/>
                    <circle cx="12" cy="16" r="1"/>
                  </svg>
                  <span>Dashboard</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="navbar-logout-btn"
                  aria-label="Logout"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                    <polyline points="16 17 21 12 16 7"/>
                    <line x1="21" y1="12" x2="9" y2="12"/>
                  </svg>
                </button>
              </div>
            ) : (
              <Link href="/admin-login" className="navbar-admin-btn">
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
                >
                  <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/>
                  <path d="M12 8v4"/>
                  <circle cx="12" cy="16" r="1"/>
                </svg>
                <span>Admin</span>
              </Link>
            )}

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
                        onClick={(event) => handleNavClick(event, item.href)}
                      >
                        <span>{item.label}</span>
                        <span className="navbar-drawer-arrow">›</span>
                      </Link>
                    </motion.li>
                  );
                })}
                
                {/* Mobile Drawer Admin Section */}
                {isAuthenticated ? (
                  <>
                    <motion.li
                      initial={{ x: 16, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.24, delay: 0.35 }}
                    >
                      <Link
                        href="/admin"
                        className="navbar-drawer-link navbar-drawer-link-admin"
                        onClick={() => setOpen(false)}
                      >
                        <span>📊 Dashboard</span>
                        <span className="navbar-drawer-arrow">›</span>
                      </Link>
                    </motion.li>
                    <motion.li
                      initial={{ x: 16, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.24, delay: 0.4 }}
                    >
                      <button
                        onClick={() => {
                          setOpen(false);
                          handleLogout();
                        }}
                        className="navbar-drawer-link navbar-drawer-link-logout"
                      >
                        <span>🚪 Logout</span>
                        <span className="navbar-drawer-arrow">›</span>
                      </button>
                    </motion.li>
                  </>
                ) : (
                  <motion.li
                    initial={{ x: 16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.24, delay: 0.35 }}
                  >
                    <Link
                      href="/admin-login"
                      className="navbar-drawer-link navbar-drawer-link-admin"
                      onClick={() => setOpen(false)}
                    >
                      <span>🔐 Admin Login</span>
                      <span className="navbar-drawer-arrow">›</span>
                    </Link>
                  </motion.li>
                )}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}