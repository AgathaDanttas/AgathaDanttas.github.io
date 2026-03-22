import { useEffect, useState } from "react";
import type { Translation } from "../../types/translation";

type HeroProps = {
  t: Translation;
};

export default function Hero({ t }: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "0 5%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 800, textAlign: "center", position: "relative", zIndex: 1 }}>
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(124,58,237,0.1)",
              border: "1px solid rgba(124,58,237,0.25)",
              borderRadius: 100,
              padding: "6px 18px",
              marginBottom: 32,
              fontSize: 12,
              color: "#a78bfa",
              fontFamily: "monospace",
              letterSpacing: "0.15em",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#7c3aed",
                display: "inline-block",
                boxShadow: "0 0 8px #7c3aed",
                animation: "blink 2s ease infinite",
              }}
            />
            {t.hero.available}
          </div>
        </div>

        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(30px)",
            transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              color: "#7c3aed",
              fontSize: 14,
              letterSpacing: "0.2em",
              marginBottom: 12,
            }}
          >
            {t.hero.greeting}
          </p>

          <h1
            style={{
              fontSize: "clamp(2.8rem, 8vw, 6rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.02em",
              marginBottom: 20,
              fontFamily: "'Segoe UI', sans-serif",
            }}
          >
            {t.hero.name}
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              color: "#94a3b8",
              fontFamily: "monospace",
              letterSpacing: "0.05em",
              marginBottom: 48,
            }}
          >
            {t.hero.title}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(30px)",
            transition: "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s",
          }}
        >
          <button
            onClick={() => scrollTo("projects")}
            className="btn-primary"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
              border: "none",
              color: "white",
              padding: "14px 32px",
              borderRadius: 50,
              fontSize: 14,
              fontFamily: "monospace",
              letterSpacing: "0.1em",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
              transition: "all 0.3s ease",
            }}
          >
            {t.hero.cta}
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="btn-secondary"
            style={{
              background: "transparent",
              border: "1px solid rgba(124,58,237,0.4)",
              color: "#a78bfa",
              padding: "14px 32px",
              borderRadius: 50,
              fontSize: 14,
              fontFamily: "monospace",
              letterSpacing: "0.1em",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {t.hero.cta2}
          </button>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            opacity: 0.5,
          }}
        >
          <div
            style={{
              width: 1,
              height: 50,
              background: "linear-gradient(to bottom, transparent, #7c3aed)",
              animation: "scrollAnim 2s ease infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        @keyframes scrollAnim {
          0% { opacity: 0; transform: scaleY(0); transform-origin: top; }
          50% { opacity: 1; }
          100% { opacity: 0; transform: scaleY(1); transform-origin: top; }
        }

        .btn-primary:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 30px rgba(124,58,237,0.6) !important;
        }

        .btn-secondary:hover {
          background: rgba(124,58,237,0.1) !important;
          border-color: rgba(124,58,237,0.6) !important;
          transform: translateY(-2px) !important;
        }
      `}</style>
    </section>
  );
}