"use client";

import { motion } from "framer-motion";
import PageShell from "@/components/Common/PageShell";
import "@/styles/about.css";

const stats = [
  { value: "3+", label: "Years Experience", icon: "⌛" },
  { value: "20+", label: "Projects", icon: "✨" },
  { value: "10K+", label: "Users Served", icon: "👥" },
  { value: "Full Stack", label: "Developer", icon: "🧠" },
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

export default function AboutPage() {
  const title =
    "Building scalable software with clean architecture and meaningful user experiences."
      .split(" ");

  return (
    <PageShell>
      {/*================ ABOUT HERO ================*/}
      <section id="about" className="about-hero">
        <div className="container">
          <div className="about-hero__grid">
            <motion.div
              className="about-hero__intro"
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
<h2 className="section__title">
  About <span className="text-orange">Me</span>
</h2>

              <motion.h1
                className="hero-title"
                initial="hidden"
                animate="visible"
              >
                {title.map((word, index) => (
                  <motion.span
                    key={index}
                    className="hero-word"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 60,
                        filter: "blur(12px)",
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: {
                          duration: 0.7,
                          delay: index * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.h1>

              <p className="hero-subtitle">
                I design premium systems that bridge modern engineering,
                beautiful interfaces, and reliable infrastructure.
              </p>

              <div className="hero-copy">
                As a full-stack developer, I partner with ambitious teams to
                craft products that scale, perform, and delight users. My work
                focuses on clarity, craftsmanship, and real-world results.
              </div>

              <div className="hero-list">
                <div className="hero-list__item">
                  Specializing in backend-first architecture and polished UI
                  experiences.
                </div>

                <div className="hero-list__item">
                  Delivering production-ready solutions with strong
                  observability and reliability.
                </div>
              </div>

              <div className="hero-actions">
                <a
                  href="/resume.pdf"
                  className="about-button about-button--primary"
                >
                  Download Resume
                </a>

                <a
                  href="#contact"
                  className="about-button about-button--secondary"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     
    

      {/*================ EXPERIENCE ================*/}
      <section id="experience" className="section container">
        <h2 className="section__title">
          Professional <span style={{ color: "#ff8c28" }}>Experience</span>
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
  {/*================ SKILLS ================*/}
<section id="skills" className="section container">
  <h2 className="section__title">
    Skills <span style={{ color: "#ff8c28" }}>& Expertise</span>
  </h2>

  <p className="skills-subtitle">
    A comprehensive overview of my technical skills and areas of expertise.
  </p>

  <div className="skills-layout">

    {/* ---------- First Row ---------- */}
    <div className="skills-row">
      {skillCategories.slice(0, 3).map((category, index) => (
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
          <h3>{category.title}</h3>

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

    {/* ---------- Second Row ---------- */}
    <div className="skills-row skills-row--center">
      {skillCategories.slice(3).map((category, index) => (
        <motion.div
          key={category.title}
          className="expertise-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: (index + 3) * 0.15,
          }}
        >
          <h3>{category.title}</h3>

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