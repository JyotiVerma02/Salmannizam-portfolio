"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import AboutSection from "@/components/Common/AboutSection";
import SkillsSection from "@/components/Common/SkillsSection";
import ExperienceSection from "@/components/Common/ExperienceSection";
import ProjectSection from "@/components/Common/ProjectSection";
import CaseStudySection from "@/components/Common/CaseStudySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import BlogSection from "@/components/Common/BlogSection";
import ContactSection from "@/components/Common/ContactSection";

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
} as any;

export default function Home() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div className="cursor-glow" style={{ left: cursorPos.x, top: cursorPos.y }} />
    <main className="main">
      {/*================ BACKGROUND BLOBS =================*/}
      <div className="blob-big" style={{ top: "-10rem", left: "-10rem" }} />
      <div className="blob-big" style={{ top: "10rem", right: "-10rem" }} />

      {/*================ HEADER =================*/}
      <Navbar />
      
      {/*================ HERO (Centered) =================*/}
      <section className="hero--center">
        <div className="hero__inner container">

          {/* LEFT */}
          <div className="hero__left">
            <div className="hero__kicker">
              <span /> Senior Full-Stack Developer
            </div>

            <h1 className="hero__lead">
              Building Scalable <br />
              Backend Systems with <span className="highlight">Precision</span>
            </h1>

            <p className="hero__sub">
              I design high-performance backend systems, APIs, and architectures
              that scale from startup to millions of users.
            </p>

            <div className="hero__buttons">
              <button className="btn btn--primary">View Projects</button>
              <button className="btn btn--outline">Contact Me</button>
            </div>

            <div className="hero__stats">
              <div>
                <h3>3+</h3>
                <p>Years Exp</p>
              </div>
              <div>
                <h3>20+</h3>
                <p>Projects</p>
              </div>
              <div>
                <h3>10k+</h3>
                <p>Users</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
              <div className="hero__right">
            <motion.div
              className="hero-image-wrapper"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 140 }}
            >
              <Image
                src="/developer-3d.png"
                alt="3D Developer"
                width={720}
                height={720}
                priority
                className="hero-image"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectSection />
      <CaseStudySection />
      <TestimonialSection />
      <BlogSection />
      <ContactSection />
    </main>
    </>
  );
}
