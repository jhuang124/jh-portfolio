"use client";

import ScrollReveal from "./ScrollReveal";

const tools = [
  "Zuora", "Zephr", "Stripe", "Amplitude", "Looker",
  "SQL", "Figma", "Jira", "Claude AI", "Google AI",
];

const roles = [
  {
    company: "The Atlantic",
    title: "Product Manager, Subscriptions & Monetization",
    period: "JAN 2023 \u2014 PRESENT",
    bullets: [
      "Led 0\u21921 launch of Premium Plus, a shared subscription tier \u2014 drove 220% lift in upgrade revenue and 8% lift in acquisition AOV",
      "Built behavioral model linking early engagement to retention; launched personalized onboarding driving 190K app downloads and 230K newsletter signups",
      "Owned cancel/save feature across multiple phases \u2014 reduced cancellation rate by 11% and voluntary churn by 17%",
      "Migrated subscription stack from Stripe to Zuora/Zephr, moving paywall and pricing into marketing-configurable surfaces",
    ],
  },
  {
    company: "The Atlantic",
    title: "Associate Product Manager",
    period: "SEP 2021 \u2014 DEC 2022",
    bullets: [
      "Owned acquisition pricing experimentation across all subscription products \u2014 drove 12% lift in acquisition revenue",
      "Built first sales tax engine in Avalara, enabling compliant collection across all 50 states",
      "Launched self-service upgrade/downgrade flows, reducing customer care call volume by 80%",
    ],
  },
  {
    company: "Dollar and Wholesale Store",
    title: "General Manager",
    period: "2012 \u2014 2021",
    location: "Orlando & Tampa, FL",
    bullets: [
      "Ran family retail business end-to-end \u2014 operations, inventory, vendor negotiations, and customer relationships",
      "Planned and executed second location expansion to Tampa, driving 53% revenue growth",
    ],
  },
];

const education = {
  school: "Columbia University, Columbia College",
  degrees: "B.A. Economics-Political Science \u00B7 B.S. Mechanical Engineering",
  years: "2017 \u2014 2021",
  note: "QuestBridge Scholar",
};

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="section-transition"
      style={{
        padding: "120px 3rem",
        maxWidth: "1240px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <ScrollReveal>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontSize: "clamp(30px, 5vw, 48px)",
            fontWeight: 400,
            color: "var(--text)",
            margin: "0 0 1rem 0",
            letterSpacing: "-0.3px",
          }}
        >
          Where I&apos;ve been
        </h2>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "var(--border-subtle)",
            marginBottom: "3.5rem",
          }}
        />
      </ScrollReveal>

      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: "0",
            top: 0,
            bottom: 0,
            width: "1px",
            backgroundColor: "var(--border)",
          }}
        />

        {roles.map((role, i) => (
          <ScrollReveal key={i}>
            <div
              style={{
                paddingLeft: "2.5rem",
                paddingBottom: "3.5rem",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-4px",
                  top: "6px",
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent)",
                }}
              />
              <p style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--text-dim)", letterSpacing: "0.5px", marginBottom: "8px", textTransform: "uppercase" as const }}>
                {role.period}
              </p>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "28px", fontWeight: 500, color: "var(--text)", margin: "0 0 4px 0" }}>
                {role.title}
              </h3>
              <p style={{ fontFamily: "var(--sans)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.5px", color: "var(--accent)", marginBottom: "1.25rem", textTransform: "uppercase" as const }}>
                {role.company}{role.location ? ` \u00B7 ${role.location}` : ""}
              </p>
              <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                {role.bullets.map((b, j) => (
                  <li key={j} style={{ fontFamily: "var(--serif)", fontSize: "17px", lineHeight: 1.75, color: "var(--text-mid)", marginBottom: "4px" }}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}

        {/* Education */}
        <ScrollReveal>
          <div style={{ paddingLeft: "2.5rem", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "-4px",
                top: "6px",
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                backgroundColor: "var(--sage)",
              }}
            />
            <p style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--text-dim)", letterSpacing: "0.5px", marginBottom: "8px", textTransform: "uppercase" as const }}>
              {education.years}
            </p>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: "28px", fontWeight: 500, color: "var(--text)", margin: "0 0 4px 0" }}>
              {education.school}
            </h3>
            <p style={{ fontFamily: "var(--serif)", fontSize: "17px", lineHeight: 1.75, color: "var(--text-mid)", marginBottom: "6px" }}>
              {education.degrees}
            </p>
            <p style={{ fontFamily: "var(--mono)", fontSize: "12px", letterSpacing: "0.5px", color: "var(--sage)", textTransform: "uppercase" as const }}>
              {education.note}
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Tools row — what I picked up along the way */}
      <ScrollReveal>
        <div style={{ marginTop: "3.5rem", paddingTop: "2rem", borderTop: "1px solid var(--border-subtle)" }}>
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.5px",
              color: "var(--text-dim)",
              marginBottom: "12px",
              textTransform: "uppercase" as const,
            }}
          >
            Tools &amp; Stack
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {tools.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.3px",
                  color: "var(--sage)",
                  border: "1px solid var(--sage-light)",
                  backgroundColor: "var(--sage-light)",
                  borderRadius: "4px",
                  padding: "5px 12px",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
