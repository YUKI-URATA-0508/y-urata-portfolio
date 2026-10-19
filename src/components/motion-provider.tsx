"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animation } from "@/lib/animation";

export function MotionProvider({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const loader = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        // A session flag avoids replaying the logo when returning to the page.
        let played = false;
        try {
          played = sessionStorage.getItem("y-urata-loaded") === "true";
        } catch {
          /* Storage is optional. */
        }
        if (!played) {
          gsap.fromTo(
            loader.current,
            { autoAlpha: 1 },
            {
              autoAlpha: 0,
              delay: animation.loading.hold,
              duration: animation.loading.duration,
              ease: animation.loading.ease,
              onComplete: () => {
                try {
                  sessionStorage.setItem("y-urata-loaded", "true");
                } catch {
                  /* Private browsing is supported. */
                }
              },
            },
          );
        }
        gsap.utils
          .toArray<HTMLElement>("[data-reveal]", root.current)
          .forEach((element) => {
            gsap.from(element, {
              autoAlpha: 0,
              y: animation.reveal.y,
              duration: animation.reveal.duration,
              ease: animation.reveal.ease,
              scrollTrigger: {
                trigger: element,
                start: animation.reveal.start,
                once: true,
              },
            });
          });
      },
      root,
    );
    return () => media.revert();
  }, []);

  return (
    <div ref={root}>
      <div ref={loader} className="loading-screen" aria-hidden="true">
        <span className="brand">Y.URATA</span>
        <span className="loading-line" />
      </div>
      {children}
    </div>
  );
}
