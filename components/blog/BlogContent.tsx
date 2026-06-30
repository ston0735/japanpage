import Image from "next/image";
import type { BlogBlock } from "@/types/blog";

export function BlogContent({ blocks }: { blocks: readonly BlogBlock[] }) {
  return (
    <div className="space-y-4 text-ink-900">
      {blocks.map((block) => {
        switch (block.type) {
          case "heading_1":
            return (
              <h2
                key={block.id}
                className="mt-8 font-display text-3xl text-ink-900"
              >
                {block.content}
              </h2>
            );
          case "heading_2":
            return (
              <h3
                key={block.id}
                className="mt-6 font-display text-2xl text-ink-900"
              >
                {block.content}
              </h3>
            );
          case "heading_3":
            return (
              <h4
                key={block.id}
                className="mt-4 font-display text-xl text-ink-900"
              >
                {block.content}
              </h4>
            );
          case "paragraph":
            return block.content ? (
              <p key={block.id} className="leading-relaxed text-ink-900">
                {block.content}
              </p>
            ) : (
              <div key={block.id} className="h-2" />
            );
          case "bulleted_list_item":
            return (
              <ul key={block.id} className="ml-6 list-disc text-ink-900">
                <li>{block.content}</li>
              </ul>
            );
          case "numbered_list_item":
            return (
              <ol key={block.id} className="ml-6 list-decimal text-ink-900">
                <li>{block.content}</li>
              </ol>
            );
          case "image":
            return block.url ? (
              <figure key={block.id} className="my-6">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                  <Image
                    src={block.url}
                    alt={block.caption ?? ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover"
                  />
                </div>
                {block.caption && (
                  <figcaption className="mt-2 text-center text-sm text-ink-500">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            ) : null;
          case "code":
            return (
              <pre
                key={block.id}
                className="overflow-x-auto rounded-md bg-ink-900 p-4 font-mono text-sm text-honey-50"
              >
                <code>{block.content}</code>
              </pre>
            );
          case "quote":
            return (
              <blockquote
                key={block.id}
                className="border-l-4 border-honey-400 bg-honey-50 px-4 py-3 italic text-ink-700"
              >
                {block.content}
              </blockquote>
            );
          case "divider":
            return (
              <hr key={block.id} className="my-8 border-ink-200" />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
