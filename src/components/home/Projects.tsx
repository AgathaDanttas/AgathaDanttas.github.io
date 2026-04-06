import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, FileText } from "lucide-react";
import ProjectCaseModal from "./ProjectCaseModal";
import upaMockup from "../../assets/sim-upa-mockup.png";

const projects = [
  {
    title: "Stox",
    description: "Sistema de gerenciamento de estoque com controle de produtos, movimentações em tempo real, dashboards e chat integrado.",
    problem: "Falta de controle organizado sobre produtos e movimentações em estoque",
    stack: ["React", "TypeScript", "Tailwind", "Framer Motion", "MongoDB"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    live: "#",
    code: "#",
    caseStudy: {
      problem: "Empresas e usuários enfrentam dificuldades para controlar entradas e saídas de produtos de forma organizada e confiável, o que pode gerar erros, perdas e falta de visibilidade do estoque.",
      solution: "Desenvolvi o Stox, um sistema de gerenciamento de estoque que permite controlar produtos, registrar movimentações em tempo real e visualizar dados de forma clara através de dashboards. A aplicação foi construída com foco em usabilidade, organização e performance.",
      challenges: [
        "Modelar corretamente as movimentações de entrada e saída de produtos",
        "Manter a consistência dos dados em tempo real",
        "Organizar o estado da aplicação de forma escalável",

      ],
      technicalDecisions: [
        "Utilizei React com TypeScript para garantir tipagem forte e maior previsibilidade do código.",
        "Escolhi MongoDB pela flexibilidade no armazenamento de dados relacionados a produtos e movimentações.",
        "A arquitetura foi baseada em componentes reutilizáveis para facilitar manutenção e evolução do sistema.",
      ],
  architecture: [
    "Componentização baseada em responsabilidade",
  "Separação clara entre UI, lógica e dados",
  "Uso de tipagem para maior segurança e escalabilidade"
  ],
  results: [
    "Melhoria na organização e controle de estoque",
  "Redução de erros em registros de movimentações",
  "Interface intuitiva que facilita o uso por diferentes usuários",
  "Código estruturado e preparado para evolução"
  ],
  futureImprovements: [
    "Implementar autenticação e controle de acesso por usuário",
  "Adicionar relatórios avançados e analytics",
  "Integração com APIs externas para automação de processos"
  ],
    },
  },
  {
    title: "SIM-UPA",
    description: "Sistema integrado de monitoramento e regulação de UPAs com suporte a frotas de ambulâncias e encaminhamento inteligente.",
    problem: "Superlotação e falta de dados em tempo real para regulação médica e logística de ambulâncias.",
    stack: ["React", "Node.js", "PostgreSQL", "Google Maps API", "WebSockets"],
    image: upaMockup,
    live: "#",
    code: "#",
    caseStudy: {
      problem: "As UPAs enfrentam superlotação constante e falta de visibilidade sobre a capacidade real, dificultando o direcionamento de pacientes e ambulâncias, o que resulta em maiores tempos de espera e riscos à vida.",
      solution: "Desenvolvi o SIM-UPA, uma plataforma que centraliza os dados de ocupação (leitos, triagem, espera) e oferece um módulo exclusivo para ambulâncias (SAMU) com encaminhamento inteligente e comunicação em tempo real.",
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
{
  title: "App Multilíngue",
    description: "Aplicação com suporte a múltiplos idiomas e layout responsivo completo.",
      problem: "Criar experiência inclusiva para usuários de diferentes países.",
        stack: ["React", "i18next", "TypeScript", "Tailwind"],
          image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
            live: "#",
              code: "#",
                caseStudy: {
    problem: "A aplicação precisava atender usuários de diferentes países e idiomas sem duplicar código ou criar versões separadas, mantendo uma única base de código sustentável.",
      solution: "Implementei internacionalização com i18next no React, estruturando arquivos de tradução modulares por namespace. O sistema detecta automaticamente o idioma do browser e permite troca manual pelo usuário.",
        challenges: [
          "Estruturar os arquivos de tradução de forma escalável",
          "Lidar com pluralização e formatação de datas/números por locale",
          "Garantir que o layout não quebrasse com textos de diferentes comprimentos",
        ],
          technicalDecisions: [
            "Integração do framework i18next pelo grande ecossistema de módulos escaláveis disponíveis ao React.",
            "Dicionários JSON rigorosamente fatiados por namespaces lógicos para habilitar Code Splitting e Lazy Loading.",
            "Arquitetura de estilização fluida no Tailwind baseada no eixo Flex, suprimindo o vazamento de copys longas."
          ],
            architecture: [
              "Design Pattern por Custom Hooks delegando injeção de idiomas totalmente disjunta aos componentes de View genéricos.",
              "Roteamento sensível contextual mapeando nativamente a seleção idiomática no path e persistência no browser.",
              "Definição robusta de Fallback Font-Families nativas nos Browsers prevendo ausência de glifos em tipografias custom."
            ],
              results: [
                "Implementação enxuta validada para dezenas de matrizes de idiomas com sobrecarga de assets controlada e mínima.",
                "Gerenciamento de pluralização dinamicamente isolado, desonerando o frontend de lógicas textuais estritas.",
                "Comutação instantânea de linguagem a quente sem refetch de arvore de roteamento, provando altíssima proficiência em SPA."
              ],
                futureImprovements: [
                  "Incorporação do módulo i18next-http-backend abstraindo as fontes de tradução a repasses diretos por um Headless CMS.",
                  "Avaliar Server-Side Rendering (SSR) parcial de chaves linguísticas pontuais para rastreabilidade primária de SEO.",
                  "Adicionar pipelines em CI/CD engatilhados por scripts para detecção morta de chaves orfãs ou corrompidas pós-push."
                ],
    },
},
];

export default function Projects() {
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
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-xs font-mono tracking-[0.3em] uppercase mb-3">Trabalhos</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent px-2">
            Projetos em destaque
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
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
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 items-center text-center md:items-start md:text-left">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-3">{project.description}</p>
                <p className="text-white/30 text-xs mb-4 italic">"{project.problem}"</p>

                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-5 mt-auto w-full">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono text-purple-300 bg-purple-900/20 border border-purple-500/20 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center md:justify-start gap-4 pt-4 border-t border-white/5 w-full">
                  <a
                    href={project.live}
                    className="flex items-center gap-1.5 text-xs text-white/60 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink size={13} />
                    Ver projeto
                  </a>
                  <a
                    href={project.code}
                    className="flex items-center gap-1.5 text-xs text-white/60 hover:text-purple-300 transition-colors"
                  >
                    <Github size={13} />
                    Ver código
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs text-white/60 hover:text-purple-300 transition-colors md:ml-auto"
                  >
                    <FileText size={13} />
                    Case
                  </button>
                </div>
              </div>
            </motion.div>
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