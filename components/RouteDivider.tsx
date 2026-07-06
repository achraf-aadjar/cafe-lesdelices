export function RouteDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`route-divider ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="20"
          x2="1200"
          y2="20"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray="24 18"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
