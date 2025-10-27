export function PhotoshopLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="24" height="24" rx="4" fill="#001833"></rect>
      <path
        d="M8.53 7.03h3.58c1.8 0 2.81 1.05 2.81 2.53 0 1.25-.7 2.04-1.67 2.3l1.9 3.02h-2.34l-1.63-2.88H9.7v2.88H7.53V7.03h1zm1.17 1.14v2.5h2.21c.9 0 1.44-.51 1.44-1.25s-.54-1.25-1.44-1.25H9.7z"
        fill="#00A4E4"
      ></path>
      <path
        d="M14.73 9.58c0-.6.47-.96 1.12-.96s1.11.36 1.11.96c0 .61-.46.96-1.11.96s-1.12-.35-1.12-.96z"
        fill="#00A4E4"
      ></path>
    </svg>
  );
}
