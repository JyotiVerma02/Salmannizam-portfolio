import type { Metadata } from "next";
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
};

const themeBootstrap = `
(function () {
  try {
    var storageKey = 'portfolio-theme';
    var savedTheme = localStorage.getItem(storageKey);
    var theme = savedTheme === 'dark' || savedTheme === 'light'
      ? savedTheme
      : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

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
          <SmoothScroll>{children}</SmoothScroll>
          <PublicFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
