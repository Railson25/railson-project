import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Billing API - Documentation",
  tagline:
    "Subscriptions, invoices, payments & webhooks, robust and idempotent.",
  favicon: "img/favicon.ico",

  url: "http://localhost",
  baseUrl: "/",

  future: {
    v4: true,
  },

  organizationName: "Railson25",
  projectName: "railson-project",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: { mermaid: true },
  themes: ["@docusaurus/theme-mermaid"],

  // plugins: [
  //   [
  //     "redocusaurus",
  //     {
  //       specs: [
  //         {
  //           id: "api",
  //           spec: "static/openapi.json",
  //         },
  //       ],
  //       theme: {
  //         primaryColor: "#0EA5E9",
  //         options: {
  //           hideDownloadButton: false,
  //         },
  //       },
  //     },
  //   ],
  // ],

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Billing Docs",
      logo: {
        alt: "Billing Docs Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/api", label: "API Reference", position: "left" },
        {
          href: "https://github.com/Railson25/railson-project",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Overview",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Issues",
              href: "https://github.com/Railson25/railson-project/issues",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "More",
              href: "https://github.com/Railson25/railson-project",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Railson — Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
