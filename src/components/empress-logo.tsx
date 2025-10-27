export function EmpressLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
    >
      <defs>
        <linearGradient
          id="logo-gradient"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(150, 100%, 40%)" />
        </linearGradient>
      </defs>
      <path
        fill="url(#logo-gradient)"
        d="M21.2,6.4V0H0v32h21.2v-6.4H6.4V19.2h9.6v-6.4H6.4V6.4H21.2z"
      />
      <rect x="25.6" y="0" width="6.4" height="6.4" fill="url(#logo-gradient)" />
      <rect x="25.6" y="12.8" width="6.4" height="6.4" fill="url(#logo-gradient)" />
      <rect x="22.4" y="6.4" width="6.4" height="6.4" fill="url(#logo-gradient)" />
      <rect x="22.4" y="19.2" width="6.4" height="6.4" fill="url(#logo-gradient)" />
      <rect x="19.2" y="25.6" width="6.4" height="6.4" fill="url(#logo-gradient)" />
    </svg>
  );
}
