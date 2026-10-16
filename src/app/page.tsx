import Link from "next/link";
import Image from "next/image";

const PATH_CARDS = [
  {
    meta: "01 · Explore",
    title: "International Opportunities",
    text: "Exchange programmes, research internships, and semester-abroad options. Browse verified partner universities and application timelines.",
    href: "/opportunities",
    cta: "View opportunities",
  },
  {
    meta: "02 · Plan",
    title: "Application Roadmaps",
    text: "Step-by-step guides from eligibility check to departure. Written by students who navigated the process successfully.",
    href: "/roadmaps",
    cta: "See the roadmap",
  },
  {
    meta: "03 · Learn",
    title: "Policies & Guidelines",
    text: "Official institute requirements, credit transfer rules, and funding options. Linked to verified sources, updated regularly.",
    href: "/policies",
    cta: "Read policies",
  },
] as const;

export default function Home() {
  return (
    <>
      {/* ━━━ Hero ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="hero shell" aria-labelledby="hero-title">
        {/* Badge logo watermark */}
        <Image
          className="hero-badge-watermark"
          src="/ir-wing-logo.png"
          alt=""
          width={280}
          height={280}
          aria-hidden="true"
          priority
        />

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            International Relations Wing · IIT Kanpur
          </div>

          <h1 className="hero-title" id="hero-title">
            Your gateway to<br />global learning.
          </h1>

          <p className="hero-subtitle">
            Discover international exchange programmes, research opportunities, and
            practical guidance — from students who have walked the path before you.
          </p>

          <Link className="hero-cta" href="/opportunities">
            Explore opportunities
          </Link>

          {/* Stats */}
          <div className="hero-stats" aria-label="Programme highlights">
            <div className="hero-stat">
              <span className="hero-stat-number">40+</span>
              <span className="hero-stat-label">Partner universities</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">30+</span>
              <span className="hero-stat-label">Countries reached</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">FEP</span>
              <span className="hero-stat-label">Official programme</span>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Ornamental divider ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="shell section-divider" aria-hidden="true">
        <span className="section-divider-line" />
        <span className="section-divider-ornament">◆</span>
        <span className="section-divider-line" />
      </div>

      {/* ━━━ Path cards section ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section section--cream" aria-labelledby="paths-title">
        <div className="shell">
          <div className="section-header">
            <div className="section-eyebrow">
              <span className="section-eyebrow-dot" aria-hidden="true" />
              Where to begin
            </div>
            <h2 className="section-title" id="paths-title">
              Make your move.
            </h2>
            <p className="section-subtitle">
              Three clear steps to take you from curiosity to confirmed acceptance.
              Start here, move forward with confidence.
            </p>
          </div>

          <div className="card-grid">
            {PATH_CARDS.map((card) => (
              <Link
                key={card.meta}
                href={card.href}
                className="editorial-card"
              >
                <span className="card-meta">{card.meta}</span>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-text">{card.text}</p>
                <span className="card-link">
                  {card.cta}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Ornamental divider ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="shell section-divider" aria-hidden="true">
        <span className="section-divider-line" />
        <span className="section-divider-ornament">◆</span>
        <span className="section-divider-line" />
      </div>

      {/* ━━━ Stories section ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section" aria-labelledby="stories-title">
        <div className="shell">
          <div className="section-header">
            <div className="section-eyebrow">
              <span className="section-eyebrow-dot" aria-hidden="true" />
              From the community
            </div>
            <h2 className="section-title" id="stories-title">
              Student voices.
            </h2>
            <p className="section-subtitle">
              Read first-hand experiences, practical advice, and reflections from
              IITK students who have studied, researched, and connected abroad.
            </p>
          </div>

          <div className="card-grid">
            <Link href="/blogs" className="editorial-card">
              <span className="card-meta">Student guide</span>
              <h3 className="card-title">
                Taking your first step toward an exchange semester
              </h3>
              <p className="card-text">
                A clear application starts with research and a timeline. Learn how
                to approach the process with confidence.
              </p>
              <span className="card-link">
                Read the story
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link href="/sessions" className="editorial-card">
              <span className="card-meta">Archive</span>
              <h3 className="card-title">
                Past information sessions and workshops
              </h3>
              <p className="card-text">
                Revisit recorded guidance sessions, Q&A panels, and application
                workshops from previous semesters.
              </p>
              <span className="card-link">
                View sessions
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link href="/team" className="editorial-card">
              <span className="card-meta">About us</span>
              <h3 className="card-title">
                Meet the IR Wing team
              </h3>
              <p className="card-text">
                Students helping students. Learn about the team behind the
                guidance, resources, and community support.
              </p>
              <span className="card-link">
                Meet the team
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
