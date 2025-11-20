import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/14 days',
    features: ['All core features', 'Up to 200 emails/mo', '1 inbox', 'Email support'],
    cta: 'Start free trial',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$149',
    period: '/mo',
    features: ['Unlimited emails', '3 inboxes', 'Approvals & guardrails', 'Priority support'],
    cta: 'Choose Growth',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['SAML/SSO', 'Custom SLAs', 'Dedicated success', 'On-prem options'],
    cta: 'Talk to sales',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-3xl sm:text-4xl font-semibold text-white">
          Simple, predictable pricing
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t, idx) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} viewport={{ once: true }} className={`${t.highlight ? 'border-white/30 bg-white/[0.10]' : 'border-white/10 bg-white/[0.06]'} rounded-2xl border p-6 backdrop-blur`}>
              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-semibold text-white">{t.name}</h3>
              </div>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-4xl font-bold text-white">{t.price}</span>
                <span className="text-white/60">{t.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-semibold transition ${t.highlight ? 'bg-white text-slate-900 hover:shadow-lg' : 'border border-white/20 bg-white/5 text-white hover:bg-white/10'}`}>{t.cta}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
