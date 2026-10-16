import type { Metadata } from "next";

export const metadata: Metadata = { title: "Meet the Team" };

export default function TeamPage() {
  return (
    <section className="content-page shell">
      <p className="eyebrow">
        <span className="eyebrow-dot" aria-hidden="true" />
        Students helping students
      </p>
      <h1 className="page-title">Meet the IR Wing.</h1>
      <p className="lead">
        We help IITK students discover international programmes, understand requirements,
        and navigate the application process from start to finish.
      </p>

      <div className="empty-panel">
        <span className="card-number">THE TEAM</span>
        <h2>Team profiles will appear here.</h2>
        <p>
          Add names, roles, an approved photo, and contact channel for each member once
          the team has reviewed the information.
        </p>
      </div>
    </section>
  );
}
