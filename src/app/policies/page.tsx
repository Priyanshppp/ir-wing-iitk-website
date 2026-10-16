import type { Metadata } from "next";

export const metadata: Metadata = { title: "Policies & Programme Rules" };

const policies = [
  {
    number: "01",
    title: "Semester Exchange",
    text: "Official eligibility criteria, credit transfer guidelines, nomination procedures, and academic approval requirements for semester-abroad programmes.",
  },
  {
    number: "02",
    title: "International Internships",
    text: "Institute guidance for international research visits, industrial internships, and the associated formalities and approvals.",
  },
  {
    number: "03",
    title: "Funding & Travel Support",
    text: "Applicable rules for scholarships, travel grants, insurance coverage, and expense reimbursement procedures.",
  },
] as const;

export default function PoliciesPage() {
  return (
    <section className="content-page shell">
      <p className="eyebrow">
        <span className="eyebrow-dot" aria-hidden="true" />
        Know before you apply
      </p>
      <h1 className="page-title">Policies &amp; programme rules.</h1>
      <p className="lead">
        Use this page to find the latest official rules. Each entry should link to its
        source and show when it was last checked.
      </p>

      <div className="resource-grid">
        {policies.map(({ number, title, text }) => (
          <article className="resource-card" key={number}>
            <span className="card-number">{number}</span>
            <h2>{title}</h2>
            <p>{text}</p>
            <span className="content-note">Official source link to be added.</span>
          </article>
        ))}
      </div>

      <p className="content-note">
        Policy text here is placeholder guidance. Replace with verified institute policy and link to the official source before publication.
      </p>
    </section>
  );
}
