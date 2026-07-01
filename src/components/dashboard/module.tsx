import Link from 'next/link'
import React from 'react'

const module = () => {
    return (
        <>
            <div className="  w-auto rounded-2xl ml-5 mt-20 px-10 py-20 font-heading
              bg-[#1A1D18]
    bg-[radial-gradient(circle_at_top_right,rgba(166,255,0,0.18),transparent_40%),linear-gradient(90deg,#1A1D18_0%,#252822_50%,#1A1D18_100%)]">



                <div className="">
                    <div className="flex items-center gap-4">
                        <div className="flex p-2 items-center justify-center rounded-2xl bg-[#252B1E]">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="text-lime-400"
                            >
                                <path
                                    d="M8 4V20M16 4V20M5 8H11M13 16H19"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-card-font">
                            CURRENT MODULE
                        </span>
                    </div>

                    <div className="mt-8">
                        <p className="text-3xl font-bold text-white">
                            Technical Analysis III
                        </p>

                        <p className="mt-3  text-sm  text-[#C4C4B9]">
                            Advanced harmonic patterns and multi-timeframe correlation
                            strategies for intraday swings.
                        </p>
                    </div>


                    <div className="mt-8 flex items-end justify-between font-sans">
                        <span className="text-4xl font-bold text-neon-green">78%</span>

                        <span className="text-sm font-medium tracking-wide text-white">
                            3 LESSONS LEFT
                        </span>
                    </div>

                    <div className="mt-2 h-3 overflow-hidden rounded-full bg-black/70">
                        <div className="h-full w-[78%] rounded-full bg-neon-green" />
                    </div>


                    <Link href={'/vidTerminal'} className="mt-8 w-auto  flex justify-center rounded-2xl bg-[#30352A] py-3 text-md font-semibold text-[#F2F2EA] 
                    transition hover:bg-[#393F33]">
                        Continue Lesson
                    </Link>
                </div>
            </div>


        </>
    )
}

export default module
