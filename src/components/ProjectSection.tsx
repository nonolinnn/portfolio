import { motion } from 'framer-motion'
import tabZenImg from '../assets/tab_zen.png'
import onaWebsiteImg from '../assets/ona_website.png'

interface WorkCard {
  category: string
  title: string
  description: string
  tags: string[]
  imgPath: string
}

const workCards: WorkCard[] = [
  {
    category: 'Side Project',
    title: 'Tab Zen',
    description:
      'A Chrome extension that forces you to finish reading before switching tabs — built with focus tracking and scroll progress detection.',
    tags: ['React', 'TypeScript', 'Chrome Extension MV3'],
    imgPath: tabZenImg,
  },
  {
    category: 'Side Project',
    title: 'Ona Website',
    description: 'Built with Next.js, TypeScript, UnoCSS; integrated Google Sheets for order management.',
    tags: ['React', 'Next', 'TypeScript'],
    imgPath: onaWebsiteImg,
  },
]

const viewport = { once: true, amount: 0.3 }
const cardDelays = [0.1, 0.25]

export default function ProjectSection() {
  return (
    <section
      id="project"
      className="bg-background px-5 md:px-12 min-h-screen flex items-center"
    >
      <div className="w-full max-w-350 mx-auto">

        {/* Section header */}
        <div className="mb-12">
          <motion.p
            className="section-label mb-4 mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0 }}
          >
            Projects
          </motion.p>
          <div className="hairline-rule mb-5" />
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-normal tracking-[-0.02em] leading-[1.1] text-primary m-0">
            Things I've built
          </h2>
        </div>

        {/* Work grid — Mobile: 1 col   Desktop (md): 2 col */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 items-stretch">
          {workCards.map(({ category, title, description, tags, imgPath }, i) => (
            /* Outer: entrance animation */
            <motion.div
              key={title}
              className="h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: 'easeOut', delay: cardDelays[i] }}
            >
              {/* Inner: hover animation (lift + shadow) */}
              <motion.div
                className="group flex flex-col overflow-hidden rounded-lg border-1 border-card-border bg-surface max-w-150 w-full mx-auto h-full"
                whileHover={{ y: -6, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {/* Cover image — scale on card hover via CSS group */}
                <div className="w-full h-[260px] shrink-0 overflow-hidden">
                  <img
                    src={imgPath}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Card body */}
                <div className="flex flex-col gap-[10px] flex-1 p-5">
                  <p className="font-sans text-2.5 font-semibold tracking-[0.1em] uppercase text-secondary m-0 transition-colors duration-200 ease-out group-hover:text-accent">
                    {category}
                  </p>
                  <h3 className="font-serif text-5 font-normal tracking-[-0.01em] leading-[1.2] text-primary m-0">
                    {title}
                  </h3>
                  <p className="font-sans text-3 font-normal text-secondary leading-[1.7] m-0 flex-1">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {tags.map(tag => (
                      <span key={tag} className="work-tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <p className="text-center font-sans text-4 font-semibold text-secondary mt-2">
          More projects on the way
        </p>
      </div>
    </section>
  )
}
