import { useState, useMemo, useEffect } from 'react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { Search, MapPin, Phone, Clock } from 'lucide-react'

const showrooms = [
  { id: 1, name: 'Anssi Bowls Flagship — Koramangala', city: 'Bangalore', state: 'Karnataka', address: '12, 5th Block, Koramangala, Bangalore 560034', phone: '+91 80 1234 5678', hours: 'Mon–Sat: 10am–7pm, Sun: 11am–5pm' },
  { id: 2, name: 'Anssi Bowls — Indiranagar', city: 'Bangalore', state: 'Karnataka', address: '48, CMH Road, Indiranagar, Bangalore 560038', phone: '+91 80 2345 6789', hours: 'Mon–Sat: 10am–7pm' },
  { id: 3, name: 'Anssi Bowls — Banjara Hills', city: 'Hyderabad', state: 'Telangana', address: 'Shop 4, Road No. 12, Banjara Hills, Hyderabad 500034', phone: '+91 40 1234 5678', hours: 'Mon–Sat: 10am–7pm' },
  { id: 4, name: 'Anssi Bowls — Jubilee Hills', city: 'Hyderabad', state: 'Telangana', address: '22, Road No. 36, Jubilee Hills, Hyderabad 500033', phone: '+91 40 2345 6789', hours: 'Tue–Sun: 11am–7pm' },
  { id: 5, name: 'Anssi Bowls — Nungambakkam', city: 'Chennai', state: 'Tamil Nadu', address: '14, Chamiers Road, Nungambakkam, Chennai 600034', phone: '+91 44 1234 5678', hours: 'Mon–Sat: 10am–7pm' },
  { id: 6, name: 'Anssi Bowls — Kilpauk', city: 'Chennai', state: 'Tamil Nadu', address: '8, Poonamallee High Road, Kilpauk, Chennai 600010', phone: '+91 44 2345 6789', hours: 'Mon–Sat: 10am–7pm' },
  { id: 7, name: 'Anssi Bowls — Prabhadevi', city: 'Mumbai', state: 'Maharashtra', address: '33, Veer Savarkar Marg, Prabhadevi, Mumbai 400025', phone: '+91 22 1234 5678', hours: 'Mon–Sat: 11am–8pm, Sun: 12pm–6pm' },
  { id: 8, name: 'Anssi Bowls — Bandra West', city: 'Mumbai', state: 'Maharashtra', address: '19, Hill Road, Bandra West, Mumbai 400050', phone: '+91 22 2345 6789', hours: 'Mon–Sat: 11am–8pm' },
  { id: 9, name: 'Anssi Bowls — Khan Market', city: 'New Delhi', state: 'Delhi', address: 'Shop 16, Khan Market, New Delhi 110003', phone: '+91 11 1234 5678', hours: 'Tue–Sun: 11am–7pm' },
  { id: 10, name: 'Anssi Bowls — Lajpat Nagar', city: 'New Delhi', state: 'Delhi', address: 'Central Market, Lajpat Nagar 2, New Delhi 110024', phone: '+91 11 2345 6789', hours: 'Mon–Sat: 10am–7pm' },
  { id: 11, name: 'Anssi Bowls — Park Street', city: 'Kolkata', state: 'West Bengal', address: '7, Park Street, Kolkata 700016', phone: '+91 33 1234 5678', hours: 'Mon–Sat: 10am–7pm' },
  { id: 12, name: 'Anssi Bowls — MG Road', city: 'Pune', state: 'Maharashtra', address: '45, MG Road, Camp, Pune 411001', phone: '+91 20 1234 5678', hours: 'Mon–Sat: 10am–7pm' },
]

export default function ShowroomLocator() {
  const [query, setQuery] = useState('')

  useEffect(() => {
    document.title = 'Find a Showroom — Anssi Bowls'
    window.scrollTo(0, 0)
  }, [])

  const filtered = useMemo(() => {
    if (!query.trim()) return showrooms
    const q = query.toLowerCase()
    return showrooms.filter(s =>
      s.city.toLowerCase().includes(q) ||
      s.state.toLowerCase().includes(q) ||
      s.name.toLowerCase().includes(q)
    )
  }, [query])

  // Group by city
  const grouped = useMemo(() => {
    return filtered.reduce((acc, s) => {
      if (!acc[s.city]) acc[s.city] = []
      acc[s.city].push(s)
      return acc
    }, {})
  }, [filtered])

  return (
    <>
      <main className="pt-24 sm:pt-28">
        <section className="bg-cream py-16">
          <div className="container-wide">
            <SectionHeading
              label="Our Stores"
              heading="Find an Anssi Showroom Near You."
              subheading="50+ showrooms across India. Visit us to see, touch and experience every piece before you choose."
              align="center"
            />
            <Reveal delay={0.4} className="mt-8 max-w-md mx-auto">
              <div className="relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-body/50" />
                <input
                  type="search"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search by city or state…"
                  aria-label="Search showrooms"
                  className="w-full bg-white border border-border pl-11 pr-4 py-3.5 font-sans text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-gold rounded-xl placeholder:text-body/50 shadow-soft"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-ivory py-16">
          <div className="container-wide">
            {Object.keys(grouped).length === 0 ? (
              <div className="text-center py-16">
                <MapPin size={40} className="text-gold/30 mx-auto mb-4" />
                <p className="font-serif text-xl text-charcoal mb-2">No stores found</p>
                <p className="font-sans text-sm text-body">Try searching a different city or state.</p>
              </div>
            ) : (
              <div className="space-y-10">
                {Object.entries(grouped).map(([city, stores]) => (
                  <div key={city}>
                    <Reveal>
                      <div className="flex items-center gap-3 mb-5">
                        <h2 className="font-serif text-2xl text-charcoal">{city}</h2>
                        <div className="flex-1 h-px bg-border" />
                        <span className="font-sans text-xs text-body">{stores.length} {stores.length === 1 ? 'store' : 'stores'}</span>
                      </div>
                    </Reveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {stores.map((store, i) => (
                        <Reveal key={store.id} delay={i * 0.1}>
                          <article className="bg-white border border-border rounded-2xl p-5 hover:shadow-hover hover:-translate-y-0.5 transition-all duration-400">
                            <h3 className="font-serif text-charcoal text-base mb-3 leading-snug">{store.name}</h3>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <MapPin size={13} className="text-gold shrink-0 mt-0.5" />
                                <p className="font-sans text-xs text-body leading-relaxed">{store.address}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone size={13} className="text-gold shrink-0" />
                                <a href={`tel:${store.phone}`} className="font-sans text-xs text-body hover:text-gold transition-colors duration-200">
                                  {store.phone}
                                </a>
                              </div>
                              <div className="flex items-start gap-2">
                                <Clock size={13} className="text-gold shrink-0 mt-0.5" />
                                <p className="font-sans text-xs text-body">{store.hours}</p>
                              </div>
                            </div>
                            <a
                              href={`https://maps.google.com/?q=${encodeURIComponent(store.address)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 mt-4 font-sans text-xs font-medium text-gold hover:text-gold-dark tracking-wider uppercase transition-colors duration-200"
                            >
                              Get Directions
                            </a>
                          </article>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
