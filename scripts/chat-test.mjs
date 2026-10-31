#!/usr/bin/env node
// Minimal /chat/completions check using VENICE_API_KEY (no x402).
//
//   npm run chat-test [-- "your prompt"]

import OpenAI from "openai";

const apiKey = process.env.VENICE_API_KEY;
if (!apiKey) {
  console.error("Set VENICE_API_KEY in .env");
  process.exit(1);
}

const client = new OpenAI({
  apiKey,
  baseURL: process.env.VENICE_BASE_URL || "https://api.venice.ai/api/v1",
});

const model = process.env.VENICE_MODEL || "zai-org-glm-5-2";
const prompt = process.argv[2] || "Reply with exactly: Venice OK";

const res = await client.chat.completions.create({
  model,
  messages: [{ role: "user", content: prompt }],
  max_tokens: 64,
});

console.log("model :", res.model);
console.log("reply :", res.choices[0]?.message?.content);
console.log("usage :", res.usage);
