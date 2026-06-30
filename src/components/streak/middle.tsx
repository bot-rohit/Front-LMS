import React from 'react'
const streakOverview = {
    streakDays: 7,
    headline: "Keep the fire burning, Trader!",
    description:
        "You're in the top 5% of learners this week. One more day to unlock the Bronze Badge.",
};

const dailyGoal = {
    percentage: 80,
    completedLessons: 4,
    totalLessons: 5,
    xpToday: 250,
};

const upcomingReward = {
    title: "Spin the Wheel",
    claimIn: "Claim in 2 Days",
};

const middle = () => {
    return (
        <div className='px-10 py-10 font-heading w-auto'>
            <section className="flex w-full justify-between gap-5">
                <div className="relative w-full overflow-hidden rounded-[32px] border border-[#1b2a0f] bg-gradient-to-br
                 from-[#050b01] via-[#030800] to-[#0c1702] p-8">
                    <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#ff5c39]/10 blur-3xl"></div>

                    <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#A6FF00]/10 to-transparent"></div>

                    <div className="relative flex flex-col items-center text-center">
                        <div className="flex h-40 w-40 pt-3 align-top justify-center rounded-full border-4 border-neon-green ">
                            <div className="flex flex-col  justify-start align-top">
                                <i className="ri-fire-fill text-3xl text-neon-green"></i>

                                <h2 className="mt-1 font-sans text-5xl font-bold leading-none text-white">
                                    {String(
                                        streakOverview.streakDays
                                    ).padStart(2, "0")}
                                </h2>

                                <span className="mt-2 text-xs font-semibold uppercase  text-gray-400">
                                    Day Streak
                                </span>
                            </div>
                        </div>

                        <h3 className="mt-8 text-3xl font-bold text-neon-green">
                            {streakOverview.headline}
                        </h3>

                        <p className="mt-4 max-w-md text-md leading-8 text-gray-400">
                            {streakOverview.description}
                        </p>
                    </div>
                </div>

                <div className="grid gap-5 w-full">
                    <div className="rounded-4xl border border-[#1b2a0f] bg-gradient-to-r from-[#111b09] to-[#18260d] p-6">
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="text-2xl font-semibold text-white">
                                Daily Goal
                            </h3>

                            <span className="text-3xl font-bold text-neon-green font-sans">
                                {dailyGoal.percentage}%
                            </span>
                        </div>

                        <div className="h-3 overflow-hidden rounded-full bg-[#243512]">
                            <div
                                className="h-full rounded-full bg-[#A6FF00]"
                                style={{
                                    width: `${dailyGoal.percentage}%`,
                                }}
                            />
                        </div>

                        <div className="mt-4 flex items-center justify-between text-sm font-sans">
                            <span className="text-gray-400">
                                {dailyGoal.completedLessons}/
                                {dailyGoal.totalLessons} Lessons
                                Completed
                            </span>

                            <span className="text-gray-500">
                                {dailyGoal.xpToday} XP Today
                            </span>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-[32px] border border-[#1b2a0f] bg-gradient-to-r from-[#111b09] to-[#18260d] p-6">
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 rotate-12">
                            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#6c443d]">
                                <i className="ri-sparkling-2-fill text-3xl text-[#ff6e9d]"></i>
                            </div>
                        </div>

                        <p className="text-xs font-bold uppercase tracking-[2px] text-red-given">
                            Upcoming Reward
                        </p>

                        <h3 className="mt-2 text-3xl font-bold text-white">
                            {upcomingReward.title}
                        </h3>

                        <button className="mt-6 rounded-full border border-[#FF5C93]/40 px-5 py-1 text-sm font-semibold text-[#FF5C93]">
                            {upcomingReward.claimIn}
                        </button>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default middle
