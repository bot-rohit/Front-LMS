import React from 'react'


const Header = () => {
    const features = [
        {
            icon: "ri-team-line",
            title: "Healthy Competition",
            description:
                "Encourages active learning through collaborative and competitive milestones.",
        },
        {
            icon: "ri-bar-chart-grouped-line",
            title: "Performance Tracking",
            description:
                "Compare your performance benchmarks with a global community of learners.",
        },
        {
            icon: "ri-flashlight-line",
            title: "Motivation to Improve",
            description:
                "Stay motivated by tracking your rank evolution and daily streaks.",
        },
        {
            icon: "ri-trophy-line",
            title: "Consistency Reward",
            description:
                "Earn exponentially more points and exclusive badges for regular learning sessions.",
        },
    ];
    return (
        <div className='mx-10 my-10 font-heading'>
            <div className="w-full">
                <section className="px-5 py-14">
                    <div className="max-w-3xl">
                        <h1 className="font-heading text-6xl font-bold text-lime-400">
                            Leaderboard
                        </h1>

                        <p className="mt-6 max-w-xl text-xl leading-9 text-zinc-400">
                            Track your performance, compete with other learners,
                            and stay consistent in your learning journey.
                        </p>

                        <div className="mt-10 flex gap-5">
                            <button className="flex items-center gap-2 rounded-xl bg-lime-400 px-8 py-3 font-semibold text-black transition hover:bg-lime-300">
                                View Rankings
                                <i className="ri-arrow-right-up-line text-lg"></i>
                            </button>

                            <button className="rounded-xl bg-zinc-200 px-8 py-3 font-semibold text-black transition hover:bg-white">
                                Continue Learning
                            </button>
                        </div>
                    </div>
                </section>


                <section className="bg-[#091004] px-10 py-20">
                    <div className="mb-12 flex items-center gap-6">
                        <h2 className="whitespace-nowrap font-heading text-5xl font-bold text-white">
                            Why Leaderboard?
                        </h2>

                    
                    </div>

                    <div className="grid grid-cols-4 gap-6">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl bg-[#22261B] p-7 transition hover:-translate-y-2 hover:border hover:border-lime-400/30"
                            >
                                <div className="mb-6">
                                    <i
                                        className={`${item.icon} text-2xl text-lime-400`}
                                    ></i>
                                </div>

                                <h3 className="text-2xl font-semibold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-4 leading-7 text-zinc-400">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Header
