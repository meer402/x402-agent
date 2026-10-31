// ─────────────────────────────────────────────────────────────────────────────
// Uniswap Trading API — QUOTE ONLY.
//
// Lets the agent show prices, routes and gas for a swap. It never calls
// /check_approval or /swap and never signs or broadcasts anything: a human
// decides whether to trade, in their own wallet.
// ─────────────────────────────────────────────────────────────────────────────

const API_URL = "https://trade-api.gateway.uniswap.org/v1";

const AGENT_INFO = JSON.stringify({
  integration_name: "swap-integration",
  decision_origin: "human_mediated",
  version: "1.6.0",
});

export const NATIVE_TOKEN = "0x0000000000000000000000000000000000000000";

// Placeholder swapper for quotes when the user's wallet isn't known.
const QUOTE_SWAPPER = "0x000000000000000000000000000000000000dEaD";

/** Venice network slug → Uniswap chain id (only chains Uniswap supports). */
export const UNISWAP_CHAIN_IDS: Record<string, number> = {
  "base-mainnet": 8453,
  "ethereum-mainnet": 1,
  "arbitrum-mainnet": 42161,
  "optimism-mainnet": 10,
  "polygon-mainnet": 137,
  "avalanche-mainnet": 43114,
  "bsc-mainnet": 56,
  "blast-mainnet": 81457,
};

const ADDRESS_RE = /^0x[a-fA-F0-9]{40}$/;
const AMOUNT_RE = /^[0-9]+$/;

export interface SwapQuoteParams {
  chainId: number;
  tokenIn: string;
  tokenOut: string;
  /** Exact input amount in the input token's base units. */
  amount: string;
  swapper?: string;
  slippageTolerance?: number;
}

export interface SwapQuoteSummary {
  routing: string;
  amountIn: string;
  amountOut: string;
  /** UniswapX only: floor after full auction decay. */
  amountOutMin?: string;
  gasFeeUSD?: string;
  gasless: boolean;
  route?: string;
  requestId?: string;
}

const UNISWAPX = new Set(["DUTCH_V2", "DUTCH_V3", "PRIORITY"]);

export async function getSwapQuote(p: SwapQuoteParams): Promise<SwapQuoteSummary> {
  const apiKey = process.env.UNISWAP_API_KEY;
  if (!apiKey) throw new Error("UNISWAP_API_KEY is not set.");
  if (!Object.values(UNISWAP_CHAIN_IDS).includes(p.chainId)) {
    throw new Error(`Chain ${p.chainId} is not supported for Uniswap quotes.`);
  }
  for (const a of [p.tokenIn, p.tokenOut, p.swapper ?? QUOTE_SWAPPER]) {
    if (!ADDRESS_RE.test(a)) throw new Error(`Invalid address: ${a}`);
  }
  if (!AMOUNT_RE.test(p.amount) || p.amount === "0") throw new Error(`Invalid amount: ${p.amount}`);

  const res = await fetch(`${API_URL}/quote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "x-universal-router-version": "2.0",
      "x-agent-info": AGENT_INFO,
    },
    body: JSON.stringify({
      swapper: p.swapper ?? QUOTE_SWAPPER,
      tokenIn: p.tokenIn,
      tokenOut: p.tokenOut,
      tokenInChainId: String(p.chainId),
      tokenOutChainId: String(p.chainId),
      amount: p.amount,
      type: "EXACT_INPUT",
      slippageTolerance: p.slippageTolerance ?? 0.5,
      routingPreference: "BEST_PRICE",
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Uniswap quote failed: ${res.status} ${data?.detail ?? JSON.stringify(data)}`);

  const routing: string = data.routing;
  const q = data.quote ?? {};

  if (UNISWAPX.has(routing)) {
    const out = q.orderInfo?.outputs?.[0];
    if (!out) throw new Error("UniswapX quote has no outputs");
    return {
      routing,
      amountIn: q.orderInfo.input.startAmount,
      amountOut: out.startAmount,
      amountOutMin: out.endAmount,
      gasless: true,
      requestId: data.requestId,
    };
  }

  return {
    routing,
    amountIn: q.input?.amount,
    amountOut: q.output?.amount,
    gasFeeUSD: q.gasFeeUSD,
    gasless: false,
    route: q.routeString,
    requestId: q.requestId ?? data.requestId,
  };
}
