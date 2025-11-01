/**
 * Hero component - Main hero section with headline, subtitle, and CTAs
 * Features two-column layout with medical pattern background
 */

import Button from "./ui/Button";
import Container from "./ui/Container";
import HeroPatternBackground from "./HeroPatternBackground";
import { HiPlay, HiAcademicCap } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <HeroPatternBackground />

      {/* Content */}
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
              Master Medical
              <span className="text-primary"> Excellence</span>
            </h1>

            <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl">
              Advance your medical career with expert-led courses designed by
              practicing physicians. Learn cutting-edge techniques, clinical
              best practices, and evidence-based medicine.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                href="/courses"
                className="group"
              >
                <HiAcademicCap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Get Started
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="/courses"
                className="group"
              >
                <HiPlay className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Courses
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">500+</div>
                <div className="text-muted text-sm">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">15+</div>
                <div className="text-muted text-sm">Expert Instructors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">95%</div>
                <div className="text-muted text-sm">Completion Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Decorative Elements */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Main Decorative Card */}
              <div className="w-80 h-96 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="h-full flex flex-col justify-between">
                  {/* Medical Icons Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-primary rounded-full"></div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-cta rounded-lg"></div>
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                      <div className="w-4 h-6 bg-white rounded-sm"></div>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm text-muted mb-1">
                        <span>Clinical Skills</span>
                        <span>92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-cta h-2 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm text-muted mb-1">
                        <span>Medical Theory</span>
                        <span>88%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-cta h-2 rounded-full"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm text-muted mb-1">
                        <span>Patient Care</span>
                        <span>95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-cta h-2 rounded-full"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Badge */}
                  <div className="text-center">
                    <div className="inline-flex items-center px-3 py-1 bg-accent text-primary text-sm font-medium rounded-full">
                      🏆 Top Rated Course
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-cta rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary rounded-full opacity-30 animate-bounce"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
