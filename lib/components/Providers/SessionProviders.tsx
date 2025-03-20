"use client";

import { JSX, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

/**
 * NextSessionProvider component wraps the application in a NextAuth session provider
 * to manage session state across the app.
 *
 * @param children - The content to be rendered inside the session provider.
 * @returns JSX.Element - The session-provided context for children components.
 */
const NextSessionProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextSessionProvider;
