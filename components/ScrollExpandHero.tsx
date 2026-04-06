'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollExpandHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageWrapperRef.current || !imageRef.current) return;

    const container = containerRef.current;
    const imageWrapper = imageWrapperRef.current;
    const image = imageRef.current;

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
    // 0-25%: Expand from initial size to beyond full screen with scale
    // 25-75%: Hold at full screen (simulates 4 seconds of scrolling)
    // 75-100%: Transition out (optional fade or maintain)
    
    tl.fromTo(
      imageWrapper,
      {
        width: '98vw',
        height: '92vh',
        borderRadius: '8px',
      },
      {
        width: '100vw',
        height: '100vh',
        borderRadius: '0px',
        duration: 1,
        ease: 'power2.inOut',
      }
    )
    .fromTo(
      image,
      {
        scale: 1,
      },
      {
        scale: 1.15,
        duration: 1,
        ease: 'power2.inOut',
      },
      0 // Start at the same time as wrapper animation
    )
    .to({}, {
      // Hold at full screen for the middle 50% of scroll (simulates ~4 seconds)
      duration: 2,
      ease: 'none',
    })
    .to({}, {
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
          width: '98vw',
          height: '92vh',
          borderRadius: '8px',
        }}
      >
        <div ref={imageRef} className="w-full h-full">
          <Image
            src="/HeroImage.png"
            alt="Hero Image"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
