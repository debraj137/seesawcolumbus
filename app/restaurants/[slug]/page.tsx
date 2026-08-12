import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { restaurantDetails } from "../../restaurants";

export const dynamicParams = false;
export function generateStaticParams() { return restaurantDetails.map(({ slug }) => ({ slug })); }

type RestaurantPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: RestaurantPageProps): Promise<Metadata> {
  const { slug } = await params;
  const restaurant = restaurantDetails.find((item) => item.slug === slug);
  if (!restaurant) return {};
  return { title: `${restaurant.name} | Columbus Restaurant Guide`, description: `${restaurant.name} in ${restaurant.area}: hours, Google rating, cuisine, and menu highlights.` };
}

export default async function RestaurantPage({ params }: RestaurantPageProps) {
  const { slug } = await params;
  const restaurant = restaurantDetails.find((item) => item.slug === slug);
  if (!restaurant) notFound();
  return <main className="detail-page">
    <nav className="nav"><Link className="brand" href="/"><span>●</span> SEESAW COLUMBUS</Link><Link className="city" href="/#guide">← All restaurants</Link></nav>
    <section className="detail-hero"><div className="detail-photo"><Image src="/images/columbus-dining-mosaic.png" alt={`A dining scene representing ${restaurant.name}`} fill priority sizes="100vw" style={{ objectPosition: restaurant.position }} /></div><div className="detail-title"><p>{restaurant.cuisine} · {restaurant.area}</p><h1>{restaurant.name}</h1><div className="detail-stats"><span>★ {restaurant.rating}<small>Google · {restaurant.reviews} reviews</small></span><span>{restaurant.price}<small>Price range</small></span></div></div></section>
    <section className="detail-content"><div><p className="eyebrow"><span /> The experience</p><p className="lead">{restaurant.description}</p><p className="detail-copy">Come for a meal shaped by the restaurant’s particular point of view, and plan a little extra time to settle in. Hours and ratings change, so it’s worth confirming before you head out.</p></div><aside><div><p>Hours</p><strong>{restaurant.hours}</strong></div><div><p>Menu highlights</p><ul>{restaurant.menu.map((item) => <li key={item}>{item}</li>)}</ul></div><a className="detail-action" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${restaurant.name}, Columbus, OH`)}`} target="_blank" rel="noreferrer">Find on Google Maps ↗</a></aside></section>
    <footer><Link className="brand" href="/"><span>●</span> SEESAW COLUMBUS</Link><p><Link href="/about">About</Link> · <Link href="/contact">Contact</Link> · <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link> · <Link href="/disclaimer">Disclaimer</Link></p><p>© 2026</p></footer>
  </main>;
}
