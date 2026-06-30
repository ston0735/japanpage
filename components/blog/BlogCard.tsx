import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/types/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-honey-100">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-honey-50 via-honey-100 to-leaf-50">
            <div className="text-center">
              <p className="font-display italic text-6xl text-honey-700/30 leading-none">
                養
              </p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.3em] text-ink-500">
                Best
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        {post.category && (
          <Badge
            variant="outline"
            className="self-start border-leaf-500 bg-leaf-50 text-leaf-700"
          >
            {post.category}
          </Badge>
        )}
        <h3 className="font-display text-card text-ink-900 line-clamp-2 group-hover:text-honey-600">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-sm text-ink-700 line-clamp-3">{post.excerpt}</p>
        )}
        {post.publishedAt && (
          <p className="mt-auto flex items-center gap-1 text-xs text-ink-500">
            <Calendar className="h-3 w-3" />
            {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
          </p>
        )}
      </div>
    </Link>
  );
}
