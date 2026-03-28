import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Background image */}
      <div className="hero-bg">
        <Image
          src="/jh-portfolio/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={75}
        />
      </div>

      {/* Glass card with content */}
      <div className="hero-content">
        {/* Glass pill badge */}
        <div className="hero-badge hero-rule">
          Product Manager
        </div>

        {/* Name */}
        <h1 className="hero-name">
          John Huang
        </h1>

        {/* Tagline */}
        <p className="hero-tagline">
          I build products people choose to pay for and keep paying for.
        </p>

        {/* CTAs */}
        <div className="hero-ctas">
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/john-huang-95909a156/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <ChevronDown size={24} strokeWidth={1.5} />
      </div>
    </section>
  );
}
