import Link from "next/link";
import Image from "next/image";

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
        <Link className="wordmark" href="/" aria-label="International Relations Wing, IIT Kanpur home">
          <Image className="wordmark-image" src="/ir-wing-logo.png" alt="" width={48} height={48} priority />
          <span className="wordmark-text">INTERNATIONAL<br />RELATIONS <b>· IITK</b></span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link className="header-cta" href="/opportunities">Find your path <span aria-hidden="true">↗</span></Link>
        <details className="mobile-menu">
          <summary aria-label="Toggle navigation menu"><span className="menu-icon" aria-hidden="true" /> Menu</summary>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            <Link href="/opportunities">Find your path <span aria-hidden="true">↗</span></Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
