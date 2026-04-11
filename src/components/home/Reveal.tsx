import React from "react";
import { useScrollReveal } from "../../hooks/use-mobile";
import type { RevealDirection } from "../../hooks/use-mobile";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: RevealDirection;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: RevealProps) {
  const [ref, visible] = useScrollReveal();

  const transforms: Record<RevealDirection, string> = {
    up: "translateY(40px)",
    down: "translateY(-40px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction],
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}