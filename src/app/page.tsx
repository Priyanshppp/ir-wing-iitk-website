import Link from "next/link";

const PATH_CARDS = [
  {
    number: "01",
    title: "International Opportunities",
    text: "Exchange programmes, funded research visits, and semester-abroad listings — all in one place.",
    href: "/opportunities",
    label: "Browse opportunities",
  },
  {
    number: "02",
    title: "Application Roadmaps",
    text: "Step-by-step guides from eligibility check to pre-departure, written by students who made it.",
    href: "/roadmaps",
    label: "View roadmaps",
  },
  {
    number: "03",
    title: "Policies & Guidelines",
    text: "Official timelines, credit transfer rules, and programme-specific requirements, verified and linked.",
    href: "/policies",
    label: "Read policies",
  },
] as const;

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero shell" aria-labelledby="hero-title">

        {/* Left: copy */}
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            International Relations Wing &nbsp;·&nbsp; IIT Kanpur
          </p>

          <h1 className="hero-title" id="hero-title">
            Your next move<br />
            <em>goes global.</em>
          </h1>

          <p className="hero-desc">
            Discover international study, research, and internship opportunities —
            and get practical guidance from IITK students who have been there.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/opportunities">
              Explore opportunities
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg>
            </Link>
            <Link className="text-link" href="/roadmaps">
              See the application roadmap
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>

        {/* Right: visual panel — FEP-style geographic backdrop */}
        <div
          className="hero-panel"
          role="img"
          aria-label="Stylised world map connecting IIT Kanpur to international destinations"
        >
          {/* Subtle dot grid */}
          <div className="hero-panel-grid" aria-hidden="true" />

          {/* Arc / route lines */}
          <svg
            className="hero-panel-arcs"
            viewBox="0 0 560 400"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            {/* Latitude arcs (decorative) */}
            <ellipse cx="280" cy="200" rx="270" ry="80"  className="" stroke="rgba(189,217,232,.09)" strokeWidth="1" fill="none" />
            <ellipse cx="280" cy="200" rx="250" ry="140" stroke="rgba(189,217,232,.07)" strokeWidth="1" fill="none" />
            <ellipse cx="280" cy="200" rx="200" ry="180" stroke="rgba(189,217,232,.06)" strokeWidth="1" fill="none" />
            {/* Meridian lines */}
            <line x1="140" y1="20"  x2="160" y2="380" stroke="rgba(189,217,232,.06)" strokeWidth="1" />
            <line x1="280" y1="15"  x2="280" y2="385" stroke="rgba(189,217,232,.07)" strokeWidth="1" />
            <line x1="420" y1="20"  x2="400" y2="380" stroke="rgba(189,217,232,.06)" strokeWidth="1" />

            {/* Route: IITK → Europe */}
            <path
              className="arc-route"
              d="M 80 280 C 160 180 280 130 460 90"
            />
            {/* Route: IITK → East Asia */}
            <path
              className="arc-route"
              d="M 80 280 C 200 310 340 290 480 230"
            />

            {/* Origin dot — IITK */}
            <circle cx="80"  cy="280" r="5" className="dot-origin" />
            <circle cx="80"  cy="280" r="10" fill="none" stroke="rgba(201,168,76,.3)" strokeWidth="1.5" />

            {/* Destination dots */}
            <circle cx="460" cy="90"  r="4" className="dot-dest" />
            <circle cx="480" cy="230" r="4" className="dot-dest" />
            <circle cx="330" cy="150" r="3" fill="rgba(189,217,232,.6)" />
          </svg>

          {/* Map badges */}
          <div className="map-badge map-badge-origin">
            <span className="map-badge-dot map-badge-dot--gold" aria-hidden="true" />
            IIT Kanpur
          </div>
          <div className="map-badge map-badge-dest">
            <span className="map-badge-dot map-badge-dot--blue" aria-hidden="true" />
            Partner universities
          </div>

          {/* Stats footer */}
          <div className="hero-panel-footer" aria-label="Programme statistics">
            <div className="hero-panel-stat">
              <span className="hero-panel-stat-number">40+</span>
              <span className="hero-panel-stat-label">Partner universities</span>
            </div>
            <div className="hero-panel-divider" aria-hidden="true" />
            <div className="hero-panel-stat">
              <span className="hero-panel-stat-number">30+</span>
              <span className="hero-panel-stat-label">Countries reached</span>
            </div>
            <div className="hero-panel-divider" aria-hidden="true" />
            <div className="hero-panel-stat">
              <span className="hero-panel-stat-number">FEP</span>
              <span className="hero-panel-stat-label">Official programme</span>
            </div>
          </div>
        </div>

      </section>

      {/* ── Trust strip ──────────────────────────────────────── */}
      <div className="trust-strip" aria-label="What the IR Wing helps with" role="region">
        <div className="shell trust-inner">
          <div className="trust-items">
            <span className="trust-item">Explore programmes</span>
            <span className="trust-item">Prepare your application</span>
            <span className="trust-item">Learn from peers</span>
            <span className="trust-item">Navigate institute policy</span>
          </div>
        </div>
      </div>

      {/* ── Path cards ───────────────────────────────────────── */}
      <section className="section shell" aria-labelledby="paths-title">
        <div className="section-header">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              A good place to begin
            </p>
            <h2 className="section-title" id="paths-title">Make your global move.</h2>
          </div>
          <p className="section-aside">
            Explore your options, plan your next steps, and find the official guidance you need to move forward.
          </p>
        </div>

        <div className="path-grid">
          {PATH_CARDS.map((card) => (
            <Link className="path-card" href={card.href} key={card.number}>
              <span className="path-card-number">{card.number}</span>
              <span className="path-card-arrow" aria-hidden="true">↗</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <span className="path-card-cta">
                {card.label}
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Story band ───────────────────────────────────────── */}
      <section className="story-band" aria-labelledby="story-title">
        <div className="shell story-inner">
          <div className="story-label" aria-hidden="true">
            <span>From the IR Wing</span>
            <span className="story-label-line" />
          </div>

          <div className="story-body">
            <h2 id="story-title">
              Good advice travels.<br />
              <em>Pass it on.</em>
            </h2>
            <p>
              Read student stories, revisit past sessions, and meet the team helping
              IITK students connect with the world.
            </p>
          </div>

          <div className="story-cta-col">
            <Link className="button button-outline" href="/blogs">
              Read stories
            </Link>
            <Link className="text-link" href="/sessions">
              Past sessions →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quick links ──────────────────────────────────────── */}
      <section className="quick-section shell" aria-labelledby="explore-title">
        <div className="section-header">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Keep exploring
            </p>
            <h2 className="section-title" id="explore-title">Useful at every step.</h2>
          </div>
        </div>
        <nav className="quick-links" aria-label="Additional pages">
          <Link href="/blogs">
            Student stories
            <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/sessions">
            Past sessions
            <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/team">
            Meet the team
            <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </section>
    </>
  );
}
