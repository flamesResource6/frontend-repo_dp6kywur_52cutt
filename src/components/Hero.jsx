import { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function Hero() {
  // Global 3D tilt for the entire hero
  const frameRef = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 80, damping: 20, mass: 0.5 })
  const sy = useSpring(my, { stiffness: 80, damping: 20, mass: 0.5 })
  const rotateX = useTransform(sy, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-14, 14])

  // Parallax for background auras
  const auraX = useTransform(sx, [-0.5, 0.5], [30, -30])
  const auraY = useTransform(sy, [-0.5, 0.5], [30, -30])

  const onMove = (e) => {
    const el = frameRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mx.set(x - 0.5)
    my.set(y - 0.5)
  }

  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      {/* Background auras and grid (parallaxed) */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-32 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),transparent_60%)] blur-3xl"
          style={{ x: auraX, y: auraY }}
        />
        <motion.div
          className="absolute top-1/4 -left-24 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_60%)] blur-2xl"
          style={{ x: auraX, y: auraY }}
        />
        <motion.div
          className="absolute bottom-0 -right-32 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.22),transparent_60%)] blur-2xl"
          style={{ x: auraX, y: auraY }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 3D frame for the whole hero content */}
        <motion.div
          ref={frameRef}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={{ perspective: 1200 }}
          className="relative"
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="[transform-style:preserve-3d]"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Copy block with depth layers */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="relative"
                  style={{ transform: 'translateZ(60px)' }}
                >
                  <span
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 shadow"
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    New: Real-time AI copilots for support teams
                  </span>

                  <h1
                    className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-[1.05]"
                    style={{ transform: 'translateZ(80px)' }}
                  >
                    SensAI turns every support rep into your best rep
                  </h1>

                  <p
                    className="mt-5 text-lg text-white/70 max-w-xl"
                    style={{ transform: 'translateZ(70px)' }}
                  >
                    Drafts, personalizes, and sends human‑quality replies across email and chat. Escalations get faster, SLAs stay green, and your team focuses on what matters.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3" style={{ transform: 'translateZ(90px)' }}>
                    <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-slate-900 font-semibold shadow hover:shadow-lg transition">
                      Start free trial
                    </a>
                    <a href="#how" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-white font-semibold hover:bg-white/10 transition">
                      See how it works
                    </a>
                  </div>

                  <div className="mt-6 flex items-center gap-4 text-white/70" style={{ transform: 'translateZ(50px)' }}>
                    <div className="flex -space-x-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <img key={i} src={`https://i.pravatar.cc/40?img=${i + 12}`} alt="avatar" className="h-8 w-8 rounded-full ring-2 ring-slate-900/60" />
                      ))}
                    </div>
                    <p className="text-sm">Trusted by modern teams • 99.7% satisfaction</p>
                  </div>

                  {/* Floating chips around copy */}
                  <motion.div
                    className="absolute -left-4 -top-6 rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/80 shadow"
                    style={{ transform: 'translateZ(120px)' }}
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.6 }}
                  >
                    Tone controls
                  </motion.div>
                  <motion.div
                    className="absolute -right-6 top-12 rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/80 shadow"
                    style={{ transform: 'translateZ(110px)' }}
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                  >
                    SLA aware
                  </motion.div>
                </motion.div>
              </div>

              {/* Visual block with Spline and depth */}
              <div className="relative" style={{ transform: 'translateZ(40px)' }}>
                <motion.div
                  className="group relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-3xl border border-white/10 [transform-style:preserve-3d] transition-transform duration-300"
                >
                  {/* Depth glow */}
                  <motion.div
                    aria-hidden
                    className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-indigo-500/25 via-fuchsia-500/15 to-amber-400/20 blur-2xl"
                    style={{ transform: 'translateZ(0px)' }}
                  />

                  {/* Back glass panel */}
                  <div className="absolute inset-0 rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]" style={{ transform: 'translateZ(0px)' }} />

                  {/* Spline scene */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden" style={{ transform: 'translateZ(30px)' }}>
                    <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
                  </div>

                  {/* Foreground veil */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" style={{ transform: 'translateZ(80px)' }} />

                  {/* Floating chips on visual */}
                  <motion.div
                    className="absolute left-6 top-6 rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/80 shadow"
                    style={{ transform: 'translateZ(90px)' }}
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    Auto‑draft replies
                  </motion.div>
                  <motion.div
                    className="absolute right-6 top-10 rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/80 shadow"
                    style={{ transform: 'translateZ(110px)' }}
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                  >
                    Triage & routing
                  </motion.div>
                  <motion.div
                    className="absolute left-8 bottom-10 rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/80 shadow"
                    style={{ transform: 'translateZ(130px)' }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    Human‑tone controls
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Soft outer glow ring for the whole hero */}
            <motion.div
              aria-hidden
              className="pointer-events-none mt-10 rounded-[2rem] border border-transparent"
              style={{ boxShadow: '0 0 160px 30px rgba(99,102,241,0.22)', transform: 'translateZ(0px)' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
