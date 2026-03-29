"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    theme: "GROWTH & RETENTION",
    name: "Subscription growth, monetization & lifecycle",
    stat: "220%",
    statLabel: "upgrade revenue lift",
    desc: "Redesigned the upgrade funnel and paywall strategy while building lifecycle engagement programs — save flows, win-back campaigns, and churn prediction — that moved both acquisition and retention numbers.",
    impact: "220% upgrade lift · −17% voluntary churn · $2.4M incremental ARR",
    image: "/jh-portfolio/images/press-million.avif",
    articleTitle: "The Atlantic Tops 1 Million Subscriptions",
    articleDate: "March 2024",
    articleUrl: "https://www.theatlantic.com/press-releases/archive/2024/03/atlantic-tops-1-million-subscriptions/677726/",
  },
  {
    theme: "PLATFORM",
    name: "Billing infrastructure & self-serve tools",
    stat: "−80%",
    statLabel: "support call volume",
    desc: "Shipped self-serve upgrade and downgrade flows — the most-requested subscriber feature — and supported a 6-month Stripe-to-Zuora/Zephr migration that unlocked faster product development.",
    impact: "−80% support calls · 99.9% uptime · Stripe → Zuora migration",
    image: "/jh-portfolio/images/press-premiumplus.avif",
    articleTitle: "The Atlantic Launches Premium Plus",
    articleDate: "January 2025",
    articleUrl: "https://www.theatlantic.com/press-releases/archive/2025/01/the-atlantic-premium-plus/681234/",
  },
  {
    theme: "ACCESS",
    name: "School access & institutional reach",
    stat: "~2M",
    statLabel: "students, access unlocked",
    desc: "Built High School Free Access around IP-based eligibility and onboarding in Zephr, opening Atlantic access to roughly 2,000 public schools and 2 million students and faculty.",
    impact: "~2M students · ~2K schools · 200+ universities",
    image: "/jh-portfolio/images/press-highschool.avif",
    articleTitle: "Free Digital Access to All U.S. Public High Schools",
    articleDate: "September 2025",
    articleUrl: "https://www.theatlantic.com/press-releases/archive/2025/09/the-atlantic-free-access-high-schools/679543/",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="work"
      style={{ marginBottom: "var(--space-8)" }}
    >
      <ScrollReveal>
        <div className="section-rule" />
        <p className="section-label">Selected Work</p>
      </ScrollReveal>

      {cases.map((c) => (
        <ScrollReveal key={c.theme}>
          <div className="case-row">
            {/* Left — description */}
            <div className="case-info">
              <span className="case-theme">{c.theme}</span>
              <h3 className="case-name">{c.name}</h3>
              <div>
                <span className="case-stat">{c.stat}</span>
                <span className="case-stat-label">{c.statLabel}</span>
              </div>
              <p className="case-desc">{c.desc}</p>
              <p className="case-impact">{c.impact}</p>
              <a
                href={c.articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="case-link"
              >
                Read article <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Right — press image */}
            <div className="case-image">
              <Image
                src={c.image}
                alt={c.articleTitle}
                width={800}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </ScrollReveal>
      ))}
    </section>
  );
}
