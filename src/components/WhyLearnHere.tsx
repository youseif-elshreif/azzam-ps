/**
 * WhyLearnHere component - Benefits grid showcasing course advantages
 * Features icon-based cards with hover effects and compelling copy
 */

import Container from "./ui/Container";
import Card from "./ui/Card";
import IconWrapper from "./ui/IconWrapper";
import { HiUsers } from "react-icons/hi";
import { FaStethoscope, FaCertificate, FaUserMd } from "react-icons/fa";

const WhyLearnHere = () => {
  const benefits = [
    {
      icon: FaUserMd,
      title: "Expert-Led Curriculum",
      description:
        "Learn from practicing physicians with real-world clinical experience and cutting-edge medical knowledge.",
    },
    {
      icon: FaStethoscope,
      title: "Practical Clinical Cases",
      description:
        "Work through real patient scenarios and case studies to develop critical thinking and diagnostic skills.",
    },
    {
      icon: FaCertificate,
      title: "Accredited Certification",
      description:
        "Earn recognized certificates that enhance your professional credentials and career advancement opportunities.",
    },
    {
      icon: HiUsers,
      title: "Ongoing Support & Community",
      description:
        "Join a network of healthcare professionals with access to mentorship, peer discussions, and continued learning resources.",
    },
  ];

  return (
    <section className="py-16 bg-bg">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Why Choose Our Medical Courses?
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            Join thousands of healthcare professionals who have advanced their
            careers through our comprehensive, evidence-based medical education
            programs.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center group">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                  <IconWrapper size="lg" color="primary">
                    <benefit.icon />
                  </IconWrapper>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-secondary mb-3">
                {benefit.title}
              </h3>

              <p className="text-muted leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 px-6 py-4 bg-white rounded-lg shadow-soft">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-cta rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-secondary rounded-full border-2 border-white"></div>
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-secondary">
                Join 2,500+ students
              </p>
              <p className="text-xs text-muted">
                Learning medical excellence worldwide
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyLearnHere;
