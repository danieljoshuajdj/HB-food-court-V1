import { Helmet } from "react-helmet-async";
import { ADDRESS, PHONE } from "@/data/menuData";

interface Props {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
}

export const SEO = ({ title, description, keywords, path = "/" }: Props) => {
  const url = `https://hbfoodcourt.lovable.app${path}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "HB Food Court",
    image: `${url}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "37/1, Court Road",
      addressLocality: "Nagercoil",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    telephone: PHONE,
    servesCuisine: ["Biryani", "South Indian", "North Indian", "Chinese", "Arabian", "Italian"],
    priceRange: "₹₹",
    url,
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.1", reviewCount: "1674" },
  };
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="restaurant" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};
