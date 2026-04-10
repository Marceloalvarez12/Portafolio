import { motion } from 'framer-motion'
import { FileText, ArrowRight } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6 font-sans">
      <div className="max-w-4xl w-full flex flex-col items-start gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-blue-400 font-medium tracking-wide text-sm uppercase"
        >
          <span className="h-px w-8 bg-blue-400"></span>
          Ingeniero en Sistemas de Información (UTN FRT)
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight"
        >
          Marcelo Simon Alvarez
          <br />
          <span className="gradient-text">Fullstack Developer</span>
          <br />
          <span className="text-gray-400 text-4xl md:text-6xl">& IA Integrada</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg max-w-3xl mt-4 leading-relaxed"
        >
          Desarrollo end-to-end de aplicaciones, desde el diseño de APIs hasta interfaces móviles. 
          Mi gran diferenciador es la capacidad de integrar IA real en productos funcionales 
          (arquitecturas RAG, LLMs, y redes neuronales), construyendo plataformas fiables y escalables.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 mt-8"
        >
          <a href="#projects" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl transition-all font-medium">
            Ver Proyectos
            <ArrowRight size={18} />
          </a>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 border border-white/10 rounded-xl transition-all font-medium">
            <FileText size={18} />
            Descargar CV
          </a>
        </motion.div>
      </div>
    </section>
  )
}
