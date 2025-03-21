"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Code, Shield, Wallet } from "lucide-react";
import { siteMetadata } from "@/lib/data";

// Complete content object including footer
const content = {
  projectName: "NextDApp",
  hero: {
    title: "Build modern web apps with",
    tagline: "Next.js 15 + Auth + Solana",
    description:
      "The ultimate starter kit for your Solana blockchain projects with built-in authentication, Phantom wallet integration, and modern UI components.",
    cta: {
      primary: {
        text: "Get Started",
        link: siteMetadata.git_url,
      },
      secondary: {
        text: "Learn More",
        link: "/#",
      },
    },
  },
  features: {
    sectionTitle: "Everything you need, built-in",
    sectionDescription:
      "A comprehensive solution with all the features you need to build modern, secure, and scalable Solana dApps.",
    items: {
      auth: {
        title: "Seamless Authentication",
        description:
          "Integrated NextAuth v5 provides secure, flexible authentication with multiple providers and session management.",
        icon: <Shield className="h-10 w-10 text-yellow-400" />,
      },
      wallet: {
        title: "Phantom Wallet Integration",
        description:
          "Connect with Phantom wallet for secure Solana blockchain transactions and Web3 functionality.",
        icon: <Wallet className="h-10 w-10 text-yellow-400" />,
      },
      nextjs: {
        title: "Next.js 15 Power",
        description:
          "Leverage the latest Next.js features including server components, improved routing, and optimized performance.",
        icon: <Code className="h-10 w-10 text-yellow-400" />,
      },
    },
  },
  demo: {
    title: "See it in action",
    description:
      "Experience the seamless integration of Next.js 15, NextAuth v5, and Phantom wallet in a single, unified framework for Solana development.",
    benefits: [
      "Lightning-fast page loads with server components",
      "Secure authentication with multiple providers",
      "Seamless Phantom wallet integration for Solana",
    ],
    cta: {
      text: "View Interactive Demo",
      link: siteMetadata.cli_package_url,
    },
    terminal: {
      commands: [
        {
          command: "$ npx use-next-dapp next-solana-app",
          color: "text-yellow-400",
        },
        {
          text: "Creating a new NextDApp with Solana integration...",
          color: "text-gray-500",
        },
        { text: "Installing dependencies...", color: "text-gray-500" },
        { text: "Setting up Next.js 15...", color: "text-gray-500" },
        { text: "Configuring NextAuth v5...", color: "text-gray-500" },
        {
          text: "Setting up Phantom wallet integration for Solana...",
          color: "text-gray-500",
        },
        {
          command: "✓ Success! Your Solana project is ready!",
          color: "text-yellow-400",
        },
        {
          text: "$ cd next-solana-app",
          color: "text-gray-500",
          withMargin: true,
        },
        { text: "$ npm run dev", color: "text-gray-500" },
        { command: "✓ Ready in 500ms", color: "text-yellow-400" },
        { text: " - Local: ", color: "text-gray-300", inline: true },
        {
          command: "http://localhost:3000",
          color: "text-yellow-400",
          inline: true,
        },
      ],
    },
  },
  footer: {
    description:
      "The ultimate Next.js 15 starter kit for Solana blockchain development with built-in authentication and Phantom wallet integration.",
    copyright: "© 2025 NextDApp. All rights reserved.",
    socialLinks: [
      {
        name: "Twitter",
        href: "https://twitter.com/nextdapp",
        icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
      },
      {
        name: "GitHub",
        href: "https://github.com/nextdapp",
        icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
      },
    ],
  },
};

export default function Home() {
  const [activeFeature, setActiveFeature] = useState("auth");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-grid-gray-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-gray-400/[0.05] dark:bg-bottom dark:border-b dark:border-yellow-900/10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-32 md:pb-24 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="block">{content.hero.title}</span>
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
                {content.hero.tagline}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              {content.hero.description}
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <button
                onClick={() => {
                  window.open(
                    content.hero.cta.primary.link,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="px-8 py-3 rounded-md bg-yellow-500 hover:bg-yellow-600 transition-colors text-lg font-medium text-black"
              >
                {content.hero.cta.primary.text}
              </button>
              <Link
                href={content.hero.cta.secondary.link}
                className="px-8 py-3 rounded-md border border-yellow-900/30 hover:border-yellow-500/50 transition-colors text-lg font-medium"
              >
                {content.hero.cta.secondary.text}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {content.features.sectionTitle}
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              {content.features.sectionDescription}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(content.features.items).map(([key, feature]) => (
              <div
                key={key}
                className={`p-6 rounded-xl border ${
                  activeFeature === key
                    ? "border-yellow-500 bg-gray-900"
                    : "border-gray-800 bg-gray-900/30"
                } 
                hover:border-yellow-500 transition-all duration-300 cursor-pointer`}
                onClick={() => setActiveFeature(key)}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-medium text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {content.demo.title}
              </h2>
              <p className="mt-4 text-xl text-gray-300">
                {content.demo.description}
              </p>
              <div className="mt-8 space-y-4">
                {content.demo.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-black">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <button
                  onClick={() => {
                    window.open(
                      content.demo.cta.link,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-yellow-500 hover:bg-yellow-600 transition-colors"
                >
                  {content.demo.cta.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 bg-black p-6 rounded-xl border border-yellow-900/30 shadow-xl">
              <div className="rounded-lg overflow-hidden">
                <div className="p-4 bg-gray-900 flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-sm text-gray-400">Terminal</div>
                </div>
                <div className="bg-gray-900 p-4 font-mono text-sm text-gray-300">
                  {content.demo.terminal.commands.map((item, index) => (
                    <p
                      key={index}
                      className={`${item.color} ${
                        item.withMargin ? "mt-2" : ""
                      }`}
                      style={{ display: item.inline ? "inline" : "block" }}
                    >
                      {item.command || item.text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-yellow-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              NextDapp
            </span>
            <p className="mt-4 text-gray-400">{content.footer.description}</p>
          </div>
          <div className="mt-12 border-t border-yellow-900/30 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">{content.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
