import { Check, X } from "lucide-react"
import { Star } from "lucide-react"
import MaxWidthWrapper from "../MaxWidthWrapper"

function BeforeAfter() {
  return (
    <section className="bg-white/80">
        <MaxWidthWrapper className='pb-10 pt-20'>
            <div className="max-w-3xl mx-auto tracking-tight flex flex-col items-center gap-5">
                <div className="flex items-center justify-center gap-1.5">
                    <X className="size-8 sm:size-6 text-red-600" />
                    <h2 className="font-bold text-xl md:text-3xl text-center">
                        Reason why alternatives are bad
                    </h2>
                </div>

                <div className="flex items-center justify-center gap-1.5">
                    <Check className="size-8 sm:size-6 text-green-600" />
                    <h2 className="font-bold text-xl md:text-3xl text-center">
                        Reason why our products are good
                    </h2>
                </div>
            </div>

            <div className="flex flex-col gap-10 lg:flex-row lg:max-w-4xl lg:mx-auto items-center justify-center lg:gap-14 my-16">
                <div className="flex w-full sm:flex-1 flex-col items-center bg-primary-foreground rounded-2xl shadow-md py-12">
                    <ul className="text-left font-medium flex flex-col sm:items-start">
                        <div className="space-y-2 tracking-wide text-xl">
                            <h3 className="font-semibold">Before</h3>
                            <li className="flex gap-1.5 items-center text-left">
                                <X className="size-4 shrink-0 text-red-500"/>
                                Bad bad bad bad bad bad
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <X className="size-4 shrink-0 text-red-500"/>
                                Bad bad bad bad bad bad
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <X className="size-4 shrink-0 text-red-500"/>
                                Bad bad bad bad bad bad
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <X className="size-4 shrink-0 text-red-500"/>
                                Bad bad bad bad bad bad
                            </li>
                        </div>
                    </ul>
                </div>

                <div className="flex w-full sm:flex-1 flex-col items-center bg-cyan-50 rounded-2xl shadow-md py-12">
                <ul className="text-left font-medium flex flex-col sm:items-start">
                        <div className="space-y-2 tracking-wide text-xl">
                            <h3 className="font-semibold">After</h3>
                            <li className="flex gap-1.5 items-center text-left">
                                <Check className="size-4 shrink-0 text-green-500"/>
                                Good good good good good
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <Check className="size-4 shrink-0 text-green-500"/>
                                Good good good good good
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <Check className="size-4 shrink-0 text-green-500"/>
                                Good good good good good
                            </li>
                            <li className="flex gap-1.5 items-center text-left">
                                <Check className="size-4 shrink-0 text-green-500"/>
                                Good good good good good
                            </li>
                        </div>
                    </ul>
                </div>
            </div>

            <div className="max-w-lg mx-auto my-20 flex flex-col items-center sm:items-start">
                <div className="mx-auto flex items-center justify-center gap-1 mb-4">
                {Array(5).fill().map((_, i) => (
                                    <Star key={i} className="size-4 text-yellow-500 fill-yellow-500" />
                                ))}
                </div>

                <div className="text-center font-semibold text-balance text-gray-800">
                    I can't imagine my life without <span className="bg-yellow-200">using this app</span>. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis excepturi, consequatur quasi, sit quisquam harum mollitia repellendus commodi molestiae fugit, rem qui accusamus suscipit. Quis blanditiis culpa earum error doloremque!
                </div>

                <div className="flex mx-auto items-center justify-center gap-4 my-6">
                    <img src="/users/Boris.png" alt="User" className="inline-block pointer-events-none object-cover size-12 rounded-full ring-2 ring-gray-300"/>
                    <div className="flex flex-col">
                        <p className="font-semibold"> Boris M</p>
                        <p className="text-sm">Student of MIT</p>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    </section>
  )
}

export default BeforeAfter