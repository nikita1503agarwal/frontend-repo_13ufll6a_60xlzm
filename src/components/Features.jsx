import { motion } from 'framer-motion'
import { Zap, ShieldCheck, BatteryCharging, Gauge } from 'lucide-react'

const items = [
  { icon: Zap, title: 'Aero Power', desc: 'Wind‑tunnel tested frames with integrated cabling and drag‑reducing geometry.' },
  { icon: ShieldCheck, title: 'Carbon Precision', desc: 'Aerospace‑grade carbon layup for ultra‑light strength and razor control.' },
  { icon: BatteryCharging, title: 'Smart Assist', desc: 'E‑bike torque sensors and adaptive power modes for seamless climbs.' },
  { icon: Gauge, title: 'Telemetry', desc: 'Real‑time ride metrics with our NeonOS companion app for iOS/Android.' },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(217,70,239,0.15),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why riders choose NeonCycle</h2>
          <p className="mt-3 text-white/70">Engineered for performance, tuned for comfort, styled for tomorrow.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-fuchsia-500/40 hover:bg-white/10 backdrop-blur">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center">
                <it.icon className="w-6 h-6 text-fuchsia-400" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{it.title}</h3>
              <p className="mt-1 text-sm text-white/70">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
