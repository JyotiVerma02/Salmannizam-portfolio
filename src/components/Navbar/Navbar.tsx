"use client";

import "@/styles/navbar.css";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

const sectionToNav: Record<string, string> = {
  home: "/#home",
  about: "/#about",
  experience: "/#about",
  skills: "/#about",
  projects: "/#projects",
  testimonials: "/#testimonials",
  blog: "/#blog",
  contact: "/#contact",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/#home");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);

    if (pathname !== "/") {
      const routeMatch = navItems.find((item) => {
        const routePath = item.href.replace("/#", "/");
        return routePath !== "/home" && pathname.startsWith(routePath);
      });

      setActiveSection(routeMatch?.href || "/#home");
      return;
    }

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 150;
      let current = "/#home";

      Object.entries(sectionToNav).forEach(([sectionId, navHref]) => {
        const section = document.getElementById(sectionId);

        if (section && section.offsetTop <= scrollPosition) {
          current = navHref;
        }
      });

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 24) {
        current = "/#contact";
      }

      setActiveSection(current);
    };

    const updateFromHash = () => {
      const hash = window.location.hash.replace("#", "");

      if (hash && sectionToNav[hash]) {
        setActiveSection(sectionToNav[hash]);
        return;
      }

      updateActiveSection();
    };

    updateActiveSection();
    updateFromHash();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", updateFromHash);
    };
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
          <div className="navbar-left">
            <Link
              href="/#home"
              className="navbar-logo"
              onClick={() => setActiveSection("/#home")}
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
                      onClick={() => setActiveSection(item.href)}
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

            <button type="button" className="navbar-logout-btn">
              Logout
            </button>

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
                      transition={{
                        duration: 0.24,
                        delay: 0.05 + index * 0.04,
                      }}
                    >
                      <Link
                        href={item.href}
                        className={`navbar-drawer-link ${isActive ? "navbar-drawer-link-active" : ""}`}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => {
                          setActiveSection(item.href);
                          setOpen(false);
                        }}
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