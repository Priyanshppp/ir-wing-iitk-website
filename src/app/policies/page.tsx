import type { Metadata } from "next";

export const metadata: Metadata = { title: "Policies & Guidelines" };

const POLICIES = [
  {
    meta: "01 · Exchange",
    title: "Semester Exchange Policies",
    text: "Official eligibility criteria, credit transfer guidelines, nomination procedures, and academic approval requirements for semester-abroad programmes. Includes CGPA thresholds and course mapping rules.",
  },
  {
    meta: "02 · Internships",
    title: "International Internship Guidelines",
    text: "Institute requirements for summer and semester research visits, industrial internships abroad, and the associated approval workflows. Covers NOC procedures and registration requirements.",
  },
  {
    meta: "03 · Funding",
    title: "Funding & Travel Support",
    text: "Scholarship eligibility, travel grant procedures, insurance requirements, and expense reimbursement policies. Includes both institute schemes and external fellowship programmes.",
  },
] as const;

export default function PoliciesPage() {
  return (
    <div className="content-page">
      <div className="shell">
        <div className="page-header">
          <div className="page-eyebrow">
            <span className="page-eyebrow-dot" aria-hidden="true" />
            Know before you apply
          </div>
          <h1 className="page-title">Policies & guidelines.</h1>
          <p className="page-lead">
            Official institute rules, eligibility requirements, and procedural guidelines
            for international programmes. Each policy entry should link to its authoritative
            source and indicate when it was last verified.
          </p>
        </div>

        <div className="card-grid">
          {POLICIES.map((policy) => (
            <article key={policy.meta} className="editorial-card">
              <span className="card-meta">{policy.meta}</span>
              <h2 className="card-title">{policy.title}</h2>
              <p className="card-text">{policy.text}</p>
              <span
                className="card-link"
                style={{ color: "var(--text-muted)", cursor: "not-allowed" }}
              >
                Official link to be added
              </span>
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
          The policy descriptions on this page are for guidance only. Always consult the
          official institute policy documents and confirm requirements with the relevant
          academic office before proceeding with your application.
        </p>
      </div>
    </div>
  );
}
