import { ChevronDown } from "lucide-react"

function DemoSection() {
  return (
    <section className="bg-white/80 py-20">
        <div className="w-[90%] sm:max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center text-gray-700">
            <h1 className="font-bold text-3xl text-center">
                Hey there, it's <a href="https://github.com/BlandAlpha/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:underline-offset-2">CanisAlpha</a>👋
            </h1>
            <img src="/users/Boris.png" alt="canisalpha" className="inline-block pointer-events-none size-24 rounded-full my-10"/>
            <p className="max-w-prose w-fit text-center font-semibold leading-relaxed">
                <spam className="font-bold">Your story goes here.</spam> Lorem ipsum dolor, sit amet consectetur.
            </p>

            <div className="my-20 scroll-mt-28 w-full" id="demo">
                <div className="w-full lg:w-4/5 lg:mx-auto h-96 shadow-md bg-gray-200 rounded-xl flex items-center justify-center">
                    <h1 className="font-bold text-xl">
                        Your Demo
                    </h1>
                </div>
            </div>

            <div className="flex items-center justify-center mb-4">
                <ChevronDown className="animate-bounce size-10 text-gray-600"/>
            </div>

            <div className="font-medium text-center text-2xl text-gray-600 hover:text-gray-800 cursor-pointer">
                Try it now
            </div>
        </div>
    </section>
  )
}

export default DemoSection