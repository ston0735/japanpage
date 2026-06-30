import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import { getBlogPosts } from "@/lib/notion/blog";

export async function BlogPreview() {
  const posts = await getBlogPosts();
  const latest = posts.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-honey-50 py-20 md:py-28">
      <div className="editorial-num">09</div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-700/80">
            09
          </span>
          <div className="section-divider" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-honey-700/80">
            Journal
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-ink-900 leading-[1.2]">
              養生ノート。
            </h2>
            <p className="mt-4 text-base text-ink-700 max-w-md">
              四季の養生、経絡保健、薬膳のヒントなど、毎週更新する読みものです。
            </p>
          </div>
          <Button
            asChild
            variant="ghost"
            className="hidden text-honey-600 hover:bg-honey-100 sm:inline-flex"
          >
            <Link href="/blog">
              すべての記事を見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {latest.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-ink-200 bg-white p-12 text-center">
            <p className="text-ink-700">記事を準備中です。もう少しお待ちください。</p>
          </div>
        )}
      </div>
    </section>
  );
}
