import Link from "next/link";

const links = [
  ["Opportunities", "/opportunities"],
  ["Roadmaps", "/roadmaps"],
  ["Policies", "/policies"],
  ["Stories", "/blogs"],
  ["Past sessions", "/sessions"],
  ["Team", "/team"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="IR Wing IIT Kanpur home"><span className="wordmark-icon">IR</span><span>INTERNATIONAL<br />RELATIONS <b>· IITK</b></span></Link>
        <nav className="main-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link className="header-cta" href="/opportunities">Find your path <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}
