import { Metadata } from "next";

const APP_URL = "https://nextdapp.netlify.app";
const GIT_URL = "https://github.com/mrathod05/NextDApp";
const CLI_PACKAGE_URL = "https://www.npmjs.com/package/use-next-dapp";

export const siteMetadata = {
  name: "NextDApp",
  app_url: APP_URL,
  git_url: GIT_URL,
  cli_package_url: CLI_PACKAGE_URL,
  description:
    "NextDApp is a modern Next.js 15 starter kit with built-in NextAuth v5 authentication, Phantom wallet integration, and optimized performance.",
  keywords: [
    "Next.js",
    "Next.js 15",
    "NextAuth v5",
    "Phantom Wallet",
    "Web3",
    "Solana",
    "Blockchain",
    "Authentication",
    "Full-Stack",
    "DApp",
    "Modern UI",
  ],
  author: {
    name: "Meet Rathod",
  },
  openGraph: {
    url: APP_URL,
    image: "/og.png",
    type: "website",
  },
  twitter: {
    handle: "@your_twitter",
    image: "/twitter-image.png",
  },
  icons: {
    favicon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const META_DATA: Metadata = {
  title: `${siteMetadata.name} – Next.js 15 + Auth + Phantom`,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author.name }],
  creator: siteMetadata.author.name,
  openGraph: {
    title: `${siteMetadata.name} – Next.js 15 + Auth + Phantom`,
    description: siteMetadata.description,
    url: siteMetadata.openGraph.url,
    siteName: siteMetadata.name,
    images: [
      {
        url: siteMetadata.openGraph.image,
        width: 1200,
        height: 630,
        alt: `${siteMetadata.name} - Next.js 15 + Auth + Phantom`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: siteMetadata.twitter.handle,
    creator: siteMetadata.twitter.handle,
    title: `${siteMetadata.name} – Next.js 15 + Auth + Phantom`,
    description: siteMetadata.description,
    images: [siteMetadata.twitter.image],
  },
  icons: {
    icon: siteMetadata.icons.favicon,
    shortcut: siteMetadata.icons.favicon,
    apple: siteMetadata.icons.apple,
  },
  manifest: siteMetadata.manifest,
};
