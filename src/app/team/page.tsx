import type { Metadata } from "next";

export const metadata: Metadata = { title: "Meet the Team" };

export default function TeamPage() {
  return (
    <div className="content-page">
      <div className="shell">
        <div className="page-header">
          <div className="page-eyebrow">
            <span className="page-eyebrow-dot" aria-hidden="true" />
            Students helping students
          </div>
          <h1 className="page-title">Meet the IR Wing.</h1>
          <p className="page-lead">
            We are IITK students who help our peers discover international opportunities,
            understand programme requirements, and navigate the application process from
            start to finish.
          </p>
        </div>

        <div
          className="editorial-card"
          style={{
            maxWidth: "720px",
            marginInline: "auto",
            opacity: 0.7,
          }}
        >
          <span className="card-meta">The team</span>
          <h2 className="card-title">Team profiles will appear here.</h2>
          <p className="card-text">
            Once the team has reviewed and approved the content, this page will include
            names, roles, a brief bio for each member, and appropriate contact channels.
            Photos will only be published with explicit consent.
          </p>
        </div>
      </div>
    </div>
  );
}
