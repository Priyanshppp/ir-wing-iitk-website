import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Stories" };
export default function BlogsPage() { return <section className="content-page shell"><p className="eyebrow">Notes from abroad</p><h1>Stories & insights.</h1><p className="lead">Experiences, practical advice, and updates from the IITK international community.</p><article className="story-card"><p className="card-number">STUDENT GUIDE · 5 MIN READ</p><h2>Taking your first step toward an exchange semester</h2><p>A sample article layout for student experiences and practical guidance. Replace this introduction with a reviewed student story.</p><Link href="/blogs/first-steps">Read the story <span>→</span></Link></article></section>; }
