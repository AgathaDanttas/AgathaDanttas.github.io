import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Target, Lightbulb, Wrench, TrendingUp, Settings, Layers, Sparkles } from "lucide-react";

type ProjectCaseModalProps = {
  project: any;
  onClose: () => void;
};

export default function ProjectCaseModal({ project, onClose }: ProjectCaseModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-[90%] sm:w-full max-w-2xl max-h-[75vh] md:max-h-[80vh] overflow-y-auto overflow-x-hidden overscroll-contain rounded-2xl bg-[#0d0d14] border border-purple-500/30 shadow-[0_0_60px_rgba(139,92,246,0.2)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image header */}
          <div className="relative h-40 sm:h-52 overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-[#0d0d14]/70 to-transparent" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center hover:bg-purple-900/50 hover:border-purple-500/50 transition-all z-20"
            >
              <X size={16} />
            </button>

            {/* Title overlay */}
            <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 pr-4">
              <p className="text-purple-400 text-[0.65rem] sm:text-xs font-mono tracking-widest uppercase mb-1">Case Study</p>
              <h2 className="text-lg sm:text-2xl font-bold text-white leading-tight">{project.title}</h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">

            {/* Stack */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono text-purple-300 bg-purple-900/25 border border-purple-500/25 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Problem */}
            <div className="p-4 rounded-xl bg-white/3 border border-white/8">
              <div className="flex items-center gap-2 mb-2">
                <Target size={14} className="text-purple-400" />
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">Problema</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{project.caseStudy.problem}</p>
            </div>

            {/* Solution */}
            <div className="p-4 rounded-xl bg-white/3 border border-white/8">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb size={14} className="text-purple-400" />
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">Solução</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{project.caseStudy.solution}</p>
            </div>

            {/* Challenges */}
            <div className="p-4 rounded-xl bg-white/3 border border-white/8">
              <div className="flex items-center gap-2 mb-3">
                <Wrench size={14} className="text-purple-400" />
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">Desafios</span>
              </div>
              <ul className="space-y-2">
                {project.caseStudy.challenges.map((c: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/70 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Decisions */}
            {project.caseStudy.technicalDecisions && (
              <div className="p-4 rounded-xl bg-white/3 border border-white/8">
                <div className="flex items-center gap-2 mb-3">
                  <Settings size={14} className="text-purple-400" />
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">Decisões Técnicas</span>
                </div>
                <ul className="space-y-4">
                  {project.caseStudy.technicalDecisions.map((d: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Architecture */}
            {project.caseStudy.architecture && (
              <div className="p-4 rounded-xl bg-white/3 border border-white/8">
                <div className="flex items-center gap-2 mb-3">
                  <Layers size={14} className="text-purple-400" />
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">Arquitetura</span>
                </div>
                <ul className="space-y-4">
                  {project.caseStudy.architecture.map((a: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Results */}
            <div className="p-4 rounded-xl bg-purple-900/15 border border-purple-500/20">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={14} className="text-purple-400" />
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">Resultados</span>
              </div>
              <ul className="space-y-2">
                {project.caseStudy.results.map((r: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="text-purple-400 shrink-0">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Improvements */}
            {project.caseStudy.futureImprovements && (
              <div className="p-4 rounded-xl bg-white/3 border border-white/8 border-dashed">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={14} className="text-purple-400" />
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">Melhorias Futuras</span>
                </div>
                <ul className="space-y-4">
                  {project.caseStudy.futureImprovements.map((f: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/50 leading-relaxed italic">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50 mt-1.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={project.live}
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm font-medium transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
              >
                <ExternalLink size={14} />
                Ver projeto
              </a>
              <a
                href={project.code}
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 hover:border-purple-500/50 rounded-lg text-sm font-medium transition-all"
              >
                <Github size={14} />
                Ver código
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
