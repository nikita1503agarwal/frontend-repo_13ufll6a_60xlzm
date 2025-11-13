import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.2),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Ready to feel the neon rush?</h2>
          <p className="mt-3 text-white/70 max-w-xl">Tell us what you ride and where you roam — we’ll match you with the perfect build and set up a free test ride at your nearest partner store.</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <input placeholder="Your name" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400/50" />
            <input placeholder="Email" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400/50" />
            <select className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400/50">
              <option>Road</option>
              <option>MTB</option>
              <option>E‑Bike</option>
              <option>Gravel</option>
            </select>
            <input placeholder="City" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400/50" />
            <textarea placeholder="Notes (optional)" rows={4} className="sm:col-span-2 w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400/50" />
          </div>

          <button className="mt-6 inline-flex items-center justify-center rounded-md px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-90">Request test ride</button>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 blur opacity-40" />
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Visit our flagship</h3>
            <p className="mt-2 text-white/70">123 Neon Ave, Velocity District, CA</p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/70">
              <div>
                <div className="text-white">Weekdays</div>
                <div>10:00 — 19:00</div>
              </div>
              <div>
                <div className="text-white">Weekends</div>
                <div>11:00 — 17:00</div>
              </div>
            </div>
            <div className="mt-6 text-sm text-white/60">Free fitting, pro tune‑ups, and lifetime frame warranty with every purchase.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
