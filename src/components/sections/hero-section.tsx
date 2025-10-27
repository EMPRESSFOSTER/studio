import { Gem } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-3.5rem)] w-full flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
        <div className="relative z-10 flex flex-col items-center space-y-6 px-4">
            <div className="animate-text-focus-in" style={{ animationDelay: '200ms' }}>
                <Gem className="h-20 w-20 text-primary glow-icon" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter animate-text-focus-in" style={{ animationDelay: '500ms' }}>
                EmpressTech
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-foreground/80 animate-text-focus-in" style={{ animationDelay: '800ms' }}>
                Empowering the Future with Technology.
            </p>
        </div>
    </section>
  );
}
