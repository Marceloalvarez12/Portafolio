import { motion } from 'framer-motion'
import { Award, ArrowLeft, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    title: 'NS Trading',
    description: 'Plataforma multi-tenant para centralizar importaciones, documentación y costos por embarque.',
    details: 'Diseñé y desarrollé una plataforma operativa para gestionar importaciones de punta a punta. Separé las experiencias de administradores, operadores y clientes, automaticé el cálculo del costo aterrizado con múltiples variables y agregué procesamiento de archivos XLSX y PDF mediante OCR. También implementé la generación de cotizaciones profesionales en PDF y un modelo de aislamiento de datos con RLS para proteger la información entre organizaciones.',
    tags: ['Next.js', 'TypeScript', 'Neon', 'PostgreSQL', 'RLS'],
    badge: 'Proyecto más reciente'
  },
  {
    title: 'Análisis exploratorio de datos',
    description: 'Análisis exploratorio para convertir datos sin procesar en hallazgos accionables.',
    details: 'Realicé la limpieza, normalización y validación del conjunto de datos antes de estudiar la distribución de variables, valores atípicos, datos faltantes y relaciones entre dimensiones. Complementé el análisis con visualizaciones y una interpretación técnica de los resultados para detectar patrones, sesgos y oportunidades. El trabajo dejó una base confiable para futuras etapas de modelado y toma de decisiones basada en evidencia.',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Analysis'],
    badge: 'Data Science'
  },
  {
    title: 'SkinDoctor',
    description: 'Plataforma de teledermatología que conecta pacientes y profesionales desde web y móvil.',
    details: 'Participé en la definición y evolución de una plataforma de teledermatología con backend Django, aplicación móvil en React Native y PostgreSQL. Lideré decisiones de arquitectura, diseñé el modelo multi-tenant y establecí contratos de API consistentes entre clientes. También impulsé la migración hacia service layers para desacoplar la lógica de negocio, mejorar la testabilidad y facilitar nuevas funcionalidades.',
    tags: ['Django', 'React Native', 'PostgreSQL', 'REST APIs'],
    badge: 'CONAIISI 2024 · Innovación'
  },
  {
    title: 'Bot SDR',
    description: 'Sistema de automatización comercial que redujo tareas manuales y costos operativos.',
    details: 'Construí un flujo comercial compuesto por servicios desacoplados, webhooks y APIs REST, integrado con más de cinco plataformas. Implementé estrategias de reintento, logging estructurado y alertas operativas para detectar fallos y mantener la confiabilidad en producción. La solución permitió reducir un 40% los costos operativos y mejorar la velocidad de respuesta del equipo de ventas.',
    tags: ['Node.js', 'Webhooks', 'Microservices', 'Linux VPS'],
    badge: '40% menos costos operativos'
  },
  {
    title: 'Investigación Blockchain',
    description: 'Investigación técnica sobre blockchain enterprise y su aplicabilidad en entornos corporativos.',
    details: 'Realicé una investigación de 200 horas sobre implementaciones enterprise de Hyperledger Fabric y Ethereum. Analicé mecanismos de consenso, rendimiento, gobierno de redes y privacidad de transacciones en consorcios privados. Documenté diferencias arquitectónicas, límites operativos y criterios para seleccionar la tecnología adecuada según cada caso de uso.',
    tags: ['Hyperledger Fabric', 'Ethereum', 'Research'],
    badge: 'Research & Innovation'
  }
]

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null);

  const prev = () => setCurrentIndex(c => (c === 0 ? projects.length - 1 : c - 1));
  const next = () => setCurrentIndex(c => (c === projects.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 px-6 bg-black/40 overflow-hidden" id="projects">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="mb-12 text-center md:text-left md:max-w-6xl md:mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proyectos Destacados</h2>
          <p className="text-gray-400 max-w-2xl mx-auto md:mx-0">
            Sistemas que resuelven problemas reales a través de ciencia de datos profunda, 
            investigación sólida y código de calidad industrial.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div 
          className="relative flex justify-center items-center min-h-[500px] w-full mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          onViewportEnter={() => setTimeout(() => setHasEntered(true), 1000)}
        >
          
          <div className="flex justify-center items-center gap-4 md:gap-8 w-full max-w-[1200px]">
            {[-1, 0, 1].map((offset) => {
              const index = (currentIndex + offset + projects.length) % projects.length;
              const project = projects[index];
              const isActive = offset === 0;

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                     scale: isActive ? 1 : 0.85,
                     opacity: isActive ? 1 : 0.3,
                     filter: isActive ? 'blur(0px)' : 'blur(4px)',
                     zIndex: isActive ? 20 : 10,
                     y: 0,
                     borderColor: "rgba(255,255,255,0.05)",
                     boxShadow: "0 0 0px rgba(59,130,246,0)"
                  }}
                  whileHover={isActive ? {
                     borderColor: "rgba(59,130,246,0.4)",
                     boxShadow: "0 0 40px rgba(59,130,246,0.2)"
                  } : undefined}
                  transition={{ 
                     type: "spring", 
                     stiffness: 300, 
                     damping: 30,
                     delay: hasEntered ? 0 : (offset + 1) * 0.2
                  }}
                  style={{ borderWidth: "1px", borderStyle: "solid" }}
                  className={`glass-panel group p-8 rounded-2xl flex-col justify-between h-[560px] md:h-[520px] relative overflow-hidden shrink-0 w-[85vw] md:w-[400px] ${!isActive ? 'hidden md:flex pointer-events-none' : 'flex'}`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10" />
                  
                  <div>
                    {project.badge && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold mb-6 border border-blue-500/20">
                        <Award size={14} />
                        {project.badge}
                      </div>
                    )}
                    
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8">
                      {project.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Ver proyecto en detalle
                      <ExternalLink size={16} />
                    </button>
                  </div>

                  <div className="flex flex-col gap-6 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 text-gray-300 text-xs border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Buttons perfectly aligned with the active card */}
          <div className="absolute inset-0 flex items-center justify-between px-2 md:px-0 z-30 w-full max-w-[95vw] md:max-w-[480px] mx-auto pointer-events-none">
            <button 
              onClick={prev} 
              className="pointer-events-auto p-3 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 transition-all hover:scale-110 shadow-lg -translate-x-2 md:-translate-x-12"
              aria-label="Proyecto anterior"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={next} 
              className="pointer-events-auto p-3 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 transition-all hover:scale-110 shadow-lg translate-x-2 md:translate-x-12"
              aria-label="Siguiente proyecto"
            >
              <ChevronRight size={28} />
            </button>
          </div>
          
        </motion.div>
        
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="project-detail-title">
            <div className="glass-panel relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 p-6 md:p-10">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                aria-label="Volver a proyectos"
              >
                <ArrowLeft size={16} />
                Volver a proyectos
              </button>
              <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                <Award size={14} />
                {selectedProject.badge}
              </div>
              <h3 id="project-detail-title" className="mb-5 text-2xl font-bold text-white md:text-3xl">
                {selectedProject.title}
              </h3>
              <p className="mb-8 text-base leading-8 text-gray-300">
                {selectedProject.details}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile indicators */}
        <div className="flex md:hidden justify-center items-center gap-3 mt-6">
          {projects.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === i ? 'w-8 bg-blue-500' : 'w-4 bg-white/20'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
