'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollExpandHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageWrapperRef.current) return;

    const container = containerRef.current;
    const imageWrapper = imageWrapperRef.current;

    // Create timeline for the expansion animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=400%', // Extended scroll range: expansion + 4sec hold + transition
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Animation sequence:
    // 0-25%: Expand from full image size to full screen
    // 25-75%: Hold at full screen (simulates 4 seconds of scrolling)
    // 75-100%: Transition out (optional fade or maintain)
    
    tl.fromTo(
      imageWrapper,
      {
        width: '1252px',
        maxWidth: '90vw',
        height: 'auto',
        aspectRatio: '1252/690',
        borderRadius: '16px',
      },
      {
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        aspectRatio: 'auto',
        borderRadius: '0px',
        duration: 1,
        ease: 'power2.inOut',
      }
    )
    .to(imageWrapper, {
      // Hold at full screen for the middle 50% of scroll (simulates ~4 seconds)
      duration: 2,
      ease: 'none',
    })
    .to(imageWrapper, {
      // Optional: subtle fade or maintain state before unpinning
      duration: 1,
      ease: 'none',
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen flex items-center justify-center bg-transparent">
      <div
        ref={imageWrapperRef}
        className="relative overflow-hidden"
        style={{
          width: '1252px',
          maxWidth: '90vw',
          aspectRatio: '1252/690',
          borderRadius: '16px',
        }}
      >
        <Image
          src="/HeroImage.png"
          alt="Hero Image"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
