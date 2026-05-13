import { NextResponse } from "next/server";

import { createOpenAIClient } from "@/lib/ai/openai";
import { beautifulRefinementSystemPrompt } from "@/lib/ai/prompts";

export const runtime = "nodejs";

type RefinementRequest = {
  specification?: unknown;
  focus?: string[];
};

export async function POST(request: Request) {
  const body = (await request.json()) as RefinementRequest;

  if (!body.specification) {
    return NextResponse.json(
      { error: "Provide an app specification to refine." },
      { status: 400 },
    );
  }

  try {
    const openai = createOpenAIClient();
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL ?? "gpt-4.1-mini",
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: beautifulRefinementSystemPrompt },
        {
          role: "user",
          content: JSON.stringify({
            specification: body.specification,
            focus: body.focus ?? [
              "premium light UI",
              "responsiveness",
              "component hierarchy",
              "conversion copy",
            ],
          }),
        },
      ],
    });

    return NextResponse.json({
      refinements: completion.choices[0]?.message.content ?? "{}",
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to refine specification.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
