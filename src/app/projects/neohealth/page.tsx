import Link from "next/link";
import PageShell from "@/components/Common/PageShell";

export default function NeoHealthProjectPage() {
  return (
    <PageShell>
      <section className="project-detail-section">
        <div className="project-detail-container">
          <Link href="/projects" className="project-back-link">
            ← Back to Projects
          </Link>

          <div className="project-detail-hero project-detail-hero--green">
            <span className="project-detail-kicker">Healthcare Analytics Dashboard</span>
            <h1>
              NeoHealth <span>Dashboard</span>
            </h1>
            <p>
              Advanced healthcare analytics dashboard for tracking patient metrics, 
              scheduling, and medical resource management in real-time.
            </p>
          </div>

          <div className="project-detail-grid">
            {/* Problem Statement */}
            <article className="project-detail-card project-detail-card--wide">
              <h2>Problem Statement</h2>
              <p>
                Healthcare providers needed a centralized, real-time system to monitor 
                patient metrics, manage scheduling across departments, and ensure 
                HIPAA-compliant data handling. Existing solutions were fragmented, 
                causing delays in patient care and inefficient resource allocation.
              </p>
            </article>

            {/* Solution */}
            <article className="project-detail-card project-detail-card--wide">
              <h2>Solution</h2>
              <p>
                Developed a comprehensive, scalable dashboard using React and Node.js 
                with the following key features:
              </p>
              <ul className="project-detail-list" style={{ marginTop: '0.75rem' }}>
                <li>
                  <strong>Real-time Metrics:</strong> Live tracking of patient vital 
                  signs and recovery progress through WebSocket connections
                </li>
                <li>
                  <strong>Smart Scheduling:</strong> Automated appointment management 
                  and staff allocation based on real-time availability
                </li>
                <li>
                  <strong>HIPAA Compliance:</strong> End-to-end encryption and strict 
                  access controls for all sensitive medical data
                </li>
                <li>
                  <strong>Resource Management:</strong> Predictive analytics for 
                  tracking medical supplies and equipment availability
                </li>
                <li>
                  <strong>Data Visualization:</strong> Interactive charts and reports 
                  for long-term patient health trends
                </li>
              </ul>
            </article>

            {/* Tech Stack */}
            <article className="project-detail-card">
              <h2>Tech Stack</h2>
              <div className="tech-list project-detail-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>PostgreSQL</span>
                <span>GraphQL</span>
                <span>AWS</span>
                <span>Redis</span>
              </div>
            </article>

            {/* Role & Contribution */}
            <article className="project-detail-card">
              <h2>Role &amp; Contribution</h2>
              <p style={{ marginBottom: '0.75rem' }}>
                As Lead Frontend Developer, I was responsible for:
              </p>
              <ul className="project-detail-list">
                <li>Designing the responsive dashboard interface using React and Tailwind CSS</li>
                <li>Integrating GraphQL for optimized data fetching and state management</li>
                <li>Building real-time visualization components with D3.js</li>
                <li>Implementing secure authentication and role-based access control</li>
                <li>Optimizing application performance for large datasets</li>
              </ul>
            </article>

            {/* Outcome & Impact */}
            <article className="project-detail-card project-detail-card--wide">
              <h2>Outcome &amp; Impact</h2>
              <p>
                Successfully deployed a high-performance analytics dashboard that 
                improved clinical workflow efficiency by 35% and reduced scheduling 
                conflicts. The platform provides doctors and administrators with 
                immediate access to critical patient data, enhancing overall care quality.
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
                    background: 'linear-gradient(135deg, #1b9c50, #2ed573)',
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
