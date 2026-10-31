import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy · Meerkatt AI -Frontier Privacy Agent",
  description: "What the Meerkatt AI Frontier Privacy Agent collects, where it goes, and what we never keep.",
};

const UPDATED = "October 31, 2026";
const CONTACT = "info@meerkatt.ai";

export default function PrivacyPage() {
  return (
    <main className="legal">
      <Link href="/" className="legal-back">← Back to the agent</Link>
      <h1>Privacy Policy</h1>
      <p className="legal-updated">Last updated {UPDATED}</p>

      <p>
        The Frontier Privacy Agent (&ldquo;the Service&rdquo;) is operated by Meerkatt AI (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;). It is built to work without knowing who you are. This policy explains the little
        data the Service does handle and where it goes.
      </p>

      <h2>The short version</h2>
      <ul>
        <li>No accounts, no sign-up, no names or email addresses.</li>
        <li>Your chat history stays in your browser. We don&rsquo;t store it on our servers.</li>
        <li>Prompts are forwarded to our AI provider, Venice AI, to generate answers. In Private mode they
          are end-to-end encrypted to a verified secure enclave.</li>
        <li>We don&rsquo;t sell your data or use it for advertising.</li>
      </ul>

      <h2>What we handle</h2>
      <h3>Your conversations</h3>
      <p>
        Chats are saved in your browser&rsquo;s local storage so you can return to them. They never leave
        your device except as part of a request you send. Delete a chat in the sidebar, or clear this
        site&rsquo;s data in your browser, to remove them.
      </p>
      <p>
        When you send a message, it passes through our server to Venice AI, which runs the model. Our
        server does not log or keep message content.
      </p>
      <ul>
        <li>
          <b>Private mode</b> uses an end-to-end encrypted (E2EE) model. Your prompt is encrypted in our
          server before it is sent, and only an attested trusted execution environment (TEE) can decrypt
          it. Live tools and web search are off in this mode.
        </li>
        <li>
          <b>Standard mode</b> sends your prompt to Venice AI without that encryption so the model can use
          live tools and web search. Search queries the model writes may go to Venice&rsquo;s search
          providers.
        </li>
      </ul>

      <h3>On-chain lookups</h3>
      <p>
        If you ask about a wallet, token or contract, the agent reads public blockchain data through
        Venice&rsquo;s Crypto RPC service. The addresses involved are sent to that service. Blockchain data is
        public by nature, so treat any address you enter as public.
      </p>

      <h3>Swap quotes</h3>
      <p>
        If you ask for a swap price, the tokens, amount, network and, if you supply one, your wallet
        address are sent to the Uniswap Labs Trading API to get a quote. The Service only fetches quotes:
        it never signs, sends or executes a trade.
      </p>

      <h3>Images</h3>
      <p>If you ask for an image, the image prompt is sent to Venice AI&rsquo;s image service.</p>

      <h3>Payments</h3>
      <p>
        Usage is paid by the Service&rsquo;s own wallet through the x402 protocol, in USDC. You do not give us
        payment card details. Those payments are recorded on public blockchains, as all such transactions are.
      </p>

      <h3>Analytics and hosting</h3>
      <p>
        The Service runs on Vercel. We use Vercel Web Analytics to count page views in aggregate. It does
        not use cookies. Like any web host, Vercel processes technical request data such as IP address and
        browser type to serve and protect the site.
      </p>

      <h2>Third-party services</h2>
      <p>
        Data sent to these providers is handled under their own policies:{" "}
        <a href="https://venice.ai/legal/privacy-policy" target="_blank" rel="noreferrer">Venice AI</a>,{" "}
        <a href="https://uniswap.org/privacy-policy" target="_blank" rel="noreferrer">Uniswap Labs</a> and{" "}
        <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer">Vercel</a>.
      </p>

      <h2>What we don&rsquo;t do</h2>
      <ul>
        <li>We don&rsquo;t sell or rent personal data.</li>
        <li>We don&rsquo;t use advertising trackers or cross-site cookies.</li>
        <li>We don&rsquo;t build profiles of users.</li>
      </ul>

      <h2>Children</h2>
      <p>The Service is not intended for anyone under 18.</p>

      <h2>Your choices</h2>
      <p>
        You can use Private mode for sensitive questions, delete chats at any time, and avoid entering
        anything that identifies you. Because we keep no account or chat records, there is usually nothing
        on our side to access or delete. If you have a request anyway, contact us.
      </p>

      <h2>Changes</h2>
      <p>
        If we change this policy, we&rsquo;ll update this page and the date above. Material changes will be
        noted in the app.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy: <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
      </p>

      <SiteFooter />
    </main>
  );
}
