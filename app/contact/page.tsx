import type { Metadata } from "next";
import { InfoPage } from "../info-page";

export const metadata: Metadata = { title: "Contact Seesaw Columbus", description: "Contact Seesaw Columbus to suggest a restaurant or report an update." };
export default function ContactPage() { return <InfoPage eyebrow="Get in touch" title="Know a table we should try?"><p>Restaurant owners and diners are welcome to share corrections, menu updates, opening-hour changes, or recommendations for Columbus restaurants.</p><p><a className="detail-action" href="mailto:hello@seesawcolumbus.com?subject=Seesaw%20Columbus%20guide%20update">hello@seesawcolumbus.com ↗</a></p><h2>For restaurant updates</h2><p>Please include the restaurant name, the specific change, and a link to an official menu, website, or Google Business Profile where possible. We review submissions, but inclusion in the guide is always an editorial decision.</p></InfoPage>; }
