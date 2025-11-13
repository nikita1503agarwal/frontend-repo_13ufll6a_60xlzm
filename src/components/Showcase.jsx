import { motion } from 'framer-motion'
import { Mountain, Rocket, Bolt } from 'lucide-react'

const bikes = [
  {
    name: 'Neon Road X1',
    tag: 'Aero Road',
    icon: Rocket,
    specs: ['Carbon Mono‑Block', 'Di2 Ready', '7.2 kg'],
    gradient: 'from-fuchsia-500 to-pink-500',
  },
  {
    name: 'Neon Trail M9',
    tag: 'MTB Enduro',
    icon: Mountain,
    specs: ['170mm Travel', 'Boost 148', 'Slack 63.5°'],
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'Neon City E3',
    tag: 'Urban E‑Bike',
    icon: Bolt,
    specs: ['90Nm Torque', '600Wh', 'Belt Drive'],
    gradient: 'from-cyan-500 to-blue-500',
  },
]

export default function Showcase() {
  return (
    <section id="bikes" className="bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Rides</h2>
            <p className="text-white/70 mt-2">Three machines. Infinite thrills.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-md px-4 py-2 bg-white/10 hover:bg-white/15 border border-white/10">Customize yours</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {bikes.map((b, i) => (
            <motion.div key={b.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]">
              <div className={`absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-20 blur-3xl bg-gradient-to-br ${b.gradient}`} />
              <div className="p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  <b.icon className="w-4 h-4" />
                  {b.tag}
                </div>
                <h3 className="mt-4 text-xl font-bold">{b.name}</h3>
                <ul className="mt-3 text-sm text-white/70 space-y-1.5 list-disc list-inside">
                  {b.specs.map(s => (<li key={s}>{s}</li>))}
                </ul>
                <button className="mt-6 inline-flex items-center justify-center rounded-md px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-medium hover:opacity-90">Pre‑order</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
