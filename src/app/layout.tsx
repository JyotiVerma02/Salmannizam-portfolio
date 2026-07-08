import type { Metadata } from "next";
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
import Footer from "@/app/footer/page";
import SmoothScroll from "@/components/Common/SmoothScroll";

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
  title: "Salman Nizam | Portfolio",
  description: "Portfolio website showcasing projects, experience, and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
