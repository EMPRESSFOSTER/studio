'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Lightbulb, Cpu, Globe, Rocket } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const highlights = [
  { icon: Lightbulb, text: 'Innovative Solutions' },
  { icon: Cpu, text: 'Smart Technology Integration' },
  { icon: Globe, text: 'Global Vision' },
  { icon: Rocket, text: 'Scalable Growth Mindset' },
];

const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

export function AboutSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.title}
                width={600}
                height={600}
                data-ai-hint={aboutImage.imageHint}
                className="rounded-lg object-cover w-full h-full shadow-2xl shadow-primary/20"
              />
            )}
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold font-headline text-primary">
              Empowering the Future with Technology.
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-foreground/80 font-semibold">
              At EMPRESSTECH, we don’t just build technology — we design the future.
            </motion.p>
            <motion.div variants={itemVariants} className="glass-card p-6 space-y-4">
              <p>
                Hi, I’m Grace (Empresstech), a passionate graphic and web designer with a keen eye for detail and a love for turning ideas into clean, impactful visuals. I specialize in crafting engaging brand identities and websites that don’t just look great—but work seamlessly. Helping businesses stand out with stunning designs and seamless web experiences.
              </p>
              <p>
                EMPRESSTECH is a forward-thinking digital company focused on delivering intelligent solutions that redefine how people interact with technology. We combine creativity, <span className="gradient-text">AI innovation</span>, and technical expertise to help businesses grow in a connected world.
              </p>
              <p>
                From website and app development to digital transformation and brand design, we believe in crafting experiences that inspire, engage, and empower.
              </p>
              <p>
                Our mission is simple — to help brands evolve faster, work smarter, and shine brighter in the digital age.
              </p>
            </motion.div>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2 bg-primary/10 rounded-md border border-primary/20 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-primary glow-icon" />
                  </div>
                  <span className="font-semibold text-foreground/90">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        .gradient-text {
          background-image: linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent)));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </section>
  );
}
