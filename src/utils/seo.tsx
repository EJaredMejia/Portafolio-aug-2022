export const SITE_URL = "https://portfolio.jared-mejia.workers.dev";

export function seo({
  title,
  description,
  keywords,
  image,
}: {
  title: string;
  description?: string;
  image?: string;
  keywords?: string;
}) {
  // Social crawlers need an absolute image URL
  const imageUrl = image ? new URL(image, SITE_URL).href : undefined;

  const tags = [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    // Open Graph is read from `property`, not `name`
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${SITE_URL}/` },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    ...(imageUrl
      ? [
          { name: "twitter:image", content: imageUrl },
          { name: "twitter:card", content: "summary_large_image" },
          { property: "og:image", content: imageUrl },
        ]
      : []),
  ];

  return tags;
}
