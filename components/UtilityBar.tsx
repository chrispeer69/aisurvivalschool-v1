type Props = {
  left: string;
  right: string;
  tone?: "light" | "dark";
};

export function UtilityBar({ left, right, tone = "light" }: Props) {
  const base =
    tone === "dark"
      ? "bg-steel text-paper/80 border-b border-steel-line"
      : "bg-paper-dim/60 text-ink-mid border-b border-ink/10";
  return (
    <div className={`${base} text-[0.72rem] tracking-wider`}>
      <div className="mx-auto max-w-editorial px-5 sm:px-8 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <span className="uppercase">{left}</span>
        <span className="uppercase">{right}</span>
      </div>
    </div>
  );
}
