import type { Metadata } from "next";

export const metadata: Metadata = { title: "Past Sessions" };

export default function SessionsPage() {
  return (
    <section className="content-page shell">
      <p className="eyebrow">
        <span className="eyebrow-dot" aria-hidden="true" />
        Learn at your own pace
      </p>
      <h1 className="page-title">Past sessions.</h1>
      <p className="lead">
        Revisit information sessions, application workshops, and student Q&amp;As from previous semesters.
      </p>

      <div className="empty-panel">
        <span className="card-number">SESSION ARCHIVE</span>
        <h2>Session recordings and materials will appear here.</h2>
        <p>
          Add the date, programme name, slide deck, recording link, and a short summary for
          each session once materials have been reviewed.
        </p>
      </div>
    </section>
  );
}
