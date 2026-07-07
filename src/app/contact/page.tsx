"use client";

import PageShell from "@/components/Common/PageShell";

export default function ContactPage() {
  return (
    <PageShell>
      <section id="contact" className="section container">
        <div className="section-heading">
          <h2 className="section__title">
            Contact <span>Me</span>
          </h2>
          <p className="section-description">
            Interested in collaborating? Send a message and I’ll get back to you soon.
          </p>
        </div>

        <div className="contact-grid">
          <form className="contact-card">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email" />
            <textarea rows={6} placeholder="Message"></textarea>
            <button type="submit" className="btn btn--primary">
              Send Message
            </button>
          </form>

          <div className="contact-info card">
            <h3>Get in touch</h3>
            <p>
              I’m available for freelance projects, collaborations, and remote roles.
              Let’s build something great together.
            </p>
            <a className="btn btn--primary" href="mailto:hello@example.com">
              Email Me
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
