import { motion } from 'framer-motion'
import { Server, Layout, Database, Sparkles, Cloud } from 'lucide-react'

const technologies = [
  {
    category: 'Backend',
    icon: <Server className="text-blue-400" size={24} />,
    skills: ['Python (Django)', 'Java (Spring Boot)', 'C# (.NET)', 'APIs REST, MVC']
  },
  {
    category: 'Frontend & Mobile',
    icon: <Layout className="text-purple-400" size={24} />,
    skills: ['React', 'React Native', 'Angular', 'TypeScript', 'JavaScript']
  },
  {
    category: 'Bases de Datos',
    icon: <Database className="text-green-400" size={24} />,
    skills: ['PostgreSQL', 'MySQL / SQL Server', 'ChromaDB (Vectorial)', 'Neo4j (Grafos)']
  },
  {
    category: 'IA Integrada',
    icon: <Sparkles className="text-yellow-400" size={24} />,
    skills: ['LangChain / LangGraph', 'OpenAI API', 'TensorFlow / CNNs', 'RAG Pipelines']
  },
  {
    category: 'Cloud & DevOps',
    icon: <Cloud className="text-sky-400" size={24} />,
    skills: ['AWS / Azure', 'Git', 'CI/CD', 'Scrum / Agile']
  }
]

export const TechStack = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="tech-stack">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tech Stack</h2>
        <p className="text-gray-400 max-w-2xl">
          Ecosistema tecnológico orientado a la escalabilidad, desde infraestructuras de 
          datos complejas con grafos hasta arquitecturas RAG avanzadas e interfaces React.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {technologies.map((tech, i) => (
          <motion.div
            key={tech.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-6 rounded-2xl flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center border border-white/10">
              {tech.icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{tech.category}</h3>
            <ul className="flex flex-col gap-2">
              {tech.skills.map(skill => (
                <li key={skill} className="text-gray-400 text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
