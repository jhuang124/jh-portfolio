"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      style={{ maxWidth: 720, marginBottom: "var(--space-8)" }}
    >
      <ScrollReveal>
        <Image
          src="/jh-portfolio/images/headshot.png"
          alt="John Huang"
          width={120}
          height={120}
          className="about-photo"
        />
        <div className="section-rule" />
        <p className="section-label">About</p>
      </ScrollReveal>

      <ScrollReveal>
        <p
          style={{
            fontSize: "var(--text-lg)",
            color: "var(--text)",
            lineHeight: "var(--leading-relaxed)",
            margin: "0 0 var(--space-5) 0",
          }}
        >
          I grew up working in my family&apos;s business, a small dollar store in
          the Midwest. That&apos;s where I learned to care about what makes someone
          come back the next week. I studied economics and engineering at Columbia,
          then brought that same instinct to The Atlantic, where I&apos;ve spent the
          last four years building subscription products.
        </p>

        <div className="pull-quote">
          &mdash; Figuring out what people would actually pay for, and making sure
          they kept paying.
        </div>

        <p
          style={{
            fontSize: "var(--text-sm)",
            color: "var(--text-mid)",
            lineHeight: "var(--leading-relaxed)",
            margin: 0,
          }}
        >
          Today I own monetization, lifecycle, and billing infrastructure across
          The Atlantic&apos;s digital products. I&apos;m looking for my next role at a
          company where product quality and business model are the same conversation.
        </p>
      </ScrollReveal>
    </section>
  );
}
