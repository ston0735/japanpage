"use client";

import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CONTACT, SITE } from "@/lib/site";
import { trackPurchase } from "@/lib/tracking";

const NAV_LINKS = [
  { href: "/#course", label: "コース内容" },
  { href: "/blog", label: "養生ノート" },
  { href: "/advisor", label: "AI 養生相談" },
  { href: "/tokushoho", label: "特定商取引法" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-ink-200/60 bg-honey-50/85 backdrop-blur supports-[backdrop-filter]:bg-honey-50/70">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
          aria-label={SITE.name}
        >
          <span
            aria-hidden="true"
            className="grid h-11 w-11 place-items-center rounded-full border border-honey-400/40 bg-white font-display italic text-2xl text-honey-600 shadow-sm"
          >
            養
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-xl text-ink-900">
              {SITE.name}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-500">
              Best · Health
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-700 transition-colors hover:text-honey-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex bg-[var(--color-line)] hover:bg-[var(--color-line-dark)] text-white rounded-full px-5"
            onClick={trackPurchase}
          >
            <a
              href={CONTACT.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-1.5 h-4 w-4" />
              LINE で無料特典を受取
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="メニューを開く"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-honey-50">
              <SheetHeader>
                <SheetTitle className="font-display text-2xl text-ink-900">
                  メニュー
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-2 px-4 pb-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-3 text-lg text-ink-900 hover:bg-honey-100"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={CONTACT.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackPurchase}
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-line)] px-4 py-3 text-base font-medium text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  LINE で無料特典を受取
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
