/**
 * AboutDoctor component - Doctor biography section with image and details
 * Features responsive two-column layout with specialties and credentials
 */

import Image from "next/image";
import Container from "./ui/Container";
import Card from "./ui/Card";
import { HiCheckCircle } from "react-icons/hi";

interface AboutDoctorProps {
  name?: string;
  title?: string;
  bio?: string;
  imageSrc?: string;
  badges?: string[];
  specialties?: string[];
}

const AboutDoctor = ({
  name = "Dr. Sarah Mitchell",
  title = "Chief Medical Officer & Lead Instructor",
  bio = "With over 15 years of clinical experience and a passion for medical education, Dr. Mitchell has dedicated her career to advancing healthcare through innovative teaching methods. She specializes in emergency medicine and has published numerous research papers in peer-reviewed journals.",
  imageSrc = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=face", // Professional doctor image
  badges = [
    "MD - Harvard Medical School",
    "Board Certified Emergency Medicine",
    "Published Researcher",
  ],
  specialties = [
    "Emergency Medicine",
    "Clinical Decision Making",
    "Medical Education",
    "Patient Safety Protocols",
  ],
}: AboutDoctorProps) => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center">
            <Card className="overflow-hidden max-w-sm" hover={false}>
              <div className="relative">
                {/* Doctor Image */}
                <Image
                  src={imageSrc}
                  alt={`Dr. ${name} - Medical Instructor`}
                  width={400}
                  height={320}
                  className="w-full h-80 object-cover"
                />

                {/* Badge Overlay */}
                <div className="absolute top-4 right-4 bg-cta text-white px-3 py-1 rounded-full text-sm font-medium">
                  Lead Instructor
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                Meet Your Instructor
              </h2>
              <h3 className="text-xl font-semibold text-primary mb-1">
                {name}
              </h3>
              <p className="text-muted font-medium">{title}</p>
            </div>

            <p className="text-text text-lg leading-relaxed mb-8">{bio}</p>

            {/* Credentials */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-secondary mb-4">
                Credentials & Education
              </h4>
              <div className="space-y-2">
                {badges.map((badge, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <HiCheckCircle className="w-5 h-5 text-cta flex-shrink-0" />
                    <span className="text-text">{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div>
              <h4 className="text-lg font-semibold text-secondary mb-4">
                Areas of Expertise
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>
                    <span className="text-text">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="mt-8 p-6 bg-accent rounded-lg border-l-4 border-primary">
              <p className="text-secondary italic">
                &quot;My mission is to bridge the gap between theoretical
                knowledge and practical clinical skills, empowering healthcare
                professionals to provide exceptional patient care.&quot;
              </p>
              <p className="text-right text-muted mt-2 font-medium">
                — Dr. Sarah Mitchell
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutDoctor;
