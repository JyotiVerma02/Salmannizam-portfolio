"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import "@/styles/admin-login.css";

type LoginResponse = {
  message?: string;
};

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Email is required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("Enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Password is required.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: trimmedEmail, password }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as LoginResponse;
        setError(data.message || "Incorrect email or password.");
        return;
      }

      router.replace("/admin/dashboard");
      router.refresh();
    } catch {
      setError("Unable to login right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="admin-login-page admin-login-page-with-navbar">
        <div className="admin-bg-blob blob-1" />
        <div className="admin-bg-blob blob-2" />

        <div className="admin-login-wrapper">
          <section className="admin-left">
            <span className="admin-badge">Admin Panel</span>

            <h1>
              Welcome
              <br />
              <span>Administrator</span>
            </h1>

            <p>
              Login to manage your portfolio, blogs, testimonials, projects and
              visitor messages from one premium dashboard.
            </p>

            <div className="admin-feature-list">
              <div className="feature">
                <span>01</span>
                Manage Projects
              </div>
              <div className="feature">
                <span>02</span>
                Manage Blogs
              </div>
              <div className="feature">
                <span>03</span>
                Manage Testimonials
              </div>
              <div className="feature">
                <span>04</span>
                Contact Messages
              </div>
            </div>
          </section>

          <section className="admin-card">
            <div className="login-header">
              <div className="logo-circle">SN</div>
              <h2>Admin Login</h2>
              <p>Continue to Dashboard</p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="input-group">
                <label htmlFor="admin-email">Email</label>
                <input
                  id="admin-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="admin@example.com"
                  autoComplete="email"
                  disabled={loading}
                />
              </div>

              <div className="input-group">
                <label htmlFor="admin-password">Password</label>
                <input
                  id="admin-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="**********"
                  autoComplete="current-password"
                  disabled={loading}
                />
              </div>

              {error ? <p className="login-error" role="alert">{error}</p> : null}

              <button className="login-btn" type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login ->"}
              </button>
            </form>

            <Link href="/" className="back-home">
              <span>&lt;-</span> Back to Portfolio
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
