'use client'
import React from 'react'
import { useState } from 'react'
import Courcecard from './Courcecard'
import Link from 'next/link'
const cardData = [
    {
        icon: "booktype.png",
        course: 1,
        data: "The absolute basics. Master the language of markets and technical terminology.",
        number: 18,

    },
    {
        icon: "hat.png",
        course: 2,
        data: "Charts, indicators, and price patterns. Learn to read the story within the noise.",
        number: 18,


    },
    {
        icon: "up.png",
        course: 3,
        data: "Leverage and hedging strategies for advanced risk management and income.",
        number: 18,

    }

]




const Learning = () => {


    return (



        <div className=' bg-[#080C00] px-8 py-10 mx-20 mt-20 rounded-2xl pt-20'>
            <div className='flex justify-between items-center text-[#C1CAAE] font-heading mx-2 '>
                <div className='pb-15 '>
                    <p className='text-4xl font-bold mb-3'>Learning Paths</p>
                    <p className=''>Structured trajectories for every stage of your career.</p>

                </div>
                <div className=' text-neon-green mb-15 mr-5'>
                    <Link href="#" className=' flex gap-2'>
            
                    <p>
                            View All Paths
                    </p>
                    <i className="ri-arrow-right-line"></i>
                    </Link>
                </div>

            </div>


            <div className='flex gap-5 w-full mx-3 pb-10  '>
                {cardData.map((element) => (
                    <div key={element.course} className='flex-1'>
                        <Courcecard data={element} />

                    </div>

                ))}
                <div>


                </div>


            </div>
        </div>
    )
}

export default Learning
