"use client";

import "@/styles/hero.css";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [10, -10]), {
    stiffness: 120,
    damping: 18,
  });

  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-10, 10]), {
    stiffness: 120,
    damping: 18,
  });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty(
        "--cursor-x",
        `${e.clientX}px`,
      );
      document.documentElement.style.setProperty(
        "--cursor-y",
        `${e.clientY}px`,
      );
      const px = (e.clientX / window.innerWidth - 0.5) * 30;
      const py = (e.clientY / window.innerHeight - 0.5) * 30;
      document.documentElement.style.setProperty("--parallax-x", `${px}px`);
      document.documentElement.style.setProperty("--parallax-y", `${py}px`);

      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div className="cursor-glow" />
      <main className="page">
        <Navbar />

        <section id="home" className="hero--center">
          <div className="blob-big blob-left" />
          <div className="blob-big blob-right" />
          <div className="hero__inner">
            <div className="hero__left">
              <motion.div
                className="hero-badge"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.12, duration: 0.6 }}
              >
                <span className="badge-dot" />
                <span className="badge-text">Senior Developer</span>
              </motion.div>

              <h1 className="hero-headline">
                <motion.span
                  className="line"
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.22, duration: 0.6 }}
                >
                  Building Scalable
                </motion.span>
                <motion.span
                  className="line"
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.36, duration: 0.6 }}
                >
                  Backend Systems
                </motion.span>
                <motion.span
                  className="line line--accent"
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  with <span className="accent">Precision</span>
                </motion.span>
              </h1>

              <motion.p
                className="hero-desc"
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.72, duration: 0.6 }}
              >
                I design high-performance backend systems, APIs, and cloud
                infrastructure—building resilient services and developer tools
                that scale to millions of users.
              </motion.p>

              <div className="hero-actions">
                <motion.a
                  href="/projects"
                  className="btn btn--primary magnetic"
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.88 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Projects
                  <div className="ripple" />
                </motion.a>
                <motion.a
                  href="/contact"
                  className="btn btn--outline magnetic"
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.02 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Me
                  <div className="ripple" />
                </motion.a>
              </div>

              <div className="hero-stats">
                <motion.div
                  className="stat-card"
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.18 }}
                >
                  <div className="stat-icon">
                    <svg viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="stat-body">
                    <div className="stat-num">3+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                </motion.div>
                <motion.div
                  className="stat-card"
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.32 }}
                >
                  <div className="stat-icon">
                    <svg viewBox="0 0 24 24">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <div className="stat-body">
                    <div className="stat-num">20+</div>
                    <div className="stat-label">Projects</div>
                  </div>
                </motion.div>
                <motion.div
                  className="stat-card"
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.46 }}
                >
                  <div className="stat-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="stat-body">
                    <div className="stat-num">10K+</div>
                    <div className="stat-label">Users</div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="hero__right">
              <motion.div
                className="hero-image-stage"
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="hero-image-glass">
                  <motion.div
                    className="hero-image-wrap"
                    style={{
                      rotateX,
                      rotateY,
                      transformPerspective: 1200,
                    }}
                    animate={{
                      y: [0, -10, 0, -6, 0],
                      rotateZ: [0, -1.2, 0, 1.2, 0],
                      scale: [1, 1.015, 1, 1.01, 1],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src="/developer-transparent.png"
                      alt="Developer"
                      width={760}
                      height={760}
                      priority
                      className="hero-image"
                    />
                  </motion.div>
                </div>

                <div className="hero-image-effects">
                  <div className="effect-circle" />
                  <div className="effect-circle small" />
                  <div className="particles">
                    <span className="p" />
                    <span className="p" />
                    <span className="p" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}