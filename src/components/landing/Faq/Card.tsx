'use client'
import React from 'react'
import { useState } from 'react'


type coming = {
    question: string,
    answer: string,
}
type format = {
    send: coming,
}

const Card = ({ send }: format) => {
    const [clicked, setClicked] = useState(false)
    return (
        <>
            <div className='w-full p-5 bg-card-page rounded-xl font-heading'>
                <div className='w-full'>
                    <button onClick={() => setClicked(!clicked)} className='flex justify-between w-full'>

                        <p className={`font-bold  ${!clicked ? "text-neon-green" :"text-card-head"}`}>{send.question}</p>

                        {/* { !clicked && <i className="ri-arrow-down-s-line"></i>
                        {clicked && <i className="ri-arrow-up-s-line"></i>} */}
                        <i className={`${!clicked ? "ri-arrow-down-s-line" : "ri-arrow-up-s-line"} text-neon-green`} ></i>

                    </button>
                </div>
                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out text-card-font 
                         ${clicked ? "max-h-40 opacity-100 py-5" : "max-h-0 opacity-0"}`}
                >
                    <p>{send.answer}</p>
                </div>
                


            </div>
        </>
    )
}

export default Card
