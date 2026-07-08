import Link from "next/link";
import PageShell from "@/components/Common/PageShell";

export default function CoderLalaProjectPage() {
  return (
    <PageShell>
      <section className="project-detail-section">
        <div className="project-detail-container">
          <Link href="/projects" className="project-back-link">
            ← Back to Projects
          </Link>

          <div className="project-detail-hero project-detail-hero--blue">
            <span className="project-detail-kicker">CRM Platform</span>
            <h1>
              CoderLala <span>CRM System</span>
            </h1>
            <p>
              Enterprise-grade CRM system with real-time data processing and 
              scalable microservices architecture.
            </p>
          </div>

          <div className="project-detail-grid">
            {/* Problem Statement */}
            <article className="project-detail-card project-detail-card--wide">
              <h2>Problem Statement</h2>
              <p>
                Businesses needed a robust CRM system to manage customer relationships, 
                track interactions, and process data in real-time with high reliability. 
                The system required seamless integration capabilities, efficient data 
                processing, and the ability to scale with growing business needs.
              </p>
            </article>

            {/* Solution */}
            <article className="project-detail-card project-detail-card--wide">
              <h2>Solution</h2>
              <p>
                Developed a full-stack CRM solution using modern microservices 
                architecture with the following key features:
              </p>
              <ul className="project-detail-list" style={{ marginTop: '0.75rem' }}>
                <li>
                  <strong>Microservices Architecture:</strong> Modular design 
                  allowing independent scaling and deployment of services
                </li>
                <li>
                  <strong>Message Queuing:</strong> RabbitMQ integration for 
                  asynchronous processing and reliable message delivery
                </li>
                <li>
                  <strong>Caching Layer:</strong> Redis implementation for 
                  high-performance data access and session management
                </li>
                <li>
                  <strong>Real-time Processing:</strong> Efficient handling of 
                  customer data and interactions in real-time
                </li>
                <li>
                  <strong>Containerization:</strong> Docker-based deployment 
                  ensuring consistency across environments
                </li>
                <li>
                  <strong>Scalable Infrastructure:</strong> Designed to handle 
                  growing data volumes and user loads
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
                <span>RabbitMQ</span>
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
                <li>Designing and implementing the microservices architecture using Nest.js</li>
                <li>Building the responsive frontend application with Next.js</li>
                <li>Integrating RabbitMQ for asynchronous message processing and task queuing</li>
                <li>Implementing Redis caching strategies for improved performance</li>
                <li>Setting up MongoDB database schemas and optimizing queries</li>
                <li>Containerizing the application stack with Docker</li>
                <li>Configuring CI/CD pipelines and deployment infrastructure</li>
                <li>Implementing monitoring and logging solutions</li>
              </ul>
            </article>

            {/* Outcome & Impact */}
            <article className="project-detail-card project-detail-card--wide">
              <h2>Outcome &amp; Impact</h2>
              <p>
                Delivered a production-ready CRM system with real-time capabilities, 
                improved data processing efficiency, and scalable infrastructure. 
                The system successfully handles customer relationship management, 
                provides reliable message queuing for background tasks, and offers 
                high-performance data access through intelligent caching strategies.
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
                    background: 'linear-gradient(135deg, #3156d3, #4facfe)',
                    padding: '0.7rem 1.4rem'
                  }}
                >
                  View Live Project →
                </Link>
                <Link 
                  href="#" 
                  className="project-btn"
                  style={{ 
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
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