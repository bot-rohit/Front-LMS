import React from 'react'

const challengescard = () => {
    return (
        <>
            <div className="relative overflow-hidden rounded-[28px] bg-[#050900] p-8">
                {/* Left Accent */}
                <div className="absolute left-0 top-0 h-full w-1.5 bg-[#A7F000]" />

                <div className="flex h-full flex-col">
                    {/* Top */}
                    <div className="flex items-start justify-between">
                        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#2A2F22]">
                            <i className="ri-brain-line text-3xl text-[#D5FF78]" />
                        </div>

                        <span className="text-xl font-semibold text-[#D8D8D0]">
                            +50 XP
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-8 text-4xl font-bold text-[#ECECE4]">
                        Trading Quiz
                    </h3>

                    {/* CTA */}
                    <button className="mt-10 flex items-center gap-2 text-xl font-bold tracking-wider text-[#D5FF78]">
                        PLAY NOW
                        <i className="ri-arrow-right-line text-2xl" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default challengescard
