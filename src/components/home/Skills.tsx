import React from "react";
import type { Translation } from "../../types/translation";
import Reveal from "./reveal";

type SkillsProps = {
  t: Translation;
};

export default function Skills({ t }: SkillsProps) {
  const skillIcons: Record<string, string> = {
    React: "⚛️",
    "Next.js": "▲",
    TypeScript: "TS",
    "Tailwind CSS": "🎨",
    "Framer Motion": "✦",
    "Vue.js": "💚",
    "Node.js": "🟢",
    Python: "🐍",
    GraphQL: "◈",
    "REST APIs": "🔌",
    PostgreSQL: "🐘",
    MongoDB: "🍃",
    Git: "⎇",
    Docker: "🐳",
    AWS: "☁️",
    Vercel: "△",
    Figma: "🖌️",
    "CI/CD": "⚙️",
  };

  const catColors = ["#7c3aed", "#5b21b6", "#4c1d95"];

  return (
    <section id="skills" style={{ padding: "120px 5%", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          bottom: "30%",
          right: "5%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)",
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
            // {t.skills.label}
          </p>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#f1f5f9",
              marginBottom: 12,
            }}
          >
            {t.skills.heading}
          </h2>

          <p style={{ color: "#64748b", fontFamily: "monospace", marginBottom: 60 }}>
            {t.skills.sub}
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 28,
          }}
        >
          {t.skills.categories.map((category, categoryIndex) => (
            <Reveal key={categoryIndex} delay={categoryIndex * 0.1}>
              <div
                style={{
                  background: "rgba(15,10,25,0.7)",
                  border: `1px solid ${catColors[categoryIndex]}33`,
                  borderRadius: 20,
                  padding: 28,
                  backdropFilter: "blur(10px)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: catColors[categoryIndex],
                      boxShadow: `0 0 10px ${catColors[categoryIndex]}`,
                    }}
                  />

                  <h3
                    style={{
                      color: "#e2e8f0",
                      fontFamily: "monospace",
                      fontSize: 14,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      margin: 0,
                    }}
                  >
                    {category.cat}
                  </h3>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {category.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="skill-badge"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        background: "rgba(124,58,237,0.07)",
                        border: "1px solid rgba(124,58,237,0.15)",
                        borderRadius: 10,
                        padding: "8px 14px",
                        fontSize: 13,
                        color: "#94a3b8",
                        fontFamily: "monospace",
                        cursor: "default",
                        transition: "all 0.25s ease",
                      }}
                    >
                      <span style={{ fontSize: 14 }}>{skillIcons[skill] || "◆"}</span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .skill-badge:hover {
          background: rgba(124,58,237,0.18) !important;
          border-color: rgba(124,58,237,0.4) !important;
          color: #c4b5fd !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}