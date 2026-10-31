import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service · Meerkatt AI",
  description: "The terms for using the Meerkatt AI platform.",
};

const UPDATED = "October 31, 2026";
const CONTACT = "info@meerkatt.ai";
// TODO: set the governing jurisdiction before launch.
const JURISDICTION = "[JURISDICTION]";

export default function TermsPage() {
  return (
    <main className="legal">
      <Link href="/" className="legal-back">← Back to the agent</Link>
      <h1>Terms of Service</h1>
      <p className="legal-updated">Last updated {UPDATED}</p>

      <p>
        These terms govern your use of Meerkatt AI (&ldquo;the Service&rdquo;), operated by
        Meerkatt AI (&ldquo;we&rdquo;, &ldquo;us&rdquo;). By using the Service you agree to them. If you
        don&rsquo;t agree, please don&rsquo;t use it.
      </p>

      <h2>1. What the Service is</h2>
      <p>
        The Service is an AI research assistant for on-chain analysis. It can answer questions, read
        public blockchain data, search the web, generate images and fetch swap price quotes. It is an
        early, experimental product and may change or stop at any time.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 18, and able to form a binding agreement, to use the Service. You are
        responsible for making sure your use is legal where you live.
      </p>

      <h2>3. Not financial advice</h2>
      <p>
        Nothing the Service produces is financial, investment, legal or tax advice. Answers, analysis,
        balances and quotes are for information only. Do your own research and consult a qualified
        professional before making financial decisions. You alone are responsible for any decision you make
        and any transaction you sign.
      </p>

      <h2>4. AI output can be wrong</h2>
      <p>
        AI-generated answers can be inaccurate, incomplete or out of date, and can sound confident when
        they are wrong. Blockchain data and prices change constantly. Verify anything important against a
        primary source before you rely on it.
      </p>

      <h2>5. Swap quotes</h2>
      <p>
        Swap quotes come from the Uniswap Labs Trading API and go stale within seconds. The Service only
        shows quotes: it never holds your funds, signs transactions or executes trades. Any trade you make
        happens in your own wallet, at your own risk, under the terms of the protocol or app you use.
      </p>

      <h2>6. Acceptable use</h2>
      <p>You agree not to use the Service to:</p>
      <ul>
        <li>break any law or sanctions rule, or help anyone else do so;</li>
        <li>launder money, finance terrorism, or commit fraud, theft or market manipulation;</li>
        <li>harass, stalk or dox people, including by de-anonymizing wallet owners;</li>
        <li>generate unlawful content, or content that sexualizes minors;</li>
        <li>attack, overload, scrape or reverse-engineer the Service or its providers; or</li>
        <li>get around usage limits or resell access without our permission.</li>
      </ul>
      <p>We may block or limit access to anyone who breaks these rules.</p>

      <h2>7. Third-party services</h2>
      <p>
        The Service relies on providers including Venice AI (inference, crypto RPC and images), Uniswap Labs
        (quotes) and Vercel (hosting). Their services are covered by their own terms, and we are not
        responsible for their availability or actions. See our <Link href="/privacy">Privacy Policy</Link>{" "}
        for what is sent to them.
      </p>

      <h2>8. Your content</h2>
      <p>
        You keep any rights you have in what you enter. You give us permission to process it only as needed
        to answer you. Don&rsquo;t enter anything you don&rsquo;t have the right to share. You are
        responsible for how you use what the Service produces.
      </p>

      <h2>9. Open source</h2>
      <p>
        The Service&rsquo;s source code is released under the MIT License. That license covers the code. These
        terms cover your use of this hosted Service.
      </p>

      <h2>10. No warranty</h2>
      <p>
        The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without warranties of
        any kind, express or implied. That includes warranties of accuracy, fitness for a particular purpose,
        non-infringement and uninterrupted operation.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        To the fullest extent the law allows, we are not liable for any indirect, incidental, special,
        consequential or punitive damages, or for any loss of funds, profits, data or opportunity, arising
        from your use of the Service. That includes losses from trades or transactions you make based on it.
        Our total liability for any claim is limited to US$100.
      </p>

      <h2>12. Indemnity</h2>
      <p>
        You agree to cover any claims, losses and costs, including reasonable legal fees, that arise from
        your misuse of the Service or your breach of these terms.
      </p>

      <h2>13. Changes and termination</h2>
      <p>
        We may update these terms. When we do, we&rsquo;ll change the date above. Continuing to use the
        Service after a change means you accept the new terms. We may suspend or end the Service, or your
        access, at any time.
      </p>

      <h2>14. Governing law</h2>
      <p>
        These terms are governed by the laws of {JURISDICTION}, without regard to its conflict-of-law
        rules. Disputes will be handled in the courts of {JURISDICTION}.
      </p>

      <h2>15. Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
      </p>

      <p className="legal-links">
        <Link href="/privacy">Privacy Policy</Link>
      </p>
    </main>
  );
}
