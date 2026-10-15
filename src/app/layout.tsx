import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

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
      <body>
        <SiteHeader />
        <main>{children}</main>
        <footer className="site-footer">
          <div className="shell footer-inner">
            <p className="footer-brand">IR <span>·</span> IIT Kanpur</p>
            <p>International Relations Wing · Student guidance and global opportunities</p>
            <a href="mailto:ir@iitk.ac.in">Contact the team ↗</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
