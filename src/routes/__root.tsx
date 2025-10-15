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

import { seo } from "@/utils/seo";
import { type ReactNode } from "react";
import { Toaster } from "sonner";

export const Route = createRootRoute({
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
        title: "Portfolio - Jared Mejia",
        description:
          "Jared Mejia's portfolio, showcasing skills in React, TypeScript, and web development.",
        keywords: "Jared Mejia, portfolio, web developer, React, TypeScript",
        image: openGraph,
      }),
    ],
    links: [
      {
        rel: "icon",
        href: logo,
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
      <Toaster theme="dark" />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html>
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
