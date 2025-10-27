'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, Bot, Cloud, Code2, BarChart3, ArrowRight } from 'lucide-react';
import React from 'react';

const services = [
  {
    icon: Cpu,
    title: 'AI Solutions',
    description: 'Harness the power of AI to drive innovation and efficiency.',
  },
  {
    icon: Bot,
    title: 'Automation',
    description: 'Streamline your operations with intelligent automation.',
  },
  {
    icon: Cloud,
    title: 'Cloud Systems',
    description: 'Leverage scalable and secure cloud infrastructure.',
  },
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Build powerful, modern web applications and experiences.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Turn your data into actionable, strategic insights.',
  },
];

export function ServicesSection() {
  const [activeCard, setActiveCard] = React.useState<string | null>(null);

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Services</h2>
          <p className="text-lg text-foreground/80 mt-4 max-w-2xl mx-auto">
            We deliver cutting-edge technology solutions tailored to your business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`glass-card group relative overflow-hidden transition-all duration-300 ease-in-out hover:!scale-105 hover:shadow-2xl hover:shadow-primary/20 ${
                activeCard === service.title ? 'scale-[1.02]' : 'scale-100'
              }`}
              onClick={() => setActiveCard(activeCard === service.title ? null : service.title)}
              style={{ animation: `slide-in-bottom 0.5s ease-out ${index * 100}ms forwards`, opacity: 0 }}
            >
              <CardHeader className="text-center items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 border border-primary/20">
                  <service.icon className="w-8 h-8 text-primary glow-icon" />
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-foreground/70">
                <p>{service.description}</p>
              </CardContent>
              <div className="absolute bottom-4 right-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
