"use client";

import { useEffect, useRef } from "react";

export function HeroInteractiveGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    if (reduceMotion.matches || coarsePointer.matches) {
      return;
    }

    let frame = 0;
    let currentX = 50;
    let currentY = 42;
    let targetX = currentX;
    let targetY = currentY;

    const update = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      glow.style.setProperty("--glow-x", `${currentX.toFixed(2)}%`);
      glow.style.setProperty("--glow-y", `${currentY.toFixed(2)}%`);

      if (
        Math.abs(targetX - currentX) > 0.05 ||
        Math.abs(targetY - currentY) > 0.05
      ) {
        frame = window.requestAnimationFrame(update);
      } else {
        frame = 0;
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const hero = glow.parentElement;

      if (!hero) {
        return;
      }

      const rect = hero.getBoundingClientRect();
      const insideHero =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!insideHero) {
        return;
      }

      targetX = ((event.clientX - rect.left) / rect.width) * 100;
      targetY = ((event.clientY - rect.top) / rect.height) * 100;

      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return <div ref={glowRef} className="hero-interactive-glow" aria-hidden />;
}
