import BeforeAfter from './landingPageComponents/BeforeAfter'
import DemoSection from './landingPageComponents/DemoSection'
import FaqSection from './landingPageComponents/FaqSection'
import FeatureDisplay from './landingPageComponents/FeatureDisplay'
import HeroSection from './landingPageComponents/HeroSection'
import PricingSection from './landingPageComponents/PricingSection'

function LandingPage() {
  return (
    <>
        <HeroSection />
        <BeforeAfter />
        <FeatureDisplay />
        <DemoSection />
        <PricingSection />
        <FaqSection />
    </>
  )
}

export default LandingPage