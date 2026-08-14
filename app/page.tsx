import Image from "next/image";
import Link from "next/link";

import RestaurantSection from "./RestaurantSection";
import BlogSection from "./BlogSection";

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="nav">
        <a className="brand" href="#top">
          <span>●</span> SEESAW COLUMBUS
        </a>

        <div className="nav-links">
          <a href="#guide">The guide</a>
          <a href="#method">Our method</a>
          <a className="city" href="#guide">
            Columbus, OH ↗
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="hero">
        <div className="eyebrow">
          <span /> Columbus, Ohio · 2026 edit
        </div>

        <h1>
          Tables
          <br />
          <em>worth your night.</em>
        </h1>

        <p>
          Our decidedly hungry guide to the restaurants that make Columbus
          feel like a city you should eat your way through.
        </p>

        <a href="#guide" className="round-link">
          Explore the list <b>↓</b>
        </a>

        <div className="hero-image">
          <Image
            src="/images/columbus-dining-mosaic.png"
            alt="A collage of food and dining experiences in Columbus"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 58vw"
          />
        </div>

        <div className="hero-note">
          Independent favorites, destination tables
          <br />& neighborhood essentials.
        </div>
      </section>

      {/* Restaurant Guide */}
      <RestaurantSection />

      {/* Journal / Blog from Sanity */}
      <BlogSection />

      {/* How We Choose */}
      <section id="method" className="method">
        <div className="eyebrow">
          <span /> How we choose
        </div>

        <h2>
          More than a
          <br />
          <em>good review.</em>
        </h2>

        <p>
          We look for a strong point of view, consistent cooking, real
          hospitality, and the kind of meal you find yourself planning
          around. Ratings shown are Google ratings and should be checked
          before you go.
        </p>

        <a href="#top">Back to top ↑</a>
      </section>

      {/* Footer */}
      <footer>
        <a className="brand" href="#top">
          <span>●</span> SEESAW COLUMBUS
        </a>

        <p>
          <Link href="/about">About</Link> ·{" "}
          <Link href="/contact">Contact</Link> ·{" "}
          <Link href="/privacy">Privacy</Link> ·{" "}
          <Link href="/terms">Terms</Link> ·{" "}
          <Link href="/disclaimer">Disclaimer</Link>
        </p>

        <p>© 2026</p>
      </footer>
    </main>
  );
}