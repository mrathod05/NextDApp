import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import { authConfig } from "./auth";

const { auth } = NextAuth(authConfig);

export default auth(async function middleware(req) {
  const { nextUrl } = req;
  const path = nextUrl.pathname;

  const isPublicRoute = ["/dashboard"].some((p) => path.startsWith(p));

  if (!isPublicRoute) {
    return NextResponse.next();
  }

  const isAuthenticated = !!req.auth;

  if (!isAuthenticated) {
    const loginUrl = new URL("/auth-form", nextUrl);
    loginUrl.searchParams.set("redirect", path);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
