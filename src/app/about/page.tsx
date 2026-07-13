"use client";

import { motion } from "framer-motion";
import PageShell from "@/components/Common/PageShell";
import Image from "next/image";

const stats = [
  { value: "1.5+", label: "Years of Experience", icon: "⌛" },
  { value: "20+", label: "Projects Completed", icon: "✨" },
  { value: "100%", label: "Client Satisfaction", icon: "⭐" },
  { value: "24/7", label: "Always Learning", icon: "📚" },
];

const experiences = [
  {
    role: "Co-Founder & Full-Stack Developer",
    company: "Coderlala Technologies Private Limited",
    duration: "December 2024 - Present",
    location: "Gurugram, Haryana, India",
    responsibilities: [
      "Build full-stack applications using NestJS, Next.js, TypeScript, Node.js, MongoDB, and MySQL",
      "Design scalable backend architectures with focus on performance and security",
      "Develop SaaS products, APIs, dashboards, and automations",
      "Integrate AI tools and APIs to enhance product capabilities",
      "Lead product development from concept → MVP → Production",
      "Work directly with clients to gather requirements and deliver solutions",
      "Oversee code quality, deployments, and development processes",
    ],
    achievements: [
      "Delivered multiple client products across Web, Mobile, and SaaS categories",
      "Built a strong technical foundation for scaling Coderlala's product ecosystem",
      "Helped position Coderlala Technologies as a multi-solution technology company",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "WebShlok Digital Services",
    duration: "March 2024 - Present",
    location: "Gurugram, Haryana, India",
    responsibilities: [
      "Develop and maintain full-stack web applications",
      "Build scalable backend systems and APIs",
      "Collaborate with cross-functional teams",
      "Develop responsive frontend interfaces",
      "Optimize performance and maintain code quality",
    ],
    achievements: [
      "Delivered multiple client projects",
      "Improved application performance and user experience",
    ],
  },
  {
    role: "Backend Developer",
    company: "Poliyx Pvt Ltd",
    duration: "July 2022 - March 2024",
    location: "Gurugram, Haryana, India",
    responsibilities: [
      "Developed multi-user platforms using PHP, MySQL, Node.js and MongoDB",
      "Built REST APIs",
      "Integrated third-party Insurance APIs",
      "Worked closely with frontend team",
      "Optimized databases and backend performance",
    ],
    achievements: [
      "Built a platform serving 1,000+ users daily",
      "Developed a stock market platform for 1,000+ companies",
      "Automated workflows using API integrations",
    ],
  },
  {
    role: "Trainee Developer",
    company: "Centre for Development of Telematics (C-DOT)",
    duration: "April 2022 - July 2022",
    location: "Delhi, India",
    responsibilities: [
      "Developed REST services",
      "Built backend APIs",
      "Prepared technical documentation",
      "Debugged and optimized existing modules",
    ],
    achievements: [
      "Contributed to large-scale backend systems",
      "Improved overall system performance",
    ],
  },
];

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

export default function AboutPage() {
  return (
    <PageShell>
      {/*================ ABOUT HERO ================*/}
      <section id="about" className="about-hero">
        <div className="container">
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
              <span className="about-label">ABOUT ME</span>

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
                <a href="/resume.pdf" className="btn btn--primary">
                  ⬇ Download Resume
                </a>

                <a href="#contact" className="btn btn--outline">
                  ✈ Let's Connect
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/*================ STATISTICS ================*/}
      <section className="section container">
        <div className="about-stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="stat-card__icon">{stat.icon}</div>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/*================ EXPERIENCE ================*/}
      <section id="experience" className="section container" style={{ marginTop: '2rem' }}>
        <h2 className="section__title">
          Professional <span style={{ color: "var(--first-color)" }}>Experience</span>
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#bcbcbc",
            maxWidth: "700px",
            margin: "0 auto 4rem",
            lineHeight: 1.8,
          }}
        >
          Professional journey and career milestones.
        </p>

        <div className="experience">
          {experiences.map((job, index) => (
            <motion.div
              key={job.company + index}
              className="experience__item"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="experience__dot"></div>

              <h3>{job.role}</h3>

              <h4>{job.company}</h4>

              <small>
                {job.duration} • {job.location}
              </small>

              <h5>Responsibilities</h5>

              <ul>
                {job.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h5>Key Achievements</h5>

              <ul>
                {job.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/*================ SKILLS ================*/}
      <section id="skills" className="section container">
        <h2 className="section__title">
          Skills <span style={{ color: "var(--first-color)" }}>& Expertise</span>
        </h2>

        <p className="skills-subtitle">
          A comprehensive overview of my technical skills and areas of expertise.
        </p>

        <div className="skills-layout">
          <div className="skills-row">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="expertise-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
              >
                <h3>
                  <span className="expertise-card__icon">{category.icon}</span>
                  {category.title}
                </h3>

                <p>{category.description}</p>

                <div className="skills-tags">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}