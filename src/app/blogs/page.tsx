import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Stories & Insights" };

export default function BlogsPage() {
  return (
    <div className="content-page">
      <div className="shell">
        <div className="page-header">
          <div className="page-eyebrow">
            <span className="page-eyebrow-dot" aria-hidden="true" />
            Notes from abroad
          </div>
          <h1 className="page-title">Student stories.</h1>
          <p className="page-lead">
            First-hand experiences, practical advice, and reflections from IITK students
            who have studied, researched, and lived abroad. Written by students, reviewed
            for accuracy, published with consent.
          </p>
        </div>

        <div className="card-grid">
          <Link href="/blogs/first-steps" className="editorial-card">
            <span className="card-meta">Student guide · 5 min read</span>
            <h2 className="card-title">
              Taking your first step toward an exchange semester
            </h2>
            <p className="card-text">
              A clear application begins with research and a realistic timeline. This
              guide walks through the early preparation phase, from programme selection
              to document gathering.
            </p>
            <span className="card-link">
              Read the story
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
            </span>
          </Link>

          {/* Placeholder for future stories */}
          <div
            className="editorial-card"
            style={{ opacity: 0.5, pointerEvents: "none" }}
          >
            <span className="card-meta">Coming soon</span>
            <h2 className="card-title">More student stories</h2>
            <p className="card-text">
              Additional stories and insights will be added as they are written,
              reviewed, and approved for publication.
            </p>
          </div>

          <div
            className="editorial-card"
            style={{ opacity: 0.5, pointerEvents: "none" }}
          >
            <span className="card-meta">Coming soon</span>
            <h2 className="card-title">Programme spotlights</h2>
            <p className="card-text">
              Detailed looks at specific exchange programmes and research opportunities,
              with application tips and student experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
