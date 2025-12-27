type GigiBalangBarProps = {
  className?: string;
};

export default function GigiBalangBar({ className }: GigiBalangBarProps) {
  // Motif gigi balang sederhana, clean, cocok untuk theme putih
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="96" height="16" viewBox="0 0 96 16">
    <rect width="96" height="16" fill="white"/>
    <path d="M0 16 L6 4 L12 16 L18 4 L24 16 L30 4 L36 16 L42 4 L48 16 L54 4 L60 16 L66 4 L72 16 L78 4 L84 16 L90 4 L96 16 Z"
      fill="#10b981" opacity="0.16"/>
    <path d="M0 16 L6 7 L12 16 L18 7 L24 16 L30 7 L36 16 L42 7 L48 16 L54 7 L60 16 L66 7 L72 16 L78 7 L84 16 L90 7 L96 16 Z"
      fill="#f59e0b" opacity="0.18"/>
    <rect x="0" y="0" width="96" height="1" fill="#e5e7eb"/>
  </svg>`;

  const bg = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

  return (
    <div
      className={className ?? ""}
      style={{
        backgroundImage: bg,
        backgroundRepeat: "repeat-x",
        backgroundSize: "96px 16px",
        height: "16px",
        width: "100%",
      }}
      aria-hidden="true"
    />
  );
}
