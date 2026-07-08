"use client";

import "@/styles/hero.css";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const ChatIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

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
          
          <div className="hero__container">
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
                  <span className="line">
                    Building Scalable
                  </span>
                  <span className="line">
                    Backend Systems
                  </span>
                  <span className="line line--accent">
                    with <span className="accent">Precision</span> <span className="glow-line"></span>
                  </span>
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
                    View Projects →
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
                    <ChatIcon /> Contact Me
                    <div className="ripple" />
                  </motion.a>
                </div>

                <motion.div
                  className="hero-trusted"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                >
                  <span className="trusted-label">
                    TRUSTED BY MODERN BUSINESSES
                  </span>
                  <div className="trusted-logos">
                    <span className="trusted-logo-icon" style={{ fontSize: '1.4rem' }}>aws</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" className="trusted-logo-icon"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon></svg>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" className="trusted-logo-icon"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                    <div className="circle-logo-icon" style={{ width: '28px', height: '28px', fontSize: '0.9rem' }}>N</div>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" className="trusted-logo-icon"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                  </div>
                </motion.div>
              </div>

              <div className="hero__right">
                <motion.div
                  className="hero-image-stage"
                  initial={{ scale: 0.98, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="orbit orbit-1"></div>
                  <div className="orbit orbit-2"></div>
                  
                  <div className="hero-image-wrap">
                    <motion.div
                      style={{
                        rotateX,
                        rotateY,
                        transformPerspective: 1200,
                      }}
                      animate={{
                        y: [0, -8, 0, -4, 0],
                        rotateZ: [0, -0.8, 0, 0.8, 0],
                        scale: [1, 1.01, 1, 1.005, 1],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src="/image/developer-3d.png"
                        alt="Developer"
                        width={820}
                        height={820}
                        priority
                        className="hero-image"
                      />
                    </motion.div>

                    {/* Floating Cards */}
                    <div className="floating-card code">
                      <div className="code-header">{'< / >'}</div>
                      <div className="code-body">
                        <span className="keyword">async function</span> <span className="func">build</span>() {'{'}<br/>
                        &nbsp;&nbsp;<span className="keyword">const</span> system =<br/>
                        &nbsp;&nbsp;<span className="keyword">await</span> <span className="func">architecture</span>();<br/>
                        &nbsp;&nbsp;<span className="keyword">return</span> <span className="func">scale</span>(system);<br/>
                        {'}'}
                      </div>
                    </div>
                    
                    <div className="floating-card tech tech1">
                      <div className="tech-icon node"></div> Node.js
                    </div>
                    <div className="floating-card tech tech2">
                      <div className="tech-icon nest"></div> NestJS
                    </div>
                    <div className="floating-card tech tech3">
                      <div className="tech-icon ts">TS</div> TypeScript
                    </div>
                    <div className="floating-card tech tech4">
                      <div className="tech-icon aws">aws</div> AWS
                    </div>
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

            {/* Bottom Section: Full Width Stats Box */}
            <motion.div 
              className="hero-stats-wrapper"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <div className="hero-stats">
                <div className="stat-card">
                  <div className="stat-icon-wrapper"><ClockIcon /></div>
                  <div className="stat-content">
                    <div className="stat-number">3+</div>
                    <div className="stat-labels">
                      <span className="stat-label-main">Years</span>
                      <span className="stat-label-sub">Experience</span>
                    </div>
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon-wrapper"><CodeIcon /></div>
                  <div className="stat-content">
                    <div className="stat-number">20+</div>
                    <div className="stat-labels">
                      <span className="stat-label-main">Successful</span>
                      <span className="stat-label-sub">Projects</span>
                    </div>
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon-wrapper"><UsersIcon /></div>
                  <div className="stat-content">
                    <div className="stat-number">10K+</div>
                    <div className="stat-labels">
                      <span className="stat-label-main">Happy</span>
                      <span className="stat-label-sub">Users</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
