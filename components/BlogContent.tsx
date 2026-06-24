import Link from "next/link";
import type { BlogBlock } from "@/content/blog";

// Render **bold** spans inside body text.
function inline(text: string, keyBase: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) => {
    if (chunk.startsWith("**") && chunk.endsWith("**")) {
      return (
        <strong key={`${keyBase}-${i}`} className="font-semibold text-ink">
          {chunk.slice(2, -2)}
        </strong>
      );
    }
    return <span key={`${keyBase}-${i}`}>{chunk}</span>;
  });
}

// Highlight [bracketed] fill-ins inside prompt blocks.
function prompt(text: string, keyBase: string) {
  return text.split(/(\[[^\]]+\])/g).map((chunk, i) =>
    chunk.startsWith("[") && chunk.endsWith("]") ? (
      <span key={`${keyBase}-${i}`} className="text-orange">
        {chunk}
      </span>
    ) : (
      <span key={`${keyBase}-${i}`}>{chunk}</span>
    ),
  );
}

export function BlogContent({ blocks }: { blocks: readonly BlogBlock[] }) {
  return (
    <div className="max-w-2xl mx-auto">
      {blocks.map((block, i) => {
        const key = `b-${i}`;
        switch (block.type) {
          case "h2":
            return (
              <h2 key={key} className="serif text-[1.6rem] sm:text-[2rem] leading-tight mt-12 mb-4">
                {block.text}
              </h2>
            );
          case "quote":
            return (
              <blockquote
                key={key}
                className="my-9 border-l-4 border-orange pl-6 serif italic text-[1.4rem] sm:text-[1.6rem] leading-snug text-ink"
              >
                {block.text}
              </blockquote>
            );
          case "list":
            return block.ordered ? (
              <ol key={key} className="my-6 list-decimal pl-6 space-y-3 text-ink-mid leading-relaxed">
                {block.items.map((it, j) => (
                  <li key={`${key}-${j}`}>{inline(it, `${key}-${j}`)}</li>
                ))}
              </ol>
            ) : (
              <ul key={key} className="my-6 list-disc pl-6 space-y-3 text-ink-mid leading-relaxed">
                {block.items.map((it, j) => (
                  <li key={`${key}-${j}`}>{inline(it, `${key}-${j}`)}</li>
                ))}
              </ul>
            );
          case "prompt":
            return (
              <pre
                key={key}
                className="my-7 bg-steel text-paper/90 border border-steel-line rounded-sm p-5 text-sm leading-relaxed whitespace-pre-wrap font-mono overflow-x-auto"
              >
                {prompt(block.text, key)}
              </pre>
            );
          case "callout":
            return (
              <div key={key} className="my-9 bg-steel text-paper p-6 sm:p-7 rounded-sm">
                <p className="text-paper/85 leading-relaxed">{block.text}</p>
                {block.href && block.linkLabel ? (
                  <Link
                    href={block.href}
                    className="mt-3 inline-flex text-orange font-semibold hover:text-paper transition-colors"
                  >
                    {block.linkLabel}
                  </Link>
                ) : null}
              </div>
            );
          default:
            return (
              <p key={key} className="my-5 text-ink-mid text-[1.05rem] leading-relaxed">
                {inline(block.text, key)}
              </p>
            );
        }
      })}
    </div>
  );
}
