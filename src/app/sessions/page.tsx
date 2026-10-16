import type { Metadata } from "next";

export const metadata: Metadata = { title: "Past Sessions" };

export default function SessionsPage() {
  return (
    <div className="content-page">
      <div className="shell">
        <div className="page-header">
          <div className="page-eyebrow">
            <span className="page-eyebrow-dot" aria-hidden="true" />
            Learn at your own pace
          </div>
          <h1 className="page-title">Past sessions.</h1>
          <p className="page-lead">
            Recordings and materials from information sessions, application workshops,
            and Q&A panels held in previous semesters. Revisit the guidance at any time.
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
          <span className="card-meta">Session archive</span>
          <h2 className="card-title">Recorded sessions will appear here.</h2>
          <p className="card-text">
            As sessions are recorded and reviewed, they will be published with the date,
            programme focus, slide deck, recording link, and a brief summary of topics
            covered.
          </p>
        </div>
      </div>
    </div>
  );
}
