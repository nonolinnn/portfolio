const navLinks = [
  { href: '#about', label: 'About me' },
  { href: '#experience', label: 'Experience' },
  { href: '#project', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
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
        px-[14px] py-[7px]
        border border-hairline rounded-pill
        font-sans text-[13px] font-medium text-primary bg-surface
        whitespace-nowrap
      ">
        <span className="w-[7px] h-[7px] rounded-full bg-[#22c55e] shrink-0" />
        Open to Opportunities
      </span>

      <ul className="hidden sm:flex items-center gap-9 list-none m-0 p-0">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="font-sans text-[14px] font-medium text-primary no-underline transition-colors duration-150 hover:text-secondary"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <a href="#contact" className="btn-cta">
        Let's Talk
      </a>

    </nav>
  )
}
