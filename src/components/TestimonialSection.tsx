"use client";

import { motion } from "framer-motion";

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

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="section container">

      <div className="section-heading">
        <span className="section-tag">
          Client Reviews
        </span>

        <h2 className="section__title">
          Client <span>Testimonials</span>
        </h2>

        <p className="section-description">
          Hear from businesses that have achieved digital transformation
          through our development services.
        </p>
      </div>

      <div className="testimonial-grid">

        {testimonials.map((item, index) => (

          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: .5,
              delay: index * .08,
            }}
          >

            <div className="quote-icon">
              ❝
            </div>

            <p className="testimonial-text">
              {item.quote}
            </p>

            <div className="testimonial-user">

              <div className="testimonial-avatar">
                {item.name.charAt(0)}
              </div>

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

        <h3>
          Ready to start your project?
        </h3>

        <a href="#contact" className="btn btn--primary">
          Get in Touch
        </a>

      </div>

    </section>
  );
}