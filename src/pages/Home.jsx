import { useEffect } from 'react'
import Hero from '../sections/Hero'
import BrandGateway from '../sections/BrandGateway'
import MarqueeTicker from '../components/MarqueeTicker'
import BowlGalleryShowcase from '../sections/BowlGalleryShowcase'
import OurStory from '../sections/OurStory'
import WhyAnssi from '../sections/WhyAnssi'
import DiscoverCollections from '../sections/DiscoverCollections'
import Customisation from '../sections/Customisation'
import Testimonials from '../sections/Testimonials'
import ShowroomCTA from '../sections/ShowroomCTA'

export default function Home({ onEnquiry, onOpenCard }) {
  useEffect(() => {
    document.title = 'ANSSI Bowls — Designs That Speaks Elegance | Luxury Wash Basins'
  }, [])

  return (
    <main>
      <Hero onEnquiry={onEnquiry} onOpenCard={onOpenCard} />
       <MarqueeTicker />
      <BrandGateway />
      <BowlGalleryShowcase onEnquiry={onEnquiry} />
      <OurStory />
      <WhyAnssi />
      <DiscoverCollections />
      <Customisation onEnquiry={onEnquiry} />
      <Testimonials />
      <ShowroomCTA onEnquiry={onEnquiry} />
    </main>
  )
}
