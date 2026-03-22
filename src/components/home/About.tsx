import type { Translation } from "../../types/translation";
import Reveal from "./Reveal";

type AboutProps = {
  t: Translation;
};

export default function About({ t }: AboutProps) {
  const stats = [
    { value: "20+", label: t.about.stat1 },
    { value: "15+", label: t.about.stat2 },
    { value: "3+", label: t.about.stat3 },
  ];

  return (
    <section id="about" style={{ padding: "120px 5%", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <Reveal>
          <p
            style={{
              fontFamily: "monospace",
              color: "#7c3aed",
              fontSize: 12,
              letterSpacing: "0.3em",
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
          </p>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#f1f5f9",
              lineHeight: 1.2,
              marginBottom: 60,
              maxWidth: 600,
            }}
          >
            {t.about.heading}
          </h2>
        </Reveal>

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "start",
          }}
        >
          <div>
            {[t.about.p1, t.about.p2, t.about.p3].map((p, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <p
                  style={{
                    color: "#94a3b8",
                    lineHeight: 1.8,
                    fontSize: 15,
                    marginBottom: 20,
                  }}
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <div
            className="stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 20,
            }}
          >
            {stats.map((stat, index) => (
              <Reveal key={index} delay={index * 0.12} direction="right">
                <div
                  className="stat-card"
                  style={{
                    background: "rgba(124,58,237,0.05)",
                    border: "1px solid rgba(124,58,237,0.2)",
                    borderRadius: 16,
                    padding: "24px 16px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      marginBottom: 8,
                    }}
                  >
                    {stat.value}
                  </div>

                  <div
                    style={{
                      color: "#64748b",
                      fontSize: 12,
                      fontFamily: "monospace",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .stat-card:hover {
          border-color: rgba(124,58,237,0.5) !important;
          background: rgba(124,58,237,0.1) !important;
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(124,58,237,0.15);
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}