import { llmsSummary } from "@/lib/llms";

export function GET() {
  return new Response(llmsSummary(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
