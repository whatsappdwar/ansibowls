import Reveal from './Reveal'

export default function SectionHeading({
  label,
  heading,
  subheading,
  align = 'center',
  className = '',
}) {
  const alignClass = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  }[align]

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {label && (
        <Reveal delay={0.1}>
          <span className="section-label">{label}</span>
        </Reveal>
      )}
      <Reveal delay={0.2}>
        <h2 className="section-heading font-serif text-h2 text-charcoal text-balance max-w-2xl">
          {heading}
        </h2>
      </Reveal>
      {subheading && (
        <Reveal delay={0.3}>
          <p className="text-body font-sans text-base leading-relaxed max-w-xl text-balance">
            {subheading}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.35}>
        <div className={`w-12 h-px bg-gold mt-1 ${align === 'center' ? 'mx-auto' : ''}`} />
      </Reveal>
    </div>
  )
}
