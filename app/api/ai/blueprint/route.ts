import { NextResponse } from "next/server";

import { createOpenAIClient } from "@/lib/ai/openai";
import { appBlueprintSystemPrompt } from "@/lib/ai/prompts";
import type { BlueprintRequest } from "@/types/platform";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<BlueprintRequest>;

  if (!body.prompt || body.prompt.trim().length < 12) {
    return NextResponse.json(
      { error: "Provide a clear product prompt with at least 12 characters." },
      { status: 400 },
    );
  }

  try {
    const openai = createOpenAIClient();
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL ?? "gpt-4.1-mini",
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: appBlueprintSystemPrompt },
        {
          role: "user",
          content: JSON.stringify({
            prompt: body.prompt,
            audience: body.audience ?? "founders",
            stack: body.stack ?? [
              "Next.js",
              "React",
              "Tailwind",
              "shadcn/ui",
              "Supabase",
              "Vercel",
            ],
          }),
        },
      ],
    });

    return NextResponse.json({
      blueprint: completion.choices[0]?.message.content ?? "{}",
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to generate blueprint.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
