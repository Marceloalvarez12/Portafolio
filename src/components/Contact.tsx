import { motion } from 'framer-motion'
import { Mail, Globe, Terminal, Send } from 'lucide-react'

export const Contact = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Empecemos a <br /><span className="gradient-text">construir el futuro.</span></h2>
            <p className="text-gray-400 mb-10 max-w-md">
              Si estás planeando la próxima arquitectura a gran escala, integrando IA generativa o querés debatir sobre grafos, hablemos.
            </p>

            <div className="flex flex-col gap-6">
              <a href="mailto:marceloalvarez77777@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-colors">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Directo</p>
                  <p className="font-medium text-sm">marceloalvarez77777@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/marcelo-simón-álvarez-14912b32b/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-colors">
                  <Globe size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <p className="font-medium text-sm">/marcelo-simon-alvarez</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-300 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Terminal size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ubicación & Contacto</p>
                  <p className="font-medium text-sm">Bella Vista, Tucumán | (381) 667-2950</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-400 px-1">Nombre</label>
              <input
                type="text"
                placeholder="Tu nombre completo"
                className="bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-400 px-1">Email</label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-400 px-1">Mensaje</label>
              <textarea
                rows={4}
                placeholder="Contame brevemente sobre tu proyecto..."
                className="bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all resize-none"
              />
            </div>
            <button
              type="button"
              className="mt-2 flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 px-6 py-4 rounded-xl font-semibold transition-colors"
            >
              Enviar Mensaje
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
