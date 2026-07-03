"use client";

import "@/styles/hero.css";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";


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

const projects = [
  {
    id: "saarthii",
    title: "Saarthii B2B Transaction Platform",
    description:
      "Comprehensive B2B transaction platform featuring wallet, air, bus and rail booking with multiple payment gateways.",
    tech: ["Next.js", "NestJS", "MongoDB", "Redis", "AWS", "Docker"],
    gradient: "orange",
  },
  {
    id: "coderlala",
    title: "CoderLala CRM System",
    description:
      "Enterprise-grade CRM platform built with microservices architecture, RabbitMQ and real-time processing.",
    tech: ["Next.js", "NestJS", "MongoDB", "Redis", "RabbitMQ", "Docker"],
    gradient: "blue",
  },
];

const testimonials = [
  {
    quote:
      "Working with CoderLala was a seamless experience. They built a clean, fast and fully mobile-optimized yoga platform that made it easier for our students to explore classes and schedules.",
    name: "Ravinder",
    role: "Founder",
    company: "SkyYogaShala",
  },
  {
    quote:
      "CoderLala created a modern and professional website for our clinic. The layout, appointment system, and overall structure are intuitive, making it very easy for patients to find information.",
    name: "Dr. (Maj) Chander Prakash",
    role: "Founder & Chief Dentist",
    company: "Kreative Dentistry",
  },
  {
    quote:
      "Our GCAD training platform required clarity, structure and a smooth experience for students. CoderLala delivered a fast, organized and easy-to-update website that works perfectly for our academic needs.",
    name: "Dr. (Maj) Chander Prakash",
    role: "Director",
    company: "Kreative GCAD",
  },
  {
    quote:
      "CoderLala built a premium-quality website for our aesthetics and cosmetic services. The design aligns well with our brand and presents our treatments in a clear and elegant way.",
    name: "Dr. (Maj) Chander Prakash",
    role: "Founder",
    company: "Kreative Aesthetics",
  },
  {
    quote:
      "We partnered with CoderLala to revamp the Polaris Hospitals website. The new version is clean, well-structured, and makes it easy for patients to explore departments and doctors.",
    name: "Dr. Sringari",
    role: "Medical Director",
    company: "Polaris Hospitals",
  },
  {
    quote:
      "CoderLala designed a vibrant and high-performance website for our painting services. It showcases our work beautifully and provides visitors with a smooth browsing experience.",
    name: "Zahid Malik",
    role: "Founder",
    company: "RangRoganWala",
  },
  {
    quote:
      "Our health & wellness platform required a clean, trustworthy and user-friendly interface. CoderLala delivered a well-structured website with excellent clarity and fast loading performance.",
    name: "Poonam Agrawal",
    role: "Co-Founder",
    company: "RiPRAP Health",
  },
];

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
          <div className="hero__inner container">
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
                <motion.span
                  className="line"
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.22, duration: 0.6 }}
                >
                  Building Scalable
                </motion.span>
                <motion.span
                  className="line"
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.36, duration: 0.6 }}
                >
                  Backend Systems
                </motion.span>
                <motion.span
                  className="line line--accent"
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  with <span className="accent">Precision</span>
                </motion.span>
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
                  View Projects
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
                  Contact Me
                  <div className="ripple" />
                </motion.a>
              </div>

              <div className="hero-stats">
                <motion.div
                  className="stat-card"
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.18 }}
                >
                  <div className="stat-icon">●</div>
                  <div className="stat-body">
                    <div className="stat-num">3+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                </motion.div>
                <motion.div
                  className="stat-card"
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.32 }}
                >
                  <div className="stat-icon">●</div>
                  <div className="stat-body">
                    <div className="stat-num">20+</div>
                    <div className="stat-label">Projects</div>
                  </div>
                </motion.div>
                <motion.div
                  className="stat-card"
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.46 }}
                >
                  <div className="stat-icon">●</div>
                  <div className="stat-body">
                    <div className="stat-num">10K+</div>
                    <div className="stat-label">Users</div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="hero__right">
              <motion.div
                className="hero-image-stage"
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="hero-image-glass">
                  <motion.div
                    className="hero-image-wrap"
                    style={{
                      rotateX,
                      rotateY,
                      transformPerspective: 1200,
                    }}
                    animate={{
                      y: [0, -10, 0, -6, 0],
                      rotateZ: [0, -1.2, 0, 1.2, 0],
                      scale: [1, 1.015, 1, 1.01, 1],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src="/developer-transparent.png"
                      alt="Developer"
                      width={760}
                      height={760}
                      priority
                      className="hero-image"
                    />
                  </motion.div>
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
        </section>
      </main>
    </>
  );
}
