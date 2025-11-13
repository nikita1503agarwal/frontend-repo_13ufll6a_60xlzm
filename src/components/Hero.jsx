import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Y7DK6OtMHusdC345/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 pt-28 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
            New: Neon Series X Bikes
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Ride the Future
            <span className="block bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">with NeonCycle</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-4 text-white/70 max-w-lg">
            Performance road bikes, rugged MTB, and sleek e‑bikes engineered with aerospace‑grade carbon and smart telemetry. Designed for speed, built for awe.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#bikes" className="inline-flex items-center justify-center rounded-md px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-90 transition">Explore Bikes</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-medium border border-white/10">Book a Test Ride</a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="relative h-[380px] md:h-[520px] rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-indigo-500/10 ring-1 ring-white/10 backdrop-blur overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.2),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.06),transparent)]" />
          <div className="absolute bottom-4 left-4 right-4 text-xs text-white/60">
            Spin the 3D scene and feel the neon energy.
          </div>
        </motion.div>
      </div>
    </section>
  )
}
