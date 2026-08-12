import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://seesawcolumbus.com"),
  title: "Seesaw Columbus | The 20 Best Restaurants in Columbus, Ohio",
  description: "A curated guide to 20 standout Columbus restaurants, with cuisine, hours, Google ratings, and menu highlights.",
  keywords: ["best restaurants Columbus Ohio", "Columbus dining guide", "Columbus restaurants", "restaurants near me Columbus"],
  alternates: { canonical: "/" },
  openGraph: { title: "Seesaw Columbus | Twenty tables worth your night", description: "The essential Columbus restaurant guide.", type: "website", locale: "en_US" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#121212", colorScheme: "dark" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
