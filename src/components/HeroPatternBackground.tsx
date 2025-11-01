/**
 * HeroPatternBackground component - SVG medical pattern background
 * Features medical icons (stethoscope, heart, pills, etc.) with blue-to-white gradient
 */

const HeroPatternBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary via-cta to-white opacity-90" />

      {/* Medical Pattern SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="medical-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            {/* Stethoscope */}
            <g transform="translate(20, 20)" fill="currentColor" opacity="0.6">
              <circle
                cx="5"
                cy="5"
                r="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M5 13 Q5 25 15 25 Q25 25 25 15"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="25" cy="15" r="3" fill="currentColor" />
              <path d="M15 25 L15 35" stroke="currentColor" strokeWidth="2" />
              <circle cx="15" cy="38" r="3" fill="currentColor" />
            </g>

            {/* Medical Cross */}
            <g transform="translate(70, 15)" fill="currentColor" opacity="0.5">
              <rect x="8" y="2" width="4" height="16" rx="1" />
              <rect x="2" y="8" width="16" height="4" rx="1" />
            </g>

            {/* Heart */}
            <g transform="translate(15, 70)" fill="currentColor" opacity="0.4">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </g>

            {/* Pills */}
            <g transform="translate(70, 70)" opacity="0.5">
              <ellipse cx="8" cy="6" rx="6" ry="3" fill="currentColor" />
              <ellipse cx="16" cy="12" rx="3" ry="6" fill="currentColor" />
            </g>

            {/* Microscope */}
            <g transform="translate(45, 45)" fill="currentColor" opacity="0.3">
              <rect x="5" y="2" width="2" height="8" />
              <circle
                cx="6"
                cy="12"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <rect x="2" y="16" width="8" height="2" />
              <rect x="4" y="18" width="4" height="1" />
            </g>
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#medical-pattern)" />
      </svg>

      {/* Additional decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full opacity-5 blur-xl" />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-cta rounded-full opacity-10 blur-lg" />
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary rounded-full opacity-15 blur-md" />
    </div>
  );
};

export default HeroPatternBackground;
