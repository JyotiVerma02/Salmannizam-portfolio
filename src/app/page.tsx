"use client";

import Image from "next/image";
import Link from "next/link";
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

const skillCategories = [
  {
    title: "Backend Architecture",
    icon: "⚡",
    description: "Building robust APIs and microservices with Node.js, NestJS & more.",
    skills: ["Node.js", "NestJS", "PHP"],
  },
  {
    title: "Frontend Engineering",
    icon: "🎨",
    description: "Crafting responsive and interactive interfaces with React, Next.js & TypeScript.",
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    description: "Deploying with confidence using AWS, Docker and modern DevOps practices.",
    skills: ["AWS", "Docker", "Kubernetes"],
  },
];

export default function Home() {
  return (
    <>
      <div className="cursor-glow" />
      <main className="page">
        <Navbar/>
        {/*================ NEW HERO (from About Page) ================*/}
        <section id="home" className="about-hero">
          <div className="container">
            <div className="blob-big blob-left" />
            <div className="blob-big blob-right" />
            <div className="about-hero__grid">
              <motion.div
                className="about-hero__left"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="profile-card">
                  <Image
                    src="/image/salmannizam.jpg"
                    alt="Salman Nizam"
                    fill
                    priority
                    sizes="(max-width: 868px) 100vw, 40vw"
                    className="profile-card__image"
                  />
                  <div className="profile-card__overlay"></div>
                  <div className="profile-card__v-text">
                    FOCUSED • PASSIONATE • DEDICATED
                  </div>
                  <div className="profile-card__floating-box">
                    <h3 className="profile-card__title">
                      Full-Stack Developer
                    </h3>
                    <p className="profile-card__tagline">
                      Building scalable & impactful digital solutions.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="about-hero__right"
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
             

                <h1 className="about-heading">
                  Building digital<br />
                  products that <span>scale.</span>
                </h1>

                <p className="about-description">
                  I design and build scalable software with clean architecture and meaningful user experiences.
                </p>

                <p className="about-description-secondary">
                  As a full-stack developer, I partner with ambitious teams to turn ideas into high-performance products.
                </p>

                <div className="feature-cards">
                  {skillCategories.map((category, index) => (
                    <motion.div
                      key={category.title}
                      className="feature-card"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                    >
                      <div className="feature-card__icon">{category.icon}</div>
                      <div className="feature-card__content">
                        <h4>{category.title}</h4>
                        <p>{category.description}</p>
                        <div className="feature-card__skills">
                          {category.skills.map((skill) => (
                            <span key={skill} className="feature-skill">• {skill}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="about-actions">
                  <a href="/resume.pdf" className="btn btn--primary" target="_blank" rel="noopener noreferrer">
                    ⬇ Download Resume
                  </a>

                  <Link href="/contact" className="btn btn--outline">
                    <ChatIcon /> Let's Connect
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
