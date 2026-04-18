"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
  threshold?: number;
  className?: string;
};

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  threshold = 0.05,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If IntersectionObserver is not supported, show immediately
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin: "50px 0px",
      }
    );

    // Check if already in view (e.g., elements at the top of the page)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      if (delay > 0) {
        setTimeout(() => setIsVisible(true), delay);
      } else {
        setIsVisible(true);
      }
      return;
    }

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const directionStyles: React.CSSProperties = isVisible
    ? { opacity: 1, transform: "none" }
    : direction === "left"
      ? { opacity: 0, transform: "translateX(-30px)" }
      : direction === "right"
        ? { opacity: 0, transform: "translateX(30px)" }
        : direction === "scale"
          ? { opacity: 0, transform: "scale(0.9)" }
          : { opacity: 0, transform: "translateY(30px)" };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...directionStyles,
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
