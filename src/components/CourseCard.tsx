/**
 * CourseCard component - Individual course card for FeaturedCourses section
 * Displays course information with image, metadata, pricing, and ratings
 */

import Link from "next/link";
import Image from "next/image";
import { HiStar, HiClock, HiAcademicCap } from "react-icons/hi";

export interface CourseCardProps {
  id: string;
  title: string;
  shortDescription: string;
  imageSrc?: string;
  price: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  href: string;
  studentsCount?: number;
  reviewsCount?: number;
}

const CourseCard = ({
  title,
  shortDescription,
  imageSrc,
  price,
  duration,
  level,
  rating,
  href,
  studentsCount,
  reviewsCount = 150,
}: CourseCardProps) => {
  const levelColors = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800",
  };

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

  return (
    <div className="bg-white rounded-lg shadow-soft border border-gray-100 overflow-hidden group hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-200">
      {/* Course Image */}
      <div className="relative overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            width={400}
            height={192}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-accent to-primary flex items-center justify-center">
            <div className="text-center text-white">
              <HiAcademicCap className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm font-medium">
                {title.split(" ").slice(0, 2).join(" ")}
              </p>
            </div>
          </div>
        )}

        {/* Level Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full ${levelColors[level]}`}
          >
            {level}
          </span>
        </div>

        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 shadow-md">
          <span className="text-secondary font-bold">${price}</span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-secondary mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted text-sm line-clamp-3">{shortDescription}</p>
        </div>

        {/* Metadata Row */}
        <div className="flex items-center justify-between text-sm text-muted mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <HiClock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            {studentsCount && (
              <div className="flex items-center space-x-1">
                <HiAcademicCap className="w-4 h-4" />
                <span>{studentsCount}+</span>
              </div>
            )}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">{renderStars(rating)}</div>
            <span className="text-sm font-medium text-secondary">
              {rating}.0
            </span>
            <span className="text-xs text-muted">({reviewsCount} reviews)</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link
            href={href}
            className="block w-full text-center bg-primary text-white py-2 rounded-md hover:bg-secondary transition-colors duration-200 font-medium"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
