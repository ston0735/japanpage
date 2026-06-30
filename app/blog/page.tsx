import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";
import { getBlogPosts } from "@/lib/notion/blog";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "養生ノート",
  description:
    "四季の養生、経絡保健、薬膳のヒントなど、ベストの中医師チームが執筆する読みもの。",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
      <header className="mb-10">
        <h1 className="font-display text-section text-ink-900 md:text-4xl">
          養生ノート
        </h1>
        <p className="mt-2 text-base text-ink-700">
          四季の養生、経絡保健、薬膳のヒントを毎週お届けします。
        </p>
      </header>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-ink-200 bg-white p-16 text-center">
          <p className="font-display text-2xl text-ink-900">記事を準備中です</p>
          <p className="mt-3 text-ink-700">
            ベストの中医師チームが第一弾の養生ノートを準備中です。もう少しお待ちください。
          </p>
        </div>
      )}
    </div>
  );
}
