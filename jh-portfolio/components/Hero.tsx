"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 3rem",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Soft radial glow */}
      <div
        style={{
          position: "fixed",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "600px",
          background:
            "radial-gradient(ellipse, rgba(194,123,91,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Subtle vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 50%, rgba(0,0,0,0.03) 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Red accent rule */}
        <div
          style={{
            width: "40px",
            height: "3px",
            backgroundColor: "var(--accent)",
            margin: "0 auto 1.5rem",
          }}
        />

        {/* Label */}
        <p
          style={{
            fontFamily: "var(--mono)",
            fontSize: "13px",
            fontWeight: 400,
            letterSpacing: "1px",
            color: "var(--text-dim)",
            marginBottom: "2rem",
            textTransform: "uppercase" as const,
          }}
        >
          Product Manager
        </p>

        {/* Name */}
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(56px, 9vw, 96px)",
            fontWeight: 400,
            lineHeight: 1.05,
            color: "var(--text)",
            margin: "0 0 2rem 0",
            letterSpacing: "-0.3px",
          }}
        >
          John Huang
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(20px, 2.5vw, 24px)",
            color: "var(--text-mid)",
            maxWidth: "600px",
            margin: "0 auto 3rem",
            lineHeight: 1.6,
          }}
        >
          I build products people choose to pay for and keep paying for.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="#contact"
            style={{
              fontFamily: "var(--sans)",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.8px",
              color: "#FFFFFF",
              backgroundColor: "var(--accent)",
              padding: "16px 32px",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "background-color 0.2s",
              textTransform: "uppercase" as const,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--accent-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--accent)")
            }
          >
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/john-huang-95909a156/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--sans)",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.8px",
              color: "var(--text)",
              border: "1px solid var(--border)",
              padding: "16px 32px",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "border-color 0.2s",
              textTransform: "uppercase" as const,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--text)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--border)")
            }
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
