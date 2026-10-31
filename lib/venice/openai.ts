// ─────────────────────────────────────────────────────────────────────────────
// API-key Venice client — plain OpenAI-compatible access.
//
// Separate from VeniceClient (client.ts), which authenticates via x402 only.
// Use this for simple chat calls authenticated with VENICE_API_KEY.
// Server-side only: never import this from client components.
// ─────────────────────────────────────────────────────────────────────────────

import OpenAI from "openai";

export const VENICE_DEFAULT_MODEL = "zai-org-glm-5-2";

/** Build an OpenAI SDK client pointed at Venice, keyed from the environment. */
export function veniceOpenAI(env: NodeJS.ProcessEnv = process.env): OpenAI {
  const apiKey = env.VENICE_API_KEY;
  if (!apiKey) {
    throw new Error("VENICE_API_KEY is not set. Add it to .env / .env.local.");
  }
  return new OpenAI({
    apiKey,
    baseURL: env.VENICE_BASE_URL || "https://api.venice.ai/api/v1",
  });
}
