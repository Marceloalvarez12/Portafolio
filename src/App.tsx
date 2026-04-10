import { Hero } from './components/Hero'
import { TechStack } from './components/TechStack'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Dynamic Background Noise/Texture */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-screen"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />
      
      {/* Animated blurry blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px] pointer-events-none" />

      {/* Navigation (Simple) */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-x-0 border-t-0 border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="font-bold text-white tracking-wider">MA<span className="text-blue-500">.</span></div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#tech-stack" className="hover:text-white transition-colors">Stack</a>
            <a href="#projects" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#experience" className="hover:text-white transition-colors">Experiencia</a>
            <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 relative z-10">
        <p>© {new Date().getFullYear()} Marcelo Alvarez. Future-ready engineering.</p>
      </footer>
    </div>
  )
}

export default App
