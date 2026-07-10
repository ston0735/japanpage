"use client";

import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { COMPANY, CONTACT, SITE } from "@/lib/site";
import { trackPurchase } from "@/lib/tracking";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-ink-200/60 bg-honey-100/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 md:px-8">
        <div>
          <Link
            href="/"
            aria-label={SITE.name}
            className="inline-flex items-center gap-3"
          >
            <span
              aria-hidden="true"
              className="grid h-11 w-11 place-items-center rounded-full border border-honey-400/40 bg-white font-display italic text-2xl text-honey-600"
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
          <p className="mt-3 text-sm leading-relaxed text-ink-700">
            {SITE.description}
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg text-ink-900">お問合せ</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-700">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-honey-600" aria-hidden="true" />
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="hover:text-honey-600"
              >
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle
                className="h-4 w-4 text-honey-600"
                aria-hidden="true"
              />
              <a
                href={CONTACT.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackPurchase}
                className="hover:text-honey-600"
              >
                LINE：{CONTACT.lineId}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-honey-600" aria-hidden="true" />
              <a
                href={`mailto:${COMPANY.email}`}
                className="hover:text-honey-600 break-all"
              >
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin
                className="mt-0.5 h-4 w-4 text-honey-600"
                aria-hidden="true"
              />
              <span>{COMPANY.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-ink-900">サイトメニュー</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-700">
            <li>
              <Link href="/#course" className="hover:text-honey-600">
                コース内容
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-honey-600">
                養生ノート
              </Link>
            </li>
            <li>
              <Link href="/advisor" className="hover:text-honey-600">
                AI 養生相談
              </Link>
            </li>
            <li>
              <Link href="/tokushoho" className="hover:text-honey-600">
                特定商取引法に基づく表記
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-ink-900 py-4 text-center text-xs text-honey-50">
        © {new Date().getFullYear()} {COMPANY.legalName}｜{SITE.name}
      </div>
    </footer>
  );
}
