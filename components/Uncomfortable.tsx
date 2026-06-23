// The #UNCOMFORTABLE book wordmark — LIVESTRONG-inspired ("Armstrong")
// yellow (#FFD700) in the Oswald condensed bold font. Use anywhere the
// book is named in body copy so the brand reads consistently.
export function Uncomfortable({ className = "" }: { className?: string }) {
  return <span className={`uncomfortable ${className}`}>#UNCOMFORTABLE</span>;
}
