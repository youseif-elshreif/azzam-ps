/**
 * IconWrapper component - Consistent styling for icons throughout the app
 * Provides size and color variants for react-icons
 */

import { ReactNode } from "react";

interface IconWrapperProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "muted" | "accent";
  className?: string;
}

const IconWrapper = ({
  children,
  size = "md",
  color = "primary",
  className = "",
}: IconWrapperProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    muted: "text-muted",
    accent: "text-cta",
  };

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
      {children}
    </div>
  );
};

export default IconWrapper;
