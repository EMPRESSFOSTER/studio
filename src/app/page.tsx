import { Header } from '@/components/header';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ServicesSection } from '@/components/sections/services-section';
import { TechnologiesSection } from '@/components/sections/technologies-section';
import { PortfolioSection } from '@/components/sections/portfolio-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/footer';
import { ChatAssistant } from '@/components/chat-assistant';

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TechnologiesSection />
        <PortfolioSection />
        <PricingSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
}
