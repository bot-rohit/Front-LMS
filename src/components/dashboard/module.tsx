import React from 'react'

const module = () => {
    return (
        <>
            <div className="relative overflow-hidden rounded-[32px] border border-[#2A330F] bg-[#1C2117] p-12">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(163,255,0,0.12),transparent_45%)]" />

                <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center gap-5">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#394126] bg-[#252B1E]">
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

                        <span className="text-lg font-medium tracking-[0.2em] text-[#C8C9BD]">
                            CURRENT MODULE
                        </span>
                    </div>

                    {/* Content */}
                    <div className="mt-10">
                        <h2 className="text-6xl font-bold text-[#E7E7DE]">
                            Technical Analysis III
                        </h2>

                        <p className="mt-6 max-w-xl text-2xl leading-relaxed text-[#C4C4B9]">
                            Advanced harmonic patterns and multi-timeframe correlation
                            strategies for intraday swings.
                        </p>
                    </div>

                    {/* Progress */}
                    <div className="mt-16 flex items-end justify-between">
                        <span className="text-8xl font-bold text-[#A7F000]">78%</span>

                        <span className="text-xl font-medium tracking-wide text-[#D4D4C8]">
                            3 LESSONS LEFT
                        </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-5 h-4 overflow-hidden rounded-full bg-black/70">
                        <div className="h-full w-[78%] rounded-full bg-[#A7F000]" />
                    </div>

                    {/* Button */}
                    <button className="mt-14 w-full rounded-[24px] bg-[#30352A] py-8 text-3xl font-semibold text-[#F2F2EA] transition hover:bg-[#393F33]">
                        Continue Lesson
                    </button>
                </div>
            </div>


        </>
    )
}

export default module
