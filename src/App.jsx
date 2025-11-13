import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Reviews from './components/Reviews'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Reviews />
      <footer className="bg-black border-t border-white/10">
        <CTA />
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-8 flex flex-col sm:flex-row items-center justify-between text-white/60">
          <p>© {new Date().getFullYear()} NeonCycle. All rights reserved.</p>
          <div className="text-sm">Built for riders. Powered by neon.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
