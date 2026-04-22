// HeroIllustration.tsx
export default function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="w-full max-w-md">
      <rect x="50" y="80" width="80" height="120" fill="var(--primary)" />
      <rect x="150" y="60" width="80" height="140" fill="var(--accent)" />
      <rect x="250" y="100" width="80" height="100" fill="var(--primary)" />
    </svg>
  );
}
