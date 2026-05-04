import { useState, useEffect } from 'react'
import duolingoQR from '../assets/dulingo_qrcode.png'

const contactLinks = [
  {
    href: 'mailto:linentong94@gmail.com',
    label: 'Email',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
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

const pillClass =
  'flex items-center justify-center gap-2 py-[14px] px-[28px] box-border ' +
  'border-[1.5px] border-dashed border-accent rounded-sm ' +
  'bg-transparent font-sans text-[14px] text-primary no-underline cursor-pointer ' +
  'w-full md:flex-1 ' +
  'hover:bg-[#FAF4EE] hover:-translate-y-[6px] transition-all duration-[250ms] ease-out'

export default function ContactSection() {
  const [duolingoOpen, setDuolingoOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = duolingoOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [duolingoOpen])

  return (
    <section
      id="contact"
      className="bg-background px-5 pt-12 pb-16 md:px-12 md:pt-[100px] md:pb-16 md:border-t md:border-hairline"
    >
      {/* Heading — font-size responsive via .contact-heading CSS class */}
      <h2 className="contact-heading font-serif font-normal tracking-[-0.03em] leading-[1.05] text-primary mt-0">
        Get <em className="italic text-accent">in touch.</em>
      </h2>

      {/* Buttons row */}
      <div className="flex flex-col md:flex-row gap-6 mb-16">
        {contactLinks.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            className={pillClass}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {icon}
            {label}
          </a>
        ))}

        {/* Duolingo — opens modal */}
        <button className={pillClass} onClick={() => setDuolingoOpen(true)}>
          <span className="text-[#58CC02] text-[14px] leading-none">●</span>
          Duolingo
        </button>
      </div>

      {/* Duolingo Modal */}
      {duolingoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/45"
          onClick={() => setDuolingoOpen(false)}
        >
          <div
            className="relative flex flex-col items-center gap-4 p-8 bg-background border border-hairline rounded-lg"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-4 font-sans text-[18px] text-secondary bg-transparent border-none cursor-pointer leading-none"
              onClick={() => setDuolingoOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>

            {/* Title */}
            <h3 className="font-sans font-semibold uppercase text-accent-muted text-[22px] tracking-[-0.01em] m-0">
              Add me on Duolingo
            </h3>

            {/* QR code */}
            <img
              src={duolingoQR}
              alt="Duolingo QR code"
              className="border border-[#FAF4EE] rounded-sm max-w-[300px] w-full block"
            />

            {/* Caption */}
            <p className="font-sans text-[14px] text-secondary m-0">
              Scan or{' '}
              <a
                href="https://invite.duolingo.com/profile-share/Nonolinonon?via=share_profile_qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline font-sans"
              >
                tap here
              </a>
              {' '}to add me
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
