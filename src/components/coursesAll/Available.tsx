import React from 'react'
const programs = [
    {
        id: 1,
        title: "Courses 1",
        description:
            "Mastering Trading Basics in 50 Days with institutional-grade risk management strategies.",
        days: 50,
        pro: true,
        active: true,
    },
    {
        id: 2,
        title: "Courses 2",
        description:
            "Decoding high-volatility assets and DeFi ecosystems in a compressed 50-day intensive.",
        days: 50,
        pro: false,
        active: false,
    },
    {
        id: 3,
        title: "Courses 3",
        description:
            "Understanding global currency pairs and macro-economic triggers in 50 strategic modules.",
        days: 50,
        pro: false,
        active: false,
    },
];

const available = () => {
    return (
        <div className=' px-10 pt-5   font-heading pb-10 '>
            <div className="w-full">

                <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <i className="ri-dashboard-line text-2xl text-neon-green" />
                        <p className="text-2xl font-bold text-neon-green">
                            Available Programs
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex px-3 py-1 items-center justify-center rounded-md bg-[#1A220D] text-gray-400">
                            <i className="ri-arrow-left-s-line" />
                        </button>

                        <button className="flex px-3 py-1 items-center justify-center rounded-md bg-[#1A220D] text-gray-400">
                            <i className="ri-arrow-right-s-line" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-10">
                    {programs.map((program) => (
                        <div
                            key={program.id}
                            className="overflow-hidden rounded-3xl border border-[#18220D] bg-[#050900]"
                        >

                            <div className="h-40 bg-gradient-to-b from-[#091100] to-[#050900]" />


                            <div className="p-6">
                                <div className="mb-4 flex items-center justify-between">
                                    <h3 className="text-2xl font-semibold text-white font-sans">
                                        {program.title}
                                    </h3>
                                    {program.pro && (
                                        <span className="rounded-full bg-[#2A321C] px-3 py-1 text-xs font-bold text-neon-green">
                                            PRO
                                        </span>
                                    )}
                                </div>
                                <p className=" text-card-font">
                                    {program.description}
                                </p>
                                <div className="mt-8 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-neon-green">
                                        <i className="ri-calendar-line" />
                                        <span className="font-semibold font-sans">
                                            Total Days: {program.days}
                                        </span>
                                    </div>
                                    <button
                                        className={`rounded-xl px-5 py-2 font-semibold transition
                    ${program.active
                                                ? "bg-neon-green text-black"
                                                : "border border-[#3A3A3A] bg-[#1A1A1A] text-gray-300"
                                            }
                  `}
                                    >
                                        View All Modules
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default available
