import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Opportunities", href: "/opportunities" },
  { label: "Roadmaps",      href: "/roadmaps"      },
  { label: "Policies",      href: "/policies"      },
  { label: "Stories",       href: "/blogs"         },
  { label: "Sessions",      href: "/sessions"      },
  { label: "Team",          href: "/team"          },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">

        {/* ── Wordmark ─────────────────────────────────────── */}
        <Link
          className="wordmark"
          href="/"
          aria-label="International Relations Wing, IIT Kanpur — home"
        >
          <Image
            className="wordmark-image"
            src="/ir-wing-logo.png"
            alt="IR Wing IIT Kanpur logo — navy globe with laurel wreath"
            width={44}
            height={44}
            priority
          />
          <span className="wordmark-text">
            International Relations<br />
            <b>IIT Kanpur</b>
          </span>
        </Link>

        {/* ── Desktop nav ──────────────────────────────────── */}
        <nav className="main-nav" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>

        {/* ── Desktop CTA ──────────────────────────────────── */}
        <Link className="header-cta" href="/opportunities">
          Find your path
          <span className="header-cta-icon" aria-hidden="true">↗</span>
        </Link>

        {/* ── Mobile hamburger ─────────────────────────────── */}
        <details className="mobile-menu">
          <summary aria-label="Toggle navigation menu">
            <span className="menu-icon" aria-hidden="true" />
            Menu
          </summary>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
            <Link href="/opportunities">
              Find your path ↗
            </Link>
          </nav>
        </details>

      </div>
    </header>
  );
}
