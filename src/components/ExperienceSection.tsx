import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface ExperienceEntry {
  company: string
  title: string
  date: string
  tags: string[]
  bullets: string[]
}

const experiences: ExperienceEntry[] = [
  {
    company: 'AmazingTalker',
    title: 'Software Engineer',
    date: '2023 – 2026',
    tags: ['Vue 3', 'Nuxt 3', 'React', 'TypeScript', 'Node.js', 'AWS Lambda', 'AI'],
    bullets: [
      'Migrated Nuxt 2 → 3 and refactored core modules, cutting code reading time from 60 → 15 mins and saving 1–2 hrs of dev time per feature.',
      'Built an in-house CRM from 0–1, replacing Intercom with custom real-time messaging and automated feedback — eliminating long-term subscription costs.',
      'Optimized Core Web Vitals, reducing INP problematic URLs from 5,163 → 298; dropped lesson expiration rate from 6.8% → 5.9% within 5 days of launch.',
    ],
  },
  {
    company: 'Good Game',
    title: 'Junior Frontend Developer',
    date: '2021 – 2022',
    tags: ['JavaScript', 'Angular', 'CSS'],
    bullets: [
      'Delivered pixel-perfect responsive UI and animations, collaborating with designers to define shared style variables.',
      'Self-learned Angular within one week and shipped a functional application on schedule.',
    ],
  },
]

const viewport = { once: true, margin: '-100px' }
const bulletViewport = { once: true, amount: 0.3 }

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
  )
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isMobile
}

export default function ExperienceSection() {
  const isMobile = useIsMobile()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const handleClick = (i: number) => {
    if (isMobile) setExpandedIndex(expandedIndex === i ? null : i)
  }

  return (
    <section
      id="experience"
      className="bg-background px-5 md:px-12 min-h-screen flex items-center"
    >
      <div className="w-full max-w-[1400px] mx-auto">

        {/* Section label */}
        <motion.p
          className="section-label mb-12 mt-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0 }}
        >
          Work Experience
        </motion.p>

        {experiences.map((exp, i) => {
          const isExpanded = expandedIndex === i
          const isHovered = hoveredIndex === i
          const showVisuals = isMobile ? isExpanded : isHovered
          const bulletsVisible = isMobile ? isExpanded : true

          return (
            <motion.div
              key={exp.company}
              className={`border-t border-hairline${i === experiences.length - 1 ? ' border-b' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i === 0 ? 0.1 : 0.25 }}
              onMouseEnter={() => { if (!isMobile) setHoveredIndex(i) }}
              onMouseLeave={() => { if (!isMobile) setHoveredIndex(null) }}
              onClick={() => handleClick(i)}
            >
              {/* Inner: hover/expand visual animation */}
              <motion.div
                className="relative grid grid-cols-1 items-start px-5 md:grid-cols-[1fr_auto] md:gap-x-12"
                animate={{
                  backgroundColor: showVisuals ? '#FAF4EE' : 'rgba(0,0,0,0)',
                  paddingTop: showVisuals ? 36 : 30,
                  paddingBottom: showVisuals ? 36 : 30,
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {/* Left accent border — scaleY from top */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent"
                  animate={{ scaleY: showVisuals ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{ originY: 0 }}
                />

                {/* Company name */}
                <h2 className="font-serif text-[clamp(22px,2.6vw,32px)] font-normal tracking-[-0.02em] leading-[1.1] text-accent m-0 mb-1.5 md:col-start-1 md:row-start-1">
                  {exp.company}
                </h2>

                {/* Date */}
                <span className="font-sans text-[13px] font-normal text-secondary whitespace-nowrap mb-2 md:col-start-2 md:row-start-1 md:pt-1.5 md:mb-0">
                  {exp.date}
                </span>

                {/* Job title */}
                <p className="font-sans text-4 font-medium text-primary m-0 md:col-start-1 md:row-start-2">
                  {exp.title}
                </p>

                {/* Tags + Bullets — always visible on desktop, tap-to-expand on mobile */}
                <motion.div
                  className="overflow-hidden md:col-start-1 md:row-start-3 md:max-w-[640px]"
                  initial={isMobile ? { height: 0, opacity: 0 } : false}
                  animate={{
                    height: bulletsVisible ? 'auto' : 0,
                    opacity: bulletsVisible ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  {/* Tech tags — slide in from right after entry entrance */}
                  <div className="flex flex-wrap gap-1.5 pt-3 pb-1">
                    {exp.tags.map((tag, k) => (
                      <motion.span
                        key={tag}
                        className="work-tag-pill"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={viewport}
                        transition={{
                          duration: 0.25,
                          ease: 'easeOut',
                          delay: (i === 0 ? 0.7 : 0.85) + k * 0.08,
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Bullets */}
                  <ul className="list-none m-0 p-[20px] flex flex-col gap-1.5">
                    {exp.bullets.map((bullet, j) => (
                      <motion.li
                        key={j}
                        className="font-sans text-[14px] font-normal text-secondary leading-[1.75] flex items-start gap-2"
                        initial={{ opacity: 0, x: 30 }}
                        {...(isMobile
                          ? {
                              animate: isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 },
                              transition: { duration: 0.3, ease: 'easeOut', delay: isExpanded ? j * 0.1 : 0 },
                            }
                          : {
                              whileInView: { opacity: 1, x: 0 },
                              viewport: bulletViewport,
                              transition: { duration: 0.3, ease: 'easeOut', delay: j * 0.1 },
                            }
                        )}
                      >
                        <span className="text-accent shrink-0 mt-[0.15em]">·</span>
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

              </motion.div>
            </motion.div>
          )
        })}

      </div>
    </section>
  )
}
