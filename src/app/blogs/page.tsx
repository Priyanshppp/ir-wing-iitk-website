import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Stories & Insights" };

export default function BlogsPage() {
  return (
    <section className="content-page shell">
      <p className="eyebrow">
        <span className="eyebrow-dot" aria-hidden="true" />
        Notes from abroad
      </p>
      <h1 className="page-title">Stories &amp; insights.</h1>
      <p className="lead">
        Experiences, practical advice, and updates from the IITK international community.
        Written by students, for students.
      </p>

      <article className="story-card">
        <span className="card-number">STUDENT GUIDE · 5 MIN READ</span>
        <h2>Taking your first step toward an exchange semester</h2>
        <p>
          A sample article layout for student experiences and practical guidance.
          Replace this introduction with a reviewed, approved student story before publishing.
        </p>
        <Link href="/blogs/first-steps">
          Read the story <span aria-hidden="true">→</span>
        </Link>
      </article>
    </section>
  );
}
