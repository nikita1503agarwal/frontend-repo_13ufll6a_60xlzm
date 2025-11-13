import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Ava R.',
    text: 'The Neon Road X1 feels unreal. Climbs like a rocket and the handling is laser sharp.',
    rating: 5
  },
  {
    name: 'Leo P.',
    text: 'E‑bike assist is buttery smooth. The city never felt this small.',
    rating: 5
  },
  {
    name: 'Marin K.',
    text: 'M9 destroyed my local trails. Robust yet playful — absolute dream setup.',
    rating: 5
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Rider love</h2>
          <p className="mt-3 text-white/70">Join thousands of riders pushing boundaries every day.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div key={r.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl p-6 bg-white/5 border border-white/10">
              <div className="flex items-center gap-1 text-fuchsia-400">
                {Array.from({ length: r.rating }).map((_, idx) => (<Star key={idx} className="w-4 h-4 fill-current" />))}
              </div>
              <p className="mt-3 text-white/80">“{r.text}”</p>
              <div className="mt-4 text-sm text-white/60">— {r.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
