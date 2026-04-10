import { motion } from 'framer-motion'
import { FileText, ArrowRight } from 'lucide-react'

/* ─── Floating metric card ─────────────────────────────────────── */
interface MetricProps {
  value: string
  label: string
  accent: string
  delay: number
  className: string
}

const Metric = ({ value, label, accent, delay, className }: MetricProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={`absolute hidden lg:flex flex-col gap-1 px-4 py-3 rounded-xl border border-white/10 z-10 pointer-events-none select-none ${className}`}
    style={{ background: 'rgba(10,10,20,0.7)', backdropFilter: 'blur(8px)' }}
  >
    <span className={`text-2xl font-bold tracking-tight ${accent}`}>{value}</span>
    <span className="text-[11px] text-gray-400 uppercase tracking-widest whitespace-nowrap">{label}</span>
  </motion.div>
)

/* ─── Detailed circuit SVG ─────────────────────────────────────── */
const CircuitBg = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none z-0"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity: 0.18 }}
  >
    <defs>
      <style>{`
        .tr { fill: none; stroke-linecap: round; stroke-linejoin: round; }
        .cy { fill: #00d4ff; }
        .ye { fill: #f5a623; }
        .tr-c { stroke: #00d4ff; }
        .tr-y { stroke: #f5a623; }
        .tr-w { stroke: #ffffff; }
        .chip { fill: none; stroke: #00d4ff; stroke-width: 1; }
        .chip-y { fill: none; stroke: #f5a623; stroke-width: 1; }
      `}</style>
    </defs>

    {/* ── LEFT side traces ── */}
    <line className="tr tr-c" strokeWidth="1.5" x1="0" y1="25%" x2="8%" y2="25%" />
    <line className="tr tr-c" strokeWidth="1.5" x1="8%" y1="25%" x2="8%" y2="55%" />
    <line className="tr tr-c" strokeWidth="1.5" x1="8%" y1="55%" x2="18%" y2="55%" />
    <line className="tr tr-c" strokeWidth="1" x1="18%" y1="55%" x2="18%" y2="70%" />
    <line className="tr tr-c" strokeWidth="1" x1="0" y1="70%" x2="18%" y2="70%" />

    <line className="tr tr-y" strokeWidth="1.5" x1="0" y1="38%" x2="14%" y2="38%" />
    <line className="tr tr-y" strokeWidth="1.5" x1="14%" y1="38%" x2="14%" y2="45%" />
    <line className="tr tr-y" strokeWidth="1" x1="14%" y1="45%" x2="5%" y2="45%" />
    <line className="tr tr-y" strokeWidth="1" x1="5%" y1="45%" x2="5%" y2="60%" />

    <line className="tr tr-w" strokeWidth="0.8" x1="0" y1="82%" x2="10%" y2="82%" />
    <line className="tr tr-w" strokeWidth="0.8" x1="10%" y1="82%" x2="10%" y2="88%" />
    <line className="tr tr-c" strokeWidth="1" x1="10%" y1="88%" x2="22%" y2="88%" />

    {/* ── LEFT chips / packages ── */}
    <rect className="chip" x="1%" y="8%" width="8%" height="5%" rx="2" />
    <rect className="chip-y" x="1%" y="62%" width="10%" height="4%" rx="2" />
    <rect className="chip" x="12%" y="48%" width="7%" height="4%" rx="2" />

    {/* Nodes left */}
    <circle className="cy" cx="8%" cy="25%" r="3" />
    <circle className="cy" cx="8%" cy="55%" r="3" />
    <circle className="cy" cx="18%" cy="55%" r="2" />
    <circle className="ye" cx="14%" cy="38%" r="3" />
    <circle className="ye" cx="14%" cy="45%" r="2" />
    <circle className="cy" cx="10%" cy="88%" r="2" />

    {/* Small IC pins left */}
    {[0,1,2].map(i => (
      <line key={i} className="tr tr-c" strokeWidth="0.8"
        x1={`${1 + i*2}%`} y1="13%" x2={`${1 + i*2}%`} y2="8%" />
    ))}

    {/* ── RIGHT side traces ── */}
    <line className="tr tr-c" strokeWidth="1.5" x1="100%" y1="28%" x2="88%" y2="28%" />
    <line className="tr tr-c" strokeWidth="1.5" x1="88%" y1="28%" x2="88%" y2="48%" />
    <line className="tr tr-c" strokeWidth="1" x1="88%" y1="48%" x2="78%" y2="48%" />
    <line className="tr tr-c" strokeWidth="1" x1="78%" y1="48%" x2="78%" y2="62%" />

    <line className="tr tr-y" strokeWidth="1.5" x1="100%" y1="42%" x2="92%" y2="42%" />
    <line className="tr tr-y" strokeWidth="1.5" x1="92%" y1="42%" x2="92%" y2="58%" />
    <line className="tr tr-y" strokeWidth="1" x1="92%" y1="58%" x2="82%" y2="58%" />

    <line className="tr tr-w" strokeWidth="1" x1="100%" y1="68%" x2="85%" y2="68%" />
    <line className="tr tr-w" strokeWidth="1" x1="85%" y1="68%" x2="85%" y2="75%" />
    <line className="tr tr-c" strokeWidth="1.2" x1="85%" y1="75%" x2="75%" y2="75%" />
    <line className="tr tr-c" strokeWidth="1" x1="75%" y1="75%" x2="75%" y2="85%" />

    {/* ── RIGHT chips ── */}
    <rect className="chip" x="88%" y="8%" width="9%" height="5%" rx="2" />
    <rect className="chip-y" x="85%" y="78%" width="8%" height="4%" rx="2" />
    <rect className="chip" x="75%" y="50%" width="7%" height="4%" rx="2" />

    {/* Nodes right */}
    <circle className="cy" cx="88%" cy="28%" r="3" />
    <circle className="cy" cx="88%" cy="48%" r="3" />
    <circle className="cy" cx="78%" cy="48%" r="2" />
    <circle className="ye" cx="92%" cy="42%" r="3" />
    <circle className="ye" cx="92%" cy="58%" r="2" />
    <circle className="cy" cx="75%" cy="75%" r="2.5" />
    <circle className="cy" cx="75%" cy="85%" r="2" />

    {/* Small IC pins right */}
    {[0,1,2].map(i => (
      <line key={i} className="tr tr-c" strokeWidth="0.8"
        x1={`${91 + i*2}%`} y1="13%" x2={`${91 + i*2}%`} y2="8%" />
    ))}

    {/* ── bottom horizontal bus ── */}
    <line className="tr tr-c" strokeWidth="1" x1="20%" y1="92%" x2="80%" y2="92%" />
    <line className="tr tr-y" strokeWidth="0.8" x1="25%" y1="95%" x2="75%" y2="95%" />
    {[25, 35, 50, 65, 75].map(x => (
      <circle key={x} className="cy" cx={`${x}%`} cy="92%" r="2" />
    ))}

    {/* ── top horizontal bus ── */}
    <line className="tr tr-c" strokeWidth="1" x1="20%" y1="8%" x2="80%" y2="8%" />
    {[20, 35, 65, 80].map(x => (
      <circle key={x} className="cy" cx={`${x}%`} cy="8%" r="2" />
    ))}

    {/* ── vertical bus lines connecting top/bottom ── */}
    <line className="tr tr-c" strokeWidth="0.8" x1="20%" y1="8%" x2="20%" y2="92%" />
    <line className="tr tr-c" strokeWidth="0.8" x1="80%" y1="8%" x2="80%" y2="92%" />
  </svg>
)

/* ─── Hero ──────────────────────────────────────────────────────── */
export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6 font-sans relative overflow-hidden">

      {/* Blobs */}
      <div className="absolute left-[-5%] top-[15%] w-80 h-80 rounded-full bg-yellow-500/10 blur-[110px] pointer-events-none z-0" />
      <div className="absolute right-[-5%] top-[30%] w-80 h-80 rounded-full bg-cyan-500/10 blur-[110px] pointer-events-none z-0" />
      <div className="absolute left-[30%] bottom-[5%] w-60 h-60 rounded-full bg-blue-700/10 blur-[90px] pointer-events-none z-0" />

      {/* Circuit */}
      <CircuitBg />

      {/* ── Floating metrics ── */}
      <Metric value="5+" label="Proyectos IA"   accent="text-cyan-400"   delay={0.6} className="left-[2%]  top-[22%]" />
      <Metric value="3"  label="Tecnologías ML" accent="text-yellow-400" delay={0.7} className="left-[2%]  top-[38%]" />
      <Metric value="2K+" label="hrs de código" accent="text-white"      delay={0.8} className="left-[2%]  bottom-[22%]" />

      <Metric value="98%" label="Uptime APIs"     accent="text-cyan-400"   delay={0.6} className="right-[2%] top-[22%]" />
      <Metric value="#1"  label="Premio Nacional" accent="text-yellow-400" delay={0.7} className="right-[2%] top-[38%]" />
      <Metric value="UTN" label="FRT · Tucumán"   accent="text-white"      delay={0.8} className="right-[2%] bottom-[22%]" />

      {/* AI chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute right-[9%] top-[52%] -translate-y-1/2 hidden lg:flex items-center justify-center w-16 h-16 rounded-xl border-2 border-cyan-400/70 text-cyan-400 font-bold text-2xl tracking-tight z-10"
        style={{ background: 'rgba(0,212,255,0.06)', backdropFilter: 'blur(6px)', boxShadow: '0 0 24px rgba(0,212,255,0.15)' }}
      >
        AI
      </motion.div>

      {/* ── Main content ── */}
      <div className="max-w-4xl w-full flex flex-col items-center text-center gap-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight mt-4"
        >
          Ingeniero en Sistemas de
          <br />
          Información
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight"
        >
          Marcelo Alvarez
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed"
        >
          UTN FRT · Especialista en Desarrollo Full-Stack,{' '}
          <br className="hidden md:block" />
          Arquitectura de Software e IA
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-4 mt-8"
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
