'use client'

import { ChevronRight, Expand } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

function FaqSection() {
    const faqs = [
        {
            questions: 'How to get started?',
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi, consequatur quasi, sit quisquam harum mollitia repellendus commodi molestiae fugit, rem qui accusamus suscipit. Quis blanditiis culpa earum error doloremque!"
        },
        {
            questions: 'Is this completely free?',
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi, consequatur quasi, sit quisquam harum mollitia repellendus commodi molestiae fugit, rem qui accusamus suscipit. Quis blanditiis culpa earum error doloremque!"
        },
        {
            questions: 'What is the difference between the plans?',
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi, consequatur quasi, sit quisquam harum mollitia repellendus commodi molestiae fugit, rem qui accusamus suscipit. Quis blanditiis culpa earum error doloremque!"
        },
        {
            questions: 'Do you provide free shipping on orders over a certain amount?',
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi, consequatur quasi, sit quisquam harum mollitia repellendus commodi molestiae fugit, rem qui accusamus suscipit. Quis blanditiis culpa earum error doloremque!"
        },
        {
            questions: 'What should I do if my order has not arrived within the expected timeframe?',
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi, consequatur quasi, sit quisquam harum mollitia repellendus commodi molestiae fugit, rem qui accusamus suscipit. Quis blanditiis culpa earum error doloremque!"
        },
        {
            questions: 'Are there bulk or wholesale pricing options available?',
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi, consequatur quasi, sit quisquam harum mollitia repellendus commodi molestiae fugit, rem qui accusamus suscipit. Quis blanditiis culpa earum error doloremque!"
        }
    ]
    return (
        <section className="bg-white/80 py-20" id='faq'>
            <div className="max-w-sm sm:max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-12 capitalize">Frequently Asked Auestions</h1>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        return (
                            <div key={index} className="bg-slate-100/50 p-4 px-7 rounded-lg hover:shadow">
                                <Accordion
                                    className='flex w-full flex-col'
                                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                                    variants={{
                                        expanded: {
                                            opacity: 1,
                                            scale: 1,
                                        },
                                        collapsed: {
                                            opacity: 0,
                                            scale: 0.7,
                                        },
                                    }}
                                >
                                    <AccordionItem value='getting-started' className='py-2'>
                                        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950'>
                                            <div className="flex items-center">
                                                <ChevronRight className="size-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90" />
                                                <div className="ml-2 text-zinc-950 text-xl font-semibold">
                                                    {faq.questions}
                                                </div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className='origin-left'>
                                            <p className="pl-6 pr-2 leading-relaxed text-zinc-500">
                                                {faq.answer}
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FaqSection