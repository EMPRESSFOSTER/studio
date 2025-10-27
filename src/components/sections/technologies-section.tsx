'use client';
import { motion } from 'framer-motion';
import { ReactLogo } from '@/components/icons/react-logo';
import { NextjsLogo } from '@/components/icons/nextjs-logo';
import { FirebaseLogo } from '@/components/icons/firebase-logo';
import { AILogo } from '@/components/icons/ai-logo';
import { FigmaLogo } from '@/components/icons/figma-logo';
import { PhotoshopLogo } from '@/components/icons/photoshop-logo';
import { IllustratorLogo } from '@/components/icons/illustrator-logo';
import { CanvaLogo } from '@/components/icons/canva-logo';

const technologies = [
  { icon: ReactLogo, name: 'React' },
  { icon: NextjsLogo, name: 'Next.js' },
  { icon: FirebaseLogo, name: 'Firebase' },
  { icon: AILogo, name: 'GenAI' },
  { icon: FigmaLogo, name: 'Figma' },
  { icon: PhotoshopLogo, name: 'Photoshop' },
  { icon: IllustratorLogo, name: 'Illustrator' },
  { icon: CanvaLogo, name: 'Canva' },
];

export function TechnologiesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 150,
      },
    },
  };

  return (
    <section id="tech" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            Technologies We Use
          </h2>
          <p className="text-lg text-foreground/80 mt-4 max-w-2xl mx-auto">
            Our expertise is powered by a modern, scalable, and robust tech stack.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-4 group"
            >
              <motion.div
                className="w-20 h-20 flex items-center justify-center glass-card p-4 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30"
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 20px hsl(var(--primary) / 0.5)',
                }}
              >
                <tech.icon className="w-full h-full text-foreground/80 group-hover:text-primary transition-colors duration-300 group-hover:glow-icon" />
              </motion.div>
              <p className="font-semibold text-sm text-foreground/70 group-hover:text-primary transition-colors duration-300">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
