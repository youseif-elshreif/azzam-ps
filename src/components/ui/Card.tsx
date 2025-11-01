/**
 * Card component - Reusable card container for consistent styling
 * Base component for course cards, testimonials, and other content blocks
 */

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const Card = ({
  children,
  className = "",
  hover = true,
  padding = "md",
}: CardProps) => {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const baseClasses = "bg-white rounded-lg shadow-soft border border-gray-100";
  const hoverClasses = hover
    ? "hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-200"
    : "";

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
