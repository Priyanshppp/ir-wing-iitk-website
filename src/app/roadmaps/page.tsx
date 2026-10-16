import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Roadmaps & Guidelines" };

const steps = [
  {
    step: "01",
    title: "Explore programmes",
    text: "Browse available exchange programmes and research internships. Check partner universities, duration, and current eligibility requirements.",
  },
  {
    step: "02",
    title: "Prepare your documents",
    text: "Collect transcripts, a statement of purpose, recommendation letters, and speak with your academic advisor about credit transfer.",
  },
  {
    step: "03",
    title: "Submit your application",
    text: "Follow the official application instructions for your programme. Submit all materials before the stated deadline.",
  },
  {
    step: "04",
    title: "Get ready to depart",
    text: "Complete institute formalities, arrange travel documentation, and attend pre-departure orientation sessions offered by the IR Wing.",
  },
] as const;

export default function RoadmapsPage() {
  return (
    <section className="content-page shell">
      <p className="eyebrow">
        <span className="eyebrow-dot" aria-hidden="true" />
        A clear path forward
      </p>
      <h1 className="page-title">Roadmaps &amp; guidelines.</h1>
      <p className="lead">
        Understand the process before you begin. Follow the steps below.
        Programme-specific checklists and timelines will be added as they are verified.
      </p>

      <div className="timeline">
        {steps.map(({ step, title, text }) => (
          <article className="timeline-item" key={step}>
            <span>{step}</span>
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>

      <Link className="button button-primary" href="/opportunities">
        Browse opportunities
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
      </Link>
    </section>
  );
}
