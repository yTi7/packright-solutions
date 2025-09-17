"use client";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import gradient1 from "@public/images/gradients/set1-1.webp";
import gradient2 from "@public/images/gradients/set1-2.webp";
import gradient3 from "@public/images/gradients/set1-3.webp";
import gradient4 from "@public/images/gradients/set1-4.webp";
import gradient5 from "@public/images/gradients/set1-5.webp";

import { cn } from "@/lib/utils";

const HeroBackground = ({ className = "" }: { className?: string }) => {
  const noiseRef = React.useRef<SVGFETurbulenceElement>(null);
  const baseGradient = React.useRef<HTMLImageElement>(null);
  const gradients = {
    g2: React.useRef<HTMLImageElement>(null),
    g3: React.useRef<HTMLImageElement>(null),
    g4: React.useRef<HTMLImageElement>(null),
    g5: React.useRef<HTMLImageElement>(null),
  };

  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.to(noiseRef.current, {
      attr: { baseFrequency: gsap.utils.random(1.8, 2) },
      duration: 1,
      repeat: -1,
    });
    const tl = gsap.timeline({
      repeat: -1,
    });
    tl.to(
      Object.values(gradients).map((ref) => ref.current),
      { opacity: 0, duration: 3, stagger: 0 },
    );
    tl.to(
      [
        gradients.g2.current,
        gradients.g3.current,
        gradients.g4.current,
        gradients.g5.current,
      ],
      {
        opacity: 1,
        duration: 3,
        stagger: 3,
      },
    );
  });

  const styles = {
    gradients:
      "absolute opacity-100 scale-125 bg-no-repeat blur-md h-screen will-change-[opacity] top-0 left-0 object-cover w-full",
  };

  return (
    <div className={cn("overflow-hidden", className)}>
      <svg
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute top-0 left-0 z-50 opacity-30 mix-blend-screen`}
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="3"
            numOctaves="3"
            stitchTiles="stitch"
            ref={noiseRef}
          />
        </filter>

        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
      <Image
        src={gradient1}
        alt="Gradient Background"
        ref={baseGradient}
        className={cn(styles.gradients, "opacity-100 blur-none")}
      />
      <Image
        src={gradient2}
        alt="Gradient Background"
        className={styles.gradients}
        ref={gradients.g2}
      />
      <Image
        src={gradient3}
        alt="Gradient Background"
        className={styles.gradients}
        ref={gradients.g3}
      />
      <Image
        src={gradient4}
        alt="Gradient Background"
        className={styles.gradients}
        ref={gradients.g4}
      />
      <Image
        src={gradient5}
        alt="Gradient Background"
        className={styles.gradients}
        ref={gradients.g5}
      />
    </div>
  );
};

export default HeroBackground;
