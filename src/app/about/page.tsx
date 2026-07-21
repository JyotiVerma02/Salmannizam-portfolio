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
    title: "Cloud & DevOps",
    icon: "☁️",
    description: "Deploying with confidence using AWS, Docker and modern DevOps practices.",
    skills: ["AWS", "Docker", "Kubernetes"],
  },
];

export default function AboutPage() {
  return (
    <PageShell>
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