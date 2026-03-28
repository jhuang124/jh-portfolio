"use client";

import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    name: "Subscription growth & monetization",
    theme: "Growth",
    description:
      "Pricing experimentation, new product launches, and acquisition optimization across the full subscription funnel.",
    metrics: [
      { value: "220%", label: "Upgrade Revenue Lift" },
      { value: "12%", label: "Acquisition Revenue Lift" },
    ],
    tags: ["Pricing", "A/B Testing", "0→1 Launch", "Revenue"],
  },
  {
    name: "Retention & subscriber lifecycle",
    theme: "Retention",
    description:
      "Cancel/save flows, personalized onboarding, and engagement-driven retention programs that reduce churn and build habit.",
    metrics: [
      { value: "−17%", label: "Voluntary Churn" },
      { value: "190K", label: "App Downloads Driven" },
    ],
    tags: ["Churn", "Onboarding", "Engagement", "Lifecycle"],
  },
  {
    name: "Platform & billing infrastructure",
    theme: "Platform",
    description:
      "Billing migrations, self-service tools, and marketing-configurable surfaces that reduce engineering dependency.",
    metrics: [
      { value: "−80%", label: "Support Call Volume" },
      { value: "6 mo", label: "Stripe → Zuora Migration" },
    ],
    tags: ["Zuora", "Zephr", "Infrastructure", "Self-Service"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
            Selected Work
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

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((p, i) => (
          <ScrollReveal key={i}>
            <div
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "32px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                transition:
                  "box-shadow 0.2s, border-color 0.2s, transform 0.2s",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(0,0,0,0.08)";
                e.currentTarget.style.borderColor = "rgba(194,123,91,0.25)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 1px 3px rgba(0,0,0,0.04)";
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Theme label */}
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  color: "var(--accent)",
                  margin: 0,
                  textTransform: "uppercase" as const,
                }}
              >
                {p.theme}
              </p>

              {/* Project name */}
              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "24px",
                  fontWeight: 500,
                  color: "var(--text)",
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {p.name}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: "var(--text-mid)",
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                {p.description}
              </p>

              {/* Metrics */}
              <div style={{ display: "flex", gap: "2rem", marginTop: "8px" }}>
                {p.metrics.map((m, j) => (
                  <div key={j}>
                    <div
                      style={{
                        fontFamily: "var(--stat)",
                        fontSize: "32px",
                        color: "var(--text)",
                        lineHeight: 1,
                        letterSpacing: "0.3px",
                      }}
                    >
                      {m.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "11px",
                        color: "var(--text-dim)",
                        marginTop: "4px",
                        letterSpacing: "0.3px",
                        textTransform: "uppercase" as const,
                      }}
                    >
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  flexWrap: "wrap",
                  marginTop: "8px",
                }}
              >
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.3px",
                      color: "var(--text-dim)",
                      border: "1px solid var(--border)",
                      borderRadius: "4px",
                      padding: "4px 10px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
