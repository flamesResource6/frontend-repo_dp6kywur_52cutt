import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/40 via-fuchsia-600/40 to-amber-500/40 p-8 sm:p-10 backdrop-blur">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">Get your first AI‑answered ticket today</h3>
          <p className="mt-2 text-white/80">Plug in your inbox and knowledge base. No credit card required.</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3">
            <input type="email" required placeholder="Work email" className="h-11 flex-1 rounded-xl border border-white/20 bg-white/10 px-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" />
            <button type="submit" className="h-11 rounded-xl bg-white px-6 font-semibold text-slate-900 hover:shadow-lg transition">Start free</button>
          </form>
          <p className="mt-3 text-xs text-white/70">14‑day free trial • Cancel anytime</p>
        </motion.div>
      </div>
    </section>
  )
}
