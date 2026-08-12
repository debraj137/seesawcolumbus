import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { restaurantDetails } from "../../restaurants";

export const dynamicParams = false;

export function generateStaticParams() {
  return restaurantDetails.map(({ slug }) => ({ slug }));
}

type RestaurantPageProps = { params: Promise<{ slug: string }> };

function parseReviewCount(value: string) {
  const normalized = value.toLowerCase().replace(/,/g, "").trim();
  const multiplier = normalized.endsWith("m") ? 1000000 : normalized.endsWith("k") ? 1000 : 1;
  const numeric = Number.parseFloat(normalized.replace(/[km]/g, ""));
  if (!Number.isFinite(numeric)) return undefined;
  return Math.round(numeric * multiplier);
}

export async function generateMetadata({ params }: RestaurantPageProps): Promise<Metadata> {
  const { slug } = await params;
  const restaurant = restaurantDetails.find((item) => item.slug === slug);

  if (!restaurant) return {};

  const summary =
    restaurant.status === "open"
      ? `${restaurant.name} in ${restaurant.area}. Address, hours, phone, price range, menu guide, and planning details from Seesaw Columbus.`
      : `${restaurant.name} in ${restaurant.area}. Historical overview, status note, and available planning details from Seesaw Columbus.`;

  return {
    title: `${restaurant.name} | Seesaw Columbus`,
    description: summary,
    alternates: { canonical: `/restaurants/${restaurant.slug}` },
    openGraph: {
      title: `${restaurant.name} | Seesaw Columbus`,
      description: summary,
      type: "article",
      locale: "en_US",
      url: `/restaurants/${restaurant.slug}`,
      images: ["/images/columbus-dining-mosaic.png"],
    },
  };
}

export default async function RestaurantPage({ params }: RestaurantPageProps) {
  const { slug } = await params;
  const restaurant = restaurantDetails.find((item) => item.slug === slug);

  if (!restaurant) notFound();

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address || `${restaurant.name}, Columbus, OH`)}`;
  const reviewCount = parseReviewCount(restaurant.reviews);
  const jsonLd =
    restaurant.status === "open"
      ? {
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: restaurant.name,
          description: restaurant.description,
          servesCuisine: restaurant.cuisine,
          priceRange: restaurant.price,
          url: `https://seesawcolumbus.com/restaurants/${restaurant.slug}`,
          image: "https://seesawcolumbus.com/images/columbus-dining-mosaic.png",
          telephone: restaurant.phone,
          address: restaurant.address,
          hasMenu: restaurant.menuUrl,
          aggregateRating: reviewCount
            ? {
                "@type": "AggregateRating",
                ratingValue: restaurant.rating,
                reviewCount,
              }
            : undefined,
        }
      : null;

  return (
    <main className="detail-page">
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      ) : null}

      <nav className="nav">
        <Link className="brand" href="/">
          SEESAW COLUMBUS
        </Link>
        <Link className="city" href="/#guide">
          Back to restaurants
        </Link>
      </nav>

      <section className="detail-hero">
        <div className="detail-photo">
          <Image
            src="/images/columbus-dining-mosaic.png"
            alt={`A dining scene representing ${restaurant.name}`}
            fill
            priority
            sizes="100vw"
            style={{ objectPosition: restaurant.position }}
          />
        </div>

        <div className="detail-title">
          <p>
            {restaurant.cuisine} | {restaurant.area}
          </p>

          <div className="detail-chip-row">
            <span className="detail-chip">{restaurant.statusLabel}</span>
            <span className="detail-chip">{restaurant.price}</span>
            <span className="detail-chip">{restaurant.menu.join(" / ")}</span>
          </div>

          <h1>{restaurant.name}</h1>

          <div className="detail-stats">
            <span>
              Star {restaurant.rating}
              <small>Google | {restaurant.reviews} reviews</small>
            </span>
            <span>
              {restaurant.price}
              <small>Typical price range</small>
            </span>
            <span>
              {restaurant.hours}
              <small>Current service hours</small>
            </span>
          </div>
        </div>
      </section>

      <section className="detail-shell">
        <div className="detail-main">
          <div className="detail-panel">
            <p className="eyebrow">
              <span /> The experience
            </p>
            <p className="detail-lead">{restaurant.description}</p>
            <p className="detail-copy">{restaurant.about}</p>
            <p className="detail-copy">
              Menus, service windows, and availability can shift quickly. This page gives people a strong planning snapshot, but the official menu and website links are still the best source for live pricing and day-of changes.
            </p>
          </div>

          {restaurant.statusNote ? (
            <div className="detail-status-note">
              <p>Status note</p>
              <strong>{restaurant.statusNote}</strong>
            </div>
          ) : null}

          <section className="detail-panel">
            <div className="detail-section-head">
              <p className="detail-kicker">Menu guide</p>
              <h2>What you can expect to order</h2>
            </div>

            <div className="detail-menu-grid">
              {restaurant.menuSections.map((section) => (
                <article className="detail-menu-card" key={section.title}>
                  <h3>{section.title}</h3>
                  <ul className="detail-list">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="detail-panel">
            <div className="detail-section-head">
              <p className="detail-kicker">Planning details</p>
              <h2>Useful details before you go</h2>
            </div>

            <div className="detail-columns">
              <div>
                <p className="detail-subtitle">Quick reasons people book this place</p>
                <ul className="detail-list">
                  <li>
                    {restaurant.cuisine} in {restaurant.area}
                  </li>
                  <li>
                    {restaurant.priceTier} tier with an estimated {restaurant.price} spend range
                  </li>
                  <li>
                    Google rating currently shown as {restaurant.rating} from about {restaurant.reviews} reviews
                  </li>
                </ul>
              </div>

              <div>
                <p className="detail-subtitle">Best use of this page</p>
                <ul className="detail-list">
                  <li>Use the address, phone, and website to confirm your plan</li>
                  <li>Use the menu guide to know the shape of the menu before you click through</li>
                  <li>Use Google Maps when you want parking and route details fast</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <aside className="detail-sidebar">
          <div className="detail-panel">
            <p className="detail-kicker">Visit info</p>

            <div className="detail-info-stack">
              <div className="detail-info-item">
                <p>Status</p>
                <strong>{restaurant.statusLabel}</strong>
              </div>

              <div className="detail-info-item">
                <p>Hours</p>
                <strong>{restaurant.hours}</strong>
              </div>

              <div className="detail-info-item">
                <p>Address</p>
                <strong>{restaurant.address}</strong>
              </div>

              {restaurant.phone ? (
                <div className="detail-info-item">
                  <p>Phone</p>
                  <a href={`tel:${restaurant.phone.replace(/[^0-9+]/g, "")}`}>{restaurant.phone}</a>
                </div>
              ) : null}

              {restaurant.email ? (
                <div className="detail-info-item">
                  <p>Email</p>
                  <a href={`mailto:${restaurant.email}`}>{restaurant.email}</a>
                </div>
              ) : null}
            </div>
          </div>

          <div className="detail-panel">
            <p className="detail-kicker">Links</p>

            <div className="detail-link-grid">
              {restaurant.website ? (
                <a className="detail-link-card" href={restaurant.website} target="_blank" rel="noreferrer">
                  <span>Official website</span>
                  <strong>Visit site</strong>
                </a>
              ) : null}

              {restaurant.menuUrl ? (
                <a className="detail-link-card" href={restaurant.menuUrl} target="_blank" rel="noreferrer">
                  <span>Live menu</span>
                  <strong>See current menu</strong>
                </a>
              ) : null}

              <a className="detail-link-card" href={mapsUrl} target="_blank" rel="noreferrer">
                <span>Google Maps</span>
                <strong>Open directions</strong>
              </a>
            </div>
          </div>
        </aside>
      </section>

      <footer>
        <Link className="brand" href="/">
          SEESAW COLUMBUS
        </Link>
        <p>
          <Link href="/about">About</Link> | <Link href="/contact">Contact</Link> | <Link href="/privacy">Privacy</Link> | <Link href="/terms">Terms</Link> | <Link href="/disclaimer">Disclaimer</Link>
        </p>
        <p>© 2026</p>
      </footer>
    </main>
  );
}
