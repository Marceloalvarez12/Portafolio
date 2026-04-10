import { motion } from 'framer-motion'
import { GraduationCap, Trophy } from 'lucide-react'

export const Experience = () => {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experiencia & Logros</h2>
        <p className="text-gray-400">Trayectoria académica y reconocimientos relevantes.</p>
      </motion.div>

      <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative pl-8 md:pl-12"
        >
          <div className="absolute -left-[21px] top-1 w-10 h-10 bg-black rounded-full border border-blue-500 flex items-center justify-center">
            <Trophy className="text-blue-400" size={18} />
          </div>
          <div className="glass-panel p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-white">Premios de Innovación & Desarrollo</h3>
            </div>
            <p className="text-blue-400 text-sm font-medium mb-4">CONAIISI 2024 & Escobar Innova 2024</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              <strong>Premio CONAIISI 2024:</strong> Reconocimiento a la Innovación por SkinDoctor en el Congreso Nacional de Ingeniería en Sistemas. <br/><br/>
              <strong>2º Puesto, Escobar Innova 2024:</strong> Concurso Nacional de Soluciones Innovadoras con Inteligencia Artificial.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative pl-8 md:pl-12"
        >
          <div className="absolute -left-[21px] top-1 w-10 h-10 bg-black rounded-full border border-purple-500 flex items-center justify-center">
            <GraduationCap className="text-purple-400" size={20} />
          </div>
          <div className="glass-panel p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-white">Ingeniería en Sistemas de Información</h3>
            </div>
            <p className="text-purple-400 text-sm font-medium mb-4">Universidad Tecnológica Nacional (UTN FRT) • 2018 - 2026</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Graduado con experiencia en desarrollo fullstack end-to-end. Sólidos conocimientos en 
              arquitectura de software e integración de sistemas de información con inteligencia artificial.
            </p>
            <div className="mt-6 pt-4 border-t border-white/10">
              <h4 className="text-white font-medium mb-1">Técnico Electromecánico • 2017</h4>
              <p className="text-gray-400 text-sm">Escuela Técnica Nº1 de Bella Vista, Tucumán</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
