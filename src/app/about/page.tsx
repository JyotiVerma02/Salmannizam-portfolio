"use client";

import { motion } from "framer-motion";
import PageShell from "@/components/Common/PageShell";

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
    title: "Databases",
    icon: "🗄️",
    description: "Designing efficient database schemas and optimizing query performance.",
    skills: ["MySQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps / Cloud",
    icon: "☁️",
    description: "Infrastructure as code, containerization, and observability.",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Linux", "CI/CD", "Prometheus", "Grafana"],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    description: "Development workflow, collaboration tools, and methodologies.",
    skills: ["Git", "GitHub", "Postman", "Linux", "Agile/Scrum", "API Integration"],
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      {/*================ OVERVIEW ================*/}
      <section id="overview" className="section container" style={{ marginTop: '2rem' }}>
        <h2 className="section__title">
          About <span style={{ color: "var(--first-color)" }}>Me</span>
        </h2>

        {/* <p
          style={{
            textAlign: "center",
            color: "var(--text-color)",
            maxWidth: "700px",
            margin: "0 auto 4rem",
            lineHeight: 1.8,
          }}
        >
          A senior full-stack developer passionate about building scalable, user-focused products and solving complex engineering challenges across various domains.
        </p> */}
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ background: 'var(--container-color)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow)', transition: 'transform 0.3s ease' }} className="about-me-card">
            <h3 style={{ color: 'var(--white-color)', fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--first-color)' }}>❖</span> Professional Background
            </h3>
            <p style={{ color: 'var(--text-color)', lineHeight: 1.8, fontSize: '0.9rem' }}>I am a senior full-stack developer with extensive experience in building scalable backend systems, robust infrastructure, and user-focused products. My career has been focused on solving complex engineering challenges across various domains.</p>
          </div>
          
          <div style={{ background: 'var(--container-color)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow)', transition: 'transform 0.3s ease' }} className="about-me-card">
            <h3 style={{ color: 'var(--white-color)', fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--first-color)' }}>❖</span> Career Journey
            </h3>
            <p style={{ color: 'var(--text-color)', lineHeight: 1.8, fontSize: '0.9rem' }}>Starting from frontend development, I gradually moved into full-stack roles, with a strong focus on backend architecture, database design, and system scalability. I've worked with startups and established companies, building products that serve thousands to millions of users.</p>
          </div>

          <div style={{ background: 'var(--container-color)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow)', transition: 'transform 0.3s ease' }} className="about-me-card">
            <h3 style={{ color: 'var(--white-color)', fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--first-color)' }}>❖</span> Engineering Philosophy
            </h3>
            <p style={{ color: 'var(--text-color)', lineHeight: 1.8, fontSize: '0.9rem' }}>I believe in writing clean, maintainable code that solves real problems. I prioritize scalability, performance, and developer experience. Every system should be built with future growth in mind, but not over-engineered for current needs.</p>
          </div>

          <div style={{ background: 'var(--container-color)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow)', transition: 'transform 0.3s ease' }} className="about-me-card">
            <h3 style={{ color: 'var(--white-color)', fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--first-color)' }}>❖</span> Types of Problems I Solve
            </h3>
            <ul style={{ color: 'var(--text-color)', paddingLeft: '1.5rem', listStyleType: 'disc', lineHeight: 1.8, fontSize: '0.9rem' }}>
              <li>Backend architecture and API design</li>
              <li>Database optimization and scaling</li>
              <li>Infrastructure setup and DevOps</li>
              <li>Product development from concept to launch</li>
              <li>Performance optimization</li>
              <li>System reliability and monitoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/*================ EXPERIENCE ================*/}
      <section id="experience" className="section container">
        <h2 className="section__title">
          Professional <span style={{ color: "var(--first-color)" }}>Experience</span>
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "var(--text-color)",
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