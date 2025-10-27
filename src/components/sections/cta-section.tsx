
'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function CtaSection() {
  return (
    <section id="cta" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="relative glass-card p-8 md:p-12 rounded-2xl overflow-hidden text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 -z-10"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            Ready to build your future with <span className="text-primary">EmpressTech</span>?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's collaborate to turn your vision into a reality.
          </p>
          <a href="#contact">
            <Button 
              size="lg" 
              className="bg-primary/90 text-primary-foreground hover:bg-primary transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/20 hover:shadow-primary/40"
            >
              Let's Talk
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
