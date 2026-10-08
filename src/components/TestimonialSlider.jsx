import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import testimonials from '../data/testimonials.json'

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const total = testimonials.length

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total])
  const prev = () => setCurrent(c => (c - 1 + total) % total)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next])

  const initials = (name) => name.split(' ').map(w => w[0]).join('').slice(0, 2)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
    >
      {/* Big quote icon & Stars */}
      <div className="flex flex-col items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
          <Quote size={20} className="text-gold" fill="currentColor" />
        </div>
        <div className="flex items-center gap-1" aria-label="5 star rating">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={15} className="text-gold fill-gold" />
          ))}
        </div>
      </div>

      {/* Slide area */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center max-w-2xl mx-auto px-4"
            aria-live="polite"
            aria-atomic="true"
          >
            <blockquote className="font-serif text-charcoal text-xl sm:text-2xl leading-relaxed mb-8 italic">
              "{testimonials[current].quote}"
            </blockquote>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center">
                <span className="font-serif text-gold font-medium text-sm">
                  {initials(testimonials[current].name)}
                </span>
              </div>
              <p className="font-sans font-medium text-charcoal text-sm">{testimonials[current].name}</p>
              <p className="section-label text-xs text-body">{testimonials[current].designation}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full border border-border hover:border-gold hover:text-gold text-body flex items-center justify-center transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Dots */}
        <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => { setCurrent(i); setIsAutoPlaying(false) }}
              className={`transition-all duration-300 rounded-full ${
                i === current ? 'w-6 h-2 bg-gold' : 'w-2 h-2 bg-border hover:bg-gold/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => { next(); setIsAutoPlaying(false) }}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full border border-border hover:border-gold hover:text-gold text-body flex items-center justify-center transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}
