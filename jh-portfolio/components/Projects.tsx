"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { PressGallery } from "@/components/ui/press-gallery";

const press = [
  {
    id: "press-1",
    title: "The Atlantic Tops 1 Million Subscriptions and Reaches Profitability",
    summary: "Revenue up 10% to nearly $100M, with subscriptions doubling since digital launch. The culmination of four years of subscription product work.",
    date: "March 2024",
    url: "https://www.theatlantic.com/press-releases/archive/2024/03/atlantic-tops-1-million-subscriptions-and-profitability/677905/",
    image: "/images/press-million.avif",
  },
  {
    id: "press-2",
    title: "The Atlantic Gives Free Digital Access to All U.S. Public High Schools",
    summary: "IP-based access program expanded from 200+ institutions to every public high school in America, reaching millions of students.",
    date: "September 2025",
    url: "https://www.theatlantic.com/press-releases/archive/2025/09/atlantic-gives-free-digital-access-high-schools/684221/",
    image: "/images/press-highschool.avif",
  },
  {
    id: "press-3",
    title: "The Atlantic Introduces Premium Plus Subscription",
    summary: "A new shared subscription tier with family sharing for up to four people, the first new tier since digital launch. Drove 220% lift in upgrade revenue.",
    date: "January 2026",
    url: "https://www.theatlantic.com/press-releases/2026/01/atlantic-introduces-premium-plus-subscription/685620/",
    image: "/images/press-premiumplus.avif",
  },
];

const projects = [
  {
    theme: "Growth",
    name: "Subscription growth & monetization",
    hero: "220%",
    heroLabel: "upgrade revenue lift",
    description:
      "Pricing experimentation, new product launches, and acquisition optimization across the full subscription funnel.",
    metrics: [
      { value: "220%", label: "Upgrade Revenue Lift" },
      { value: "12%", label: "Acquisition Revenue Lift" },
    ],
    tags: ["Pricing", "A/B Testing", "0\u21921 Launch", "Revenue"],
  },
  {
    theme: "Retention",
    name: "Retention & subscriber lifecycle",
    hero: "\u221217%",
    heroLabel: "voluntary churn",
    description:
      "Cancel/save flows, personalized onboarding, and engagement-driven retention programs that reduce churn and build habit.",
    metrics: [
      { value: "\u221217%", label: "Voluntary Churn" },
      { value: "190K", label: "App Downloads Driven" },
    ],
    tags: ["Churn", "Onboarding", "Engagement", "Lifecycle"],
  },
  {
    theme: "Platform",
    name: "Platform & billing infrastructure",
    hero: "\u221280%",
    heroLabel: "support call volume",
    description:
      "Billing migrations, self-service tools, and marketing-configurable surfaces that reduce engineering dependency.",
    metrics: [
      { value: "\u221280%", label: "Support Call Volume" },
      { value: "6 mo", label: "Stripe \u2192 Zuora Migration" },
    ],
    tags: ["Zuora", "Zephr", "Infrastructure", "Self-Service"],
  },
  {
    theme: "Access",
    name: "School access & institutional reach",
    hero: "~3M",
    heroLabel: "students reached",
    description:
      "Conceived and led an IP-based access program that expanded reach to educational institutions, unlocking a new B2B distribution channel.",
    metrics: [
      { value: "2K+", label: "Schools Enrolled" },
      { value: "~3M", label: "Students Reached" },
    ],
    tags: ["B2B", "Distribution", "Access", "Education"],
  },
];

function AccordionRow({ project }: { project: typeof projects[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid var(--border)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "2rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flex: 1, minWidth: 0 }}>
          <span
            style={{
              fontFamily: "var(--sans)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.5px",
              color: "var(--accent)",
              textTransform: "uppercase" as const,
              flexShrink: 0,
              width: "80px",
            }}
          >
            {project.theme}
          </span>
          <span
            style={{
              fontFamily: "var(--serif)",
              fontSize: "20px",
              fontWeight: 500,
              color: "var(--text)",
              lineHeight: 1.3,
            }}
          >
            {project.name}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexShrink: 0 }}>
          <div style={{ textAlign: "right" }}>
            <span style={{ fontFamily: "var(--stat)", fontSize: "24px", color: "var(--text)", lineHeight: 1, letterSpacing: "0.3px" }}>
              {project.hero}
            </span>
            <span style={{ fontFamily: "var(--mono)", fontSize: "10px", color: "var(--text-dim)", letterSpacing: "0.3px", textTransform: "uppercase" as const, display: "block", marginTop: "2px" }}>
              {project.heroLabel}
            </span>
          </div>
          <span
            style={{
              fontFamily: "var(--sans)",
              fontSize: "18px",
              color: "var(--text-dim)",
              transition: "transform 0.3s ease",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              lineHeight: 1,
            }}
          >
            &#8964;
          </span>
        </div>
      </button>

      <div
        style={{
          maxHeight: open ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div style={{ padding: "0 0 24px 0", paddingLeft: "calc(80px + 1.5rem)" }}>
          <p style={{ fontFamily: "var(--serif)", fontSize: "15px", lineHeight: 1.65, color: "var(--text-mid)", margin: "0 0 16px 0", maxWidth: "560px" }}>
            {project.description}
          </p>
          <div style={{ display: "flex", gap: "2rem", marginBottom: "12px" }}>
            {project.metrics.map((m, j) => (
              <div key={j}>
                <div style={{ fontFamily: "var(--stat)", fontSize: "28px", color: "var(--text)", lineHeight: 1, letterSpacing: "0.3px" }}>{m.value}</div>
                <div style={{ fontFamily: "var(--mono)", fontSize: "10px", color: "var(--text-dim)", marginTop: "4px", letterSpacing: "0.3px", textTransform: "uppercase" as const }}>{m.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {project.tags.map((t) => (
              <span key={t} style={{ fontFamily: "var(--sans)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3px", color: "var(--text-dim)", border: "1px solid var(--border)", borderRadius: "4px", padding: "4px 10px" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-transition"
      style={{
        padding: "120px 3rem",
        maxWidth: "1240px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      {/* Section label */}
      <ScrollReveal>
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ width: "40px", height: "3px", backgroundColor: "var(--accent)", marginBottom: "12px" }} />
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
          <div style={{ width: "100%", height: "1px", backgroundColor: "var(--border-subtle)" }} />
        </div>
      </ScrollReveal>

      {/* Press carousel */}
      <ScrollReveal>
        <PressGallery items={press} />
      </ScrollReveal>

      {/* Accordion — detail on demand */}
      <ScrollReveal>
        <div style={{ marginTop: "3rem", borderTop: "1px solid var(--border)" }}>
          {projects.map((p, i) => (
            <AccordionRow key={i} project={p} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
