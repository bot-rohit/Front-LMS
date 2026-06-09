import React from 'react'
import Card from './Card'
import Link from 'next/link'

const Games = [
    {
        id: 1,
        icon: "1.png",
        title: "Spin & Win",
        description:
            "Daily opportunities to win platform credits, course discounts, and exclusive market research reports.",
    },

    {
        id: 2,
        icon: "2.png",
        title: "Mental Maths",
        description:
            "Train your brain for quick position sizing and risk calculations with our trading-focused math blitz.",
    },

    {
        id: 3,
        icon: "1.png",
        title: "Revision Wheel",
        description:
            "AI-driven concept reinforcement that revisits your weakest points through dynamic daily rotation.",
    },
]


const Fullgamified = () => {
    return (
        <div className='flex flex-col w-full px-20 pt-20 pb-10'>
            <div className='flex justify-between items-center text-[#C1CAAE] font-heading mx-2  '>
                <div className='pb-15 '>
                    <p className='text-4xl font-bold mb-3'>Gamified Mastery</p>
                    <p className=''>Education that feels like a game, results that feel like a career. Stay motivated with integrated gamification mechanics.</p>

                </div>
                <div className=' mb-15 mr-5 '>
                    <Link href="#" className=' flex gap-2 text-red-given'>
                        <p>
                            View All Games
                        </p>
                        <i className="ri-arrow-right-line"></i>
                    </Link>
                </div>


            </div>
            <div className='flex w-auto mx-3 pb-10 gap-5 '>
                {Games.map((element) => (
                    <div key={element.id} className='flex-1'>
                        <Card data={element} />

                    </div>

                ))}
            </div>

        </div>
    )
}

export default Fullgamified
