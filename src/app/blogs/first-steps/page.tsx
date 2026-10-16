import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Taking your first step toward an exchange semester" };

export default function BlogArticlePage() {
  return (
    <article className="article-page shell">
      <Link className="back-link" href="/blogs">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        All stories
      </Link>

      <p className="eyebrow">
        <span className="eyebrow-dot" aria-hidden="true" />
        Student guide · Sample article
      </p>

      <h1 className="page-title">Taking your first step toward an exchange semester.</h1>

      <p className="lead">
        A clear application starts with a little research and a calendar. This sample
        article shows how student guidance can be presented on this site.
      </p>

      <div className="article-body">
        <h2>Start with the programme</h2>
        <p>
          Read the official programme page, confirm that you meet the current eligibility
          criteria, and note the application deadline. Requirements can vary by host university
          and year, so always check the source directly.
        </p>

        <h2>Ask early</h2>
        <p>
          Talk with your academic advisor and the relevant institute office before committing
          to a plan. Keep a list of questions about credit transfer, funding options, and
          required approvals.
        </p>

        <h2>Build a timeline</h2>
        <p>
          Work backward from the application deadline. Leave time to request official
          documents, write your statement of purpose, get it reviewed, and assemble the
          complete application.
        </p>

        <p className="content-note">
          Sample content for layout demonstration only. Replace with a fact-checked student
          contribution. Obtain consent before publishing any personal details.
        </p>
      </div>
    </article>
  );
}
