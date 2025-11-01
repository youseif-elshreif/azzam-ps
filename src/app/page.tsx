/**
 * Home Page - Main landing page for MedCourses medical education platform
 * Composes all main sections: Hero, About, Benefits, Courses, Testimonials, CTA
 */

import Hero from "@/components/Hero";
import AboutDoctor from "@/components/AboutDoctor";
import WhyLearnHere from "@/components/WhyLearnHere";
import FeaturedCourses from "@/components/FeaturedCourses";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Medical Pattern Background */}
      <Hero />

      {/* About the Instructor */}
      <AboutDoctor />

      {/* Benefits of Learning Here */}
      <WhyLearnHere />

      {/* Featured Courses Showcase */}
      <FeaturedCourses />

      {/* Student Testimonials */}
      <Testimonials />

      {/* Final Call to Action */}
      <CTASection />
    </div>
  );
}
