/**
 * Button component - Reusable button with multiple variants and sizes
 * Supports both button and link functionality with accessibility features
 */

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  ariaLabel,
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "bg-linear-to-r from-primary to-secondary text-white hover:shadow-soft hover:scale-105 active:scale-95",
    secondary:
      "border-2 border-secondary text-secondary bg-white hover:bg-secondary hover:text-white",
    ghost: "text-secondary hover:bg-accent hover:text-primary",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;
