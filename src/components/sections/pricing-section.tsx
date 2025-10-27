'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Gem, Rocket, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Starter Plan',
    icon: Star,
    price: '₦150,000',
    description: 'Best for small businesses, startups, and freelancers',
    features: [
      'Modern Website Design (1–3 pages)',
      'Basic Hosting',
      'SEO Optimization',
      'Email & Chat Support',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outline',
    isPopular: false,
  },
  {
    name: 'Professional Plan',
    icon: Gem,
    price: '₦250,000',
    description: 'Best for growing brands and tech-focused companies',
    features: [
      'Custom Website Design (up to 10 pages)',
      'Domain Integration',
      'Priority Hosting',
      'Advanced SEO Setup',
      '24/7 Priority Support',
    ],
    buttonText: 'Choose Plan',
    buttonVariant: 'default',
    isPopular: true,
  },
  {
    name: 'Enterprise Plan',
    icon: Rocket,
    price: 'Custom Quote',
    description: 'Best for large enterprises and tailored digital solutions',
    features: [
      'Full-stack Web & App Development',
      'AI + Automation Integration',
      'Firebase & Cloud Setup',
      'Dedicated Project Manager',
      'Lifetime Maintenance & Support',
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'outline',
    isPopular: false,
  },
];

export function PricingSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            Flexible Pricing for Every Vision
          </h2>
          <p className="text-lg text-foreground/80 mt-4 max-w-2xl mx-auto">
            Choose a plan that fits your vision — EMPRESSTECH empowers your digital future.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                'glass-card group flex flex-col p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20',
                plan.isPopular && 'border-primary pulsing-border scale-105'
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="flex-grow">
                <div className="text-center mb-6">
                  <plan.icon className="h-10 w-10 text-primary mx-auto mb-4 glow-icon" />
                  <h3 className="text-2xl font-bold font-headline mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground h-10">{plan.description}</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
                <ul className="space-y-4 text-sm mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="w-full">
                <Button
                  className="w-full"
                  variant={plan.buttonVariant === 'default' ? 'default' : 'outline'}
                >
                  {plan.buttonText}
                </Button>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
