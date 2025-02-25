import AsSeenOn from './landingPageComponents/AsSeenOn'
import BeforeAfter from './landingPageComponents/BeforeAfter'
import DemoSection from './landingPageComponents/DemoSection'
import FaqSection from './landingPageComponents/FaqSection'
import FeatureDisplay from './landingPageComponents/FeatureDisplay'
import HeroSection from './landingPageComponents/HeroSection'
import PricingSection from './landingPageComponents/PricingSection'
import Testimonials from './landingPageComponents/Testimonials'

function LandingPage() {
  return (
    <>
        <HeroSection />
        <BeforeAfter />
        <FeatureDisplay />
        <DemoSection />
        <PricingSection />
        <FaqSection />
        <AsSeenOn />
        <Testimonials />
    </>
  )
}

export default LandingPage