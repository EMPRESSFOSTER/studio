'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function BackgroundImage() {
  const bgImage = PlaceHolderImages.find((p) => p.id === 'background-image');

  if (!bgImage) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 h-full w-full">
      <Image
        src={bgImage.imageUrl}
        alt={bgImage.title}
        fill
        data-ai-hint={bgImage.imageHint}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
    </div>
  );
}
