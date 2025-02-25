import Link from "next/link"
import MaxWidthWrapper from "../MaxWidthWrapper"
import { Building2, CircleCheck } from "lucide-react"

function PricingSection() {
    return (
        <section className="bg-palewhite" id="pricing">
            <MaxWidthWrapper className="py-20">
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-primary/10 rounded-full px-4 py-2">
                        <p className="text-primary text-xs font-medium tracking-wide">
                            PRICING
                        </p>
                    </div>

                    <div className="max-w-lg text-center mt-4">
                        <p className="text-lightgreen text-lg">
                            Choose the plan that fits your needs.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-7 my-4 md:my-10 text-[#293A51]">
                    {/* free plan */}
                    <div className="bg-white p-8 rounded-xl shadow-sm mt-14">
                        <h3 className="text-2xl font-bold mb-4 text-center">
                            Free
                        </h3>

                        <p className="font-bold mb-6 text-center">
                            <span className="text-6xl">$0</span><span className="text-xs text-lightgreen"> / month</span>
                        </p>

                        <p className="text-center font-bold text-lightgreen">
                            Perfect for individuals and hobbyists.
                        </p>

                        <div className="bg-palewhite w-full py-2 rounded-sm flex items-center justify-center font-medium my-4">
                            <p className="text-xs text-lightgreen">
                                Access to basic features
                            </p>
                        </div>

                        <div className="px-6">
                            <Link href="/" className="flex items-center justify-center cursor-pointer border-2 border-primary px-5 py-[0.45rem] rounded-full hover:bg-primary hover:text-white font-medium text-primary transition-colors duration-200 ease-out">
                                Start for Free
                            </Link>
                        </div>

                        <p className="font-medium mt-6 mb-4">
                            Basic features includes:
                        </p>

                        <ul className="text-left text-lightgreen font-medium space-y-4 mb-8">
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="size-5 shrink-0 fill-lightblue text-white" />
                                Basic stuff
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="size-5 shrink-0 fill-lightblue text-white" />
                                Basic stuff
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="size-5 shrink-0 fill-lightblue text-white" />
                                Basic stuff
                            </li>
                        </ul>
                    </div>

                    {/* pro plan */}
                    <div className="relative bg-white p-4 md:p-8 rounded-xl shadow-sm border-2 md:border-4 border-primary">
                        <div className="absolute top-[-1rem] left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Popular
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-center">Pro</h3>
                        <p className="font-bold mb-6 text-center">
                            <span className="text-6xl">$9.9</span><span className="text-xs text-[#6B79B9]"> / month</span>
                        </p>

                        <p className="text-center font-bold text-lightgreen">
                            Ideal for Pro users and larger teams.
                        </p>

                        <div className="bg-palewhite w-full py-2 rounded-sm flex items-center justify-center font-medium my-4">
                            <p className="text-[#687989]">
                                Full access to all features
                            </p>
                        </div>

                        <div className="px-6 mb-6">
                            <div className="flex items-center justify-center cursor-pointer px-5 py-[0.5rem] rounded-full bg-primary hover:bg-primary/90 font-medium text-white transition-colors duration-200 ease-out">
                                Subscribe
                            </div>
                        </div>

                        <ul className="text-left text-lightgreen font-medium space-y-4 mb-8">
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="size-5 shrink-0 fill-lightblue text-white" />
                                <span className="font-bold text-[#293A51]">All</span> Free plan features
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="size-5 shrink-0 fill-lightblue text-white" />
                                <span className="font-bold text-[#293A51]">Unlimited</span> daily usage
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="size-5 shrink-0 fill-lightblue text-white" />
                                <span className="font-bold text-[#293A51]">Fast</span> tech support
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="size-5 shrink-0 fill-lightblue text-white" />
                                Commercial usage
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="size-5 shrink-0 fill-lightblue text-white" />
                                Premium stuff
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="size-5 shrink-0 fill-lightblue text-white" />
                                Premium stuff
                            </li>
                        </ul>
                    </div>

                    {/* enterprise plan */}
                    <div className="bg-white p-8 rounded-xl shadow-sm mt-14">
                        <h3 className="text-2xl font-bold text-center">Enterprise</h3>
                        <div className="bg-palewhite rounded-full size-20 flex items-center justify-center mx-auto my-7">
                            <Building2 className="size-8 text-lightgreen" />
                        </div>

                        <p className="text-center font-bold text-lightgreen">
                            Tailored to large teams and enterprises.
                        </p>

                        <div className="bg-palewhite w-full py-2 px-6 rounded-sm flex items-center justify-center font-medium my-4">
                            <p className="text-xs text-lightgreen text-center">
                                Full access to all features, including exclusive enterprise tools
                            </p>
                        </div>

                        <div className="px-6 mb-6">
                            <div className="flex items-center justify-center cursor-pointer border-2 border-primary px-5 py-[0.45rem] rounded-full hover:bg-primary hover:text-white font-medium text-primary transition-colors duration-200 ease-out">
                                Contact Us
                            </div>
                        </div>

                        <ul className="text-left text-lightgreen font-medium space-y-4 mb-8">
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="size-5 shrink-0 fill-lightblue text-white" />
                                <span className="font-bold text-[#293A51]">All</span> Pro plan features
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="size-5 shrink-0 fill-lightblue text-white" />
                                <span className="font-bold text-[#293A51]">Custom</span> tools
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="size-5 shrink-0 fill-lightblue text-white" />
                                <span className="font-bold text-[#293A51]">Unlimited</span> tech support
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="size-5 shrink-0 fill-lightblue text-white" />
                                Commercial usage
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="size-5 shrink-0 fill-lightblue text-white" />
                                High-end stuff
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <CircleCheck className="size-5 shrink-0 fill-lightblue text-white" />
                                High-end stuff
                            </li>
                        </ul>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default PricingSection