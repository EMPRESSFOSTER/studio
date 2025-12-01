import { EmpressLogo } from '@/components/empress-logo';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6 md:py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <EmpressLogo className="h-5 w-5 text-primary glow-icon" />
          <p className="text-sm text-muted-foreground font-headline">
            &copy; {new Date().getFullYear()} EmpressTech. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://x.com/AntonyGrace20" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors hover:glow-icon">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="https://www.instagram.com/empresstechng/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors hover:glow-icon">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/isitua-grace-047110252/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors hover:glow-icon">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
