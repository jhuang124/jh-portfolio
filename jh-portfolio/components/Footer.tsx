export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "var(--space-5) 0",
        textAlign: "center",
      }}
    >
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
    </footer>
  );
}
