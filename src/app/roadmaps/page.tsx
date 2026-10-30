import type { Metadata } from "next";
import Image from "next/image";
import styles from "./roadmaps.module.css";
import {
  MapLocationIcon,
  ArrowsRotateIcon,
  BriefcaseIcon,
  FlaskIcon,
  DiagramProjectIcon,
  GraduationCapIcon,
  ClockIcon,
  BinocularsIcon,
  SearchIcon,
  PaperPlaneIcon,
  GlobeIcon,
  FlagCheckeredIcon,
  ToolsIcon,
  MicroscopeIcon,
  SeedlingIcon,
  CrosshairsIcon,
  LandmarkIcon,
  LocationPinIcon,
  LightbulbIcon,
  TriangleAlertIcon,
  StarIcon,
  CheckIcon,
  EnvelopeIcon,
  PhoneIcon,
  InstagramIcon,
  ExternalLinkIcon,
  PlusIcon,
  ListCheckIcon,
} from "./roadmap-icons";

export const metadata: Metadata = {
  title: "Program Roadmaps — IR Wing, IIT Kanpur",
  description:
    "Detailed, month-by-month action plans to help IITK students navigate international opportunities — from semester exchanges to higher studies.",
};

const PARTNER_UNIVERSITIES = [
  {
    name: "ETH Zürich",
    country: "Switzerland · Europe",
    image:
      "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/ETH_Zurich_from_Polyterrace.jpg&width=480",
    alt: "ETH Zürich campus",
  },
  {
    name: "TU Munich",
    country: "Germany · Europe",
    image:
      "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Technische_Universit%C3%A4t_M%C3%BCnchen.jpg&width=480",
    alt: "TU Munich campus",
  },
  {
    name: "NUS Singapore",
    country: "Singapore · Asia",
    image:
      "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/University_Hall%2C_National_University_of_Singapore_-_20070125.jpg&width=480",
    alt: "NUS Singapore campus",
  },
  {
    name: "KTH Royal Institute",
    country: "Sweden · Europe",
    image:
      "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Kungliga_Tekniska_H%C3%B6gskolan_KTH4.jpg&width=480",
    alt: "KTH Royal Institute campus",
  },
  {
    name: "KAIST",
    country: "South Korea · Asia",
    image:
      "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/KAIST_campus_at_night.jpg&width=480",
    alt: "KAIST campus",
  },
  {
    name: "Politecnico di Torino",
    country: "Italy · Europe",
    image:
      "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Politecnico_Torino.JPG&width=480",
    alt: "Politecnico di Torino campus",
  },
  {
    name: "EPFL",
    country: "Switzerland · Europe",
    image:
      "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/EPFL_campus_2017.jpg&width=480",
    alt: "EPFL campus",
  },
];

const HIGHER_STUDIES_CHECKLIST = [
  "GRE/GMAT score ready",
  "TOEFL/IELTS score ready",
  "Official transcript ordered",
  "3 LOR requests sent",
  "Research CV updated",
  "SoP drafted & reviewed",
  "10+ universities shortlisted",
  "Professor emails sent (PhD)",
  "Application fees budgeted",
  "Scholarship apps submitted",
  "Acceptance decision made",
  "Visa applied",
];

export default function RoadmapsPage() {
  return (
    <div className={styles.roadmapsContainer}>
      {/* ── Hero Section ── */}
      <section className={styles.hero} aria-labelledby="roadmaps-hero-title">
        {/* Badge logo watermark matching Homepage style */}
        <Image
          className={styles.heroBadgeWatermark}
          src="/ir-wing-logo.png"
          alt=""
          width={280}
          height={280}
          aria-hidden="true"
          priority
        />

        <div className={styles.heroContent}>
          <div className={styles.heroEyebrow}>
            <span className={styles.heroEyebrowDot} aria-hidden="true" />
            <MapLocationIcon size={14} />
            Step-by-Step Guides
          </div>
          <h1 className={styles.heroTitle} id="roadmaps-hero-title">
            Program Roadmaps for International Opportunities
          </h1>
          <p className={styles.heroSubtitle}>
            Detailed, month-by-month action plans to help IITK students navigate every
            international program &mdash; from first research to final clearance.
          </p>
          <div className={styles.heroPills}>
            <a className={styles.pill} href="#rm-semester">
              <ArrowsRotateIcon size={14} />
              Semester Exchange
            </a>
            <a className={styles.pill} href="#rm-internship">
              <BriefcaseIcon size={14} />
              Internships
            </a>
            <a className={styles.pill} href="#rm-research">
              <FlaskIcon size={14} />
              Research Internships
            </a>
            <a className={styles.pill} href="#rm-projects">
              <DiagramProjectIcon size={14} />
              Projects
            </a>
            <a className={styles.pill} href="#rm-higher">
              <GraduationCapIcon size={14} />
              Higher Studies
            </a>
          </div>
        </div>
      </section>

      <main className={styles.mainContent}>
        {/* ══════════════════════════════════════════════════
             1. SEMESTER EXCHANGE
             ══════════════════════════════════════════════════ */}
        <section className={styles.roadmapSection} id="rm-semester">
          <div className={styles.sectionLabel}>
            <ArrowsRotateIcon size={14} /> Roadmap 01
          </div>
          <h2 className={styles.sectionTitle}>Semester Exchange Programme</h2>
          <p className={styles.sectionSub}>
            Your complete step-by-step guide &mdash; from eligibility check to returning to campus.
            Based on the <em>official SemEx FAQ for IITK students</em>.
          </p>

          <div>
            <div className={styles.progHeader}>
              <div className={styles.progIcon}>
                <ArrowsRotateIcon size={28} />
              </div>
              <div className={styles.progHeaderInfo}>
                <h3>Semester Exchange &mdash; Action Roadmap</h3>
                <p>Typically 3rd-year UG; 2+ semesters completed for PG students</p>
              </div>
              <div className={styles.statsRow}>
                <div className={styles.stat}>
                  <div className={styles.statVal}>200</div>
                  <div className={styles.statLbl}>Min Credits (UG)</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statVal}>100</div>
                  <div className={styles.statLbl}>Max Credit Waiver</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statVal}>50+</div>
                  <div className={styles.statLbl}>Partner Univs</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statVal}>0</div>
                  <div className={styles.statLbl}>CGPA Impact Abroad</div>
                </div>
              </div>
            </div>

            <div className={styles.timelineWrap}>
              <div className={styles.phasesBar}>
                <div className={`${styles.phaseSeg} ${styles.psPrep}`}>Preparation</div>
                <div className={`${styles.phaseSeg} ${styles.psApply}`}>Application</div>
                <div className={`${styles.phaseSeg} ${styles.psDuring}`}>Exchange Period</div>
                <div className={`${styles.phaseSeg} ${styles.psAfter}`}>Post Return</div>
              </div>

              {/* PHASE 1 */}
              <div className={`${styles.phaseLabel} ${styles.phaseLabelPrep}`}>
                <BinocularsIcon size={14} /> Phase 1 &middot; Preparation (12&ndash;18 months before)
              </div>
              <div className={styles.timeline}>
                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotPurple}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardPurple}`}>
                    <div className={styles.tlTiming}>
                      <ClockIcon size={13} /> ~18 months before
                    </div>
                    <h5>Check Your Eligibility</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Consult the UG Manual (Section 8.5) or PG Manual (Section 6) for exact requirements</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>UG: minimum 200 credits of coursework must be completed &mdash; this limit is strict and non-negotiable</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>PG: minimum 2 full semesters completed at IIT Kanpur before the exchange semester begins</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Pay attention to the minimum CPI requirement, credit requirements, and any departmental or programme-specific conditions</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>&amp;#9888; Caution: exercise care if planning exchange in your final semester &mdash; academic and administrative timelines may affect degree completion. Students must remain registered at IITK throughout the exchange.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotPurple}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardPurple}`}>
                    <div className={styles.tlTiming}>
                      <ClockIcon size={13} /> ~15 months before
                    </div>
                    <h5>Shortlist Partner Universities</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>
                          Start by reviewing active partner universities and MoUs on the{" "}
                          <a
                            href="https://www.iitk.ac.in/oir/"
                            target="_blank"
                            rel="noreferrer noopener"
                            style={{ color: "var(--burgundy)", textDecoration: "underline" }}
                          >
                            OIR website
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span><strong>Departmental compatibility:</strong> identify universities offering courses relevant to your field and academic interests</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span><strong>Academic calendar:</strong> check if the host university&apos;s semester dates align with IITK&apos;s &mdash; conflicts are handled case-by-case with DOAA and your DUGC</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span><strong>Course availability:</strong> review courses offered specifically during your intended exchange semester (not just general offerings)</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span><strong>Eligibility requirements:</strong> check the host university&apos;s own CPI or grade criteria in addition to IITK&apos;s minimums</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span><strong>Funding &amp; expenses:</strong> explore available scholarships and estimate travel, accommodation, and living costs</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span><strong>Language requirements:</strong> verify whether courses are taught in English or require certified language proficiency</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Consult OIR&apos;s archived factsheets from previous years and speak to seniors who&apos;ve attended your target university</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotPurple}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardPurple}`}>
                    <div className={styles.tlTiming}>
                      <ClockIcon size={13} /> ~12 months before
                    </div>
                    <h5>Course Mapping &amp; Academic Planning</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>DE and OE courses can be mapped if there is sufficient content overlap &mdash; DUGC approval is required</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>DC (Departmental Core) courses can also be mapped if the content alignment is verified by your DUGC</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Get course equivalency pre-approved by your department <em>before departure</em> &mdash; post-facto approvals are not guaranteed</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Plan your IITK semester load around the exchange period to avoid scheduling conflicts</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Prepare your academic CV and obtain an updated official transcript</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.phaseSep} />

              {/* PHASE 2 */}
              <div className={`${styles.phaseLabel} ${styles.phaseLabelApply}`}>
                <PaperPlaneIcon size={14} /> Phase 2 &middot; Application (6&ndash;8 months before)
              </div>
              <div className={styles.timeline}>
                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotSky}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardSky}`}>
                    <div className={styles.tlTiming}>
                      <ClockIcon size={13} /> Watch OIR announcements regularly
                    </div>
                    <h5>Respond to OIR&apos;s Call for Applications</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Monitor the OIR Announcements page &mdash; calls are released semester-wise and are time-sensitive</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Submit your CV and latest official academic transcript to OIR</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Consult previous years&apos; factsheets (archived on OIR website) for university-specific information</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Speak to seniors who&apos;ve previously attended your shortlisted universities for practical tips</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotSky}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardSky}`}>
                    <div className={styles.tlTiming}>
                      <ClockIcon size={13} /> Upon receiving nomination from OIR
                    </div>
                    <h5>DUGC / DPGC Approval &amp; Course Finalisation</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Prepare a detailed proposal: host university, specific courses, duration, and course mapping rationale</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>DUGC approval is required to finalise course mapping &mdash; this step is mandatory</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Consult your advisor if there are any scheduling conflicts or calendar overlaps with the host</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>The host university&apos;s semester dates are fixed &mdash; any flexibility must be confirmed directly with them</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Obtain written approval and a signed course plan from your DUGC/DPGC</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotSky}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardSky}`}>
                    <div className={styles.tlTiming}>
                      <ClockIcon size={13} /> After DUGC approval
                    </div>
                    <h5>SUGC / SPGC Senate Clearance</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Forward the DUGC-approved application to the Senate Undergraduate Committee (SUGC)</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>SUGC reviews and grants a credit waiver of up to 100 credits maximum</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Obtain DOAA NoC as applicable</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Receive the formal SUGC clearance letter before submitting anything to the host university</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotSky}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardSky}`}>
                    <div className={styles.tlTiming}>
                      <ClockIcon size={13} /> Post clearance
                    </div>
                    <h5>Host University Submission &amp; Pre-Departure</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Complete all acceptance and nomination formalities as instructed by OIR and the host university</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Follow the host university&apos;s application and registration portal instructions carefully</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Confirm visa requirements and prepare necessary documents well in advance</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Contact the host university directly to enquire about scholarships &mdash; some are subject- or department-specific</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Tuition fees are paid to IITK only; you are responsible for accommodation, travel, food, and living expenses at the host location</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Arrange accommodation (check if the host provides it), travel insurance, and health coverage</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Keep copies of all important correspondence, approvals, and registration documents</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.phaseSep} />

              {/* PHASE 3 */}
              <div className={`${styles.phaseLabel} ${styles.phaseLabelDuring}`}>
                <GlobeIcon size={14} /> Phase 3 &middot; During Exchange
              </div>
              <div className={styles.timeline}>
                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotGreen}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardGreen}`}>
                    <div className={styles.tlTiming}>
                      <ClockIcon size={13} /> First week at host university
                    </div>
                    <h5>Orientation &amp; Course Registration</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Attend the host university&apos;s international/exchange student orientation</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Confirm course registrations match your DUGC-approved plan exactly</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Any changes must be communicated immediately to your IITK department and OIR</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Keep copies of all registration confirmations and enrolment documents</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotGreen}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardGreen}`}>
                    <div className={styles.tlTiming}>
                      <ClockIcon size={13} /> Throughout the semester
                    </div>
                    <h5>Academic Performance &amp; Communication</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Grades earned abroad are <strong>not</strong> added to your IITK CGPA &mdash; you receive a course waiver for approved courses</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>You must pass all approved courses at the host institution</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Maintain regular contact with your IITK department advisor and OIR</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>For academic or course-mapping difficulties, contact your DUGC, SUGC, DOAA, or OIR promptly &mdash; approach the responsible authority directly to avoid delays</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.phaseSep} />

              {/* PHASE 4 */}
              <div className={`${styles.phaseLabel} ${styles.phaseLabelAfter}`}>
                <FlagCheckeredIcon size={14} /> Phase 4 &middot; Post Return
              </div>
              <div className={styles.timeline}>
                <div className={styles.tlItem}>
                  <div className={styles.tlDot} />
                  <div className={styles.tlCard}>
                    <div className={styles.tlTiming}>
                      <ClockIcon size={13} /> Within 2&ndash;4 weeks of return
                    </div>
                    <h5>Credit Transfer &amp; Documentation</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Submit official transcript from the host university to OIR and your department</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>DUGC verifies courses and recommends credit transfer as per the pre-approved mapping</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Credits applied under SUGC&apos;s pre-approved waiver &mdash; grades do not accumulate into your IITK CGPA</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Submit an exchange experience report to OIR (mandatory)</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>If you decided not to proceed after selection: withdraw promptly through the prescribed process &mdash; timely withdrawal allows waitlisted students to participate. Communicate your decision as early as possible.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ── Partner Universities ── */}
              <div className={styles.phaseSep} />
              <h4 style={{ fontFamily: "var(--font-serif)", color: "var(--navy)", fontSize: "20px", fontWeight: 600, marginBottom: "6px", display: "flex", alignItems: "center", gap: "8px" }}>
                <LandmarkIcon size={18} /> Partner Universities
              </h4>
              <p style={{ fontSize: "14px", color: "var(--navy-light)", marginBottom: "16px" }}>
                IITK has active MoUs with 50+ universities worldwide. A selection of key partners is shown below &mdash;{" "}
                <a
                  href="https://www.iitk.ac.in/oir/"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ color: "var(--burgundy)", textDecoration: "underline" }}
                >
                  see full list on OIR
                </a>.
              </p>
              <div className={styles.univGrid}>
                {PARTNER_UNIVERSITIES.map((univ) => (
                  <div key={univ.name} className={styles.univCard}>
                    <div className={styles.univImgWrap}>
                      {/* Using standard img for external CDN images */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={univ.image}
                        alt={univ.alt}
                        className={styles.univImg}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.univInfo}>
                      <div className={styles.univName}>{univ.name}</div>
                      <div className={styles.univCountry}>
                        <LocationPinIcon size={13} /> {univ.country}
                      </div>
                    </div>
                  </div>
                ))}

                <div className={`${styles.univCard} ${styles.univCardMore}`}>
                  <div className={styles.univImgWrap}>
                    <div className={styles.univPlaceholderIcon}>
                      <PlusIcon size={32} />
                    </div>
                  </div>
                  <div className={styles.univInfo}>
                    <div className={styles.univName}>40+ More Partners</div>
                    <div className={styles.univCountry}>
                      <a
                        href="https://www.iitk.ac.in/oir/"
                        target="_blank"
                        rel="noreferrer noopener"
                        style={{ color: "var(--gold)", textDecoration: "underline", fontSize: "12px", fontWeight: 600 }}
                      >
                        View full list on OIR &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.tipBox} ${styles.tipBoxNavy}`}>
                <span className={styles.tipBoxIcon}>
                  <LightbulbIcon size={20} />
                </span>
                <p>
                  <strong>Key Advice:</strong> Start early &mdash; review university options, eligibility,
                  and academic calendars well in advance. Prioritise academic feasibility, consult your
                  DUGC and OIR for credit mapping, explore funding early, and use previous students&apos;
                  experiences as a guide (but verify updated information).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
             2. INTERNSHIPS ABROAD
             ══════════════════════════════════════════════════ */}
        <section className={styles.roadmapSection} id="rm-internship">
          <div className={styles.sectionLabel}>
            <BriefcaseIcon size={14} /> Roadmap 02
          </div>
          <h2 className={styles.sectionTitle}>Internships Abroad</h2>
          <p className={styles.sectionSub}>
            Industry and academic internships at international companies and universities.
          </p>

          <div>
            <div className={styles.progHeader}>
              <div className={styles.progIcon}>
                <BriefcaseIcon size={28} />
              </div>
              <div className={styles.progHeaderInfo}>
                <h3>Internship Abroad &mdash; Action Roadmap</h3>
                <p>Pre-final year UG and PG &middot; Self-initiated or OIR/SPO facilitated</p>
              </div>
              <div className={styles.statsRow}>
                <div className={styles.stat}>
                  <div className={styles.statVal}>Sep&ndash;Dec</div>
                  <div className={styles.statLbl}>Apply Window</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statVal}>2&ndash;6</div>
                  <div className={styles.statLbl}>Months Duration</div>
                </div>
              </div>
            </div>

            <div className={styles.timelineWrap}>
              <div className={styles.phasesBar}>
                <div className={`${styles.phaseSeg} ${styles.psPrep}`}>Search</div>
                <div className={`${styles.phaseSeg} ${styles.psApply}`}>Apply</div>
                <div className={`${styles.phaseSeg} ${styles.psDuring}`}>Intern Period</div>
                <div className={`${styles.phaseSeg} ${styles.psAfter}`}>Completion</div>
              </div>

              {/* PHASE 1 */}
              <div className={`${styles.phaseLabel} ${styles.phaseLabelPrep}`}>
                <SearchIcon size={14} /> Phase 1 &middot; Search (6&ndash;9 months before)
              </div>
              <div className={styles.timeline}>
                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotPurple}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardPurple}`}>
                    <h5>Identify Opportunities &amp; Build Profile</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Check OIR for company-sponsored international intern slots</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Use LinkedIn, Glassdoor, and career pages for direct applications</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Update CV with projects, research, and technical skills</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Prepare tailored cover letters and secure faculty recommendations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.phaseSep} />

              {/* PHASE 2 */}
              <div className={`${styles.phaseLabel} ${styles.phaseLabelApply}`}>
                <PaperPlaneIcon size={14} /> Phase 2 &middot; Apply &amp; Accept (4&ndash;6 months before)
              </div>
              <div className={styles.timeline}>
                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotSky}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardSky}`}>
                    <h5>Submit &amp; Accept</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Apply to multiple companies; track deadlines carefully</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Prepare for technical interviews and coding challenges</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Once you accept an offer, inform OIR and department immediately</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>SPO Rule: Withdraw from other processes upon acceptance</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Obtain NOC from your department if required</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.phaseSep} />

              {/* PHASE 3 */}
              <div className={`${styles.phaseLabel} ${styles.phaseLabelDuring}`}>
                <GlobeIcon size={14} /> Phase 3 &middot; During
              </div>
              <div className={styles.timeline}>
                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotGreen}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardGreen}`}>
                    <h5>Pre-Departure &amp; Internship</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Obtain work/intern visa from the relevant embassy</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Arrange travel, accommodation, and health insurance</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Carry official IITK enrollment letter and transcript</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Open international bank account or get an international card</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.phaseSep} />

              {/* PHASE 4 */}
              <div className={`${styles.phaseLabel} ${styles.phaseLabelAfter}`}>
                <FlagCheckeredIcon size={14} /> Phase 4 &middot; Completion
              </div>
              <div className={styles.timeline}>
                <div className={styles.tlItem}>
                  <div className={styles.tlDot} />
                  <div className={styles.tlCard}>
                    <h5>After the Internship</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Obtain completion/experience letter from the company</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Submit a brief report to OIR if required</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Update your LinkedIn and CV with the experience</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Mentor juniors &mdash; share your experience with the IR Wing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
             3. RESEARCH INTERNSHIPS ABROAD
             ══════════════════════════════════════════════════ */}
        <section className={styles.roadmapSection} id="rm-research">
          <div className={styles.sectionLabel}>
            <FlaskIcon size={14} /> Roadmap 03
          </div>
          <h2 className={styles.sectionTitle}>Research Internships Abroad</h2>
          <p className={styles.sectionSub}>
            Pursue research in leading global labs &mdash; DAAD, Charpak, and more.
          </p>

          <div>
            <div className={styles.progHeader}>
              <div className={styles.progIcon}>
                <FlaskIcon size={28} />
              </div>
              <div className={styles.progHeaderInfo}>
                <h3>Research Internship &mdash; Action Roadmap</h3>
                <p>Summer research programs &middot; Typically 2&ndash;3 months &middot; Apply Sep&ndash;Dec</p>
              </div>
              <div className={styles.statsRow}>
                <div className={styles.stat}>
                  <div className={styles.statVal}>Sep</div>
                  <div className={styles.statLbl}>Start Applying</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statVal}>Nov&ndash;Jan</div>
                  <div className={styles.statLbl}>Deadlines</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statVal}>May&ndash;Jul</div>
                  <div className={styles.statLbl}>Typical Duration</div>
                </div>
              </div>
            </div>

            <div className={styles.timelineWrap}>
              <div className={styles.phasesBar}>
                <div className={`${styles.phaseSeg} ${styles.psPrep}`}>Profile Building</div>
                <div className={`${styles.phaseSeg} ${styles.psApply}`}>Applications</div>
                <div className={`${styles.phaseSeg} ${styles.psDuring}`}>Research Period</div>
                <div className={`${styles.phaseSeg} ${styles.psAfter}`}>After Return</div>
              </div>

              {/* PHASE 1 */}
              <div className={`${styles.phaseLabel} ${styles.phaseLabelPrep}`}>
                <ToolsIcon size={14} /> Phase 1 &middot; Profile Building (year-round)
              </div>
              <div className={styles.timeline}>
                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotPurple}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardPurple}`}>
                    <h5>Build Research Profile &amp; Identify Programs</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Join a research group at IITK with a faculty member</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Aim for publications, posters, or conference presentations</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Maintain a strong CPI &mdash; most programs require 7.5&ndash;8.5+</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Shortlist DAAD WISE, Charpak, SN Bose, and direct outreach targets</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Read target professors&apos; recent papers for research alignment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.phaseSep} />

              {/* PHASE 2 */}
              <div className={`${styles.phaseLabel} ${styles.phaseLabelApply}`}>
                <PaperPlaneIcon size={14} /> Phase 2 &middot; Applications (Sep&ndash;Jan)
              </div>
              <div className={styles.timeline}>
                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotSky}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardSky}`}>
                    <div className={styles.tlTiming}>
                      <ClockIcon size={13} /> Sep&ndash;Oct
                    </div>
                    <h5>Prepare Application Materials</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Write a strong, specific SoP / Research Proposal</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Update research-focused CV &mdash; highlight projects, skills, GPA</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Request LORs from 2&ndash;3 faculty (give 4&ndash;6 weeks notice)</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Get official sealed transcript from academic section</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotSky}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardSky}`}>
                    <div className={styles.tlTiming}>
                      <ClockIcon size={13} /> Oct&ndash;Dec
                    </div>
                    <h5>Submit &amp; Confirm</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>DAAD WISE: apply via DAAD portal (closes Nov&ndash;Dec)</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Charpak: apply via French Embassy portal (closes Jan&ndash;Feb)</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Direct Outreach: personalised emails + CV + proposal</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>After acceptance &mdash; inform OIR, get NOC, apply for visa</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.phaseSep} />

              {/* PHASE 3 */}
              <div className={`${styles.phaseLabel} ${styles.phaseLabelDuring}`}>
                <MicroscopeIcon size={14} /> Phase 3 &middot; Research Period (May&ndash;Jul)
              </div>
              <div className={styles.timeline}>
                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotGreen}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardGreen}`}>
                    <h5>During Your Research Internship</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Set clear research goals and milestones with your host supervisor</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Document progress regularly &mdash; builds your publication portfolio</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Network with other researchers and attend lab seminars</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.phaseSep} />

              {/* PHASE 4 */}
              <div className={`${styles.phaseLabel} ${styles.phaseLabelAfter}`}>
                <FlagCheckeredIcon size={14} /> Phase 4 &middot; After Return
              </div>
              <div className={styles.timeline}>
                <div className={styles.tlItem}>
                  <div className={styles.tlDot} />
                  <div className={styles.tlCard}>
                    <h5>Leverage Your Experience</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Request completion certificate and recommendation letter from host supervisor</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Continue collaboration if possible &mdash; aim for a paper or technical report</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Use the experience in your higher studies application SoP</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Share learnings with juniors through the IR Wing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`${styles.tipBox} ${styles.tipBoxAmber}`}>
                <span className={styles.tipBoxIcon}>
                  <TriangleAlertIcon size={20} />
                </span>
                <p>
                  <strong>Deadline Alert:</strong> Research internship applications typically open in
                  September for the following summer. Missing this window means missing the full
                  cycle. Set reminders starting in August every year.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
             4. INTERNATIONAL PROJECTS
             ══════════════════════════════════════════════════ */}
        <section className={styles.roadmapSection} id="rm-projects">
          <div className={styles.sectionLabel}>
            <DiagramProjectIcon size={14} /> Roadmap 04
          </div>
          <h2 className={styles.sectionTitle}>International Projects (BTP / MTP / Collaborative)</h2>
          <p className={styles.sectionSub}>
            Credit-bearing research projects in collaboration with international institutions.
          </p>

          <div>
            <div className={styles.progHeader}>
              <div className={styles.progIcon}>
                <DiagramProjectIcon size={28} />
              </div>
              <div className={styles.progHeaderInfo}>
                <h3>International Project &mdash; Action Roadmap</h3>
                <p>BTP, MTP, or independent research projects with partner institutes</p>
              </div>
              <div className={styles.statsRow}>
                <div className={styles.stat}>
                  <div className={styles.statVal}>Anytime</div>
                  <div className={styles.statLbl}>Start Outreach</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statVal}>DUGC</div>
                  <div className={styles.statLbl}>Approval Required</div>
                </div>
              </div>
            </div>

            <div className={styles.timelineWrap}>
              {/* PHASE 1 */}
              <div className={`${styles.phaseLabel} ${styles.phaseLabelPrep}`}>
                <BinocularsIcon size={14} /> Phase 1 &middot; Identify Opportunity
              </div>
              <div className={styles.timeline}>
                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotPurple}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardPurple}`}>
                    <h5>Find a Collaborative Project</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Explore IITK&apos;s Collaborative Research Centres: Rice-IITK, La Trobe, UB, NYU Tandon</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Ask your IITK supervisor about ongoing international co-supervised projects</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Review active MoUs on OIR website for project-eligible partnerships</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Attend seminars featuring foreign visiting faculty</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.phaseSep} />

              {/* PHASE 2 */}
              <div className={`${styles.phaseLabel} ${styles.phaseLabelApply}`}>
                <PaperPlaneIcon size={14} /> Phase 2 &middot; Approval
              </div>
              <div className={styles.timeline}>
                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotSky}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardSky}`}>
                    <h5>Get Approvals &amp; Register</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Discuss the project idea with your IITK faculty supervisor</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Obtain written consent and define co-supervision arrangement</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Register project formally with your department (BTP/MTP)</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>If under an active MoU, register with OIR for coordination</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.phaseSep} />

              {/* PHASE 3 */}
              <div className={`${styles.phaseLabel} ${styles.phaseLabelDuring}`}>
                <GlobeIcon size={14} /> Phase 3 &middot; Execution
              </div>
              <div className={styles.timeline}>
                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotGreen}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardGreen}`}>
                    <h5>Execution &amp; Reporting</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Maintain bi-weekly progress updates to both supervisors</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Document all research outputs meticulously</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Follow both institutions&apos; research ethics and IP policies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.phaseSep} />

              {/* PHASE 4 */}
              <div className={`${styles.phaseLabel} ${styles.phaseLabelAfter}`}>
                <FlagCheckeredIcon size={14} /> Phase 4 &middot; Evaluation
              </div>
              <div className={styles.timeline}>
                <div className={styles.tlItem}>
                  <div className={styles.tlDot} />
                  <div className={styles.tlCard}>
                    <h5>Final Evaluation &amp; Credit</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Submit project report to IITK supervisor and department</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Joint evaluation by IITK and host supervisor</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Credits registered under BTP/MTP in IITK grade sheet</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Explore conference publication or patent if applicable</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
             5. HIGHER STUDIES ABROAD
             ══════════════════════════════════════════════════ */}
        <section className={styles.roadmapSection} id="rm-higher">
          <div className={styles.sectionLabel}>
            <GraduationCapIcon size={14} /> Roadmap 05
          </div>
          <h2 className={styles.sectionTitle}>Higher Studies Abroad (MS / PhD)</h2>
          <p className={styles.sectionSub}>
            Your complete 18-month action plan from early preparation to offer acceptance.
          </p>

          <div>
            <div className={styles.progHeader}>
              <div className={styles.progIcon}>
                <GraduationCapIcon size={28} />
              </div>
              <div className={styles.progHeaderInfo}>
                <h3>Higher Studies &mdash; Action Roadmap</h3>
                <p>MS, PhD and Joint Degree pathways &middot; Comprehensive 18-month guide</p>
              </div>
              <div className={styles.statsRow}>
                <div className={styles.stat}>
                  <div className={styles.statVal}>GRE</div>
                  <div className={styles.statLbl}>Required (US/CA)</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statVal}>Aug&ndash;Dec</div>
                  <div className={styles.statLbl}>Apply Window</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statVal}>Sep&ndash;Jan</div>
                  <div className={styles.statLbl}>Deadlines</div>
                </div>
              </div>
            </div>

            <div className={styles.timelineWrap}>
              <div className={styles.phasesBar}>
                <div className={`${styles.phaseSeg} ${styles.psPrep}`}>Foundation</div>
                <div className={`${styles.phaseSeg} ${styles.psApply}`}>Strategy</div>
                <div className={`${styles.phaseSeg} ${styles.psDuring}`}>Application</div>
                <div className={`${styles.phaseSeg} ${styles.psAfter}`}>Post Offer</div>
              </div>

              {/* PHASE 1 */}
              <div className={`${styles.phaseLabel} ${styles.phaseLabelPrep}`}>
                <SeedlingIcon size={14} /> Phase 1 &middot; Foundation (18&ndash;12 months before)
              </div>
              <div className={styles.timeline}>
                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotPurple}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardPurple}`}>
                    <div className={styles.tlTiming}>
                      <ClockIcon size={13} /> Start Early (2nd&ndash;3rd year)
                    </div>
                    <h5>Academic &amp; Research Foundation</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Maintain a strong CPI &mdash; aim for 8.0+ for top PhD programs</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Join a research group at IITK for hands-on experience</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Attempt a publication or conference paper</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Identify your research area(s) of interest early</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotPurple}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardPurple}`}>
                    <div className={styles.tlTiming}>
                      <ClockIcon size={13} /> ~15 months before
                    </div>
                    <h5>Standardised Tests &amp; LOR Relationships</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Start GRE preparation 3&ndash;4 months before test date</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Book TOEFL/IELTS; complete language tests if needed</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Identify 3 faculty who know your research work well</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Engage through courses, projects, or TA roles</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.phaseSep} />

              {/* PHASE 2 */}
              <div className={`${styles.phaseLabel} ${styles.phaseLabelApply}`}>
                <CrosshairsIcon size={14} /> Phase 2 &middot; Strategy (9&ndash;6 months before deadlines)
              </div>
              <div className={styles.timeline}>
                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotSky}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardSky}`}>
                    <h5>Research Universities &amp; Draft Materials</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Focus on specific research groups, not just rankings</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Create a shortlist of 8&ndash;12 universities (reach, match, safe)</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Begin drafting Statement of Purpose for each program</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Highlight IITK research, coursework, and career goals</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Update CV with publications, projects, awards</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotSky}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardSky}`}>
                    <h5>Professor Cold-Emailing (for PhD)</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Write personalised, research-specific emails to target professors</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Mention a specific paper of theirs and explain how you can contribute</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Attach a brief research proposal and your CV</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Follow up once after 2&ndash;3 weeks if no response</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.phaseSep} />

              {/* PHASE 3 */}
              <div className={`${styles.phaseLabel} ${styles.phaseLabelDuring}`}>
                <PaperPlaneIcon size={14} /> Phase 3 &middot; Submitting Applications (Aug&ndash;Jan)
              </div>
              <div className={styles.timeline}>
                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotGreen}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardGreen}`}>
                    <div className={styles.tlTiming}>
                      <ClockIcon size={13} /> Aug&ndash;Sep
                    </div>
                    <h5>Finalise Materials &amp; Request LORs</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Request LORs from chosen faculty &mdash; give 6 weeks notice</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Get official sealed transcript from IITK academic section (2&ndash;4 weeks)</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Compile all standardised test score reports</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.tlItem}>
                  <div className={`${styles.tlDot} ${styles.tlDotGreen}`} />
                  <div className={`${styles.tlCard} ${styles.tlCardGreen}`}>
                    <div className={styles.tlTiming}>
                      <ClockIcon size={13} /> Oct&ndash;Dec
                    </div>
                    <h5>Submit Applications &amp; Interviews</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Complete all university portals before their deadlines</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Pay application fees (USD 50&ndash;100 per university typically)</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Apply for scholarships: DAAD, Fulbright-Nehru, Erasmus Mundus</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Prepare for interviews with admissions committees or supervisors</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.phaseSep} />

              {/* PHASE 4 */}
              <div className={`${styles.phaseLabel} ${styles.phaseLabelAfter}`}>
                <FlagCheckeredIcon size={14} /> Phase 4 &middot; Post Offer (March onwards)
              </div>
              <div className={styles.timeline}>
                <div className={styles.tlItem}>
                  <div className={styles.tlDot} />
                  <div className={styles.tlCard}>
                    <h5>Accept, Visa &amp; Departure</h5>
                    <ul>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Compare funding packages, research group quality, cost of living</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Accept by standard deadline (typically April 15 for US)</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Apply for student visa (F-1 for USA, Tier 4 for UK, etc.)</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Obtain degree certificate and official transcripts from IITK</span>
                      </li>
                      <li>
                        <span className={styles.tlCheckIcon}>&check;</span>
                        <span>Arrange accommodation, insurance, and travel</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "28px" }}>
                <h4
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--navy)",
                    fontSize: "20px",
                    fontWeight: 600,
                    marginBottom: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <ListCheckIcon size={18} /> Master Checklist for Higher Studies
                </h4>
                <ul className={styles.checklist}>
                  {HIGHER_STUDIES_CHECKLIST.map((item) => (
                    <li key={item} className={styles.checklistItem}>
                      <span className={styles.checklistItemIcon}>
                        <CheckIcon size={16} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.tipBox} ${styles.tipBoxGreen}`}>
                <span className={styles.tipBoxIcon}>
                  <StarIcon size={20} />
                </span>
                <p>
                  <strong>IITK Advantage:</strong> Admissions committees at top global universities
                  are well aware of the rigour of IITK programs. Your IIT Kanpur degree carries
                  significant weight &mdash; leverage your research experience, faculty connections,
                  and the OIR&apos;s alumni network to maximise your application&apos;s impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
             CONTACT BANNER
             ══════════════════════════════════════════════════ */}
        <div className={styles.contactBanner}>
          <h3>Need Guidance? The IR Wing &amp; OIR Are Here to Help</h3>
          <p>
            Reach out for official policies, document attestation, and program-specific announcements.
          </p>
          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <span className={styles.contactItemIcon}>
                <EnvelopeIcon size={18} />
              </span>
              oir@iitk.ac.in
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactItemIcon}>
                <PhoneIcon size={18} />
              </span>
              +91-512-259-6067
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactItemIcon}>
                <LocationPinIcon size={18} />
              </span>
              Faculty Building Annexe, Level 3, IITK
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactItemIcon}>
                <InstagramIcon size={18} />
              </span>
              @iitkinternationalrelations
            </div>
          </div>
          <a
            href="https://www.iitk.ac.in/oir/"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.btnAccent}
          >
            <ExternalLinkIcon size={16} />
            OIR Official Website
          </a>
        </div>
      </main>
    </div>
  );
}
