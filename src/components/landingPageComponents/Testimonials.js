import { Tweet } from "react-tweet"
import MaxWidthWrapper from "../MaxWidthWrapper"

const tweets = [
    {
        id: '1894325564481093843',
    },
    {
        id: '1894414352318341557',
    },
    {
        id: '1894307808822399019',
    },
    {
        id: '1894458593157464134',
    },
    {
        id: '1894364022046167069',
    },
    {
        id: '1894281173028757826',
    },
    {
        id: '1893849972153475198',
    }

]
function Testimonials() {
  return (
    <MaxWidthWrapper>
        <div className="text-center space-y-5 my-14" id='testimonials'>
            <h1 className="font-bold text-4xl">6,384 Happy Customers</h1>
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
                    <figcaption>
                        <div className="flex items-center gap-4 mt-4">
                            <img src="/users/avatar_1.png" alt="user" className="inline-block shrink-0 pointer-events-none size-12 rounded-full"/>
                            <div className="flex flex-col">
                                <p className="font-semibold">Reddit user</p>
                                <p className="text-sm">@user</p>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </li>

            <li className="break-inside-avoid">
                <Tweet id={tweets[0].id} />
            </li>

            <li className="break-inside-avoid">
                <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border-orange-200 bg-orange-50">
                    <a href="https://www.youtube.com/watch?v=cLqJ39p5LJs&t=2s" target="_blank" rel="noopener noreferrer">
                        <blockquote className="border-b pb-4 font-semibold text-left">
                            This is just incredible. I've never seen a landing page that looks this good.
                        </blockquote>
                    </a>
                    <figcaption>
                        <div className="flex items-center gap-4 mt-4">
                            <img src="/users/avatar_2.png" alt="user" className="inline-block shrink-0 pointer-events-none size-12 rounded-full"/>
                            <div className="flex flex-col">
                                <p className="font-semibold">YouTuber</p>
                                <p className="text-sm">@user</p>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </li>

            <li className="break-inside-avoid">
                <Tweet id={tweets[1].id} />
            </li>

            <li className="break-inside-avoid">
                <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border-orange-200 bg-orange-50">
                    <a href="https://www.youtube.com/watch?v=cLqJ39p5LJs&t=2s" target="_blank" rel="noopener noreferrer">
                        <blockquote className="border-b pb-4 font-semibold text-left">
                            Awsome work! Keep on going!
                        </blockquote>
                    </a>
                    <figcaption>
                        <div className="flex items-center gap-4 mt-4">
                            <img src="/users/avatar_3.png" alt="user" className="inline-block shrink-0 pointer-events-none size-12 rounded-full"/>
                            <div className="flex flex-col">
                                <p className="font-semibold">AI-Commenter</p>
                                <p className="text-sm">@user</p>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </li>

            <li className="break-inside-avoid">
                <Tweet id={tweets[2].id} />
            </li>

            <li className="break-inside-avoid">
                <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border-orange-200 bg-orange-50">
                    <a href="https://www.youtube.com/watch?v=cLqJ39p5LJs&t=2s" target="_blank" rel="noopener noreferrer">
                        <blockquote className="border-b pb-4 font-semibold text-left">
                            Man, what can I say? Manba out!
                        </blockquote>
                    </a>
                    <figcaption>
                        <div className="flex items-center gap-4 mt-4">
                            <img src="/users/avatar_4.png" alt="user" className="inline-block shrink-0 pointer-events-none size-12 rounded-full"/>
                            <div className="flex flex-col">
                                <p className="font-semibold">Old Big</p>
                                <p className="text-sm">@user</p>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </li>

            <li className="break-inside-avoid">
                <Tweet id={tweets[3].id} />
            </li>

            <li className="break-inside-avoid">
                <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border-orange-200 bg-orange-50">
                    <a href="https://www.youtube.com/watch?v=cLqJ39p5LJs&t=2s" target="_blank" rel="noopener noreferrer">
                        <blockquote className="border-b pb-4 font-semibold text-left">
                            Chicken, you're so beautiful.
                        </blockquote>
                    </a>
                    <figcaption>
                        <div className="flex items-center gap-4 mt-4">
                            <img src="/users/avatar_5.png" alt="user" className="inline-block shrink-0 pointer-events-none size-12 rounded-full"/>
                            <div className="flex flex-col">
                                <p className="font-semibold">Your Brother</p>
                                <p className="text-sm">@user</p>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </li>

            <li className="break-inside-avoid">
                <figure className="relative h-full w-full max-w-[500px] p-6 rounded-xl border border-gray-200 bg-gradient-to-tr from-blue-200 to-teal-200 transition-all duration-200 ease-in-out transform hover:rotate-2 hover:scale-105 hover:shadow-lg">
                    <a href="#">
                        <blockquote className="border-b pb-4 font-semibold text-lg">
                            This could be you! Try it for free before today. Use this template, clone to your local, npm install and off you go!
                        </blockquote>
                    </a>
                    <figcaption>
                        <div className="flex items-center gap-4 mt-4">
                            <img src="/users/Boris.png" alt="user" className="inline-block shrink-0 pointer-events-none object-cover size-12 rounded-full ring-2 ring-gray-300"/>
                            <div className="flex flex-col">
                                <p className="font-semibold">Your name</p>
                                <p className="text-sm">@you</p>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </li>
        </ul>
    </MaxWidthWrapper>
  )
}

export default Testimonials