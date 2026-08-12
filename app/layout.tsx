import type { Metadata, Viewport } from "next";
import "./globals.css";
import { restaurantDetails } from "./restaurants";

const restaurantCount = restaurantDetails.length;

export const metadata: Metadata = {
  metadataBase: new URL("https://seesawcolumbus.com"),
  title: "Seesaw Columbus | Columbus Restaurant Guide",
  description: `A curated guide to ${restaurantCount} standout Columbus restaurants, with cuisine, hours, Google ratings, and menu highlights.`,
  keywords: ["best restaurants Columbus Ohio", "Columbus dining guide", "Columbus restaurants", "restaurants near me Columbus"],
  alternates: { canonical: "/" },
  openGraph: { title: "Seesaw Columbus | Tables worth your night", description: `A curated guide to ${restaurantCount} standout Columbus restaurants.`, type: "website", locale: "en_US" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#121212", colorScheme: "dark" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
