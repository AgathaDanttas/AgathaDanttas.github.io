import React from "react";
import type { Translation } from "../../types/translation";
import Reveal from "./reveal";


type ProjectsProps = {
  t: Translation;
};

export default function Projects({ t }: ProjectsProps) {
  const stackColors: Record<string, string> = {
    React: "#61DAFB",
    "Next.js": "#fff",
    TypeScript: "#3178C6",
    "Tailwind CSS": "#06B6D4",
    "Node.js": "#68A063",
    Python: "#3776AB",
    GraphQL: "#E10098",
    PostgreSQL: "#4169E1",
    MongoDB: "#47A248",
    "D3.js": "#F9A03C",
    Storybook: "#FF4785",
    Stripe: "#635BFF",
    AWS: "#FF9900",
    Redux: "#764ABC",
    "Web3.js": "#F16822",
    "Chart.js": "#FF6384",
    Docker: "#2496ED",
    TensorFlow: "#FF6F00",
    "React Native": "#61DAFB",
    Prisma: "#2D3748",
    "REST API": "#7c3aed",
    "REST APIs": "#7c3aed",
    WebSockets: "#a78bfa",
    Vercel: "#fff",
    Figma: "#F24E1E",
    "CI/CD": "#94a3b8",
  };

  return (
    <section id="projects" style={{ padding: "120px 5%", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
            // {t.projects.label}
          </p>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#f1f5f9",
              marginBottom: 12,
            }}
          >
            {t.projects.heading}
          </h2>

          <p style={{ color: "#64748b", fontFamily: "monospace", marginBottom: 60 }}>
            {t.projects.sub}
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 24,
          }}
        >
          {t.projects.items.map((proj, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <div
                className="project-card"
                style={{
                  background: "rgba(15,10,25,0.8)",
                  border: "1px solid rgba(124,58,237,0.15)",
                  borderRadius: 20,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  height: "100%",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(124,58,237,0.15)",
                      border: "1px solid rgba(124,58,237,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                    }}
                  >
                    {["⚡", "🛒", "📊", "🎙️", "📝", "₿"][index % 6]}
                  </div>

                  <div style={{ display: "flex", gap: 8 }}>
                    <a
                      href="#"
                      className="icon-btn"
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: "rgba(124,58,237,0.1)",
                        border: "1px solid rgba(124,58,237,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        color: "#a78bfa",
                        fontSize: 14,
                        transition: "all 0.2s ease",
                      }}
                    >
                      ↗
                    </a>

                    <a
                      href="#"
                      className="icon-btn"
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: "rgba(124,58,237,0.1)",
                        border: "1px solid rgba(124,58,237,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        color: "#a78bfa",
                        fontSize: 12,
                        transition: "all 0.2s ease",
                      }}
                    >
                      GH
                    </a>
                  </div>
                </div>

                <h3 style={{ color: "#f1f5f9", fontSize: 18, fontWeight: 600, margin: 0 }}>
                  {proj.title}
                </h3>

                <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7, margin: 0, flex: 1 }}>
                  {proj.desc}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {proj.stack.map((stackItem, stackIndex) => (
                    <span
                      key={stackIndex}
                      style={{
                        padding: "3px 10px",
                        borderRadius: 100,
                        fontSize: 11,
                        fontFamily: "monospace",
                        background: "rgba(124,58,237,0.08)",
                        border: "1px solid rgba(124,58,237,0.2)",
                        color: stackColors[stackItem] || "#a78bfa",
                      }}
                    >
                      {stackItem}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
                  <a
                    href="#"
                    className="demo-btn"
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "10px",
                      borderRadius: 10,
                      background: "rgba(124,58,237,0.15)",
                      border: "1px solid rgba(124,58,237,0.3)",
                      color: "#a78bfa",
                      fontSize: 12,
                      fontFamily: "monospace",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {t.projects.demo}
                  </a>

                  <a
                    href="#"
                    className="gh-btn"
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "10px",
                      borderRadius: 10,
                      background: "transparent",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#64748b",
                      fontSize: 12,
                      fontFamily: "monospace",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {t.projects.github}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .project-card:hover {
          border-color: rgba(124,58,237,0.4) !important;
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(124,58,237,0.15);
        }

        .icon-btn:hover {
          background: rgba(124,58,237,0.25) !important;
          border-color: rgba(124,58,237,0.5) !important;
        }

        .demo-btn:hover {
          background: rgba(124,58,237,0.3) !important;
        }

        .gh-btn:hover {
          border-color: rgba(255,255,255,0.2) !important;
          color: #94a3b8 !important;
        }
      `}</style>
    </section>
  );
}