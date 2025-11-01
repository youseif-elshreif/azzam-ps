/**
 * Testimonials component - Student testimonials with avatar and ratings
 * Features accessible grid layout with quotes from healthcare professionals
 */

import Container from "./ui/Container";
import Card from "./ui/Card";
import { HiStar } from "react-icons/hi";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  location?: string;
}

const Testimonials = () => {
  // Mock testimonials data
  const testimonials: Testimonial[] = [
    {
      id: "testimonial-1",
      name: "Dr. Michael Chen",
      role: "Emergency Physician",
      location: "Boston Medical Center",
      content:
        "The emergency medicine course transformed my approach to patient care. The case studies were incredibly realistic and helped me develop critical decision-making skills that I use every day in the ER.",
      rating: 5,
    },
    {
      id: "testimonial-2",
      name: "Sarah Rodriguez, RN",
      role: "ICU Nurse",
      location: "St. Mary's Hospital",
      content:
        "As a nurse looking to advance my career, these courses provided exactly what I needed. The instructors are world-class, and the practical knowledge has made me more confident in high-pressure situations.",
      rating: 5,
    },
    {
      id: "testimonial-3",
      name: "Dr. James Wilson",
      role: "Internal Medicine Resident",
      location: "Johns Hopkins",
      content:
        "The diagnostic courses helped me excel during my residency. The systematic approach to clinical reasoning and the emphasis on evidence-based medicine has been invaluable for my professional growth.",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <HiStar
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <section className="py-16 bg-bg">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            Hear from healthcare professionals who have advanced their careers
            and improved patient care through our medical education programs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative" hover={false}>
              {/* Quote Mark */}
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">&ldquo;</span>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-text leading-relaxed mb-6 italic">
                {testimonial.content}
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-3">
                {/* Avatar */}
                <div className="w-12 h-12 bg-linear-to-br from-primary to-cta rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-semibold text-sm">
                    {getInitials(testimonial.name)}
                  </span>
                </div>

                {/* Details */}
                <div className="min-w-0">
                  <div className="font-semibold text-secondary text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-muted text-sm">{testimonial.role}</div>
                  {testimonial.location && (
                    <div className="text-muted text-xs">
                      {testimonial.location}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">98%</div>
              <div className="text-muted">Course Completion Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">
                4.9/5
              </div>
              <div className="text-muted">Average Course Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">
                2,500+
              </div>
              <div className="text-muted">Healthcare Professionals Trained</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
