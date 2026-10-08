import { Link } from 'react-router-dom'
import { Mail, Phone, Globe, MessageSquare, QrCode, ArrowRight, Download } from 'lucide-react'

const InstagramIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
)

const footerLinks = [
  {
    heading: 'Bowl Collections',
    links: [
      { label: 'Ceramic & Porcelain', href: '/collections/ceramic' },
      { label: 'Italian Marble & Stone', href: '/collections/stone' },
      { label: 'Minimalist Matte Series', href: '/collections/minimalist' },
      { label: 'PVD Titanium Gold', href: '/collections/metallic' },
      { label: 'Venetian Terrazzo', href: '/collections/terrazzo' },
      { label: 'Artisan & Reactive Glaze', href: '/collections/artisan' },
    ],
  },
  {
    heading: 'Company & Catalog',
    links: [
      { label: 'About ANSSI Bowls', href: '/about' },
      { label: 'All 13 Bowl Models', href: '/products' },
      { label: 'Official Odoo Catalog', href: 'https://anssibowls.odoo.com', external: true },
      { label: 'Bespoke Studio Orders', href: '/contact' },
      { label: 'Promoter Direct Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Direct Inquiries',
    links: [
      { label: 'Promoter: Ravi Sanghavi', href: 'tel:+918142981429' },
      { label: 'WhatsApp: +91 91213-81429', href: 'https://wa.me/919121381429', external: true },
      { label: 'Call: +91 81429-81429', href: 'tel:+918142981429' },
      { label: 'Call: +91 81429-81929', href: 'tel:+918142981929' },
      { label: 'Email: anssibowls@gmail.com', href: 'mailto:anssibowls@gmail.com' },
      { label: 'Instagram: @anssi_bowls', href: 'https://instagram.com/anssi_bowls', external: true },
    ],
  },
]

export default function Footer({ onOpenCard }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#172018] text-[#FAF7F2]/80 font-sans border-t border-[#FAF7F2]/10" role="contentinfo">
      {/* Top Banner with Gold Logo */}
      <div className="border-b border-[#FAF7F2]/10 bg-[#141B15]">
        <div className="container-wide py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/brand/anssi-logo-gold.png"
              alt="ANSSI Bowls - Designs That Speaks Elegance"
              className="h-16 w-auto object-contain rounded-lg border border-[#D5BA76]/30 bg-[#28362A] p-1.5 shadow-md"
            />
            <div>
              <p className="font-serif text-xl sm:text-2xl text-[#FAF7F2]">ANSSI Bowls</p>
              <p className="font-serif italic text-sm text-[#D5BA76]">Designs That Speaks Elegance</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenCard}
              className="bg-[#D5BA76] hover:bg-[#c2a35d] text-[#1C241D] text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-xl flex items-center gap-2 shadow transition-transform hover:scale-105"
            >
              <QrCode size={16} />
              <span>Scan QR / View Card</span>
            </button>

            <a
              href="https://wa.me/919121381429?text=Hello%20Ravi%2C%20please%20send%20the%20complete%20ANSSI%20Bowls%20catalog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-xl flex items-center gap-2 shadow transition-transform hover:scale-105"
            >
              <MessageSquare size={16} />
              <span>WhatsApp Promoter</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#D5BA76]/40 bg-[#28362A] p-0.5">
                <img
                  src="/brand/anssi-symbol.png"
                  alt="ANSSI Symbol"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-[#FAF7F2]">ANSSI Bowls</span>
                <span className="block text-[10px] uppercase tracking-widest text-[#D5BA76]">Designs That Speaks Elegance</span>
              </div>
            </div>

            <p className="text-xs text-[#FAF7F2]/65 leading-relaxed mb-6 max-w-sm">
              Manufacturers and curators of luxury wash basin bowls, designer table-top vessels, and architectural bath art in natural Italian marble, translucent onyx, handcrafted ceramics, and titanium gold.
            </p>

            {/* Direct Contact Block */}
            <div className="space-y-2.5 text-xs text-[#FAF7F2]/80">
              <div className="flex items-center gap-2.5">
                <span className="text-[#D5BA76] font-semibold">Promoter:</span>
                <span className="text-[#FAF7F2] font-medium">Ravi Sanghavi</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={13} className="text-[#D5BA76] shrink-0" />
                <a href="tel:+918142981429" className="hover:text-[#D5BA76] transition-colors">+91 81429-81429</a>
                <span className="text-[#FAF7F2]/30">/</span>
                <a href="tel:+918142981929" className="hover:text-[#D5BA76] transition-colors">+91 81429-81929</a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare size={13} className="text-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/919121381429"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp: +91 91213-81429
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={13} className="text-[#D5BA76] shrink-0" />
                <a href="mailto:anssibowls@gmail.com" className="hover:text-[#D5BA76] transition-colors">
                  anssibowls@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe size={13} className="text-[#D5BA76] shrink-0" />
                <a
                  href="https://anssibowls.odoo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D5BA76] transition-colors underline"
                >
                  anssibowls.odoo.com
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com/anssi_bowls"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @anssi_bowls"
                className="w-9 h-9 rounded-full border border-[#FAF7F2]/20 flex items-center justify-center text-[#FAF7F2]/70 hover:border-[#D5BA76] hover:text-[#D5BA76] transition-all"
              >
                <InstagramIcon size={15} />
              </a>
              <button
                onClick={onOpenCard}
                aria-label="Business Card QR"
                className="w-9 h-9 rounded-full border border-[#FAF7F2]/20 flex items-center justify-center text-[#FAF7F2]/70 hover:border-[#D5BA76] hover:text-[#D5BA76] transition-all"
              >
                <QrCode size={15} />
              </button>
            </div>
          </div>

          {/* Columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="font-sans text-xs font-semibold text-[#FAF7F2] tracking-wider uppercase mb-5">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#FAF7F2]/65 hover:text-[#D5BA76] transition-colors block"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-xs text-[#FAF7F2]/65 hover:text-[#D5BA76] transition-colors block"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#FAF7F2]/10 bg-[#121813]">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#FAF7F2]/50 font-sans">
          <p>© {currentYear} ANSSI Bowls. All Rights Reserved. Designs That Speaks Elegance.</p>
          <div className="flex items-center gap-4">
            <span>Promoter: Ravi Sanghavi</span>
            <span>•</span>
            <button onClick={onOpenCard} className="hover:text-[#D5BA76] transition-colors underline">
              View Digital Card & QR
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
