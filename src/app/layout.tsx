import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "International Relations Wing | IIT Kanpur",
    template: "%s | IR Wing IITK",
  },
  description:
    "Explore international opportunities, exchange roadmaps, guidance, and stories from the International Relations Wing at IIT Kanpur.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <SiteHeader />
        <main>{children}</main>
        <footer className="site-footer">
          <div className="shell footer-inner">
            <p className="footer-brand">IR <span>·</span> IIT Kanpur</p>
            <p>International Relations Wing · Student guidance and global opportunities</p>
            <nav className="footer-socials" aria-label="International Relations Wing social media">
              <a href="https://www.instagram.com/iitkinternationalrelations/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/international-relations-wing-iitk/?originalSubdomain=in" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.1 0H13v1.6h.1A4.1 4.1 0 0 1 16.8 8c3.9 0 4.6 2.5 4.6 5.8V21h-3.8v-6.4c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9.2V9h.2Z" /></svg>
              </a>
            </nav>
            <a className="footer-contact" href="mailto:ir@iitk.ac.in">Contact the team ↗</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
