/**
 * Navbar component - Main navigation header with responsive design
 * Features mobile hamburger menu and accessible navigation controls
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import Container from "./ui/Container";
import Button from "./ui/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-70 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <header className="bg-white shadow-soft sticky top-0 z-50">
        <Container>
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-linear-to-r from-primary to-secondary rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">
                  MedCourses
                </span>
                <div className="text-xs text-muted">by Dr. Azzam</div>
              </div>
              <div className="sm:hidden">
                <span className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                  Med
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-text hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" href="/login">
                Login
              </Button>
              <Button variant="primary" href="/signup">
                Sign Up
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`md:hidden relative p-3 rounded-lg bg-linear-to-r from-primary to-secondary text-white hover:shadow-lg transition-all duration-300 transform ${
                isMenuOpen ? "rotate-180 scale-110" : "hover:scale-105"
              }`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <div className="relative">
                {isMenuOpen ? (
                  <HiX className="w-6 h-6 transform transition-transform duration-300" />
                ) : (
                  <HiMenu className="w-6 h-6 transform transition-transform duration-300" />
                )}
              </div>
            </button>
          </nav>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
              isMenuOpen
                ? "max-h-screen opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-2"
            }`}
          >
            <div className="py-4 border-t border-gray-100 bg-linear-to-b from-white to-gray-50">
              <div className="flex flex-col space-y-1">
                {navigationLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-text hover:text-primary hover:bg-accent transition-all font-medium py-3 px-4 rounded-lg transform hover:scale-105 ${
                      isMenuOpen ? "animate-slide-up" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Mobile CTA Buttons */}
                <div className="flex flex-col space-y-3 pt-6 mt-4 border-t border-gray-200">
                  <Button
                    variant="ghost"
                    href="/login"
                    className="w-full justify-center py-3 border-2 border-gray-200 hover:border-primary"
                  >
                    Login
                  </Button>
                  <Button
                    variant="primary"
                    href="/signup"
                    className="w-full justify-center py-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Sign Up
                  </Button>
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                  <p className="text-sm text-muted">Need help?</p>
                  <a
                    href="tel:+1555123456"
                    className="text-primary font-medium text-sm hover:underline"
                  >
                    Call us: +1 (555) 123-456
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Navbar;
