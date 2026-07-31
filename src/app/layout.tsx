import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Poppins, Syne } from "next/font/google";
import "./globals.css";
import "@/styles/navbar.css";
import "@/styles/hero.css";
import "@/styles/about.css";
import "@/styles/project.css";
import "@/styles/testimonial.css";
import "@/styles/blog.css";
import "@/styles/contact.css";
import "@/styles/footer.css";
import "@/styles/responsive.css";
import PublicFooter from "@/components/Common/PublicFooter";
import SmoothScroll from "@/components/Common/SmoothScroll";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/components/Common/ThemeProvider";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--body-font",
});

const syne = Syne({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--second-font",
});

export const metadata: Metadata = {
  title: "Salman Nizam - Senior Developer",
  description: "Portfolio of Salman Nizam, a senior full-stack developer.",
  openGraph: {
    title: "Salman Nizam - Senior Developer",
    description: "Portfolio of Salman Nizam, a senior full-stack developer.",
    url: "https://salmannizam.com",
    siteName: "Salman Nizam Portfolio",
    images: [
      {
        url: "/image/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://salmannizam.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const themeBootstrap = `
(function () {
  try {
    var storageKey = 'portfolio-theme';
    var versionKey = 'portfolio-theme-v';
    var currentVersion = '2';

    // Migration: first time with v2, reset to dark unless user explicitly saved dark already
    var storedVersion = localStorage.getItem(versionKey);
    if (storedVersion !== currentVersion) {
      // New visitor or migrating from v1 — force dark as default
      localStorage.removeItem(storageKey);
      localStorage.setItem(versionKey, currentVersion);
    }

    var savedTheme = localStorage.getItem(storageKey);
    var theme = savedTheme === 'dark' || savedTheme === 'light'
      ? savedTheme
      : 'dark';

    var root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
  } catch (error) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${syne.variable}`} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <Script id="theme-bootstrap" strategy="beforeInteractive">
          {themeBootstrap}
        </Script>
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
           <Navbar /> 
          <SmoothScroll>{children}</SmoothScroll>
          <PublicFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
