// app/routes/__root.tsx

/// <reference types="vite/client" />

import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";

import logo from "@/images/logo.png?url";
import openGraph from "@/images/open-graph.jpg?url";
import appCss from "@/index.css?url";

import NotFound from "@/components/not-found";
import { yearsOfExperience } from "@/utils/experience";
import { SITE_URL, seo } from "@/utils/seo";
import { type ReactNode } from "react";
import { Toaster } from "sonner";

export const Route = createRootRoute({
  headers: () => ({
    "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    "CDN-Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
  }),
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      ...seo({
        title: "Jared Mejía, Full-stack Engineer (TypeScript, React, Node.js)",
        description:
          `Full-stack engineer with ${yearsOfExperience()}+ years building web apps in TypeScript, React and Node.js on AWS and Azure. Open to remote roles with US teams.`,
        keywords:
          "Jared Mejia, full-stack engineer, TypeScript, React, Node.js, AWS, remote",
        image: openGraph,
      }),
    ],
    links: [
      // Collapses variants like ?utm_source=... or the workers.dev preview URLs onto the one real URL
      { rel: "canonical", href: `${SITE_URL}/` },
      {
        rel: "icon",
        href: logo,
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Jared Mejía",
          jobTitle: "Full-stack Engineer",
          url: `${SITE_URL}/`,
          address: { "@type": "PostalAddress", addressCountry: "HN" },
          knowsAbout: ["TypeScript", "React", "Node.js", "AWS", "Azure"],
          sameAs: [
            "https://github.com/EJaredMejia",
            "https://www.linkedin.com/in/jared-mejia-41b58a23a/",
          ],
        }),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
      <Toaster theme="system" />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}

        <Scripts />
      </body>
    </html>
  );
}
