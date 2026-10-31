import { createPaymentHeader } from "x402/client";
import { privateKeyToAccount } from "viem/accounts";

const signer = privateKeyToAccount(process.env.EVM_PRIVATE_KEY);
const amountUsd = 5;
const amountBaseUnits = String(Math.round(amountUsd * 1e6));

const header = await createPaymentHeader(signer, 2, {
  scheme: "exact",
  network: "base",
  maxAmountRequired: amountBaseUnits,
  resource: "https://api.venice.ai/api/v1/x402/top-up",
  description: "Venice x402 top-up",
  mimeType: "application/json",
  payTo: "0x2670B922ef37C7Df47158725C0CC407b5382293F",
  maxTimeoutSeconds: 300,
  asset: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
  extra: { name: "USD Coin", version: "2" },
});

const response = await fetch("https://api.venice.ai/api/v1/x402/top-up", {
  method: "POST",
  headers: { "PAYMENT-SIGNATURE": header },
});

process.stdout.write(await response.text());