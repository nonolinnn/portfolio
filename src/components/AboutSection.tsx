import { motion } from 'framer-motion'

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

const leftViewport = { once: true, amount: 0.3 }
const rightViewport = { once: true, margin: '-100px' }

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-background px-5 md:px-12 min-h-screen flex items-center"
    >
      {/* Mobile: single column   Desktop (md): 60 / 40 two-column */}
      <div className="w-full max-w-350 mx-auto grid grid-cols-1 gap-10 items-start md:grid-cols-[60fr_40fr] md:gap-20">

        {/* Left — label + heading + paragraphs */}
        <div>
          <motion.p
            className="section-label text-4 m-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={leftViewport}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0 }}
          >
            ABOUT ME
          </motion.p>

          <motion.h2
            className="font-serif font-normal text-9 text-primary leading-tight tracking-[-0.02em] mt-4 mb-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={leftViewport}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Started as a bootcamp grad, grew into building scalable products for the web.
          </motion.h2>

          <motion.p
            className="font-sans text-4 md:text-5 font-normal text-secondary leading-relaxed m-0 mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={leftViewport}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
          >
            Before becoming an engineer, I worked across finance and education. Those years shaped how I collaborate — I learned to translate between very different mindsets, and to stay grounded when communication gets messy.
          </motion.p>

          <motion.p
            className="font-sans text-4 md:text-5 font-normal text-secondary leading-relaxed m-0 mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={leftViewport}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
          >
            Outside of work, I enjoy handcrafting. To me, it follows the same logic as building software — both ask you to observe carefully, think from multiple angles, and care about the small details that shape how something feels in the end.
          </motion.p>
        </div>

        {/* Right — info blocks */}
        <div className="flex flex-col">
          {infoBlocks.map(({ label, text }, i) => (
            <motion.div
              key={label}
              className={`py-6 px-3 border-b border-hairline${i === 0 ? ' border-t' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={rightViewport}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 + i * 0.15 }}
            >
              <p className="section-label text-4 mb-2.5 mt-0">{label}</p>
              <p className="font-sans text-3.5 font-normal text-primary leading-6 m-0 whitespace-pre-line">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
