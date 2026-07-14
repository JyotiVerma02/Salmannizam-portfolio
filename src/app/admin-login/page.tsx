"use client";

import Link from "next/link";
import "@/styles/admin-login.css";

export default function AdminLoginPage() {
  return (
    <main className="admin-login-page">

      <div className="admin-bg-blob blob-1"></div>
      <div className="admin-bg-blob blob-2"></div>

      <div className="admin-login-wrapper">

        {/* LEFT */}

        <section className="admin-left">

          <span className="admin-badge">
            Admin Panel
          </span>

          <h1>
            Welcome
            <br />
            <span>Administrator</span>
          </h1>

          <p>
            Login to manage your portfolio, blogs,
            testimonials, projects and visitor messages from
            one premium dashboard.
          </p>

          <div className="admin-feature-list">

            <div className="feature">
              <span>✓</span>
              Manage Projects
            </div>

            <div className="feature">
              <span>✓</span>
              Manage Blogs
            </div>

            <div className="feature">
              <span>✓</span>
              Manage Testimonials
            </div>

            <div className="feature">
              <span>✓</span>
              Contact Messages
            </div>

          </div>

        </section>

        {/* RIGHT */}

        <section className="admin-card">

          <div className="login-header">

            <div className="logo-circle">
              SN
            </div>

            <h2>Admin Login</h2>

            <p>
              Continue to Dashboard
            </p>

          </div>

          <form>

            <div className="input-group">

              <label>Email</label>

              <input
                type="email"
                placeholder="admin@example.com"
              />

            </div>

            <div className="input-group">

              <label>Password</label>

              <input
                type="password"
                placeholder="••••••••••"
              />

            </div>

            <div className="remember-row">

              <label className="remember">

                <input type="checkbox" />

                Remember me

              </label>

              <button
                type="button"
                className="forgot"
              >
                Forgot?
              </button>

            </div>

            <button
              className="login-btn"
              type="submit"
            >
              Login →
            </button>

          </form>

          <Link
            href="/"
            className="back-home"
          >
            <span>←</span> Back to Portfolio
          </Link>

        </section>

      </div>

    </main>
  );
}