export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "2px solid var(--accent)",
        background: "var(--bg-warm)",
        padding: "var(--space-7) var(--space-7)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Brand */}
        <span
          style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontSize: "var(--text-base)",
            color: "var(--text)",
          }}
        >
          John Huang
        </span>

        {/* Built with */}
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: "11px",
            color: "var(--text-dim)",
            letterSpacing: "0.3px",
          }}
        >
          &copy; 2026 John Huang
        </span>

        {/* Links */}
        <div style={{ display: "flex", gap: "var(--space-5)" }}>
          <a
            href="https://www.linkedin.com/in/john-huang-95909a156/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a href="mailto:johnhuang@example.com" className="footer-link">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
