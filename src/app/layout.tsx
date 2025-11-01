import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "MedCourses - Advanced Medical Education for Healthcare Professionals",
  description:
    "Master medical excellence with expert-led courses designed by practicing physicians. Advance your healthcare career with comprehensive, evidence-based medical education programs.",
  keywords:
    "medical courses, healthcare education, medical training, clinical skills, continuing medical education",
  authors: [{ name: "MedCourses Team" }],
  openGraph: {
    title: "MedCourses - Advanced Medical Education",
    description: "Expert-led medical courses for healthcare professionals",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
