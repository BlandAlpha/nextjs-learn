import { Sparkle } from "lucide-react"

function FeatureDisplay() {
  return (
    <section className="bg-slate-50 py-24 pb-16">
        <div className="max-w-sm sm:max-w-2xl lg:max-w-3xl mx-auto flex flex-col gap-4">
            <h2 className="tracking-tight font-bold text-center md:text-left text-3xl lg:text-5xl lg:leading-[3.5rem]">
                Attention is all you need.
            </h2>
            <p className="font-semibold my-4 text-center md:text-left text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur doloremque nesciunt optio aliquam porro quia dolores quidem recusandae! Nisi, veniam.
            </p>

            <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-8 md:gap-0 mt-4">
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <Sparkle className="size-5 md:size-10 group-hover:text-gray-600 transition-colors duration-200" />
                    <p className="text-sm font-semibold group-hover:text-gray-600 transition-colors">Feature One</p>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <Sparkle className="size-5 md:size-10 group-hover:text-gray-600 transition-colors duration-200" />
                    <p className="text-sm font-semibold group-hover:text-gray-600 transition-colors">Feature Two</p>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <Sparkle className="size-5 md:size-10 group-hover:text-gray-600 transition-colors duration-200" />
                    <p className="text-sm font-semibold group-hover:text-gray-600 transition-colors">Feature Three</p>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <Sparkle className="size-5 md:size-10 group-hover:text-gray-600 transition-colors duration-200" />
                    <p className="text-sm font-semibold group-hover:text-gray-600 transition-colors">Feature Four</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeatureDisplay