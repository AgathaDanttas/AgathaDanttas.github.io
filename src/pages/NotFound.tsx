import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import roboVideo from "../assets/RoboAnimado.mp4";

export default function NotFound() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col font-sans selection:bg-purple-500/30">

      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-4xl w-full">

          <div className="flex items-center justify-center gap-0 mb-8 sm:mb-12">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[200px] sm:text-[300px] md:text-[400px] font-black leading-none text-white/70 select-none relative z-50 inline-block"
            >
              4
            </motion.span>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-32 h-32 sm:w-56 sm:h-56 md:w-80 md:h-80 mx-[-20px] sm:mx-[-40px] z-10 rounded-full overflow-hidden border-4 border-purple-800 shadow-[0_0_50px_rgba(255,255,255,0.05)]"
            >
              <video
                src={roboVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[200px] sm:text-[300px] md:text-[400px] font-black leading-none text-white/70 select-none relative z-50 inline-block"
            >
              4
            </motion.span>

          </div>

          {/* Heading Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Página não encontrada!
            </h1>
            <p className="text-white/40 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
              Parece que algo está errado, verifique se o link está correto.
            </p>
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link
              to="/Home"
              className="group inline-flex items-center gap-3 px-8 py-3.5 bg-purple-700 text-black rounded-full font-bold hover:bg-purple-700 transition-all hover:-translate-y-1"
            >
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center transition-transform group-hover:-translate-x-1">
                <ArrowLeft size={16} />
              </div>
              <span>Voltar ao início</span>
            </Link>
          </motion.div>

        </div>
      </main>

    </div>
  );
}
