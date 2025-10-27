export function AILogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9 12h6M12 9v6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3.5 12a8.5 8.5 0 1 1 5.003 7.822"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M17.5 15v-2.5a2.5 2.5 0 0 0-5 0V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
