import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
  ],
  theme: {
    colors: {
      // Backgrounds
      background:     '#FAF9F6',
      surface:        '#F2F0EB',
      'surface-warm': '#FAF4EE',
      hairline:       '#DDD9D1',
      // Brand
      accent:         '#B5845A',
      'accent-muted': '#9A7B5A',
      // Text
      primary:        '#1A1A1A',
      secondary:      '#6B6B6B',
      'dark-brown':   '#2C1A0E',
      // UI
      'card-border':  '#D9D4CB',
      'pill-border':  '#C8C3B8',
      film:           '#3D2A18',
      // Status
      available:      '#22C55E',
      duolingo:       '#58CC02',
    },
    fontFamily: {
      serif: '"DM Serif Display", Georgia, serif',
      sans:  '"DM Sans", Inter, sans-serif',
    },
    borderRadius: {
      sm:   '8px',
      md:   '10px',
      lg:   '12px',
      pill: '9999px',
    },
  },
  shortcuts: {
    // ── Typography ──────────────────────────────────────────────────────────
    'section-label':
      'font-sans font-semibold tracking-[0.12em] uppercase text-accent-muted',

    // ── Divider ─────────────────────────────────────────────────────────────
    'hairline-rule': 'w-full h-px bg-hairline',

    // ── Buttons ─────────────────────────────────────────────────────────────
    'btn-cta':
      'inline-flex items-center gap-1.5 px-[22px] py-[10px] '
      + 'bg-primary text-background rounded-pill '
      + 'text-[13px] font-semibold no-underline font-sans '
      + 'shadow-[0_2px_8px_rgba(30,24,12,0.07)] '
      + 'transition-opacity duration-150 hover:opacity-80',

    // ── Social / contact pills ───────────────────────────────────────────────
    'social-pill':
      'flex items-center gap-2.5 px-4 py-[9px] '
      + 'border border-hairline rounded-pill '
      + 'text-[13px] font-medium text-primary no-underline bg-surface font-sans '
      + 'whitespace-nowrap shadow-[0_1px_4px_rgba(30,24,12,0.07)] '
      + 'transition-all duration-150 '
      + 'hover:bg-primary hover:text-background hover:border-primary',

    'contact-pill':
      'flex-1 flex items-center justify-center gap-2.5 px-6 py-[18px] '
      + 'border-[0.5px] border-pill-border rounded-pill '
      + 'bg-transparent text-primary font-sans text-[13px] font-medium no-underline '
      + 'transition-colors duration-150 hover:bg-surface',

    // ── Work card tag ────────────────────────────────────────────────────────
    'work-tag-pill':
      'text-[11px] font-medium font-sans text-secondary '
      + 'py-1 px-2.5 border-[0.5px] border-pill-border rounded-pill',
  },
})
