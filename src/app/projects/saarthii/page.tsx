import Link from "next/link";
import PageShell from "@/components/Common/PageShell";
import "@/styles/project.css";

export default function SaarthiiProjectPage() {
  return (
    <PageShell>
      <section className="project-detail-section">
        <div className="project-detail-container">
          <Link href="/#projects" className="project-back-link">
            ← Back to Projects
          </Link>

          <div className="project-detail-hero project-detail-hero--orange">
            <span className="project-detail-kicker">B2B Transaction Platform</span>
            <h1>
              Saarthii <span>Platform</span>
            </h1>
            <p>
              Comprehensive B2B transaction and booking platform with integrated 
              wallet system and multi-modal booking capabilities.
            </p>
          </div>

          <div className="project-detail-grid">
            {/* Problem Statement */}
            <article className="project-detail-card project-detail-card--wide">
              <h2>Problem Statement</h2>
              <p>
                B2B travel businesses needed a unified platform to handle transactions, 
                manage bookings across multiple transport modes (air, bus, rail), and 
                process payments through various gateways. The existing fragmented 
                systems lacked integration, making it difficult to manage transactions, 
                track bookings, and maintain financial records efficiently.
              </p>
            </article>

            {/* Solution */}
            <article className="project-detail-card project-detail-card--wide">
              <h2>Solution</h2>
              <p>
                Built a scalable microservices-based platform with the following 
                key components:
              </p>
              <ul className="project-detail-list" style={{ marginTop: '0.75rem' }}>
                <li>
                  <strong>Integrated Wallet System:</strong> Centralized B2B 
                  transaction wallet supporting multiple payment gateways for 
                  seamless financial operations
                </li>
                <li>
                  <strong>Multi-Modal Booking:</strong> Unified booking system 
                  for air, bus, and rail with consistent API and user experience
                </li>
                <li>
                  <strong>Payment Gateway Integration:</strong> Support for 
                  multiple payment gateways with real-time transaction processing 
                  and reconciliation
                </li>
                <li>
                  <strong>Scalable Architecture:</strong> Microservices architecture 
                  ensuring high availability and horizontal scalability
                </li>
              </ul>
            </article>

            {/* Tech Stack */}
            <article className="project-detail-card">
              <h2>Tech Stack</h2>
              <div className="tech-list project-detail-tech">
                <span>Next.js</span>
                <span>Nest.js</span>
                <span>MongoDB</span>
                <span>Redis</span>
                <span>AWS</span>
                <span>Docker</span>
              </div>
            </article>

            {/* Role & Contribution */}
            <article className="project-detail-card">
              <h2>Role &amp; Contribution</h2>
              <p style={{ marginBottom: '0.75rem' }}>
                As Full-Stack &amp; DevOps Engineer, I was responsible for:
              </p>
              <ul className="project-detail-list">
                <li>Architecting and developing the microservices-based backend using Nest.js</li>
                <li>Building responsive frontend interfaces with Next.js</li>
                <li>Implementing wallet system with multiple payment gateway integrations</li>
                <li>Setting up and managing AWS infrastructure and deployment pipelines</li>
                <li>Containerizing applications with Docker for consistent deployments</li>
                <li>Implementing Redis caching for improved performance</li>
                <li>Database design and optimization with MongoDB</li>
              </ul>
            </article>

            {/* Outcome & Impact */}
            <article className="project-detail-card project-detail-card--wide">
              <h2>Outcome &amp; Impact</h2>
              <p>
                Enabled seamless B2B transactions and multi-modal booking management 
                with high availability and scalable architecture. The platform 
                successfully handles complex transaction flows, supports multiple 
                payment gateways, and provides a unified experience for managing 
                air, bus, and rail bookings through a single integrated system.
              </p>
              <div style={{ 
                display: 'flex', 
                gap: '1rem', 
                marginTop: '1.5rem',
                flexWrap: 'wrap' 
              }}>
                <Link 
                  href="#" 
                  className="project-btn"
                  style={{ 
                    background: 'linear-gradient(135deg, #ff8c23, #ffb14b)',
                    padding: '0.7rem 1.4rem'
                  }}
                >
                  View Wallet Platform →
                </Link>
                <Link 
                  href="#" 
                  className="project-btn"
                  style={{ 
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    padding: '0.7rem 1.4rem'
                  }}
                >
                  View Air Booking →
                </Link>
                <Link 
                  href="#" 
                  className="project-btn"
                  style={{ 
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    padding: '0.7rem 1.4rem'
                  }}
                >
                  View Bus Booking →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </PageShell>
  );
}