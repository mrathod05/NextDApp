"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session } = useSession();

  return (
    <nav className="relative z-10 bg-black/90 backdrop-blur-sm border-b border-yellow-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              NextDapp
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="#"
              className="text-white hover:text-yellow-300 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-yellow-300 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-yellow-300 transition-colors"
            >
              Documentation
            </Link>
            {!session ? (
              <>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-yellow-300 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-600 text-black font-medium transition-colors"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <Link
                onClick={() => signOut()}
                href="#"
                className="px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-600 text-black font-medium transition-colors"
              >
                Sign Out
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-b border-yellow-900/30">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-white font-medium hover:bg-gray-800"
            >
              Home
            </Link>
            <Link
              href="/features"
              className="block px-3 py-2 rounded-md text-gray-300 font-medium hover:bg-gray-800"
            >
              Features
            </Link>
            <Link
              href="/docs"
              className="block px-3 py-2 rounded-md text-gray-300 font-medium hover:bg-gray-800"
            >
              Documentation
            </Link>
            <Link
              href="/login"
              className="block px-3 py-2 rounded-md text-gray-300 font-medium hover:bg-gray-800"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block px-3 py-2 rounded-md text-black font-medium bg-yellow-500 hover:bg-yellow-600"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
