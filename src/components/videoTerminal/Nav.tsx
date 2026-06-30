"use client";

import { useState } from "react";
import React from 'react'
import Image from 'next/image'
const ratingLabels = [
    "",
    "Not what I expected at all",
    "Pretty Disappointed",
    "Average Experience",
    "Really Good Course",
    "Absolutely Outstanding",
];

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);

    const activeRating = hoveredRating || rating;
    return (
        <div>
            <div className='flex justify-between px-20 w-full bg-black min-h-10 my-5 p-0.5'  >

                <div className='flex  justify-center items-center gap-2 font-heading text-xl font-bold '>

                    <p className='text-neon-green'>TradeVed</p>
                    <div className='w-[0.4px] h-8 bg-white/40 mx-5' />
                    <p className='text-card-font text-sm'>Coaching Name </p>

                </div>


                <div className='hidden min-[900]:flex font-sans font-medium text-sm justify-center items-center gap-3 '>

                    <div className="font-heading mr-5">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="inline-flex items-center gap-4  text-white transition-all hover:border-[#A6FF00]/30"
                        >
                            <i className="ri-star-fill text-md text-gray-500"></i>

                            <span className="text-sm font-medium">
                                Leave a Rating
                            </span>
                        </button>
                        {isOpen && (
                            <div className="fixed inset-0 z-1 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">
                                <div className="relative w-fit p-10 rounded-2xl border border-[#223512] bg-gradient-to-r 
                        from-[#111b08] to-[#16240b] ">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="absolute right-5 top-5"
                                    >
                                        <i className="ri-close-line text-xl text-white mb-5"></i>
                                    </button>

                                    <div className="flex flex-col items-center">
                                        <h2 className="text-center text-3md font-bold text-white md:text-4xl">
                                            How would you rate this course ?
                                        </h2>

                                        <p className="mt-6 text-sm font-medium text-white">
                                            {rating === 0
                                                ? "Select Rating"
                                                : ratingLabels[activeRating]}
                                        </p>

                                        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-8">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    onClick={() => setRating(star)}
                                                    onMouseEnter={() =>
                                                        setHoveredRating(star)
                                                    }
                                                    onMouseLeave={() =>
                                                        setHoveredRating(0)
                                                    }
                                                    className="transition-all duration-200 hover:scale-110"
                                                >
                                                    <i
                                                        className={`text-2xl text-neon-green md:text-5xl ${star <= activeRating
                                                            ? "ri-star-fill "
                                                            : "ri-star-line "
                                                            }`}
                                                    ></i>
                                                </button>
                                            ))}
                                        </div>

                                        {rating > 0 && (
                                            <div className="mt-10 flex items-center gap-4">
                                                <button
                                                    onClick={() => {
                                                        console.log(
                                                            "Rating Submitted:",
                                                            rating
                                                        );
                                                        setIsOpen(false);
                                                    }}
                                                    className="rounded-xl bg-neon-green px-6 py-2 font-semibold text-black transition-all hover:opacity-90"
                                                >
                                                    Submit Rating
                                                </button>

                                                <button
                                                    onClick={() => {
                                                        setRating(0);
                                                        setHoveredRating(0);
                                                    }}
                                                    className="rounded-xl border border-[#223512] px-6 py-2 font-semibold text-white"
                                                >
                                                    Reset
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <i className="bi bi-bell text-white  text-xl"></i>

                    <Image src="/assets/Nav/person.png" alt="logos" width={40} height={40} className='ml-5' />



                </div>
                <div className='flex min-[900]:hidden bg-transparent '>
                    < i className="ri-menu-line text-white text-4xl " ></i>


                </div>

            </div>
            <hr className='border-1 w-full border-neon-green' />


        </div>
    )
}

export default Nav
