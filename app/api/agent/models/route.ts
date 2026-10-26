import { veniceFromEnv } from "@/lib/venice/client";

type ModelOption = { id: string; [key: string]: unknown };

async function fetchLiveModels(baseUrl: string, headers: HeadersInit): Promise<ModelOption[]> {
  const response = await fetch(`${baseUrl}/models`, { headers, cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to fetch Venice models (${response.status})`);
  }

  const payload: unknown = await response.json();
  if (!payload || typeof payload !== "object" || !("data" in payload) || !Array.isArray(payload.data)) {
    throw new Error("Venice returned an invalid models response");
  }

  return payload.data.filter(
    (model): model is ModelOption =>
      !!model && typeof model === "object" && "id" in model && typeof model.id === "string",
  );
}

function buildCatalog(live: ModelOption[]): ModelOption[] {
  return live;
}

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/models
 * Returns the curated model picker options (private E2EE vs web-capable top
 * models), intersected with what's actually live in the Venice catalog.
 */
export async function GET() {
  try {
    const client = veniceFromEnv();
    // /models is listed with the x402 wallet credential like everything else.
    const headers = await client.authHeadersFor(`${client.config.baseUrl}/models`);

    const live = await fetchLiveModels(client.config.baseUrl, headers);
    const options = buildCatalog(live);

    return Response.json({
      ok: true,
      defaultPrivate: client.config.e2eeModel,
      options,
    });
  } catch (err) {
    return Response.json(
      { ok: false, error: err instanceof Error ? err.message : String(err) },
      { status: 500 },
    );
  }
}