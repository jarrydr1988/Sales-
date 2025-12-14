const AtlasLogo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Globe/World */}
      <circle
        cx="50"
        cy="30"
        r="22"
        stroke="currentColor"
        strokeWidth="3"
        className="text-primary"
      />
      {/* Globe horizontal lines */}
      <ellipse
        cx="50"
        cy="30"
        rx="22"
        ry="8"
        stroke="currentColor"
        strokeWidth="2"
        className="text-primary"
      />
      <ellipse
        cx="50"
        cy="30"
        rx="22"
        ry="16"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-primary/60"
      />
      {/* Globe vertical line */}
      <path
        d="M50 8 L50 52"
        stroke="currentColor"
        strokeWidth="2"
        className="text-primary"
      />
      
      {/* Atlas figure - stylized */}
      {/* Head */}
      <circle
        cx="50"
        cy="58"
        r="5"
        fill="currentColor"
        className="text-foreground"
      />
      {/* Arms reaching up */}
      <path
        d="M35 50 Q40 55 45 52"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="text-foreground"
      />
      <path
        d="M65 50 Q60 55 55 52"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="text-foreground"
      />
      {/* Body */}
      <path
        d="M50 63 L50 80"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        className="text-foreground"
      />
      {/* Legs */}
      <path
        d="M50 80 L42 95"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="text-foreground"
      />
      <path
        d="M50 80 L58 95"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="text-foreground"
      />
    </svg>
  );
};

export default AtlasLogo;
