export function CanvaLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="10" fill="#00C4CC"></circle>
      <path
        d="M12 5a7 7 0 0 0-6.32 4h12.64A7 7 0 0 0 12 5z"
        fill="#9D72FF"
      ></path>
      <circle cx="12" cy="12" r="3" fill="#FFD966"></circle>
    </svg>
  );
}
