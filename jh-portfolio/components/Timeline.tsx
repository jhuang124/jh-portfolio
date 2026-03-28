"use client";

import ScrollReveal from "./ScrollReveal";

const roles = [
  {
    company: "The Atlantic",
    title: "Product Manager, Subscriptions & Monetization",
    period: "JAN 2023 — PRESENT",
    bullets: [
      "Led 0→1 launch of Premium Plus, a shared subscription tier — drove 220% lift in upgrade revenue and 8% lift in acquisition AOV",
      "Built behavioral model linking early engagement to retention; launched personalized onboarding driving 190K app downloads and 230K newsletter signups",
      "Owned cancel/save feature across multiple phases — reduced cancellation rate by 11% and voluntary churn by 17%",
      "Migrated subscription stack from Stripe to Zuora/Zephr, moving paywall and pricing into marketing-configurable surfaces",
    ],
  },
  {
    company: "The Atlantic",
    title: "Associate Product Manager",
    period: "SEP 2021 — DEC 2022",
    bullets: [
      "Owned acquisition pricing experimentation across all subscription products — drove 12% lift in acquisition revenue",
      "Built first sales tax engine in Avalara, enabling compliant collection across all 50 states",
      "Launched self-service upgrade/downgrade flows, reducing customer care call volume by 80%",
    ],
  },
  {
    company: "Dollar and Wholesale Store",
    title: "General Manager",
    period: "2012 — 2021",
    location: "Orlando & Tampa, FL",
    bullets: [
      "Ran family retail business end-to-end — operations, inventory, vendor negotiations, and customer relationships",
      "Planned and executed second location expansion to Tampa, driving 53% revenue growth",
    ],
  },
];

const education = {
  school: "Columbia University, Columbia College",
  degrees: "B.A. Economics-Political Science · B.S. Mechanical Engineering",
  years: "2020 — 2021",
  note: "QuestBridge Scholar",
};

export default function Timeline() {
  return (
    <section
      id="timeline"
      style={{
        padding: "120px 3rem",
        maxWidth: "1240px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      {/* Section label */}
      <ScrollReveal>
        <div style={{ marginBottom: "3.5rem" }}>
          <div
            style={{
              width: "40px",
              height: "3px",
              backgroundColor: "var(--accent)",
              marginBottom: "12px",
            }}
          />
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.8px",
              color: "var(--text-dim)",
              marginBottom: "12px",
              textTransform: "uppercase" as const,
            }}
          >
            Career
          </p>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "var(--border-subtle)",
            }}
          />
        </div>
      </ScrollReveal>

      {/* Timeline entries */}
      <div style={{ position: "relative" }}>
        {/* Vertical rule */}
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
                paddingBottom: i < roles.length - 1 ? "3.5rem" : "3.5rem",
                position: "relative",
              }}
            >
              {/* Dot */}
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

              {/* Date */}
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "12px",
                  color: "var(--text-dim)",
                  letterSpacing: "0.5px",
                  marginBottom: "8px",
                  textTransform: "uppercase" as const,
                }}
              >
                {role.period}
              </p>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "28px",
                  fontWeight: 500,
                  color: "var(--text)",
                  margin: "0 0 4px 0",
                }}
              >
                {role.title}
              </h3>

              {/* Company */}
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  color: "var(--accent)",
                  marginBottom: "1.25rem",
                  textTransform: "uppercase" as const,
                }}
              >
                {role.company}
                {"location" in role ? ` · ${role.location}` : ""}
              </p>

              {/* Bullets */}
              <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                {role.bullets.map((b, j) => (
                  <li
                    key={j}
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "17px",
                      lineHeight: 1.75,
                      color: "var(--text-mid)",
                      marginBottom: "4px",
                    }}
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}

        {/* Education entry */}
        <ScrollReveal>
          <div
            style={{
              paddingLeft: "2.5rem",
              position: "relative",
            }}
          >
            {/* Dot */}
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

            {/* Date */}
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12px",
                color: "var(--text-dim)",
                letterSpacing: "0.5px",
                marginBottom: "8px",
                textTransform: "uppercase" as const,
              }}
            >
              {education.years}
            </p>

            {/* School */}
            <h3
              style={{
                fontFamily: "var(--serif)",
                fontSize: "28px",
                fontWeight: 500,
                color: "var(--text)",
                margin: "0 0 4px 0",
              }}
            >
              {education.school}
            </h3>

            {/* Degrees */}
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "17px",
                lineHeight: 1.75,
                color: "var(--text-mid)",
                marginBottom: "6px",
              }}
            >
              {education.degrees}
            </p>

            {/* QuestBridge */}
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12px",
                letterSpacing: "0.5px",
                color: "var(--accent)",
                textTransform: "uppercase" as const,
              }}
            >
              {education.note}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
