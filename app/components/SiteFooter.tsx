import Link from "next/link";

const GITHUB_URL = "https://github.com/meer402/x402-agent";
const PITCH_DECK_URL = "/meerkatt-ai-pitch-deck.pdf";

/** Site-wide footer: legal, source and about links. */
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav aria-label="Footer">
        <Link href="/about">About Us</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <a href={PITCH_DECK_URL} target="_blank" rel="noreferrer">Pitch Deck</a>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
      </nav>
      <span className="site-footer-copy">© {new Date().getFullYear()} Meerkatt AI</span>
      <span className="site-footer-by">
        by
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/minxy-labs.svg" alt="" width={18} height={18} />
        Minxy Labs
      </span>
    </footer>
  );
}
