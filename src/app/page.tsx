"use client";

import "@/styles/about.css";
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
                  href="#projects"
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
                  href="#contact"
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
                <span className="hero-label">About Me</span>
                <h2 className="hero-title">
                  {"Building scalable software with clean architecture and meaningful user experiences."
                    .split(" ")
                    .map((word, index) => (
                      <motion.span
                        key={word + index}
                        className="hero-word"
                        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: index * 0.04 }}
                      >
                        {word}&nbsp;
                      </motion.span>
                    ))}
                </h2>
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
                <div className="hero-actions about-actions">
                  <a href="/resume.pdf" className="about-button about-button--primary">
                    Download Resume
                  </a>
                  <a href="#contact" className="about-button about-button--secondary">
                    Contact Me
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="experience" className="section container">
          <h2 className="section__title">
            Professional <span>Experience</span>
          </h2>
          <p className="section-description">
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
                <div className="experience__dot" />
                <h3>{job.role}</h3>
                <h4>{job.company}</h4>
                <small>
                  {job.duration} - {job.location}
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

        <section id="skills" className="section container">
          <h2 className="section__title">
            Skills <span>& Expertise</span>
          </h2>
          <p className="skills-subtitle">
            A comprehensive overview of my technical skills and areas of expertise.
          </p>
          <div className="skills-layout">
            <div className="skills-row">
              {skillCategories.slice(0, 3).map((category, index) => (
                <motion.div
                  key={category.title}
                  className="expertise-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
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
            <div className="skills-row skills-row--center">
              {skillCategories.slice(3).map((category, index) => (
                <motion.div
                  key={category.title}
                  className="expertise-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + 3) * 0.15 }}
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

        <section id="projects" className="section container">
          <div className="section-heading">
            <h2 className="section__title">
              Featured <span>Projects</span>
            </h2>
            <p className="section-description">
              Real-world projects showcasing technical expertise and scalable
              architecture.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`project-image ${project.gradient}`}>
                  <span>Project</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-list">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <Link href={`/projects/${project.id}`} className="project-btn">
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="section container">
          <div className="section-heading">
            <span className="section-tag">Client Reviews</span>
            <h2 className="section__title">
              Client <span>Testimonials</span>
            </h2>
            <p className="section-description">
              Hear from businesses that achieved digital transformation through
              our development services.
            </p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name + index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="quote-icon">Quote</div>
                <p className="testimonial-text">{item.quote}</p>
                <div className="testimonial-user">
                  <div className="testimonial-avatar">{item.name.charAt(0)}</div>
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                    <small>{item.company}</small>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="testimonial-cta">
            <h3>Ready to start your project?</h3>
            <a href="#contact" className="btn btn--primary">
              Get in Touch
            </a>
          </div>
        </section>

        <section id="blog" className="section container">
          <div className="section-heading">
            <span className="section-tag">Knowledge Sharing</span>
            <h2 className="section__title">
              Latest <span>Blog</span>
            </h2>
            <p className="section-description">
              Technical articles, tutorials, and insights on full-stack
              development, backend systems, cloud architecture, and DevOps.
            </p>
          </div>
          <motion.div
            className="blog-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="blog-banner">
              <span>Blog</span>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span>Announcement</span>
                <span>-</span>
                <span>January 10, 2026</span>
              </div>
              <h3>Blog Coming Soon</h3>
              <p>
                I'm currently preparing in-depth technical articles covering
                Next.js, NestJS, Node.js, TypeScript, System Design,
                Microservices, AWS, Docker, Kubernetes, DevOps, and performance.
              </p>
              <a href="#contact" className="blog-btn">
                Discuss a Topic
              </a>
            </div>
          </motion.div>
        </section>

        <section id="contact" className="section container">
          <div className="section-heading">
            <h2 className="section__title">
              Contact <span>Me</span>
            </h2>
            <p className="section-description">
              Interested in collaborating? Send a message and I'll get back to you soon.
            </p>
          </div>
          <div className="contact-grid">
            <form className="contact-card">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Email" />
              <textarea rows={6} placeholder="Message" />
              <button type="submit" className="btn btn--primary">
                Send Message
              </button>
            </form>
            <div className="contact-info card">
              <h3>Get in touch</h3>
              <p>
                I'm available for freelance projects, collaborations, and remote
                roles. Let's build something great together.
              </p>
              <a className="nav__contact" href="mailto:hello@example.com">
                Email Me
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
