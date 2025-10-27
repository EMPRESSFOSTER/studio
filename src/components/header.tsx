import { EmpressLogo } from '@/components/empress-logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <EmpressLogo className="h-6 w-6 text-primary glow-icon" />
            <span className="font-bold font-headline inline-block text-lg">
              EmpressTech
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
