import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Taking your first step toward an exchange semester",
};

export default function BlogArticlePage() {
  return (
    <div className="content-page">
      <div className="shell">
        <Link
          href="/blogs"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "var(--space-xl)",
            color: "var(--burgundy)",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
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
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          All stories
        </Link>

        <div className="page-header">
          <div className="page-eyebrow">
            <span className="page-eyebrow-dot" aria-hidden="true" />
            Student guide · Sample article
          </div>
          <h1 className="page-title">
            Taking your first step toward an exchange semester.
          </h1>
          <p className="page-lead">
            A successful application starts with clarity: know what you want, understand
            the requirements, and build a timeline that leaves room for the unexpected.
            This guide covers the early preparation phase.
          </p>
        </div>

        <div
          style={{
            maxWidth: "var(--text-measure)",
            marginInline: "auto",
            marginTop: "var(--space-xl)",
          }}
        >
          <h2
            style={{
              marginBottom: "var(--space-sm)",
              fontFamily: "var(--font-serif)",
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: 1.3,
              color: "var(--warm-white)",
            }}
          >
            Start with the programme
          </h2>
          <p
            style={{
              marginBottom: "var(--space-lg)",
              color: "var(--text-primary)",
              fontSize: "16px",
              lineHeight: 1.75,
            }}
          >
            Read the official programme description, verify the current eligibility
            criteria, and note the application deadline. Requirements can shift between
            years, and partner universities may adjust their offerings, so always check
            the primary source rather than relying on secondhand information.
          </p>

          <h2
            style={{
              marginBottom: "var(--space-sm)",
              fontFamily: "var(--font-serif)",
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: 1.3,
              color: "var(--warm-white)",
            }}
          >
            Ask questions early
          </h2>
          <p
            style={{
              marginBottom: "var(--space-lg)",
              color: "var(--text-primary)",
              fontSize: "16px",
              lineHeight: 1.75,
            }}
          >
            Talk with your academic advisor, the relevant institute office, and students
            who have completed similar programmes. Keep a running list of questions about
            credit transfer, funding options, visa procedures, and academic approvals.
            Address these well before the application deadline.
          </p>

          <h2
            style={{
              marginBottom: "var(--space-sm)",
              fontFamily: "var(--font-serif)",
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: 1.3,
              color: "var(--warm-white)",
            }}
          >
            Build a realistic timeline
          </h2>
          <p
            style={{
              marginBottom: "var(--space-md)",
              color: "var(--text-primary)",
              fontSize: "16px",
              lineHeight: 1.75,
            }}
          >
            Work backward from the application deadline. Leave buffer time for requesting
            official transcripts, securing recommendation letters, drafting and revising
            your statement of purpose, and assembling supporting documents. Assume each
            step will take longer than you expect.
          </p>

          <p
            style={{
              marginTop: "var(--space-xl)",
              paddingTop: "var(--space-lg)",
              borderTop: "1px solid var(--line)",
              color: "var(--text-muted)",
              fontSize: "14px",
              lineHeight: 1.7,
              fontStyle: "italic",
            }}
          >
            This article serves as a sample layout for student-contributed content.
            Replace with fact-checked guidance from actual student experiences. Obtain
            written consent before publishing personal details, names, or identifying
            information.
          </p>
        </div>
      </div>
    </div>
  );
}
