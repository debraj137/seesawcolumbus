import Link from "next/link";
import type { ReactNode } from "react";

export function InfoPage({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <main className="info-page">
    <nav className="nav"><Link className="brand" href="/"><span>●</span> SEESAW COLUMBUS</Link><Link className="city" href="/#guide">← Restaurant guide</Link></nav>
    <article className="info-content"><p className="eyebrow"><span /> {eyebrow}</p><h1>{title}</h1><div className="info-copy">{children}</div></article>
    <footer><Link className="brand" href="/"><span>●</span> SEESAW COLUMBUS</Link><p>A local dining guide for Columbus, Ohio.</p><p>© 2026</p></footer>
  </main>;
}
