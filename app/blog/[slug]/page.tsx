import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogContent } from "@/components/blog/BlogContent";
import { getBlogPost } from "@/lib/notion/blog";
import { CONTACT } from "@/lib/site";

export const revalidate = 60;

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "記事が見つかりません" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-honey-600 hover:text-honey-700"
      >
        <ArrowLeft className="h-4 w-4" />
        養生ノート一覧へ
      </Link>

      <header className="mt-6">
        {post.category && (
          <Badge
            variant="outline"
            className="border-leaf-500 bg-leaf-50 text-leaf-700"
          >
            {post.category}
          </Badge>
        )}
        <h1 className="mt-3 font-display text-3xl text-ink-900 md:text-4xl">
          {post.title}
        </h1>
        {post.publishedAt && (
          <p className="mt-3 flex items-center gap-1 text-sm text-ink-500">
            <Calendar className="h-3 w-3" />
            {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
          </p>
        )}
      </header>

      {post.coverImage && (
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-honey-100">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      )}

      {post.content && post.content.length > 0 && (
        <div className="mt-10">
          <BlogContent blocks={post.content} />
        </div>
      )}

      <aside className="mt-16 rounded-2xl bg-honey-100 p-6 md:p-8">
        <p className="font-display text-xl text-ink-900">
          この記事はお役に立ちましたか？
        </p>
        <p className="mt-2 text-ink-700">
          健康維持コースで、より体系的に養生を学びませんか。期間限定で全コンテンツを無料公開中です。
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            asChild
            className="bg-[var(--color-line)] text-white hover:bg-[var(--color-line-dark)]"
          >
            <a
              href={CONTACT.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              LINE で無料特典を受取
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-honey-500 text-honey-700 hover:bg-honey-50"
          >
            <Link href="/advisor">
              AI 養生アドバイザー
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </aside>
    </article>
  );
}
