import MaxWidthWrapper from "../MaxWidthWrapper"

function PricingSection() {
  return (
    <section className="bg-[#F8F9FA]" id="pricing">
        <MaxWidthWrapper className="py-20">
            <div className="flex flex-col items-center justify-center">
                <div className="bg-primary/10 rounded-full px-4 py-2">
                    <p className="text-primary text-xs font-medium tracking-wide">
                        PRICING
                    </p>
                </div>

                <div className="max-w-lg text-center mt-4">
                    <p className="text-[#6B7989] text-lg">
                        Choose the plan that fits your needs.
                    </p>
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
  )
}

export default PricingSection