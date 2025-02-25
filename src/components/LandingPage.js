import BeforeAfter from './landingPageComponents/BeforeAfter'
import DemoSection from './landingPageComponents/DemoSection'
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
    </>
  )
}

export default LandingPage