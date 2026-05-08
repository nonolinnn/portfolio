import { useEffect, useState } from 'react'
import { getCalApi } from '@calcom/embed-react'

const navLinks = [
  { href: '#about', label: 'About me' },
  { href: '#experience', label: 'Experience' },
  { href: '#project', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [autoShake, setAutoShake] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoShake(true)
      setTimeout(() => setAutoShake(false), 400)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'quick-chat' })
      cal('ui', {
        theme: 'light',
        cssVarsPerTheme: {
          light: { 'cal-brand': '#B5845A' },
          dark: { 'cal-brand': '#B5845A' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  return (
    <nav className="
      navbar-glass
      fixed top-0 left-0 right-0 z-[100]
      flex items-center justify-between
      px-5 py-[14px]
      sm:px-12 sm:py-[18px]
    ">

      <span className="
        flex items-center gap-2
        px-3 py-2
        border border-hairline rounded-pill
        font-sans text-3 font-medium text-primary bg-surface
        whitespace-nowrap
      ">
        <span className="w-2 h-2 rounded-full bg-available shrink-0" />
        Open to Opportunities
      </span>

      <ul className="hidden sm:flex items-center gap-9 list-none m-0 p-0">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="font-sans text-3 font-medium text-primary no-underline transition-colors duration-150 hover:text-secondary"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <button
        className={`btn-cta btn-shake active:scale-95 ${autoShake ? 'btn-shake-auto' : ''}`}
        data-cal-namespace="quick-chat"
        data-cal-link="nono-linn/quick-chat"
        data-cal-config='{"layout":"month_view","theme":"light"}'
      >
        Let's Chat
      </button>

    </nav>
  )
}
