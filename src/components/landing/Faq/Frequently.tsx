import React from 'react'
import Card from './Card'
import Image from 'next/image'

const faqData = [
    {
        question: "How is the weekly leaderboard calculated?",
        answer:
            "Your rank is based on daily activity, assignment completions, and game participation."
    },

    {
        question: "What happens if I miss a daily challenge?",
        answer:
            "Missing a challenge will slightly affect streak bonuses but won't reset overall progress."
    },

    {
        question: "How do I earn points?",
        answer:
            "You earn points by completing lessons, quizzes, and participating in activities."
    }
]

const Frequently = () => {
    return (
        <>
            <div className='flex lg:flex-row flex-col gap-5 lg:mx-20 mx-4 lg:pt-30 lg:pb-20 font-heading lg:px-[5vh] py-10 bg-black h-full'>
                <div className='lg:w-[40%] lg:px-[5vh] py-5 lg:py-0 flex flex-col gap-5'>
                    <p className='text-card-head text-3xl font-bold'>Frequently Asked Questions</p>
                    <p className=' text-card-font'>Find answers to common questions about how our
                        leaderboard and point system work.</p>


                </div>
                <div className='lg:w-[60%] flex flex-col  gap-10'>


                    <div className='bg-black flex flex-col gap-5'>
                        {faqData.map((element) => (
                            <div key={element.answer} className='flex'>
                                <Card send={element} />
                            </div>
                        ))}


                    </div>
                    <div className='rounded-xl border-b-2 border-red-given p-5 flex  gap-5 justify-start items-center bg-[linear-gradient(to_right,#2b3119,#0d0d0d)]'>
                        <div>
                            <Image src={'/assets/Landing/Faq/1.png'} alt='img' height={50} width={50}/>
                        </div>
                        <div>

                            <p className='text-card-head'>Pro Tip: The Midnight Reset</p>
                            <p className='text-card-font'>Leaderboards refresh every Sunday at 00:00 UTC. Ensure all your weekend assignments are submitted
                                before the lock to secure your standing.    </p>
                        </div>
                    </div>

                </div>



            </div>
        </>
    )
}

export default Frequently
