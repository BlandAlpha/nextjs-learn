import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { Menu } from "lucide-react"
import { cn } from '@/lib/utils'

function Navbar() {
  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b bg-white/75 border-gray-200 bg-white/7 backdrop-blur-lg transition-all">
        <MaxWidthWrapper>
            <div className="flex h-16 items-center justify-between">
                <div className="flex items-center justify-center gap-14">
                    <Link href="/" className="flex font-bold text-lg">
                        CanisAlpha
                    </Link>

                    <div className="hidden md:flex items-center justify-center gap-8 lg:gap-14">
                        <Link href='#pricing' className="font-semibold hover:underline hover:underline-offset-2">
                            Pricing
                        </Link>
                        <Link href='#demo' className="font-semibold hover:underline hover:underline-offset-2">
                            Demo
                        </Link>
                        <Link href='#faq' className="font-semibold hover:underline hover:underline-offset-2">
                            FAQ
                        </Link>
                        <Link href='#about' className="font-semibold hover:underline hover:underline-offset-2">
                            About
                        </Link>
                    </div>
                </div>

                {/* TODO: Add mobile menu */}
                <div className="md:hidden">
                    <Menu className="size-6 cursor-pointer" />
                </div>

                <div className="hidden md:flex items-center">
                    <Link href='/sign-in' className={cn(buttonVariants({ size: "sm" }), "flex items-center justify-center group px-4")}>
                        <span>Sign in</span>
                        <ArrowRight className="ml-1 transform size-4 transition-transform duration-300 group-hover:translate-x-1"></ArrowRight>
                    </Link>
                </div>
            </div>
        </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar