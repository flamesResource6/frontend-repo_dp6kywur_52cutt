import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(59,130,246,0.08),rgba(236,72,153,0.08),rgba(245,158,11,0.08),rgba(59,130,246,0.08))]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 shadow">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                New: AI that answers customer emails 24/7
              </span>
              <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
                Automate customer support with an AI that writes back like your best agent
              </h1>
              <p className="mt-5 text-lg text-white/70 max-w-xl">
                SensAI triages, drafts and sends human‑quality replies across email and chat. Keep the personal touch, scale your team, and never miss another SLA.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-slate-900 font-semibold shadow hover:shadow-lg transition">
                  Start free trial
                </a>
                <a href="#how" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-white font-semibold hover:bg-white/10 transition">
                  See how it works
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-white/70">
                <div className="flex -space-x-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <img key={i} src={`https://i.pravatar.cc/40?img=${i + 12}`} alt="avatar" className="h-8 w-8 rounded-full ring-2 ring-slate-900/60" />
                  ))}
                </div>
                <p className="text-sm">Trusted by 1,200+ teams • 99.7% satisfaction</p>
              </div>
            </motion.div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden border border-white/10">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
