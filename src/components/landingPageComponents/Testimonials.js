import MaxWidthWrapper from "../MaxWidthWrapper"

function Testimonials() {
  return (
    <MaxWidthWrapper>
        <div className="text-center space-y-5 my-14" id='testimonials'>
            <h1 className="font-bold text-4xl">6,384 happy customeers</h1>
            <h2 className="font-semibold text-xl">Hear from our satisfied customers about their experience with our products and services</h2>
        </div>

        <ul className="mx-auto md:columns-2 lg:columns-3 space-y-4 md:space-y-6 md:gap-6">
            <li className="break-inside-avoid">
                <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border-orange-200 bg-orange-50">
                    <a href="https://www.youtube.com/watch?v=cLqJ39p5LJs&t=2s" target="_blank" rel="noopener noreferrer">
                        <blockquote className="border-b pb-4 font-semibold text-left">
                            Your landing page is one of the most cleanest setups I've ever seen. I love the color scheme and the way you've set up the sections. It's very easy to navigate and the animations are very smooth. Great job!
                        </blockquote>
                    </a>
                </figure>
            </li>
        </ul>
    </MaxWidthWrapper>
  )
}

export default Testimonials