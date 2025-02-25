import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import MaxWidthWrapper from "../MaxWithWrapper"
import { buttonVariants } from "../ui/button"
import { cn } from '@/lib/utils'
import { Star } from "lucide-react"

function HeroSection() {
  return (
    <section className="bg-slayte-50">
        <MaxWidthWrapper className="pt-10 !px-2 lg:!px-10 lg:grid lg:grid-cols-2 lg:gap-x-0 lg:pt-24 lg:pb-20">
            <div className="col-span-1 px-2 lg:px-0">
                <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                    <h1 className="relative w-fit tracking-tighter text-balance font-bold !leading-tight textgray-900 text-5xl md:text-6xl">
                        Your tagline here for your cool product
                    </h1>

                    <p className="mt-8 text-balance text-lg max-w-prose text-center font-semibold lg:pr-10 md:text-wrap lg:text-left">
                        This is a good place to descrive your product and what it does.
                    </p>

                    <ul className="hissen mt-8 text-left font-medium md:flex flex-col item-center sm:item-start">
                        <div className="space-y-2">
                            <li className="flex gap-1.5 items-center text-left">
                                <Check className="size-5 shrink-0 text-green-600"/>
                                Good reason one
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <Check className="size-5 shrink-0 text-green-600"/>
                                Good reason two
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <Check className="size-5 shrink-0 text-green-600"/>
                                Good reason three
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <Check className="size-5 shrink-0 text-green-600"/>
                                Good reason four
                            </li>
                        </div>
                    </ul>

                    <Link href='#' className={cn(buttonVariants({ size: 'lg' }), "flex item-center justify-center mt-8 group")}>
                        <span>Start Now</span>
                        <ArrowRight className="ml-1,5 transform size-4 transition-transform duration-300 group-hover:translate-x-1"/>
                    </Link>

                    <div className="mt-12 flex flex-col sm:flex-row sm:item-start items-center gap-5">
                        <div className="flex -space-x-3">
                            <img src="/users/avatar_1.png" alt="user image" className="select-none pointer-event-none inline-block size-10 rounded-full ring-2 ring-slate-200 bg-white" />
                            <img src="/users/avatar_2.png" alt="user image" className="select-none pointer-event-none inline-block size-10 rounded-full ring-2 ring-slate-200 bg-white" />
                            <img src="/users/avatar_3.png" alt="user image" className="select-none pointer-event-none inline-block size-10 rounded-full ring-2 ring-slate-200 bg-white" />
                            <img src="/users/avatar_4.png" alt="user image" className="select-none pointer-event-none inline-block size-10 rounded-full ring-2 ring-slate-200 bg-white" />
                            <img src="/users/avatar_5.png" alt="user image" className="select-none pointer-event-none inline-block size-10 rounded-full ring-2 ring-slate-200 bg-white" />
                        </div>

                        <div className="flex flex-col justity-between item-center sm:item-start">
                            <div className="flex gap-1">
                                {Array(5).fill().map((_, i) => (
                                    <Star key={i} className="size-4 text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>

                            <p><span className="font-semibold">5000+</span> happy users</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-span-full mt-14 lg:mt-0 lg:col-span-1">
                <div className="w-full h-60 lg:h-full rounded-3xl bg-gray-200/80 flex items-center justify-center">
                    <h1 className="text-center text-lg font-bold">
                        Your Graphic
                    </h1>
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
  )
}

export default HeroSection