import React from 'react'

const upcomingCourses = [
    {
        id: 1,
        title: "Advanced Options Trading",
        description:
            "Master Greek sensitivities, hedging strategies, and multi-leg spreads for any market condition.",
        level: "Expert Level",
        modules: 15,
        image:
            "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Algorithmic Trading Basics",
        description:
            "Bridge the gap between strategy and automation using Python and real-time API execution.",
        level: "Intermediate",
        modules: 22,
        image:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Risk Management Mastery",
        description:
            "Learn why 90% of traders fail and how to use position sizing to ensure long-term survival.",
        level: "All Levels",
        modules: 10,
        image:
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop",
    },
];
const features = [
    {
        title: "Real Market Simulation",
        description:
            "Stop learning on static charts. Practice execution on historical high-volatility sessions.",
        icon: "ri-bar-chart-box-line",
        accent: "#A6FF00",
        large: true,
    },
    {
        title: "Interactive Quizzes",
        description:
            "Validate your knowledge after every module with scenario-based assessments.",
        icon: "ri-questionnaire-line",
        accent: "#FF0088",
        large: false,
    },
];

const release = () => {
    return (
        <div className=' p-10 mt-10'>
            <div className=" font-heading">

                <div className="flex items-center gap-5">
                    <p className="text-4xl font-bold text-white">
                        Courses Release
                    </p>

                    <div className="h-px flex-1 bg-[#1A1A1A]" />

                    <span className="text-xs uppercase tracking-[2px] text-card-font">
                        Enrollment Opens
                    </span>
                </div>


                <div className="grid grid-cols-3 gap-6 pt-20">
                    {upcomingCourses.map((course) => (
                        <div
                            key={course.id}
                            className="rounded-3xl border border-[#172109] bg-[#050900] p-5"
                        >
                            <div className="relative overflow-hidden rounded-2xl">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="h-40 w-full object-cover opacity-40"
                                />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="rounded-full bg-[#3A412A] px-5 py-2 text-xs font-bold tracking-wider text-white">
                                        COMING SOON
                                    </span>
                                </div>
                            </div>

                            <h3 className="mt-5 text-2xl font-semibold text-white">
                                {course.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-gray-400">
                                {course.description}
                            </p>

                            <div className="mt-8 flex justify-between border-t border-[#141414] pt-4 text-xs uppercase tracking-widest text-card-font">
                                <span>{course.level}</span>
                                <span>{course.modules} Modules</span>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="grid grid-cols-[2fr_1fr] gap-6 mt-20">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className={`rounded-3xl border border-[#172109] bg-[#050900] p-8  relative`}>
                            {feature.title === "Interactive Quizzes" &&
                                <i
                                    className={`${feature.icon} text-4xl`}
                                    style={{ color: feature.accent }}
                                />
                            }

                            <h3 className="mt-6 text-3xl font-bold text-white">
                                {feature.title.split(" ")[0]}{" "}
                                <span style={{ color: feature.accent }}>
                                    {feature.title.split(" ").slice(1).join(" ")}
                                </span>
                            </h3>

                            <p className="mt-5 max-w-lg text-gray-400">
                                {feature.description}
                            </p>

                            {feature.large && (
                                <div className="mt-8 flex items-center gap-3">
                                    <i className={`${feature.icon} text-2xl text-neon-green `}  />
                                    <span className="text-sm font-medium uppercase tracking-wider text-[#A6FF00]">
                                        Data-Driven Learning Paths
                                    </span>
                                     <i className="ri-line-chart-line absolute z-1 right-8 top-4 text-[120px] text-[#A7F000]/10" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>


                <div className="grid grid-cols-[1fr_2fr] gap-6 mt-12">
                    <div className="rounded-3xl border border-[#172109] bg-[#050900] p-8">
                        <p className="text-3xl font-semibold text-white">
                            Daily Mentorship
                        </p>

                        <p className="mt-4 text-gray-400">
                            Direct access to the TradeVed community board for trade breakdowns
                            and strategy reviews.
                        </p>
                    </div>

                    <div className="flex items-center justify-between rounded-3xl bg-[#A6FF00] p-8">
                        <div>
                            <h3 className="text-3xl font-bold text-[#2E4700]">
                                Certification Included
                            </h3>

                            <p className="mt-3 text-[#4F6900]">
                                Earn industry-recognized micro-credentials as you level up your
                                trading skills.
                            </p>
                        </div>
                        <i className="ri-award-line text-6xl text-[#6B8D00]" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default release
