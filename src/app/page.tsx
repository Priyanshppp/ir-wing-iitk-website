import Link from "next/link";

const featuredLinks = [
  { number: "01", title: "Find an opportunity", text: "Explore exchange programmes, internships, and research visits.", href: "/opportunities", label: "Browse opportunities" },
  { number: "02", title: "Plan your application", text: "Follow a clear roadmap from eligibility to your departure.", href: "/roadmaps", label: "View roadmaps" },
  { number: "03", title: "Get the details right", text: "Read programme policies, timelines, and practical guidance.", href: "/policies", label: "Read policies" },
];

export default function Home() {
  return (
    <>
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> International Relations Wing · IIT Kanpur</p>
          <h1 id="hero-title">Your next chapter<br /><span>has no borders.</span></h1>
          <p className="hero-description">Find international opportunities, understand the process, and learn from students who have been there.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/opportunities">Explore opportunities <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/roadmaps">See the application roadmap <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="world-card" aria-label="A graphic showing connections between IIT Kanpur and universities around the world">
          <div className="world-grid" />
          <svg className="route-lines" viewBox="0 0 600 420" role="img" aria-hidden="true">
            <path d="M62 276 C155 235 136 102 270 136 S407 267 520 102" />
            <path d="M62 276 C178 337 295 335 370 231 S442 149 520 102" />
            <path d="M270 136 C308 80 384 82 520 102" />
            <circle cx="62" cy="276" r="8" className="route-origin" /><circle cx="270" cy="136" r="6" /><circle cx="370" cy="231" r="6" /><circle cx="520" cy="102" r="8" className="route-destination" />
          </svg>
          <div className="map-label map-label-home"><span className="map-dot" /> IIT Kanpur</div>
          <div className="map-label map-label-world"><span className="map-dot map-dot-bright" /> The world</div>
          <div className="world-caption"><span>GO FURTHER</span><span>01 / 06</span></div>
        </div>
        <div className="hero-index"><span>01</span><span className="index-line" /><span>GLOBAL LEARNING, MADE CLEAR</span></div>
      </section>

      <section className="trust-strip" aria-label="What the IR Wing helps with">
        <div className="shell trust-inner"><span>Explore programmes</span><span className="trust-mark">✳</span><span>Prepare with confidence</span><span className="trust-mark">✳</span><span>Learn from your peers</span></div>
      </section>

      <section className="section shell" aria-labelledby="start-title">
        <div className="section-heading">
          <div><p className="eyebrow">A good place to begin</p><h2 id="start-title">Make your global move.</h2></div>
          <p className="section-aside">Whether you are just exploring or ready to apply, start with the step that fits you.</p>
        </div>
        <div className="path-grid">
          {featuredLinks.map((item) => (
            <Link className="path-card" href={item.href} key={item.number}>
              <span className="card-number">{item.number}</span><span className="card-arrow" aria-hidden="true">↗</span>
              <h3>{item.title}</h3><p>{item.text}</p><span className="card-link">{item.label} <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="story-band">
        <div className="shell story-inner"><p className="eyebrow">From the IR Wing</p><h2>Good advice travels.<br /><span>Pass it on.</span></h2><div><p>Read student stories, revisit past sessions, and meet the team helping IITK students connect with the world.</p><Link className="button button-outline" href="/blogs">Explore stories <span aria-hidden="true">↗</span></Link></div></div>
      </section>

      <section className="section shell compact-section">
        <div className="section-heading"><div><p className="eyebrow">Keep exploring</p><h2>Useful at every step.</h2></div></div>
        <div className="quick-links"><Link href="/blogs">Student stories <span>↗</span></Link><Link href="/sessions">Past sessions <span>↗</span></Link><Link href="/team">Meet the team <span>↗</span></Link></div>
      </section>
    </>
  );
}
