"use client";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/john-huang-95909a156/",
  },
  { label: "Email", href: "mailto:huangjohn1997@gmail.com" },
];

export default function Footer() {
  return (
    <footer
      style={{
        padding: "2.5rem 3rem",
        maxWidth: "1240px",
        margin: "0 auto",
        width: "100%",
        borderTop: "1px solid var(--border-subtle)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <p
        style={{
          fontFamily: "var(--serif)",
          fontStyle: "italic",
          fontSize: "16px",
          color: "var(--text-dim)",
          margin: 0,
        }}
      >
        John Huang
      </p>

      <div style={{ display: "flex", gap: "1.5rem" }}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            style={{
              fontFamily: "var(--sans)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.3px",
              color: "var(--text-dim)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-dim)")
            }
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
