import { Menu, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ rotate: -10, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow-[0_0_25px_rgba(168,85,247,0.45)]"
              >
                <Sparkles size={18} />
              </motion.div>
              <span className="text-lg font-semibold tracking-tight text-white">SensAI Support</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
              <a href="#how" className="text-white/80 hover:text-white transition">How it works</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
              <a href="#faq" className="text-white/80 hover:text-white transition">FAQ</a>
              <a href="#cta" className="rounded-lg bg-white text-slate-900 px-4 py-2 font-medium shadow hover:shadow-lg transition">Start free</a>
            </div>
            <button className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 p-2 text-white/80"><Menu size={20} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
