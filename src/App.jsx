import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-fuchsia-500/30">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.15),transparent),radial-gradient(1000px_500px_at_120%_10%,rgba(236,72,153,0.12),transparent),radial-gradient(900px_500px_at_-20%_10%,rgba(245,158,11,0.10),transparent)]" />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
      <footer className="relative py-10 text-center text-white/60">
        <p>© {new Date().getFullYear()} SensAI Support. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
