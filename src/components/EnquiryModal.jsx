import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown } from 'lucide-react'
import Button from './Button'

const ROLES = ['Customer', 'Dealer', 'Interior Designer', 'Architect', 'Others']

export default function EnquiryModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', city: '', role: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.phone.trim()) errs.phone = 'Phone number is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, '')))
      errs.phone = 'Enter a valid 10-digit Indian mobile number'
    if (!form.city.trim()) errs.city = 'City is required'
    if (!form.role) errs.role = 'Please select your role'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setForm({ name: '', phone: '', city: '', role: '' })
      setErrors({})
      setSubmitted(false)
    }, 400)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-50"
            onClick={handleClose}
            aria-hidden="true"
          />
          {/* Modal */}
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-ivory rounded-3xl shadow-hover w-full max-w-md overflow-hidden">
              {/* Header */}
              <div className="bg-cream px-8 py-6 relative">
                <span className="section-label block mb-1">Get in Touch</span>
                <h2 id="enquiry-title" className="font-serif text-h3 text-charcoal">Enquire Now</h2>
                <button
                  onClick={handleClose}
                  aria-label="Close enquiry form"
                  className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/60 hover:bg-gold hover:text-ivory flex items-center justify-center text-body transition-all duration-300"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="px-8 py-6">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✓</span>
                    </div>
                    <h3 className="font-serif text-xl text-charcoal mb-2">Thank You, {form.name.split(' ')[0]}!</h3>
                    <p className="font-sans text-sm text-body leading-relaxed">
                      Our team will reach out to you within 24 hours. In the meantime, feel free to explore our collections.
                    </p>
                    <Button variant="primary" size="sm" className="mt-6" onClick={handleClose}>
                      Continue Exploring
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    {[
                      { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Your full name' },
                      { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+91 98765 43210' },
                      { label: 'City', name: 'city', type: 'text', placeholder: 'Your city' },
                    ].map(({ label, name, type, placeholder }) => (
                      <div key={name}>
                        <label htmlFor={`enquiry-${name}`} className="block font-sans text-xs font-medium text-charcoal mb-1.5 tracking-wider uppercase">
                          {label} <span className="text-gold">*</span>
                        </label>
                        <input
                          id={`enquiry-${name}`}
                          type={type}
                          name={name}
                          value={form[name]}
                          onChange={handleChange}
                          placeholder={placeholder}
                          required
                          className={`w-full bg-white border px-4 py-3 font-sans text-sm text-charcoal placeholder:text-body/50 focus:outline-none focus:ring-1 focus:ring-gold transition-colors duration-200 rounded-xl
                            ${errors[name] ? 'border-red-400' : 'border-border'}`}
                        />
                        {errors[name] && <p className="mt-1 text-xs text-red-500">{errors[name]}</p>}
                      </div>
                    ))}

                    <div>
                      <label htmlFor="enquiry-role" className="block font-sans text-xs font-medium text-charcoal mb-1.5 tracking-wider uppercase">
                        I Am <span className="text-gold">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="enquiry-role"
                          name="role"
                          value={form.role}
                          onChange={handleChange}
                          required
                          className={`w-full bg-white border px-4 py-3 pr-10 font-sans text-sm text-charcoal appearance-none focus:outline-none focus:ring-1 focus:ring-gold transition-colors duration-200 rounded-xl
                            ${errors.role ? 'border-red-400' : 'border-border'} ${!form.role ? 'text-body/50' : ''}`}
                        >
                          <option value="" disabled>Select your role</option>
                          {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                        </select>
                        <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-body pointer-events-none" />
                      </div>
                      {errors.role && <p className="mt-1 text-xs text-red-500">{errors.role}</p>}
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      className="w-full justify-center mt-2"
                      disabled={loading}
                    >
                      {loading ? 'Sending…' : 'Send Enquiry'}
                    </Button>

                    <div className="relative flex py-1 items-center">
                      <div className="flex-grow border-t border-[#E8E0D5]"></div>
                      <span className="flex-shrink mx-2 text-[10px] uppercase font-sans text-body/60 tracking-wider">or instant chat</span>
                      <div className="flex-grow border-t border-[#E8E0D5]"></div>
                    </div>

                    <a
                      href="https://wa.me/919121381429?text=Hello%20Ravi%20Sanghavi%2C%20I%20am%20interested%20in%20ANSSI%20Bowls%20catalog%20and%20designs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#1fa951] text-white text-xs font-semibold uppercase tracking-wider py-3 rounded-xl flex items-center justify-center gap-2 shadow transition-all"
                    >
                      <span>Chat on WhatsApp (+91 91213-81429)</span>
                    </a>

                    <p className="text-center text-[11px] text-body/60 font-sans">
                      Promoter Ravi Sanghavi • +91 81429-81429
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
