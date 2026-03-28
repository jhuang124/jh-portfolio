"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "var(--space-10) var(--space-7)",
        maxWidth: "var(--container)",
        margin: "0 auto",
      }}
    >
      <ScrollReveal>
        <div className="section-rule" />
        <p className="section-label">About</p>
      </ScrollReveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.75fr 1.25fr",
          gap: "var(--space-8)",
          alignItems: "start",
        }}
      >
        {/* Photo — left */}
        <ScrollReveal direction="left">
          <div>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 6,
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <Image
                src="/images/headshot.png"
                alt="John Huang"
                width={400}
                height={500}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  aspectRatio: "4 / 5",
                  display: "block",
                }}
              />
            </div>
            {/* Overlapping detail card */}
            <div
              style={{
                position: "relative",
                marginTop: -20,
                marginLeft: "auto",
                marginRight: 16,
                width: "fit-content",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 6,
                padding: "12px 20px",
                boxShadow: "var(--shadow-sm)",
                zIndex: 1,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "var(--text-xs)",
                  color: "var(--text-dim)",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                4 years at The Atlantic
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Bio — right */}
        <ScrollReveal direction="right">
          <div>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "var(--text-lg)",
                color: "var(--text)",
                lineHeight: "var(--leading-relaxed)",
                margin: "0 0 var(--space-5) 0",
              }}
            >
              I grew up working in my family&apos;s business, a small dollar store in the Midwest.
              That&apos;s where I learned to care about what makes someone reach for their wallet
              and come back the next week. I studied economics and philosophy at Columbia,
              then brought that same instinct to The Atlantic, where I&apos;ve spent the last four
              years building subscription products.
            </p>

            {/* Pull quote */}
            <div className="pull-quote">
              &mdash; Figuring out what people would actually pay for, and making sure they kept paying.
            </div>

            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "17px",
                color: "var(--text-mid)",
                lineHeight: "var(--leading-relaxed)",
                margin: 0,
              }}
            >
              Today I own monetization, lifecycle, and billing infrastructure across The Atlantic&apos;s
              digital products. I&apos;m looking for my next role at a company where product quality
              and business model are the same conversation.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
