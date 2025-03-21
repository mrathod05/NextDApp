import { siteMetadata } from "@/lib/data";
import NextAuth from "next-auth";
import { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const BASE_PAGE = "/auth-form";
const MAX_AGE = 1 * 24 * 60 * 60; // 1 day

export const authConfig: NextAuthConfig = {
  session: { strategy: "jwt" },
  secret: process.env.NEXT_AUTH_SECRET,
  jwt: {
    maxAge: MAX_AGE,
  },
  pages: {
    signIn: BASE_PAGE,
    error: BASE_PAGE,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (!email || !password) {
          throw new Error("Email and password are required.");
        }

        try {
          const res = await fetch(`${siteMetadata.app_url}/api/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });

          if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Invalid credentials");
          }

          const user = await res.json();
          if (!user) return null;
          return user;
        } catch (error: any) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.user = user;
        return token;
      }

      if (trigger === "update" && session?.user) {
        return {
          ...token,
          user: {
            ...(token.user || {}),
            ...session.user,
          },
        };
      }

      return token;
    },

    async session({ session, token }) {
      session.user = {
        ...session.user,
        ...(token.user || {}),
      };
      return session;
    },
  },
} satisfies NextAuthConfig;

export const { auth, handlers, signIn, signOut } = NextAuth(authConfig);
