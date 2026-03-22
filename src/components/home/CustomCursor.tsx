import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [big, setBig] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const over = (e: Event) => {
      const target = e.target as Element | null;
      if (target?.closest("a,button")) {
        setBig(true);
      }
    };

    const out = () => {
      setBig(false);
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: pos.x - 4,
          top: pos.y - 4,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#7c3aed",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "transform 0.1s ease",
          transform: big ? "scale(2)" : "scale(1)",
        }}
      />
      <div
        style={{
          position: "fixed",
          left: pos.x - 20,
          top: pos.y - 20,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1px solid rgba(124,58,237,0.4)",
          pointerEvents: "none",
          zIndex: 9997,
          transition: "all 0.12s ease",
          transform: big ? "scale(1.8)" : "scale(1)",
          opacity: big ? 0.6 : 0.3,
        }}
      />
    </>
  );
}