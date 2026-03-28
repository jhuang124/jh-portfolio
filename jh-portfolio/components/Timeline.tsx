"use client";

import ScrollReveal from "./ScrollReveal";

const tools = [
  "Zuora", "Zephr", "Stripe", "Amplitude", "Looker",
  "SQL", "Figma", "Jira", "Claude AI", "Google AI",
];

const roles = [
  {
    period: "Jan 2023 — Present",
    title: "Product Manager",
    company: "The Atlantic",
    color: "var(--accent)",
    highlights: [
      { stat: "220%", label: "upgrade revenue lift", desc: "Led subscription growth and monetization strategy across all digital products" },
      { stat: "−17%", label: "voluntary churn", desc: "Built retention and lifecycle programs reducing cancellations at scale" },
    ],
  },
  {
    period: "Sep 2021 — Dec 2022",
    title: "Associate Product Manager",
    company: "The Atlantic",
    color: "var(--accent)",
    highlights: [
      { stat: "−80%", label: "support call volume", desc: "Rebuilt billing infrastructure and migrated payment platforms end-to-end" },
      { stat: "~3M", label: "students reached", desc: "Launched institutional access program for U.S. public high schools" },
    ],
  },
  {
    period: "2012 — 2021",
    title: "General Manager",
    company: "Dollar Store (Family Business)",
    color: "var(--border-strong)",
    highlights: [
      { stat: "", label: "", desc: "Managed daily operations, vendor relationships, and P&L for a retail business" },
    ],
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      style={{
        padding: "var(--space-10) var(--space-7)",
        maxWidth: "var(--container)",
        margin: "0 auto",
      }}
    >
      <ScrollReveal>
        <div className="section-rule" />
        <p className="section-label">Experience</p>
      </ScrollReveal>

      {/* Vertical timeline */}
      <div style={{ position: "relative", paddingLeft: 48 }}>
        {/* The dotted line */}
        <div
          style={{
            position: "absolute",
            left: 11,
            top: 8,
            bottom: 0,
            width: 0,
            borderLeft: "2px dashed var(--border)",
          }}
        />

        {roles.map((role, i) => (
          <ScrollReveal key={role.period}>
            <div
              style={{
                position: "relative",
                paddingBottom: i < roles.length - 1 ? "var(--space-8)" : "var(--space-6)",
              }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: "absolute",
                  left: -48 + 5,
                  top: 6,
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: role.color,
                  border: "3px solid var(--bg)",
                  boxShadow: `0 0 0 2px ${role.color}`,
                }}
              />

              {/* Period */}
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "var(--text-xs)",
                  color: "var(--text-dim)",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  margin: "0 0 var(--space-2) 0",
                }}
              >
                {role.period}
              </p>

              {/* Title + Company */}
              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "var(--text-xl)",
                  fontWeight: 500,
                  color: "var(--text)",
                  margin: "0 0 2px 0",
                  lineHeight: "var(--leading-snug)",
                }}
              >
                {role.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                  margin: "0 0 var(--space-5) 0",
                }}
              >
                {role.company}
              </p>

              {/* Stat cards row */}
              {role.highlights[0]?.stat && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${role.highlights.length}, 1fr)`,
                    gap: "var(--space-4)",
                  }}
                >
                  {role.highlights.map((h) => (
                    <div
                      key={h.label}
                      className="card"
                      style={{
                        padding: "var(--space-6)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--space-4)",
                      }}
                    >
                      <div>
                        <span
                          style={{
                            fontFamily: "var(--stat)",
                            fontSize: "36px",
                            color: "var(--text)",
                            lineHeight: 1,
                          }}
                        >
                          {h.stat}
                        </span>
                        <p
                          style={{
                            fontFamily: "var(--mono)",
                            fontSize: "10px",
                            color: "var(--text-dim)",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            margin: "8px 0 0 0",
                            lineHeight: 1.3,
                          }}
                        >
                          {h.label}
                        </p>
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--serif)",
                          fontSize: "15px",
                          color: "var(--text-mid)",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {h.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* No-stat description (Dollar Store) */}
              {!role.highlights[0]?.stat && (
                <div
                  className="card"
                  style={{
                    padding: "var(--space-5)",
                    maxWidth: 560,
                    borderLeft: "3px solid var(--border-strong)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "17px",
                      color: "var(--text-mid)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {role.highlights[0].desc}
                  </p>
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}

        {/* Education — sage dot */}
        <ScrollReveal>
          <div style={{ position: "relative", paddingBottom: "var(--space-7)" }}>
            <div
              style={{
                position: "absolute",
                left: -48 + 5,
                top: 6,
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "var(--sage)",
                border: "3px solid var(--bg)",
                boxShadow: "0 0 0 2px var(--sage)",
              }}
            />
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: "var(--text-xs)",
                color: "var(--text-dim)",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                margin: "0 0 var(--space-2) 0",
              }}
            >
              2017 — 2021
            </p>
            <h3
              style={{
                fontFamily: "var(--serif)",
                fontSize: "var(--text-xl)",
                fontWeight: 500,
                color: "var(--text)",
                margin: "0 0 2px 0",
                lineHeight: "var(--leading-snug)",
              }}
            >
              Columbia University
            </h3>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "16px",
                color: "var(--text-mid)",
                margin: "0 0 var(--space-2) 0",
              }}
            >
              B.A. Economics · B.A. Philosophy
            </p>
            <span className="tag" style={{ background: "var(--sage-light)", color: "var(--sage)" }}>
              QuestBridge Scholar
            </span>
          </div>
        </ScrollReveal>
      </div>

      {/* Tools */}
      <ScrollReveal>
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "var(--space-6)" }}>
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: "var(--text-xs)",
              color: "var(--text-dim)",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              marginBottom: "var(--space-3)",
            }}
          >
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
