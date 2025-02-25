import BeforeAfter from './BeforeAfter'
import DemoSection from './landingPageComponents/DemoSection'
import FeatureDisplay from './landingPageComponents/FeatureDisplay'
import HeroSection from './landingPageComponents/HeroSection'

function LandingPage() {
  return (
    <>
        <HeroSection />
        <BeforeAfter />
        <FeatureDisplay />
        <DemoSection />
    </>
  )
}

export default LandingPage