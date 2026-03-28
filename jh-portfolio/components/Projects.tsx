"use client";

import ScrollReveal from "./ScrollReveal";
import { PressGallery } from "@/components/ui/press-gallery";

const pressItems = [
  {
    id: "million",
    title: "The Atlantic Tops 1 Million Subscriptions and Reaches Profitability",
    summary: "Revenue up 10% to nearly $100M, with subscriptions doubling since digital launch. The culmination of four years of subscription product work.",
    url: "https://www.theatlantic.com/press-releases/archive/2024/03/atlantic-tops-1-million-subscriptions/677726/",
    image: "/images/press-million.avif",
    date: "March 2024",
    source: "The Atlantic",
  },
  {
    id: "highschool",
    title: "The Atlantic Gives Free Digital Access to All U.S. Public High Schools",
    summary: "IP-based access program expanded from 200+ institutions to every public high school in America, reaching millions of students.",
    url: "https://www.theatlantic.com/press-releases/archive/2025/09/the-atlantic-free-access-high-schools/679543/",
    image: "/images/press-highschool.avif",
    date: "September 2025",
    source: "The Atlantic",
  },
  {
    id: "premiumplus",
    title: "The Atlantic Launches Premium Plus Subscription Tier",
    summary: "A new premium tier offering exclusive content, events, and features to deepen subscriber engagement and drive ARPU growth.",
    url: "https://www.theatlantic.com/press-releases/archive/2025/01/the-atlantic-premium-plus/681234/",
    image: "/images/press-premiumplus.avif",
    date: "January 2025",
    source: "The Atlantic",
  },
];

const projects = [
  {
    theme: "GROWTH",
    name: "Subscription growth & monetization",
    stat: "220%",
    statLabel: "UPGRADE REVENUE LIFT",
    description: "Redesigned the upgrade funnel and paywall strategy, driving a 220% lift in upgrade revenue across web and app.",
    metrics: ["2× conversion rate", "40% paywall CTR", "$2.4M incremental ARR"],
    tags: ["Monetization", "Experimentation", "Funnel Design"],
  },
  {
    theme: "RETENTION",
    name: "Retention & subscriber lifecycle",
    stat: "−17%",
    statLabel: "VOLUNTARY CHURN",
    description: "Built lifecycle engagement programs including win-back campaigns, grace periods, and churn prediction models.",
    metrics: ["−17% voluntary churn", "32% win-back rate", "4.2 NPS lift"],
    tags: ["Lifecycle", "Churn", "Engagement"],
  },
  {
    theme: "PLATFORM",
    name: "Platform & billing infrastructure",
    stat: "−80%",
    statLabel: "SUPPORT CALL VOLUME",
    description: "Migrated billing from legacy to Zuora/Stripe, rebuilt subscription management UX, eliminated top customer pain points.",
    metrics: ["−80% support calls", "99.9% uptime", "3 platform migrations"],
    tags: ["Infrastructure", "Billing", "Migration"],
  },
  {
    theme: "ACCESS",
    name: "School access & institutional reach",
    stat: "~3M",
    statLabel: "STUDENTS REACHED",
    description: "Launched and scaled IP-based institutional access, expanding from 200+ universities to every U.S. public high school.",
    metrics: ["~3M students", "20K+ schools", "200+ universities"],
    tags: ["Access", "Institutional", "Growth"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "var(--space-10) var(--space-7)",
        maxWidth: "var(--container-wide)",
        margin: "0 auto",
      }}
    >
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        <ScrollReveal>
          <div className="section-rule" />
          <p className="section-label">Selected Work</p>
        </ScrollReveal>
      </div>

      {/* Press Gallery */}
      <ScrollReveal>
        <div style={{ marginBottom: "var(--space-8)" }}>
          <PressGallery items={pressItems} />
        </div>
      </ScrollReveal>

      {/* Project cards — 2×2 grid */}
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        <ScrollReveal stagger>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--space-5)",
            }}
          >
            {projects.map((project) => (
              <div key={project.theme} className="card" style={{ padding: "var(--space-6)", display: "flex", flexDirection: "column" }}>
                {/* Stat hero — single focal point */}
                <div style={{ marginBottom: "var(--space-4)" }}>
                  <span
                    style={{
                      fontFamily: "var(--stat)",
                      fontSize: "48px",
                      color: "var(--text)",
                      lineHeight: 1,
                      display: "block",
                    }}
                  >
                    {project.stat}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "10px",
                      color: "var(--text-dim)",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {project.statLabel}
                  </span>
                </div>

                {/* Theme tag */}
                <div style={{ marginBottom: "var(--space-4)" }}>
                  <span className="tag-accent tag">{project.theme}</span>
                </div>

                {/* Name + Description */}
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "var(--text-lg)",
                    fontWeight: 500,
                    color: "var(--text)",
                    margin: "0 0 var(--space-3) 0",
                    lineHeight: "var(--leading-snug)",
                  }}
                >
                  {project.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "15px",
                    color: "var(--text-mid)",
                    lineHeight: 1.6,
                    margin: "0 0 var(--space-5) 0",
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Metrics */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
                  {project.metrics.map((m) => (
                    <span
                      key={m}
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "11px",
                        color: "var(--text-dim)",
                        background: "var(--accent-light)",
                        padding: "3px 10px",
                        borderRadius: 3,
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
                  {project.tags.map((t) => (
                    <span key={t} className="tag" style={{ fontSize: "10px" }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
