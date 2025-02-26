import { cn } from '@/lib/utils'
import { ArrowRight, Rocket } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'

function FinalPush() {
  return (
    <section className="pt-40 pb-32 px-5" id="contact">
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto px-14 py-10 bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400 rounded-3xl">
            <div className="space-y-6">
                <h2 className='relative tracking-tight font-bold text-xl md:text-4xl'>
                    <span className="absolute right-0">
                        <Rocket className='size-10 text-sky-900' />
                    </span>
                    Take your business to the next level
                </h2>

                <p className="text-lg font-medium leading-relaxed text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, excepturi. Corrupti necessitatibus quas consectetur eos illum, aut corporis, eaque, dolorem aliquam esse deserunt doloribus enim tempora minus. Et, excepturi nisi.
                </p>

                <div className="w-full lg:w-1/4">
                    <Link href='#' className={cn(buttonVariants({ size: "lg" }), "flex items-center justify-center group px-4:")}>
                    <span>Start Now</span>
                    <ArrowRight className='ml-1.5 transform size-4 transition-transform duration-300 group-hover:translate-x-1'/>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FinalPush