"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

const Hero = () => {
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
                  <span className="line">Building Scalable</span>
                  <span className="line">Backend Systems</span>
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
                  infrastructure, building resilient services and developer tools
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
                    View Projects &rarr;
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
              </div>

              <div className="hero__right">
                <motion.div
                  className="hero-image-stage"
                  initial={{ scale: 0.98, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="hero-image-wrap">
                    <div>
                      <Image
                        src="/image/salmannizam.jpg"
                        alt="Salman Nizam"
                        width={820}
                        height={820}
                        priority
                        className="hero-image"
                      />
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

                  <div className="hero-availability-card">
                    <div className="availability-dot"></div>
                    <div className="availability-text">
                      <strong>Available for new projects</strong>
                      <span>Let's build something great together.</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="hero-bottom-section">
              <motion.div
                className="trusted-by-card hero-trusted-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="trusted-label">TRUSTED BY MODERN BUSINESSES</span>
                <div className="trusted-logos">
                  <span className="trusted-logo-item" style={{ fontSize: '1.8rem', fontWeight: 700 }}>aws</span>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="trusted-logo-item"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon></svg>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="trusted-logo-item"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                  <div className="trusted-logo-item circle-logo-icon">N</div>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="trusted-logo-item"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const About = () => (
  <section id="about" className="about-hero about-hero--centered">
    <div className="container">
      <div className="about-hero__grid">
        <div className="about-hero__right">
          <span className="about-label">My Philosophy</span>
          <h2 className="about-heading">Engineering with <span>Purpose</span></h2>
          <p className="about-description">
            My journey into technology was driven by a fascination with solving complex problems. I believe the best digital products are built at the intersection of elegant code, user-centric design, and strategic business goals.
          </p>
          <p className="about-description-secondary">
            I partner with founders and teams to not just write code, but to build systems that are reliable, scalable, and a joy to use. My focus is on creating tangible value and a foundation for long-term success.
          </p>

          <div className="hero-stats-wrapper" style={{ marginTop: '40px' }}>
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
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
