import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "International Relations Wing | IIT Kanpur",
    template: "%s | IR Wing IITK",
  },
  description:
    "Discover international study, research, and internship opportunities with practical guidance from IIT Kanpur's International Relations Wing.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerifDisplay.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>

        <footer className="site-footer">
          <div className="shell footer-inner">
            {/* Brand */}
            <div className="footer-brand">
              <span className="footer-brand-name">International Relations Wing</span>
              <span className="footer-brand-sub">IIT Kanpur · Student guidance &amp; global opportunities</span>
            </div>

            <div className="footer-divider" aria-hidden="true" />

            {/* Social icons */}
            <nav
              className="footer-socials"
              aria-label="IR Wing social media"
            >
              {/* Instagram */}
              <a
                href="https://www.instagram.com/iitkinternationalrelations/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Follow IR Wing IITK on Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8ZM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/international-relations-wing-iitk/?originalSubdomain=in"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Connect with IR Wing IITK on LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5ZM.25 8.5h4.5V21H.25V8.5ZM8.5 8.5h4.31v1.72h.06c.6-1.14 2.07-2.34 4.26-2.34C21.57 7.88 22 10.8 22 14.5V21h-4.5v-5.73c0-1.37-.03-3.13-1.91-3.13-1.91 0-2.2 1.49-2.2 3.03V21H9V8.5h-.5Z" />
                </svg>
              </a>
            </nav>

            <div className="footer-divider" aria-hidden="true" />

            {/* Contact */}
            <a className="footer-contact" href="mailto:ir@iitk.ac.in">
              Contact
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
