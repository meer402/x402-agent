import { config } from "dotenv";

config({ path: [".env.local", ".env"], quiet: true });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!url || !key) {
  console.error("Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY in .env.local.");
  process.exit(1);
}

try {
  // Read-only API discovery verifies the URL and key without needing a table.
  const response = await fetch(new URL("/rest/v1/", url), {
    headers: { apikey: key },
    signal: AbortSignal.timeout(10000),
  });
  if (!response.ok) {
    throw new Error(`Supabase Data API returned HTTP ${response.status}`);
  }
  const schema = await response.json();
  if (!schema.swagger && !schema.openapi) {
    throw new Error("Supabase returned an unexpected API response");
  }
  console.log("Supabase Data API connection verified.");
} catch (error) {
  console.error(error instanceof Error ? error.message : "Supabase connection failed");
  process.exitCode = 1;
}
