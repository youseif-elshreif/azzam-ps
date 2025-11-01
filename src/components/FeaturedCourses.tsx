/**
 * FeaturedCourses component - Showcase of three featured medical courses
 * Displays course cards in responsive grid with "See more" CTA
 */

import Container from "./ui/Container";
import Button from "./ui/Button";
import CourseCard, { CourseCardProps } from "./CourseCard";
import { HiArrowRight } from "react-icons/hi";

const FeaturedCourses = () => {
  // Mock course data - in real app, this would come from API/CMS
  const featuredCourses: CourseCardProps[] = [
    {
      id: "emergency-medicine-basics",
      title: "Emergency Medicine Fundamentals",
      shortDescription:
        "Master the essential skills and protocols for emergency medical situations. Learn triage, resuscitation techniques, and critical care management.",
      price: 299,
      duration: "12 weeks",
      level: "Intermediate",
      rating: 5,
      href: "/courses/emergency-medicine-basics",
      studentsCount: 1200,
    },
    {
      id: "clinical-diagnostics",
      title: "Advanced Clinical Diagnostics",
      shortDescription:
        "Develop expertise in diagnostic reasoning, medical imaging interpretation, and laboratory analysis for accurate patient assessment.",
      price: 399,
      duration: "16 weeks",
      level: "Advanced",
      rating: 5,
      href: "/courses/clinical-diagnostics",
      studentsCount: 850,
    },
    {
      id: "patient-communication",
      title: "Patient Communication & Ethics",
      shortDescription:
        "Learn effective communication strategies, ethical decision-making, and cultural competency in healthcare delivery.",
      price: 199,
      duration: "8 weeks",
      level: "Beginner",
      rating: 4,
      href: "/courses/patient-communication",
      studentsCount: 2100,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Featured Medical Courses
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            Discover our most popular courses designed by medical experts to
            advance your clinical knowledge and professional development in
            healthcare.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {/* See More CTA */}
        <div className="text-center">
          <Button
            variant="secondary"
            size="lg"
            href="/courses"
            className="group"
          >
            <span>See All Courses</span>
            <HiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Additional Info */}
          <div className="mt-6">
            <p className="text-muted text-sm">
              <span className="font-medium text-secondary">
                20+ courses available
              </span>{" "}
              • New courses added monthly •
              <span className="font-medium text-secondary">
                Lifetime access
              </span>
            </p>
          </div>
        </div>

        {/* Course Categories Preview */}
        <div className="mt-16 pt-12 border-t border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-secondary mb-2">
              Browse by Specialty
            </h3>
            <p className="text-muted">
              Find courses tailored to your medical specialty and interests
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Emergency Medicine",
              "Internal Medicine",
              "Cardiology",
              "Pediatrics",
              "Surgery",
              "Radiology",
              "Pharmacology",
              "Medical Ethics",
            ].map((specialty) => (
              <div
                key={specialty}
                className="px-4 py-2 bg-accent text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                {specialty}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCourses;
