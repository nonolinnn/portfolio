import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const infoBlocks = [
  {
    label: 'Approach',
    text: 'Every technical decision should be rooted in user empathy — not just correctness.',
  },
  {
    label: 'Toolkit',
    text: 'Vue 3 / Nuxt 3 / React / TypeScript.\nNode.js. AI-augmented workflows.',
  },
  {
    label: 'Now',
    text: 'Exploring design systems and AI-assisted workflows. Always thinking about the next side project.',
  },
  {
    label: 'Beyond the Code',
    text: '中文 · English · 日本語\nRecharging outdoors — hiking, diving, and anything away from a screen.\nLearning indoors — French, chess.',
  },
]

const leftLines = [
  { text: "Hi, I'm Nono.", className: 'm-0' },
  { text: 'Started as a bootcamp grad,', className: 'm-0' },
  { text: 'grew into building scalable products for the web.', className: 'm-0' },
  { text: '4+ years turning complex requirements', className: 'm-0' },
  { text: 'into high-performance experiences —', className: 'm-0' },
  { text: 'and looking for the team worth building with.', className: 'mt-5 italic text-accent-muted' },
]

const TYPEWRITER_TEXT = "Business logic and user empathy aren't opposites. I make them work together."
const viewport = { once: true, margin: '-100px' }

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [displayed, setDisplayed] = useState('')
  const [typingDone, setTypingDone] = useState(false)

  useEffect(() => {
    if (!inView) return

    let charIndex = 0
    let intervalId: ReturnType<typeof setInterval>

    const delayId = setTimeout(() => {
      intervalId = setInterval(() => {
        charIndex++
        setDisplayed(TYPEWRITER_TEXT.slice(0, charIndex))
        if (charIndex >= TYPEWRITER_TEXT.length) {
          clearInterval(intervalId)
          setTypingDone(true)
        }
      }, 40)
    }, 1400)

    return () => {
      clearTimeout(delayId)
      clearInterval(intervalId)
    }
  }, [inView])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-background px-5 md:px-12 min-h-screen flex items-center"
    >
      {/* Mobile: single column   Desktop (md): 60 / 40 two-column */}
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 gap-10 items-start md:grid-cols-[60fr_40fr] md:gap-20">

        {/* Left — display text + body copy */}
        <div>
          <div className="font-serif text-[clamp(26px,3.2vw,44px)] font-normal leading-[1.25] tracking-[-0.02em] text-primary">
            {leftLines.map(({ text, className }, i) => (
              <motion.p
                key={i}
                className={className}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.15 }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          <p className="mt-5 font-sans text-4 font-normal leading-[1.75] text-secondary max-w-[520px] m-0 min-h-[1.75em]">
            {displayed}
            {!typingDone && <span className="cursor-blink">|</span>}
          </p>
        </div>

        {/* Right — info blocks */}
        <div className="flex flex-col">
          {infoBlocks.map(({ label, text }, i) => (
            <motion.div
              key={label}
              className={`py-6 px-3 border-b border-hairline${i === 0 ? ' border-t' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 + i * 0.15 }}
            >
              <p className="section-label text-4 mb-2.5 mt-0">{label}</p>
              <p className="font-sans text-[14px] font-normal text-primary leading-[1.7] m-0 whitespace-pre-line">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
