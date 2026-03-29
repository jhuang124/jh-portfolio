"use client";

import ScrollReveal from "./ScrollReveal";

const tools = [
  "Looker", "GA4", "Jira", "Figma", "Zuora", "Zephr",
  "Stripe", "Claude Code", "SQL", "Amplitude",
];

const roles = [
  {
    period: "Jan 2023 — Present",
    title: "Product Manager, Subscriptions & Monetization",
    company: "The Atlantic",
    desc: "Owned the full subscription product stack — pricing, checkout, retention, and billing infrastructure. Built new revenue lines and self-serve tools that changed how subscribers interact with The Atlantic.",
  },
  {
    period: "Sep 2021 — Dec 2022",
    title: "Associate Product Manager, Subscriptions",
    company: "The Atlantic",
    desc: "Ran acquisition pricing experiments and built the compliance layer for nationwide tax collection. Laid the groundwork for the dynamic pricing and billing systems that followed.",
  },
  {
    period: "Jan 2009 — Jan 2021",
    title: "Generalist / Manager",
    company: "Family Dollar Store",
    desc: "Managed every part of a retail operation for over a decade, from vendor negotiations to merchandising to customer development. Helped finance and launch a second location that transformed the business.",
  },
];

export default function Timeline() {
  return (
    <section
      id="experience"
      style={{ maxWidth: 720, marginBottom: "var(--space-8)" }}
    >
      <ScrollReveal>
        <div className="section-rule" />
        <p className="section-label">Experience</p>
      </ScrollReveal>

      <div>
        {roles.map((role) => (
          <ScrollReveal key={role.period}>
            <div className="timeline-entry">
              <p className="timeline-period">{role.period}</p>
              <h3 className="timeline-title">
                {role.title} · <span className="timeline-company">{role.company}</span>
              </h3>
              <p className="timeline-desc">{role.desc}</p>
            </div>
          </ScrollReveal>
        ))}

        {/* Education — two degrees, two colleges */}
        <ScrollReveal>
          <div className="timeline-entry">
            <p className="timeline-period">2017 — 2021</p>
            <h3 className="timeline-title">
              Columbia College · <span className="timeline-company">Columbia University</span>
            </h3>
            <p className="timeline-desc" style={{ marginBottom: "var(--space-1)" }}>
              B.A. in Economics-Political Science, 2021
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="timeline-entry">
            <p className="timeline-period">2017 — 2020</p>
            <h3 className="timeline-title">
              Columbia Engineering (SEAS) · <span className="timeline-company">Columbia University</span>
            </h3>
            <p className="timeline-desc" style={{ marginBottom: "var(--space-3)" }}>
              B.S. in Mechanical Engineering, 2020
            </p>
            <span className="tag">QuestBridge Scholar</span>
          </div>
        </ScrollReveal>
      </div>

      {/* Tools */}
      <ScrollReveal>
        <div style={{ paddingTop: "var(--space-6)" }}>
          <p className="timeline-period" style={{ marginBottom: "var(--space-3)" }}>
            Tools & Platforms
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
            {tools.map((tool) => (
              <span key={tool} className="tag">{tool}</span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
