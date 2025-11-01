/**
 * CTASection component - Final call-to-action section with strong gradient and CTA
 * Encourages users to start their medical education journey
 */

import Container from "./ui/Container";
import Button from "./ui/Button";
import { HiAcademicCap, HiArrowRight } from "react-icons/hi";
import { FaBullseye } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="py-20 bg-linear-to-r from-secondary via-primary to-cta relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="cta-pattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.3" />
              <rect
                x="8"
                y="8"
                width="4"
                height="4"
                fill="currentColor"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      <Container className="relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6">
              <HiAcademicCap className="w-10 h-10 text-primary" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Advance Your
            <br />
            <span className="text-accent">Medical Career?</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of healthcare professionals who trust our expert-led
            courses to enhance their clinical skills, expand their knowledge,
            and improve patient outcomes.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-white">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">Expert Instructors</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">
                Practical Case Studies
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">
                Accredited Certificates
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">Lifetime Access</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              href="/courses"
              className="bg-white text-secondary hover:bg-accent hover:text-primary shadow-lg group min-w-[200px]"
            >
              <span>Start Learning Today</span>
              <HiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="ghost"
              size="lg"
              href="/contact"
              className="text-white border-white hover:bg-white hover:text-secondary min-w-[200px]"
            >
              Speak with an Advisor
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white border-opacity-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">15+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">50+</div>
                <div className="text-sm opacity-90">Medical Specialties</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">24/7</div>
                <div className="text-sm opacity-90">Learning Support</div>
              </div>
            </div>
          </div>

          {/* Special Offer */}
          <div className="mt-8">
            <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-secondary text-sm">
              <FaBullseye className="mr-2 w-4 h-4 text-cta" />
              <span>
                <strong>Limited Time:</strong> 30% off all courses for new
                students
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
