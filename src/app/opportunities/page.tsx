import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Opportunities" };

const items = [
  {
    number: "01",
    title: "Exchange Programmes",
    text: "Study for a semester at a partner university abroad. Eligibility criteria, partner details, and application windows will be listed here.",
    link: "/roadmaps",
    linkLabel: "How to get started",
  },
  {
    number: "02",
    title: "Research Internships",
    text: "Summer and semester research opportunities at international labs and universities, with application guidance and deadlines.",
    link: "/roadmaps",
    linkLabel: "Application roadmap",
  },
  {
    number: "03",
    title: "Funding & Fellowships",
    text: "Scholarships and funded programmes that support international study and research for IITK students.",
    link: "/policies",
    linkLabel: "View policies",
  },
] as const;

export default function OpportunitiesPage() {
  return (
    <section className="content-page shell">
      <p className="eyebrow">
        <span className="eyebrow-dot" aria-hidden="true" />
        Explore the world
      </p>
      <h1 className="page-title">International opportunities.</h1>
      <p className="lead">
        A starting point for IITK students looking to study, research, and collaborate abroad.
        Browse the categories below and follow the roadmap to begin your application.
      </p>

      <div className="resource-grid">
        {items.map(({ number, title, text, link, linkLabel }) => (
          <article className="resource-card" key={number}>
            <span className="card-number">{number}</span>
            <h2>{title}</h2>
            <p>{text}</p>
            <Link href={link}>
              {linkLabel} <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>

      <p className="content-note">
        Programme details and deadlines should be checked against the official partner or institute source before publishing.
      </p>
    </section>
  );
}
