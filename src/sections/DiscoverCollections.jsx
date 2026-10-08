import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import CategoryCard from '../components/CategoryCard'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import collections from '../data/collections.json'

const TABS = ['Bowls', 'Other Pieces']

export default function DiscoverCollections() {
  const [activeTab, setActiveTab] = useState('Bowls')
  const filtered = collections.filter(c => c.tab === activeTab)

  return (
    <section className="bg-ivory py-20 sm:py-28" aria-labelledby="collections-heading">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <SectionHeading
            label="Our Collections"
            heading="Discover Bowls That Fit Your Table, Style and Story."
            align="left"
            className="lg:max-w-xl"
          />
          <Reveal delay={0.3}>
            <Button to="/collections" variant="outline" size="sm">
              View All Collections <ArrowRight size={14} />
            </Button>
          </Reveal>
        </div>

        {/* Tabs */}
        <Reveal delay={0.2}>
          <div className="flex gap-1 bg-cream rounded-xl p-1 w-fit mb-10" role="tablist" aria-label="Collection tabs">
            {TABS.map(tab => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                id={`tab-${tab.replace(' ', '-')}`}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 font-sans text-sm font-medium transition-all duration-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold
                  ${activeTab === tab ? 'text-charcoal' : 'text-body hover:text-charcoal'}`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 bg-white shadow-soft rounded-lg"
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
            role="tabpanel"
            aria-labelledby={`tab-${activeTab.replace(' ', '-')}`}
          >
            {filtered.map((col, i) => (
              <motion.div
                key={col.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <CategoryCard collection={col} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
