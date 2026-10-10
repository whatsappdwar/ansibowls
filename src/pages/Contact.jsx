import { useState, useEffect } from 'react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { Mail, Phone, MessageSquare, Globe, QrCode, Send, Sparkles, Download, CheckCircle2 } from 'lucide-react'

export default function Contact({ onOpenCard }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'Catalogue & Quotation Inquiry', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.title = 'Contact Promoter Ravi Sanghavi — ANSSI Bowls'
    window.scrollTo(0, 0)
  }, [])

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  
  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  const handleWhatsAppSubmit = () => {
    const text = encodeURIComponent(
      `Hello Ravi Sanghavi (ANSSI Bowls),\nName: ${form.name || 'Client'}\nEmail: ${form.email || 'N/A'}\nPhone: ${form.phone || 'N/A'}\nSubject: ${form.subject}\nMessage: ${form.message || 'I would like to inquire about ANSSI wash basin bowls.'}`
    )
    window.open(`https://wa.me/919121381429?text=${text}`, '_blank')
  }

  return (
    <main className="pt-24 sm:pt-28 bg-[#FAF7F2]">
      {/* Hero */}
      <section className="bg-[#1C241D] text-[#FAF7F2] py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#354737] rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="container-wide relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2]/10 border border-[#D5BA76]/40 text-[#D5BA76] text-xs font-sans uppercase tracking-[0.2em] mb-4">
            <Sparkles size={13} />
            <span>Direct Promoter Connect</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#FAF7F2] leading-tight mb-4">
            Connect with ANSSI Bowls
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed max-w-xl mx-auto">
            Speak directly with Promoter Ravi Sanghavi for trade catalogs, project quotations, dealer partnerships, and bespoke basin specifications.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 sm:py-24">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Official Card & Contacts */}
          <div className="lg:col-span-5 space-y-8">
            {/* Interactive Business Card Box */}
            <Reveal>
              <div className="bg-[#172018] rounded-3xl p-6 sm:p-7 border border-[#D5BA76]/40 text-[#FAF7F2] shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img src="/brand/anssi-logo-full-gold.png" alt="ANSSI Bowls" className="h-10 w-auto object-contain" />
                    <span className="text-[10px] text-[#D5BA76] uppercase tracking-wider font-sans border-l border-[#FAF7F2]/20 pl-2.5 hidden sm:inline-block">Official Business Card</span>
                  </div>
                  <button
                    onClick={onOpenCard}
                    className="text-xs text-[#D5BA76] hover:text-white underline font-sans flex items-center gap-1"
                  >
                    <QrCode size={13} />
                    <span>Enlarge QR</span>
                  </button>
                </div>

                <div
                  onClick={onOpenCard}
                  className="cursor-pointer group relative rounded-xl overflow-hidden border border-[#FAF7F2]/15 shadow-md mb-4"
                >
                  <img
                    src="/brand/business-card.png"
                    alt="ANSSI Bowls Business Card Ravi Sanghavi"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold uppercase tracking-wider">
                    <QrCode size={16} className="text-[#D5BA76]" />
                    <span>Click to View Full Card & QR</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    onClick={onOpenCard}
                    className="flex-1 bg-[#354737] hover:bg-[#28362A] text-[#FAF7F2] text-xs font-semibold font-sans uppercase tracking-wider py-2.5 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <QrCode size={14} className="text-[#D5BA76]" />
                    <span>Scan Catalog QR</span>
                  </button>
                  <a
                    href="/brand/business-card.png"
                    download="ANSSI-Bowls-Card.png"
                    className="bg-[#D5BA76] hover:bg-[#c2a35d] text-[#1C241D] text-xs font-semibold font-sans uppercase tracking-wider px-3.5 py-2.5 rounded-lg flex items-center justify-center gap-1 transition-colors"
                    title="Download Card"
                  >
                    <Download size={14} />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Direct Promoter Cards */}
            <div className="space-y-4">
              <Reveal delay={0.1}>
                <div className="bg-white border border-[#E8E0D5] rounded-2xl p-5 shadow-card hover:shadow-hover transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                      <MessageSquare size={22} />
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] uppercase tracking-wider text-[#6B6B6B] font-sans font-semibold">Promoter WhatsApp Hotline</span>
                      <h4 className="font-serif text-lg font-bold text-[#2B2B2B]">Ravi Sanghavi</h4>
                      <p className="text-sm font-semibold text-[#25D366] font-sans mt-0.5">+91 91213-81429</p>
                      <a
                        href="https://wa.me/919121381429?text=Hello%20Ravi%20Sanghavi%2C%20I%20am%20interested%20in%20ANSSI%20Bowls"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#25D366] hover:underline font-semibold font-sans mt-2"
                      >
                        <span>Start Direct Chat Now</span> →
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-white border border-[#E8E0D5] rounded-2xl p-5 shadow-card hover:shadow-hover transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#354737]/10 text-[#354737] flex items-center justify-center shrink-0">
                      <Phone size={22} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#6B6B6B] font-sans font-semibold">Direct Calling Numbers</span>
                      <h4 className="font-serif text-lg font-bold text-[#2B2B2B]">Sales & Trade Support</h4>
                      <div className="space-y-1 mt-1 text-sm font-sans font-medium text-[#2B2B2B]">
                        <p><a href="tel:+918142981429" className="hover:text-[#354737]">+91 81429-81429</a></p>
                        <p><a href="tel:+918142981929" className="hover:text-[#354737]">+91 81429-81929</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="bg-white border border-[#E8E0D5] rounded-2xl p-5 shadow-card hover:shadow-hover transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#D5BA76]/20 text-[#B08D57] flex items-center justify-center shrink-0">
                      <Mail size={22} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#6B6B6B] font-sans font-semibold">Official Email & Catalog</span>
                      <p className="text-sm font-sans font-semibold text-[#2B2B2B] mt-0.5">
                        <a href="mailto:anssibowls@gmail.com" className="hover:text-[#B08D57]">anssibowls@gmail.com</a>
                      </p>
                      <p className="text-xs text-[#6B6B6B] mt-1 flex items-center gap-1.5">
                        <Globe size={13} className="text-[#354737]" />
                        <a href="https://anssibowls.odoo.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#354737] font-medium">
                          anssibowls.odoo.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <Reveal direction="right">
              <div className="bg-white border border-[#E8E0D5] rounded-3xl p-8 sm:p-10 shadow-card">
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-wider text-[#B08D57] font-sans font-semibold">Inquiry & Catalog Request</span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#2B2B2B] mt-1 font-semibold">
                    Request Catalog or Custom Quotation
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-[#6B6B6B] mt-1">
                    Fill the details below to receive full technical specs, dealer price lists, or instant WhatsApp consultation.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="font-serif text-2xl text-[#2B2B2B]">Inquiry Received!</h3>
                    <p className="font-sans text-sm text-[#6B6B6B] max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting ANSSI Bowls. Promoter Ravi Sanghavi or our technical team will review your inquiry and connect with you shortly.
                    </p>
                    <div className="pt-4 flex justify-center gap-3">
                      <button
                        onClick={handleWhatsAppSubmit}
                        className="bg-[#25D366] hover:bg-[#1fa951] text-white text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-xl flex items-center gap-2 shadow"
                      >
                        <MessageSquare size={16} />
                        <span>Continue to WhatsApp</span>
                      </button>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="bg-[#FAF7F2] text-[#2B2B2B] text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-xl border border-[#E8E0D5]"
                      >
                        Submit Another
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block font-sans text-xs font-semibold text-[#2B2B2B] uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your Name"
                          className="w-full bg-[#FAF7F2] border border-[#E8E0D5] px-4 py-3 font-sans text-sm text-[#2B2B2B] focus:outline-none focus:ring-1 focus:ring-gold rounded-xl placeholder:text-[#6B6B6B]/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block font-sans text-xs font-semibold text-[#2B2B2B] uppercase tracking-wider mb-1.5">
                          Phone / WhatsApp *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 Mobile number"
                          className="w-full bg-[#FAF7F2] border border-[#E8E0D5] px-4 py-3 font-sans text-sm text-[#2B2B2B] focus:outline-none focus:ring-1 focus:ring-gold rounded-xl placeholder:text-[#6B6B6B]/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-email" className="block font-sans text-xs font-semibold text-[#2B2B2B] uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="name@example.com"
                          className="w-full bg-[#FAF7F2] border border-[#E8E0D5] px-4 py-3 font-sans text-sm text-[#2B2B2B] focus:outline-none focus:ring-1 focus:ring-gold rounded-xl placeholder:text-[#6B6B6B]/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-subject" className="block font-sans text-xs font-semibold text-[#2B2B2B] uppercase tracking-wider mb-1.5">
                          Inquiry Type
                        </label>
                        <select
                          id="contact-subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full bg-[#FAF7F2] border border-[#E8E0D5] px-4 py-3 font-sans text-sm text-[#2B2B2B] focus:outline-none focus:ring-1 focus:ring-gold rounded-xl"
                        >
                          <option value="Catalogue & Quotation Inquiry">Catalog & Quotation</option>
                          <option value="Architect / Designer Trade Inquiry">Architect / Interior Designer Inquiry</option>
                          <option value="Dealer & Distribution Inquiry">Dealer / Distribution Partnership</option>
                          <option value="Custom Size / Stone Basin Order">Bespoke Custom Basin Order</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block font-sans text-xs font-semibold text-[#2B2B2B] uppercase tracking-wider mb-1.5">
                        Requirements / Message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full bg-[#FAF7F2] border border-[#E8E0D5] px-4 py-3 font-sans text-sm text-[#2B2B2B] focus:outline-none focus:ring-1 focus:ring-gold rounded-xl resize-none placeholder:text-[#6B6B6B]/50"
                        placeholder="Specify bowl models, quantity, location, or questions…"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <Button type="submit" variant="primary" size="md" className="flex-1 justify-center" disabled={loading}>
                        <Send size={15} />
                        <span>{loading ? 'Submitting…' : 'Submit Website Inquiry'}</span>
                      </Button>

                      <button
                        type="button"
                        onClick={handleWhatsAppSubmit}
                        className="bg-[#25D366] hover:bg-[#1fa951] text-white px-5 py-3 rounded-xl font-sans text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow transition-transform hover:scale-105"
                      >
                        <MessageSquare size={16} />
                        <span>Instant WhatsApp Send</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
