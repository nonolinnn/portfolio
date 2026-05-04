import { motion } from 'framer-motion'
import profilePhoto from '../assets/profile_photo.png'

const socialLinks = [
  {
    href: '/uploads/resume.pdf',
    label: 'CV',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/nonolinnn',
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    href: 'https://linkedin.com/in/en-tong-lin-2980771a0',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-[69px]">

      <motion.img
        src={profilePhoto}
        alt="Nono Lin"
        className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-auto border-b border-hairline md:top-auto md:bottom-0 md:translate-y-0 md:w-auto md:h-[85vh] md:translate-x-[calc(-50%_+_50px)] hero-photo"
        initial={{ clipPath: 'circle(0% at 50% 50%)', opacity: 0 }}
        animate={{ clipPath: 'circle(150% at 50% 50%)', opacity: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
      />

      <motion.div
        className="relative w-full flex items-baseline leading-none select-none z-[1] px-5 pt-6 sm:px-12 sm:pt-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
      >
        <span className="hero-name name-nono font-serif font-normal tracking-[-0.03em] leading-[0.9] whitespace-nowrap">
          NONO
        </span>
        <span className="hero-name font-serif font-normal tracking-[-0.03em] leading-[0.9] whitespace-nowrap text-dark-brown">
          &nbsp;LIN
        </span>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 z-[1] flex flex-col gap-4 px-5 pb-[52px] sm:px-12 md:px-[4vw] md:flex-row md:items-end md:justify-between md:gap-0">

        <motion.div
          className="flex flex-col gap-3 md:max-w-full md:self-center"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 1.0 }}
        >
          <p className="font-serif text-[30px] font-medium tracking-[-0.01em] text-primary m-0 md:text-[36px]">
            Frontend Engineer
          </p>
          <p className="font-sans text-[16px] font-normal text-secondary leading-[1.65] m-0 md:text-[20px]">
            From "it works" to "it's delightful" — that's my standard.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-row justify-between md:flex-col md:items-end md:gap-2"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 1.0 }}
        >
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              className="social-pill"
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
              {label}
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
