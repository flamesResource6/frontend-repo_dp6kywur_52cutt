import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Connect your inbox and tools',
    desc: 'Plug in Gmail, Outlook, Zendesk or Help Scout. Sync your help center and policies.',
  },
  {
    title: 'Train with your tone and rules',
    desc: 'Define tone, boundaries and escalation paths. Approvals required where you want them.',
  },
  {
    title: 'Go live in minutes',
    desc: 'Start with assisted mode then switch to fully autonomous replies with confidence.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-3xl sm:text-4xl font-semibold text-white">
          From inbox to resolution — automatically
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((s, idx) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/90 font-semibold">{idx + 1}</div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
