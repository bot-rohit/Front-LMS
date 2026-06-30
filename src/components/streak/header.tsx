import React from 'react'
const streakSummary = {
    badge: "Performance Tracker",
    title: "Streaks Hub",
    personalBest: {
        value: "30 Days Streak",
        label: "Personal Best",
        icon: "ri-trophy-line",
    },
};

const header = () => {
    return (
        <div className='font-heading px-10 pt-10 pb-5 flex justify-between'>
            <div>
                <span className="text-xs font-bold uppercase tracking-[3px] text-neon-green">
                    {streakSummary.badge}
                </span>

                <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">
                    {streakSummary.title}
                </h1>
            </div>

            <div className="flex items-center gap-5 rounded-2xl border border-[#223512] bg-[#101908] px-4 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1d2a0d]">
                    <i className="ri-trophy-line text-lg text-neon-green"></i>
                </div>

                <div>
                    <p className="text-sm pr-3 font-medium text-white">
                        {streakSummary.personalBest.label}
                    </p>

                    <p className="text-xs text-gray-400">
                        {streakSummary.personalBest.value}
                    </p>
                </div>
            </div>


        </div>
    )
}

export default header
