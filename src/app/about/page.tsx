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

const timeline = [
  { year: "2022", role: "Backend Developer", company: "C-DOT" },
  { year: "2023", role: "Backend Developer", company: "Poliyx Pvt Ltd" },
  { year: "2024", role: "Full Stack Developer", company: "WebShlok" },
  {
    year: "2025",
    role: "Co-Founder & Full Stack Developer",
    company: "Coderlala Technologies",
  },
];

const expertise = [
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
    ],
  },
  {
    title: "Frontend",
    description:
      "Creating responsive, high-performance user experiences with modern frameworks.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind",
    ],
  },
  {
    title: "Database",
    description:
      "Designing efficient database systems and fast data access patterns.",
    skills: ["MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Cloud infrastructure, containerization, and production-grade delivery.",
    skills: ["Docker", "Kubernetes", "AWS", "Azure", "Linux", "CI/CD"],
  },
  {
    title: "Tools",
    description:
      "Developer workflows, collaboration tools, and productivity systems.",
    skills: ["Git", "GitHub", "Postman", "Figma"],
  },
];

const philosophyValues = [
  {
    title: "Scalability",
    icon: "⚙️",
    description: "Systems that grow gracefully under real-world load.",
  },
  {
    title: "Performance",
    icon: "🚀",
    description: "Fast experiences through optimized architecture and code.",
  },
  {
    title: "Maintainability",
    icon: "🧩",
    description: "Clear structure, clean code, and developer-friendly systems.",
  },
];

const funFacts = [
  { title: "Coffee Driven", icon: "☕" },
  { title: "Loves Building Products", icon: "🚀" },
  { title: "Always Learning", icon: "📚" },
  { title: "Open to Opportunities", icon: "🌍" },
];

export default function AboutPage() {
  const title =
    "Building scalable software with clean architecture and meaningful user experiences.".split(
      " ",
    );

  return (
    <PageShell>
      <section id="about" className="about-hero">
        <div className="container">
          <div className="about-hero__grid">
            {/*================ LEFT CONTENT ================*/}
            <motion.div
              className="about-hero__intro"
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="hero-label">About Me</span>

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
    </PageShell>
  );
}
