import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, FileText, Star } from "lucide-react";
import ProjectCaseModal from "./ProjectCaseModal";
import upaMockup from "../../assets/sim-upa-mockup.png";
import type { Translation } from "../../types/translation";

type ProjectsProps = { t: Translation };

// ─── Category colour map ───────────────────────────────────────────────────────
const categoryColor: Record<string, string> = {
  "Design System": "bg-pink-500/10 text-pink-400 border-pink-500/20",
  SaaS: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  HealthTech: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Landing Page": "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

// ─── All project data (featured flag controls the top section) ─────────────────
const projects = [
  {
    title: "Stox",
    description: "Sistema de gerenciamento de estoque com controle de produtos, movimentações em tempo real, dashboards e chat integrado.",
    problem: "Falta de controle organizado sobre produtos e movimentações em estoque.",
    stack: ["React", "TypeScript", "Tailwind", "Framer Motion", "MongoDB"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    live: "https://gatita.dev.br/stox/",
    code: "https://github.com/AgathaDanttas/Stox.git",
    category: "SaaS",
    featured: true,
    done: true,
    caseStudy: {
      problem: "Empresas e usuários enfrentam dificuldades para controlar entradas e saídas de produtos de forma organizada e confiável.",
      solution: "Desenvolvi o Stox, um sistema de gerenciamento de estoque que permite controlar produtos, registrar movimentações em tempo real e visualizar dados de forma clara através de dashboards.",
      challenges: [
        "Modelar corretamente as movimentações de entrada e saída de produtos",
        "Manter a consistência dos dados em tempo real",
        "Organizar o estado da aplicação de forma escalável",
      ],
      technicalDecisions: [
        "Utilizei React com TypeScript para garantir tipagem forte e maior previsibilidade do código.",
        "Escolhi MongoDB pela flexibilidade no armazenamento de dados relacionados a produtos.",
        "A arquitetura foi baseada em componentes reutilizáveis para facilitar manutenção.",
      ],
      architecture: [
        "Componentização baseada em responsabilidade",
        "Separação clara entre UI, lógica e dados",
        "Uso de tipagem para maior segurança e escalabilidade",
      ],
      results: [
        "Melhoria na organização e controle de estoque",
        "Redução de erros em registros de movimentações",
        "Interface intuitiva que facilita o uso por diferentes usuários",
      ],
      futureImprovements: [
        "Implementar autenticação e controle de acesso por usuário",
        "Adicionar relatórios avançados e analytics",
        "Integração com APIs externas para automação de processos",
      ],
    },
  },
  {
    title: "SIM-UPA",
    description: "Sistema integrado de monitoramento e regulação de UPAs com suporte a frotas de ambulâncias e encaminhamento inteligente.",
    problem: "Superlotação e falta de dados em tempo real para regulação médica e logística de ambulâncias.",
    stack: ["React", "Node.js", "PostgreSQL", "Google Maps API", "WebSockets"],
    image: upaMockup,
    live: "/sim-upa",
    code: "https://github.com/AgathaDanttas/SIM-UPA",
    category: "HealthTech",
    featured: true,
    wip: true,
    caseStudy: {
      problem: "As UPAs enfrentam superlotação constante e falta de visibilidade sobre a capacidade real, dificultando o direcionamento de pacientes e ambulâncias.",
      solution: "Desenvolvi o SIM-UPA, uma plataforma que centraliza os dados de ocupação e oferece um módulo exclusivo para ambulâncias (SAMU) com encaminhamento inteligente e comunicação em tempo real.",
      challenges: [
        "Integração de dados em tempo real com regras de lotação (Verde <70%, Amarelo 70-90%, Vermelho >90%).",
        "Implementação de alertas automáticos para frotas de ambulâncias.",
        "Garantia de segurança e anonimato dos dados conforme a LGPD.",
      ],
      technicalDecisions: [
        "Uso de WebSockets para atualizações instantâneas de status e alertas.",
        "Integração com Google Maps API para cálculo de rotas otimizadas baseadas em lotação.",
        "Arquitetura baseada em microserviços para isolar o módulo de regulação do dashboard público.",
      ],
      architecture: [
        "Dashboard de monitoramento em tempo real (Gestor/Público).",
        "Módulo de Regulação e Logística de Ambulâncias.",
        "API REST com fluxos de dados seguros (Ambulância -> Central -> UPA).",
      ],
      results: [
        "Redução estimada de 20% no tempo de deslocamento de ambulâncias.",
        "Otimização do atendimento e redução de filas por meio de direcionamento inteligente.",
        "Tomada de decisão rápida para gestores baseada em tendências históricas.",
      ],
      futureImprovements: [
        "Utilização de IA para previsão de picos de lotação com 24h de antecedência.",
        "Integração completa com wearables para triagem antecipada dentro da ambulância.",
        "Dashboard analítico avançado para planejamento de plantões e alocação de recursos.",
      ],
    },
  },
];


// ─── Shared project card component ────────────────────────────────────────────
function ProjectCard({
  project,
  index,
  inView,
  onCaseClick,
  featured = false,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
  onCaseClick: (p: any) => void;
  featured?: boolean;
}) {
  const wip = (project as any).wip;
  const done = (project as any).done;
  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group rounded-2xl bg-white/3 border border-white/8 hover:border-purple-500/40 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] flex flex-col"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />
        {featured && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-yellow-400 text-[10px] font-semibold">
            <Star size={10} className="fill-yellow-400" />
            Destaque
          </div>
        )}
        {wip && (
          <div className="absolute bottom-3 right-3 w-0 h-0 overflow-hidden" />
        )}
        {done && (
          <div className="absolute bottom-3 right-3 w-0 h-0 overflow-hidden" />
        )}
        <span
          className={`absolute top-3 ${featured ? "left-3" : "left-3"} px-2 py-1 text-[10px] font-mono font-bold rounded-full border ${categoryColor[project.category] ?? categoryColor["SaaS"]
            }`}
        >
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
        <p className="text-white/50 text-sm leading-relaxed mb-3">{project.description}</p>
        <p className="text-white/30 text-xs mb-4 italic">"{project.problem}"</p>

        <div className="flex flex-wrap gap-2 mb-5 mt-auto">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-mono text-purple-300 bg-purple-900/20 border border-purple-500/20 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {(wip || done) && (
          <div className="mb-4">
            {wip && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/25 text-amber-300 text-[10px] font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Em desenvolvimento
              </div>
            )}
            {done && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/25 text-emerald-300 text-[10px] font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Concluído
              </div>
            )}
          </div>
        )}

        <div className="flex gap-4 pt-4 border-t border-white/5">
          <a
            href={project.live}
            className="flex items-center gap-1.5 text-xs text-white/60 hover:text-purple-300 transition-colors"
          >
            <ExternalLink size={13} /> Ver projeto
          </a>
          <a
            href={project.code}
            className="flex items-center gap-1.5 text-xs text-white/60 hover:text-purple-300 transition-colors"
          >
            <Github size={13} /> Ver código
          </a>
          <button
            onClick={() => onCaseClick(project)}
            className="flex items-center gap-1.5 text-xs text-white/60 hover:text-purple-300 transition-colors ml-auto"
          >
            <FileText size={13} /> Case
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function Projects({ t }: ProjectsProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" ref={ref} className="py-28 px-6" style={{ position: "relative" }}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-purple-400 text-xs font-mono tracking-[0.3em] uppercase mb-3">
            Trabalhos
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Projetos em Destaque
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              inView={inView}
              onCaseClick={setSelectedProject}
              featured
            />
          ))}
        </div>
      </div>

      <ProjectCaseModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}