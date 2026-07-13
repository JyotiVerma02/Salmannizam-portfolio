import Link from "next/link";
import PageShell from "@/components/Common/PageShell";

export default function FinTechFlowProjectPage() {
  return (
    <PageShell>
      <section className="project-detail-section">
        <div className="project-detail-container">
          <Link href="/projects" className="project-back-link">
            ← Back to Projects
          </Link>

          <div className="project-detail-hero project-detail-hero--purple">
            <span className="project-detail-kicker">Financial Application</span>
            <h1>
              FinTech Flow <span>App</span>
            </h1>
            <p>
              Next-generation financial application providing seamless peer-to-peer 
              transfers, investment tracking, and automated portfolio management.
            </p>
          </div>

          <div className="project-detail-grid">
            {/* Problem Statement */}
            <article className="project-detail-card project-detail-card--wide">
              <h2>Problem Statement</h2>
              <p>
                Modern users expect instantaneous, low-fee financial transfers combined 
                with intuitive investment tracking. Traditional banking apps suffer from 
                slow processing times, poor user interfaces, and lack automated portfolio 
                management tools, leaving users frustrated with fragmented financial experiences.
              </p>
            </article>

            {/* Solution */}
            <article className="project-detail-card project-detail-card--wide">
              <h2>Solution</h2>
              <p>
                Engineered a high-performance, mobile-first financial platform 
                with the following core capabilities:
              </p>
              <ul className="project-detail-list" style={{ marginTop: '0.75rem' }}>
                <li>
                  <strong>Instant P2P Transfers:</strong> Built on a distributed event 
                  streaming architecture using Kafka for sub-second transaction processing
                </li>
                <li>
                  <strong>Automated Investing:</strong> Algorithmic portfolio rebalancing 
                  and automated recurring investments based on user risk profiles
                </li>
                <li>
                  <strong>Bank-grade Security:</strong> Multi-factor authentication, 
                  biometric login, and real-time fraud detection systems
                </li>
                <li>
                  <strong>Unified Dashboard:</strong> Comprehensive view of all assets, 
                  spending habits, and investment growth in one intuitive interface
                </li>
                <li>
                  <strong>Scalable Backend:</strong> High-throughput microservices built 
                  in Go, ensuring reliability during peak trading hours
                </li>
              </ul>
            </article>

            {/* Tech Stack */}
            <article className="project-detail-card">
              <h2>Tech Stack</h2>
              <div className="tech-list project-detail-tech">
                <span>Next.js</span>
                <span>Go</span>
                <span>PostgreSQL</span>
                <span>Kafka</span>
                <span>Docker</span>
                <span>Kubernetes</span>
              </div>
            </article>

            {/* Role & Contribution */}
            <article className="project-detail-card">
              <h2>Role &amp; Contribution</h2>
              <p style={{ marginBottom: '0.75rem' }}>
                As Backend Systems Engineer, I was responsible for:
              </p>
              <ul className="project-detail-list">
                <li>Architecting the core transaction engine using Go and PostgreSQL</li>
                <li>Implementing Kafka event streaming for real-time payment processing</li>
                <li>Developing robust APIs for mobile and web frontend integration</li>
                <li>Setting up Kubernetes clusters for highly available deployment</li>
                <li>Ensuring PCI DSS compliance and implementing data encryption</li>
              </ul>
            </article>

            {/* Outcome & Impact */}
            <article className="project-detail-card project-detail-card--wide">
              <h2>Outcome &amp; Impact</h2>
              <p>
                Delivered a robust financial platform that currently processes thousands 
                of transactions daily with zero downtime. The modern architecture 
                significantly reduced transaction latency and operational costs, while 
                providing users with a highly secure and engaging financial management tool.
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
                    background: 'linear-gradient(135deg, #7b2cbf, #a55eea)',
                    padding: '0.7rem 1.4rem'
                  }}
                >
                  View Live Project →
                </Link>
                <Link 
                  href="#" 
                  className="project-btn"
                  style={{ 
                    background: 'rgba(var(--first-color-rgb),0.06)',
                    border: '1px solid rgba(var(--first-color-rgb),0.1)',
                    padding: '0.7rem 1.4rem',
                    color: '#fff'
                  }}
                >
                  GitHub Repository →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
