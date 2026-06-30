"use client";
import React from 'react'

const stats = [
    {
        title: "Your Rank",
        value: "#7",
    },
    {
        title: "Total Points",
        value: "3,200",
    },
    {
        title: "Modules Completed",
        value: "18",
    },
    {
        title: "Current Streak",
        value: "12 days",
    },
];

const earningMethods = [
    {
        icon: "ri-book-open-line",
        title: "Complete modules",
        subtitle: "Earn points",
    },
    {
        icon: "ri-file-list-3-line",
        title: "Submit assignments",
        subtitle: "Earn bonus points",
    },
    {
        icon: "ri-timer-flash-line",
        title: "Maintain streak",
        subtitle: "Get streak rewards",
    },
    {
        icon: "ri-medal-line",
        title: "Top performance",
        subtitle: "Get leaderboard badges",
    },
];

const Bottom = () => {
    const progress = 72;
    return (
        <div className='mx-10 mb-20 font-heading'>
            <div className="space-y-16">
             

                <section className="bg-[#091004] px-10 py-12">
                    <div className="mb-10 flex items-center gap-6">
                        <h2 className="whitespace-nowrap font-heading text-4xl font-bold text-white">
                            Your Performance
                        </h2>

                     
                    </div>

                    <div className="rounded-2xl border border-[#27321B] bg-[#11170B] p-8">
                       

                        <div className="grid grid-cols-4 gap-8">
                            {stats.map((item) => (
                                <div key={item.title}>
                                    <p className="text-sm text-zinc-400">
                                        {item.title}
                                    </p>

                                    <h3 className="mt-3 text-4xl font-bold text-lime-400">
                                        {item.value}
                                    </h3>
                                </div>
                            ))}
                        </div>



                        <div className="mt-10">
                            <div className="mb-3 flex justify-between text-sm text-zinc-400">
                                <span>Progress to next rank</span>
                                <span>{progress}%</span>
                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-zinc-300">
                                <div
                                    style={{ width: `${progress}%` }}
                                    className="h-full rounded-full bg-lime-400 transition-all duration-700"
                                />
                            </div>
                        </div>



                        <button className="mt-8 rounded-lg bg-lime-400 px-8 py-2 font-semibold text-black transition hover:bg-lime-300">
                            Continue Learning
                        </button>
                    </div>
                </section>



                <section className="bg-[#091004] px-10 py-12">
                    <div className="mb-10">
                        <div className="flex items-center gap-6">
                            <h2 className="whitespace-nowrap font-heading text-4xl font-bold text-white">
                                How Points Work
                            </h2>

                        </div>

                        <p className="mt-4 text-lg text-zinc-400">
                            Here's how you can earn points and climb the leaderboard.
                        </p>
                    </div>

                    <div className="grid grid-cols-4 gap-5">
                        {earningMethods.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-xl border border-[#2A351D] bg-[#13190E] p-6 transition hover:border-lime-400/40 hover:-translate-y-1"
                            >
                                <div className="flex items-start gap-4">
                                    <i
                                        className={`${item.icon} mt-1 text-xl text-lime-400`}
                                    ></i>

                                    <div>
                                        <h3 className="font-semibold text-lime-400">
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 text-sm text-zinc-400">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Bottom
