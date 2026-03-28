"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";


export default function About() {
  return (
    <section
      id="about"
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
            About
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

      {/* Editorial two-column: bio left, photo right */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Bio — slides in from left */}
        <ScrollReveal direction="left">
          <div>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "20px",
                lineHeight: 1.75,
                color: "var(--text)",
                marginBottom: "1.5rem",
              }}
            >
              I grew up running my family&apos;s retail business in Florida —
              negotiating with vendors, reading customer behavior, and figuring
              out what people would actually pay for. That instinct followed me
              to Columbia, where I studied economics and engineering, and then to
              The Atlantic, where I&apos;ve spent the last four years turning it
              into a subscription product practice.
            </p>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "18px",
                lineHeight: 1.75,
                color: "var(--text-mid)",
              }}
            >
              I own monetization end-to-end: checkout, pricing, retention,
              billing infrastructure, and new product launches. I&apos;m looking
              for my next role where I can bring that same rigor to a product
              people genuinely value.
            </p>
          </div>
        </ScrollReveal>

        {/* Headshot — slides in from right */}
        <ScrollReveal direction="right">
          <div
            style={{
              width: "100%",
              maxWidth: "360px",
              aspectRatio: "4 / 5",
              borderRadius: "10px",
              overflow: "hidden",
              border: "1px solid var(--border)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              justifySelf: "end",
            }}
          >
            <Image
              src="/images/headshot.png"
              alt="John Huang"
              width={360}
              height={450}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </ScrollReveal>
      </div>

    </section>
  );
}
