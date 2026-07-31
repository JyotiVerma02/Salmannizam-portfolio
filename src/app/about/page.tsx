"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageShell from "@/components/Common/PageShell";
import { 
  Award, Briefcase, Smile, Monitor, 
  Settings, Users, Server, PenTool, LayoutTemplate, Database, Cloud, Cog, Download 
} from "lucide-react";
import "@/styles/about-redesign.css";

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
      "Lead product development from concept  MVP  Production",
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
    icon: <Server className="skill-icon" />,
    description: "Building robust APIs and microservices with Node.js, NestJS & more.",
    skills: ["Node.js", "NestJS", "PHP"],
  },
  {
    title: "Frontend Engineering",
    icon: <LayoutTemplate className="skill-icon" />,
    description: "Crafting responsive and interactive interfaces with React, Next.js & TypeScript.",
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Databases",
    icon: <Database className="skill-icon" />,
    description: "Designing efficient database schemas and optimizing query performance.",
    skills: ["MySQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps / Cloud",
    icon: <Cloud className="skill-icon" />,
    description: "Infrastructure as code, containerization, and observability.",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Linux", "CI/CD", "Prometheus", "Grafana"],
  },
  {
    title: "Tools & Platforms",
    icon: <Cog className="skill-icon" />,
    description: "Development workflow, collaboration tools, and methodologies.",
    skills: ["Git", "GitHub", "Postman", "Linux", "Agile/Scrum", "API Integration"],
  },
];

export default function AboutPage() {
  return (
    <PageShell className="page--about" topPadding="calc(var(--page-shell-offset, 6rem) - 0.25rem)">
      
      {/*================ HERO SECTION ================*/}
      <section className="section container about-hero-section">
        <div className="about-hero-grid">
          {/* Left Column */}
          <div className="about-hero-left">
            <span className="badge badge-primary">ABOUT ME</span>
            <h1 className="about-title">
              Building Scalable Solutions with <span className="text-accent">Clean Code & Purpose</span>
            </h1>
            <p className="about-desc">
              I&apos;m a full-stack developer with a strong passion for building intuitive, high-performance web applications that solve real world problems and deliver meaningful impact.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-icon-wrap"><Award /></div>
                <div className="stat-number">6+</div>
                <div className="stat-text">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon-wrap"><Briefcase /></div>
                <div className="stat-number">20+</div>
                <div className="stat-text">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon-wrap"><Smile /></div>
                <div className="stat-number">100%</div>
                <div className="stat-text">Client Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon-wrap"><Monitor /></div>
                <div className="stat-number">10+</div>
                <div className="stat-text">Technologies</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image Placeholder */}
          <div className="about-hero-right">
            <div className="hero-image-placeholder">
              <Image 
                src="/image/salmannizam.jpg" 
                alt="Salman Nizam"
                width={600}
                height={600}
                className="hero-variant-image"
              />
              <div className="signature">Salman Nizam</div>
              <div className="availability-badge">
                <span className="dot"></span>
                Available for opportunities
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*================ OVERVIEW CARDS ================*/}
      <section className="section container">
        <div className="overview-grid">
          <div className="overview-card">
            <div className="overview-icon-wrap"><Settings /></div>
            <h3>Professional Background</h3>
            <p>I am a senior full-stack developer with extensive experience in building scalable backend systems, robust infrastructure, and user-focused products. My career has been focused on solving complex engineering challenges across various domains.</p>
          </div>
          <div className="overview-card">
            <div className="overview-icon-wrap"><Users /></div>
            <h3>Career Journey</h3>
            <p>Starting from frontend development, I gradually moved into full-stack roles, with a strong focus on backend architecture, database design, and system scalability. I&apos;ve worked with startups and established companies, building products that serve thousands to millions of users.</p>
          </div>
          <div className="overview-card">
            <div className="overview-icon-wrap"><Monitor /></div>
            <h3>Engineering Philosophy</h3>
            <p>I believe in writing clean, maintainable code that solves real problems. I prioritize scalability, performance, and developer experience. Every system should be built with future growth in mind, but not over-engineered for current needs.</p>
          </div>
          <div className="overview-card">
            <div className="overview-icon-wrap"><PenTool /></div>
            <h3>Types of Problems I Solve</h3>
            <ul>
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

      {/*================ EXPERIENCE SECTION ================*/}
      <section className="section container">
        <div className="section-header center">
          <span className="badge badge-primary">EXPERIENCE</span>
          <h2 className="section__title">Professional <span className="text-accent">Experience</span></h2>
          <p className="section-subtitle">A timeline of my professional journey and key achievements.</p>
        </div>

        <div className="timeline-container">
          {experiences.map((job, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-date">
                {job.duration.split(" - ")[0]} <br/>
                <span className="text-muted">– {job.duration.split(" - ")[1]}</span>
              </div>
              
              <div className="timeline-marker"></div>
              
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>{job.role}</h3>
                    <h4 className="company-name">{job.company} <span className="link-icon">↗</span></h4>
                  </div>
                  <div className="location">
                    <span className="pin-icon">📍</span> {job.location}
                  </div>
                </div>

                <div className="timeline-details">
                  <div className="detail-column">
                    <h5>Key Responsibilities</h5>
                    <ul>
                      {job.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="detail-column">
                    <h5>Key Achievements</h5>
                    <ul>
                      {job.achievements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/*================ SKILLS SECTION ================*/}
      <section className="section container">
        <div className="section-header center">
          <span className="badge badge-primary">SKILLS</span>
          <h2 className="section__title">Skills and Expertise</h2>
          <p className="section-subtitle">A comprehensive overview of my technical skills and areas of expertise.</p>
          <a href="#" className="btn-resume">
            <Download size={16} /> Download Resume
          </a>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-card-header">
                <div className="skill-icon-container">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              <p>{category.description}</p>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </PageShell>
  );
}