"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Backend",
    description:
      "Building scalable backend systems, APIs, and microservices architecture.",
    skills: [
      "Node.js",
      "NestJS",
      "PHP",
      "Laravel",
      "REST APIs",
      "RabbitMQ",
      "Microservices",
      "Serverless",
    ],
  },
  {
    title: "Frontend",
    description:
      "Creating responsive, performant user interfaces with modern frameworks.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Bootstrap",
      "jQuery",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases",
    description:
      "Designing efficient database schemas and optimizing query performance.",
    skills: [
      "MySQL",
      "MongoDB",
      "Redis",
      "Database Design",
      "Query Optimization",
    ],
  },
  {
    title: "DevOps / Cloud",
    description:
      "Infrastructure as code, containerization, cloud deployment, and observability.",
    skills: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Linux",
      "CI/CD",
      "Prometheus",
      "Grafana",
      "Monitoring",
      "Logging",
    ],
  },
  {
    title: "Tools & Platforms",
    description:
      "Development workflow, collaboration tools, and methodologies.",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Linux",
      "Agile/Scrum",
      "API Integration",
      "Authentication Systems",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section container">
      <h2 className="section__title">
        Skills <span>& Expertise</span>
      </h2>

      <p
        style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 3rem",
          color: "var(--text-color)",
        }}
      >
        A comprehensive overview of my technical skills and areas of expertise.
      </p>

      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "2rem",
        }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            style={{
              padding: "2rem",
            }}
          >
            <h3
              style={{
                color: "var(--white-color)",
                marginBottom: ".75rem",
              }}
            >
              {category.title}
            </h3>

            <p
              style={{
                color: "var(--text-color)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
              }}
            >
              {category.description}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: ".7rem",
              }}
            >
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: ".55rem 1rem",
                    borderRadius: "999px",
                    background: "rgba(255,140,40,.12)",
                    border: "1px solid rgba(255,140,40,.18)",
                    color: "var(--white-color)",
                    fontSize: ".9rem",
                    transition: ".3s",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}