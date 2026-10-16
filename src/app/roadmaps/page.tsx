import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Application Roadmaps" };

const STEPS = [
  {
    number: "1",
    title: "Research and explore",
    text: "Browse available programmes, check partner university offerings, and understand duration, eligibility, and credit transfer requirements. Start this process at least 6-9 months before your intended departure.",
  },
  {
    number: "2",
    title: "Check eligibility & prepare documents",
    text: "Verify CGPA requirements, language proficiency needs, and course prerequisites. Begin collecting transcripts, recommendation letters, and preparing your statement of purpose. Speak with your academic advisor about credit approvals.",
  },
  {
    number: "3",
    title: "Submit your application",
    text: "Follow the official application process for your chosen programme. Submit all required materials before the deadline — typically in September for spring semester, and February for fall semester placements.",
  },
  {
    number: "4",
    title: "Complete formalities & depart",
    text: "Once accepted, complete institute clearances, arrange travel documentation (visa, insurance), attend pre-departure orientation sessions, and finalize housing and logistics.",
  },
] as const;

export default function RoadmapsPage() {
  return (
    <div className="content-page">
      <div className="shell">
        <div className="page-header">
          <div className="page-eyebrow">
            <span className="page-eyebrow-dot" aria-hidden="true" />
            A clear path forward
          </div>
          <h1 className="page-title">Application roadmaps.</h1>
          <p className="page-lead">
            Follow these steps to navigate the application process from start to finish.
            Programme-specific checklists and detailed guides will be added as they are
            verified with current requirements.
          </p>
        </div>

        <div className="timeline">
          {STEPS.map((step) => (
            <div key={step.number} className="timeline-item">
              <div className="timeline-marker">{step.number}</div>
              <div>
                <h2 className="timeline-title">{step.title}</h2>
                <p className="timeline-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "var(--space-xl)" }}>
          <Link className="hero-cta" href="/opportunities">
            Browse opportunities
          </Link>
        </div>
      </div>
    </div>
  );
}
