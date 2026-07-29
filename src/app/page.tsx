"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

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
      <main className="page page--home">
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
                    quality={100}
                    sizes="(max-width: 868px) 100vw, 40vw"
                    className="profile-card__image"
                  />
                  <div className="profile-card__overlay"></div>
                  <div className="profile-card__v-text">
                    AVAILABLE FOR NEW PROJECTS
                  </div>
                  <div className="profile-card__floating-box">
                    <h3 className="profile-card__title">
                      Salman Nizam
                    </h3>
                    <p className="profile-card__tagline">
                      Senior Full-Stack Developer
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
                  Backend Systems<br />
                  <div style={{ display: 'inline-block', whiteSpace: 'nowrap', fontSize: '0.8em', color: 'var(--first-color)' }}>
                    & Scalability <span>Expert.</span>
                  </div>
                </h1>

                <p className="about-description">
                  I architect and build high-performance backend systems that scale to millions of users, combining deep technical expertise with product thinking.
                </p>

                <p className="about-description-secondary">
                  As <span style={{ color: "var(--first-color)", fontWeight: "700", fontSize: "1.25em" }}>Director at CoderLala Technologies</span>, I lead engineering teams to deliver robust, maintainable solutions that solve real business problems.
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
                    <MessageSquare size={18} style={{ marginRight: '8px' }} /> Let's Connect
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
