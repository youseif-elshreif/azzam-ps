/**
 * Footer component - Main footer with links, contact info, and social icons
 * Organized in columns with responsive design
 */

import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import Container from "./ui/Container";
import IconWrapper from "./ui/IconWrapper";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: FaFacebook, href: "#" },
    { name: "Twitter", icon: FaTwitter, href: "#" },
    { name: "LinkedIn", icon: FaLinkedin, href: "#" },
    { name: "Instagram", icon: FaInstagram, href: "#" },
  ];

  return (
    <footer className="bg-secondary text-white">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-linear-to-r from-primary to-cta rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <span className="text-xl font-bold">MedCourses</span>
              </Link>
              <p className="text-gray-300 mb-6 max-w-md">
                Advance your medical knowledge with expert-led courses designed
                for healthcare professionals. Learn from experienced doctors and
                enhance your clinical skills.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-300 hover:text-cta transition-colors"
                    aria-label={social.name}
                  >
                    <IconWrapper size="md" color="accent">
                      <social.icon />
                    </IconWrapper>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-primary!">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-cta transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-primary!">
                Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <IconWrapper size="sm" color="accent">
                    <HiMail />
                  </IconWrapper>
                  <span className="text-gray-300">info@medcourses.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <IconWrapper size="sm" color="accent">
                    <HiPhone />
                  </IconWrapper>
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <IconWrapper size="sm" color="accent">
                    <HiLocationMarker />
                  </IconWrapper>
                  <span className="text-gray-300">
                    Medical District, Healthcare City
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} MedCourses. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Designed for healthcare professionals worldwide
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
