import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { google } from "@ai-sdk/google";
import { SYSTEM_PROMPT } from "@/lib/ai/advisor-prompt";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(req: Request) {
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return Response.json(
      { error: "AI アドバイザーは現在準備中です。管理者にお問い合わせください。" },
      { status: 503 },
    );
  }

  let messages: UIMessage[];
  try {
    const body = (await req.json()) as { messages?: UIMessage[] };
    if (!Array.isArray(body.messages) || body.messages.length === 0) {
      return Response.json({ error: "ご質問を入力してください。" }, { status: 400 });
    }
    messages = body.messages;
  } catch {
    return Response.json({ error: "リクエスト形式が正しくありません。" }, { status: 400 });
  }

  const result = streamText({
    model: google("gemini-2.5-flash"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
    maxOutputTokens: 4000,
  });

  return result.toUIMessageStreamResponse();
}
