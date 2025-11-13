import { useState } from 'react'
import { Bike, Menu, X, ShoppingCart, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLink = 'text-sm md:text-base text-white/80 hover:text-white transition-colors'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg blur-md bg-gradient-to-tr from-fuchsia-500 to-indigo-500 opacity-60" />
              <div className="relative bg-black/60 ring-1 ring-white/10 rounded-lg p-2">
                <Bike className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="font-semibold tracking-wide text-white">NeonCycle</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className={navLink}>Features</a>
            <a href="#bikes" className={navLink}>Bikes</a>
            <a href="#reviews" className={navLink}>Reviews</a>
            <a href="#contact" className={navLink}>Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 (800) 555‑CYCLE</span>
            </a>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white hover:opacity-90 transition">
              <ShoppingCart className="w-4 h-4" />
              Shop
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a onClick={() => setOpen(false)} href="#features" className="block px-2 py-2 rounded text-white/80 hover:text-white hover:bg-white/5">Features</a>
            <a onClick={() => setOpen(false)} href="#bikes" className="block px-2 py-2 rounded text-white/80 hover:text-white hover:bg-white/5">Bikes</a>
            <a onClick={() => setOpen(false)} href="#reviews" className="block px-2 py-2 rounded text-white/80 hover:text-white hover:bg-white/5">Reviews</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block px-2 py-2 rounded text-white/80 hover:text-white hover:bg-white/5">Contact</a>
          </div>
        )}
      </div>
    </header>
  )
}
