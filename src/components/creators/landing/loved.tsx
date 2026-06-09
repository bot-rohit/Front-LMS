import React from 'react'
import Lovedcard from './lovedcard'

const testimonials = [
    {
        id: 1,
        name: "Aarav Mehta",
        role: "Options Strategist",
        students: "14k students",
        initials: "AM",
        rating: 5,
        review:
            "I went from 200 YouTube comments a day to a structured ₹1.8L/month business in 5 weeks.",
    },
    {
        id: 2,
        name: "Saanvi Kapoor",
        role: "Crypto Coach",
        students: "8.2k students",
        initials: "SK",
        rating: 5,
        review:
            "TradeVed's analytics showed me exactly which lessons drop off — I doubled completion in a month.",
    },
    {
        id: 3,
        name: "Vikram Iyer",
        role: "Trading Institute",
        students: "22k students",
        initials: "VI",
        rating: 5,
        review:
            "Migrating our institute to TradeVed cut admin time by 70% and grew revenue 3x.",
    },
];
const loved = () => {
    return (
        <>
            <div className='w-auto px-20 pt-15 pb-5'>

                <div className='p-10 gap-10 flex flex-col'>
                    <div className='font-heading flex flex-col gap-2 '>
                        <p className='text-neon-green font-bold text-md'>CREATOR STORIES</p>
                        <p className='text-white font-bold text-4xl'> Loved by India's best market educators.</p>

                    </div>
                    <div className='flex gap-5'>
                        {testimonials.map((element) => (
                            <div key={element.id} className=' bg-[#161A13] px-5 py-5 rounded-2xl'>
                                <Lovedcard sending={element} />

                            </div>

                        ))}

                    </div>

                </div>
            </div>
        </>

    )
}

export default loved
