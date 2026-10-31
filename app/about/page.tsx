import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "About Us · Frontier Privacy Agent",
  description: "Meerkatt AI is a privacy-first AI company. Meet the team behind the Frontier Privacy Agent.",
};

const CONTACT = "info@meerkatt.ai";

export default function AboutPage() {
  return (
    <main className="legal">
      <Link href="/" className="legal-back">← Back to the agent</Link>
      <h1>About Us</h1>

      <p className="about-lede">
        Meerkatt AI is a privacy-first AI company building consumer apps that create value for society.
        Stablecoins, privacy and AI, made invisible to the user.
      </p>

      <h2>Our mission</h2>
      <p>
        To bridge the gap between traditional Web2 platforms and decentralized Web3 platforms in a secure,
        private and user-friendly way, and to bring the benefits of AI to every person around the world.
        Private, unbiased AI for everyone.
      </p>

      <h2>What we&rsquo;re building</h2>
      <p>
        The Frontier Privacy Agent is an on-chain agent that reads the blockchain live and uses its own wallet
        to pay for everything, including its own inference.
      </p>
      <ul>
        <li>
          <b>Paid with x402.</b> The agent signs in with its wallet and pays in USDC on Base or Solana. No
          email, phone, account or API key. The wallet is the only identity.
        </li>
        <li>
          <b>Private by design.</b> Private mode encrypts your prompt end to end to a verified secure enclave.
          Your chat history stays in your browser.
        </li>
        <li>
          <b>Live on-chain reads.</b> In standard mode the agent can check balances, read contracts, search
          the web and fetch swap quotes as you talk.
        </li>
      </ul>

      <h2>Our team</h2>
      <p>
        We&rsquo;re former colleagues from IQ.wiki (formerly Everipedia), where we built early DeFi primitives
        on EOS and later Ethereum: airdrops, prediction markets and stablecoins. Launches include PrediQt, an
        early prediction market, and Frax Finance (formerly Decentral Bank). Today the team works from San
        Francisco and Japan.
      </p>

      <div className="team">
        <div className="team-member">
          <h3>Christian Deciga</h3>
          <p className="team-role">Founder</p>
          <p>
            An AI educator who turns complex technical knowledge and research into bite-sized formats for
            everyday people. Christian contributes to open-source AI and is an active hackathon builder. Since
            2017 he has worked at the edge of social and technological innovation, supporting on-chain
            organizations.
          </p>
          <ul>
            <li>
              <b>IQ.wiki (Everipedia):</b> helped scale the early operation to millions of monthly users
              through social media growth. He mentored first employees Dave Liebowitz and Navin V with a
              playbook he created for marketing, business development, content and community, including
              collaborations with recording artists. That early work helped the team expand into DeFi from
              DeFi Summer 2019 and contributed to its Series A. He also recruited William LeGate, who went on
              to lead PrediQt.
            </li>
            <li>
              <b>Frax Finance:</b> supported engineering quality through code reviews and architectural best
              practices.
            </li>
          </ul>
          <p>
            Christian left IQ.wiki&rsquo;s core team in February 2021 to focus on consumer products. After five
            years of solo hacking, he&rsquo;s turning what he learned into reusable content for the people
            joining.
          </p>
        </div>

        <div className="team-member">
          <h3>
            <a href="https://www.linkedin.com/in/tammerriad/" target="_blank" rel="noreferrer">Tammer Riad</a>
          </h3>
          <p className="team-role">San Francisco</p>
          <p>
            Yale alum. Interned at Everipedia&rsquo;s first headquarters in Los Angeles, learned the EOS smart
            contract language in one weekend, and contributed to viral content.
          </p>
        </div>

        <div className="team-member">
          <h3>
            <a href="https://www.linkedin.com/in/nikka-piterman-85396276/" target="_blank" rel="noreferrer">
              Nikka Piterman
            </a>
          </h3>
          <p className="team-role">San Francisco</p>
          <p>Teacher, iOS engineer and former IQ.wiki intern.</p>
        </div>
      </div>

      <h2>Open source</h2>
      <p>
        We believe open source is a democratizing force for AI. Our code is MIT-licensed and public on{" "}
        <a href="https://github.com/meer402/x402-agent" target="_blank" rel="noreferrer">GitHub</a>.
      </p>

      <h2>Contact</h2>
      <p>
        <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
      </p>

      <SiteFooter />
    </main>
  );
}
