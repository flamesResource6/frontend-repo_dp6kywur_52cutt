import { motion } from 'framer-motion'
import { Mail, Bot, Zap, Shield, Inbox, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Mail,
    title: 'Autonomous email replies',
    desc: 'Reads incoming emails, drafts context‑aware responses, and sends with your tone and policy.',
  },
  {
    icon: Bot,
    title: 'Omnichannel support',
    desc: 'Email, chat, and contact forms unified. One brain, every channel.',
  },
  {
    icon: Zap,
    title: 'Smart triage & routing',
    desc: 'Auto‑classifies intent, escalates edge cases, and assigns to the right queue instantly.',
  },
  {
    icon: Shield,
    title: 'Guardrails & approvals',
    desc: 'Set boundaries, required fields, and approvals so AI never goes off‑script.',
  },
  {
    icon: Inbox,
    title: 'Knowledge synced',
    desc: 'Connect help center, past tickets, and docs. Always answers with fresh context.',
  },
  {
    icon: BarChart3,
    title: 'Analytics that matter',
    desc: 'Deflection, CSAT, first response and time‑to‑resolution at a glance.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl font-semibold text-white"
        >
          Everything you need to automate support
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur shadow hover:shadow-xl hover:bg-white/[0.08] transition"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow-md">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
