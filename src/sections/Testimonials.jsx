import SectionHeading from '../components/SectionHeading'
import TestimonialSlider from '../components/TestimonialSlider'
import Reveal from '../components/Reveal'

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 sm:py-28" aria-labelledby="testimonials-heading">
      <div className="container-wide">
        <SectionHeading
          label="What People Say"
          heading="Where the Most Beautiful Tables Come Together."
          subheading="From home kitchens to Michelin-starred restaurants — Anssi bowls find their way to the most considered tables."
          align="center"
        />
        <Reveal delay={0.3} className="mt-14">
          <TestimonialSlider />
        </Reveal>
      </div>
    </section>
  )
}
