import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-crimson-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "International Relations Wing | IIT Kanpur",
    template: "%s | IR Wing IITK",
  },
  description:
    "Discover international study, research, and internship opportunities. Practical guidance from IIT Kanpur's International Relations Wing.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonPro.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>

        <footer className="site-footer">
          <div className="shell footer-inner">
            {/* About column */}
            <div>
              <div className="footer-brand-name">International Relations Wing</div>
              <p className="footer-brand-tagline">
                IIT Kanpur's hub for international study, research, and exchange programmes.
                Student-run guidance for global opportunities.
              </p>
              <div className="footer-social" style={{ marginTop: "var(--space-md)" }}>
                <a
                  href="https://www.instagram.com/iitkinternationalrelations/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/international-relations-wing-iitk/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick links column */}
            <div>
              <div className="footer-section-title">Navigate</div>
              <ul className="footer-links">
                <li><a href="/opportunities">Opportunities</a></li>
                <li><a href="/roadmaps">Roadmaps</a></li>
                <li><a href="/policies">Policies</a></li>
                <li><a href="/blogs">Stories</a></li>
                <li><a href="/sessions">Past Sessions</a></li>
                <li><a href="/team">Team</a></li>
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <div className="footer-section-title">Get in touch</div>
              <ul className="footer-links">
                <li>
                  <a href="mailto:ir@iitk.ac.in">ir@iitk.ac.in</a>
                </li>
                <li>
                  <a href="https://iitk.ac.in" target="_blank" rel="noreferrer">
                    IIT Kanpur
                  </a>
                </li>
                <li>
                  <a href="https://iriitk.com/fep/" target="_blank" rel="noreferrer">
                    FEP Portal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="shell footer-copyright">
            © {new Date().getFullYear()} International Relations Wing, IIT Kanpur. 
            Maintained by students, for students.
          </div>
        </footer>
      </body>
    </html>
  );
}
