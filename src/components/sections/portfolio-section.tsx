'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<ImagePlaceholder | null>(null);

  const handleProjectClick = (project: ImagePlaceholder) => {
    if (project.url) {
      if (project.url.startsWith('http')) {
        window.open(project.url, '_blank');
      } else {
        window.location.href = project.url;
      }
    } else {
      setSelectedProject(project);
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Work</h2>
          <p className="text-lg text-foreground/80 mt-4 max-w-2xl mx-auto">
            Explore a selection of our successful projects and technology showcases.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PlaceHolderImages.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card group relative overflow-hidden cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                data-ai-hint={project.imageHint}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold font-headline">{project.title}</h3>
                <p className="text-sm opacity-0 max-w-0 group-hover:max-w-full group-hover:opacity-100 transition-all duration-300 ease-in-out mt-2">
                  Learn more <ArrowRight className="inline h-4 w-4 ml-1" />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Dialog open={!!selectedProject && !selectedProject.url} onOpenChange={closeModal}>
        <DialogContent className="sm:max-w-[600px] glass-card">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="font-headline text-2xl text-primary">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-foreground/80 pt-2">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 rounded-lg overflow-hidden">
                <Image
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  width={600}
                  height={400}
                  data-ai-hint={selectedProject.imageHint}
                  className="w-full h-auto object-cover"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
