import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "International Opportunities" };

const PROGRAMMES = [
  {
    meta: "01 · Exchange",
    title: "Semester Exchange Programmes",
    text: "Study abroad for a semester or year at one of our 40+ partner universities. Credits transfer back to your IITK degree. Application windows typically open in August and January.",
    link: "/roadmaps",
    linkLabel: "Application roadmap",
  },
  {
    meta: "02 · Research",
    title: "International Research Internships",
    text: "Summer and semester research placements at leading labs and universities worldwide. Ideal for students pursuing postgraduate study or research careers.",
    link: "/roadmaps",
    linkLabel: "How to apply",
  },
  {
    meta: "03 · Funding",
    title: "Scholarships & Fellowships",
    text: "Financial support for international study and research. Includes institute scholarships, government schemes, and university-specific grants.",
    link: "/policies",
    linkLabel: "Funding policies",
  },
] as const;

export default function OpportunitiesPage() {
  return (
    <div className="content-page">
      <div className="shell">
        <div className="page-header">
          <div className="page-eyebrow">
            <span className="page-eyebrow-dot" aria-hidden="true" />
            Explore the world
          </div>
          <h1 className="page-title">International opportunities.</h1>
          <p className="page-lead">
            Your starting point for exchange programmes, research internships, and
            funded international study. Browse the categories below to find the right
            path for your academic and career goals.
          </p>
        </div>

        <div className="card-grid">
          {PROGRAMMES.map((item) => (
            <article key={item.meta} className="editorial-card">
              <span className="card-meta">{item.meta}</span>
              <h2 className="card-title">{item.title}</h2>
              <p className="card-text">{item.text}</p>
              <Link href={item.link} className="card-link">
                {item.linkLabel}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        <p
          style={{
            maxWidth: "var(--text-measure)",
            marginInline: "auto",
            marginTop: "var(--space-xl)",
            color: "var(--text-muted)",
            fontSize: "14px",
            lineHeight: "1.7",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          Programme details, partner lists, and application deadlines should be verified
          against official institute and partner university sources before finalizing
          your application.
        </p>
      </div>
    </div>
  );
}
