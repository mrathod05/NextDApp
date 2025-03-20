export const siteMetadata = {
  name: "NextDApp",
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
    url: "https://yourwebsite.com",
  },
  openGraph: {
    url: "https://yourwebsite.com",
    image: "/og-image.png",
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

export const META_DATA = {
  title: `${siteMetadata.name} – Next.js 15 + Auth + Phantom`,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author.name, url: siteMetadata.author.url }],
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
    type: siteMetadata.openGraph.type,
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
