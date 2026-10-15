import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Opportunities" };

const items = [
  ["Exchange programmes", "Study for a semester at a partner university. Add eligibility, partner details, and application windows here."],
  ["Research internships", "Find summer and semester research opportunities abroad, with application guidance and deadlines."],
  ["Funding and fellowships", "Explore scholarships and funded programmes that support international study and research."],
];

export default function OpportunitiesPage() {
  return <section className="content-page shell"><p className="eyebrow">Explore the world</p><h1>International opportunities.</h1><p className="lead">A starting point for IITK students looking to study, research, and collaborate abroad.</p><div className="resource-grid">{items.map(([title, text], i) => <article className="resource-card" key={title}><span className="card-number">0{i + 1}</span><h2>{title}</h2><p>{text}</p><Link href="/roadmaps">How to get started <span>→</span></Link></article>)}</div><p className="content-note">Programme details and deadlines should be checked against the official partner or institute source before publishing.</p></section>;
}
