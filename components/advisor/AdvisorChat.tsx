"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import ReactMarkdown from "react-markdown";
import { Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT } from "@/lib/site";

const QUICK_QUESTIONS = [
  "最近、寝つきが悪く朝もだるい。中医学的にどう整えれば？",
  "夏でも手足が冷えやすいのですが、改善のヒントは？",
  "胃もたれが続いています。食事と養生で整える方法は？",
  "ストレスでイライラしやすい。気の巡りを整えたいです。",
];

export function AdvisorChat() {
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/advisor" }),
  });

  const isStreaming = status === "submitted" || status === "streaming";

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  function handleSubmit(text: string) {
    const value = text.trim();
    if (!value || isStreaming) return;
    sendMessage({ text: value });
    setInput("");
  }

  return (
    <div className="flex h-[calc(100vh-200px)] min-h-[500px] flex-col rounded-2xl border border-honey-100 bg-white shadow-sm">
      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4 md:p-6">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center pt-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-honey-100">
              <Sparkles className="h-8 w-8 text-honey-600" />
            </div>
            <h3 className="mt-4 font-display text-2xl text-ink-900">
              ベスト AI 養生アドバイザー
            </h3>
            <p className="mt-2 max-w-md text-ink-700">
              気になる体調や悩みを入力してください。中医学の視点からやさしくお答えします。
            </p>
            <div className="mt-6 grid w-full max-w-2xl grid-cols-1 gap-2 sm:grid-cols-2">
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSubmit(q)}
                  className="rounded-xl border border-honey-200 bg-honey-50 px-4 py-3 text-left text-sm text-ink-900 transition hover:border-honey-400 hover:bg-honey-100"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  m.role === "user"
                    ? "bg-honey-100 text-ink-900"
                    : "border border-honey-100 bg-white text-ink-900"
                }`}
              >
                {m.parts?.map((part, idx) => {
                  if (part.type === "text") {
                    return m.role === "assistant" ? (
                      <div
                        key={idx}
                        className="prose prose-sm max-w-none prose-p:text-ink-900 prose-strong:text-honey-700"
                      >
                        <ReactMarkdown>{part.text}</ReactMarkdown>
                      </div>
                    ) : (
                      <p key={idx} className="whitespace-pre-wrap text-sm">
                        {part.text}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          ))
        )}
        {isStreaming && messages[messages.length - 1]?.role === "user" && (
          <div className="flex justify-start">
            <div className="rounded-2xl border border-honey-100 bg-white px-4 py-3 text-sm text-ink-500">
              アドバイザーが考えています…
            </div>
          </div>
        )}
        {error && (
          <div className="rounded-xl border border-warn-500/40 bg-warn-500/10 px-4 py-3 text-sm text-ink-900">
            接続できませんでした。しばらくしてから再度お試しください。
          </div>
        )}
      </div>

      <div className="border-t border-honey-100 p-3 md:p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(input);
          }}
          className="flex items-end gap-2"
        >
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(input);
              }
            }}
            placeholder="気になる体調・お悩みを入力 (Enter で送信)"
            rows={2}
            className="min-h-[60px] resize-none border-honey-200 focus-visible:ring-honey-400"
            disabled={isStreaming}
          />
          <Button
            type="submit"
            disabled={!input.trim() || isStreaming}
            className="bg-honey-500 text-white hover:bg-honey-600"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
        <p className="mt-2 text-center text-xs text-ink-500">
          AI のご案内は参考情報です。診断・治療は医療機関にご相談ください。詳しい個別相談は LINE {CONTACT.lineId} へ。
        </p>
      </div>
    </div>
  );
}
