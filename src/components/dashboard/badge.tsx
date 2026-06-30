import React from 'react'

const badges = [
    {
        id: 1,
        title: "Fast Learner",
        description: "Completed 5 Lessons In 1 Day",
        icon: "ri-flashlight-line",
        active: true,
        color: "text-[#A6FF00]",
    },
    {
        id: 2,
        title: "Crystal Profit",
        description: "First 100% ROI Trade",
        icon: "ri-vip-diamond-line",
        active: true,
        color: "text-[#FF0088]",
    },
    {
        id: 3,
        title: "Strategist",
        description: "Created 3 Custom Trading Plans",
        icon: "ri-medal-line",
        active: true,
        color: "text-[#A6FF00]",
    },
    {
        id: 4,
        title: "Moon Shot",
        description: "Reach 1000% Annual ROI",
        icon: "ri-rocket-2-line",
        active: false,
        color: "text-gray-500",
    },
    {
        id: 5,
        title: "Top 100",
        description: "Held Leaderboard For 7 Days",
        icon: "ri-trophy-line",
        active: true,
        color: "text-[#FFD700]",
    },
    {
        id: 6,
        title: "Global Master",
        description: "Unlock All International Modules",
        icon: "ri-global-line",
        active: false,
        color: "text-gray-500",
    },
];

const badge = () => {
    return (
        <div className="w-auto ml-5 mr-10 mt-20 mb-10 font-heading">

            <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <i className="ri-award-line text-xl text-neon-green" />
                    <h2 className="text-2xl font-semibold text-white">
                        Badge Collection
                    </h2>
                </div>

                <button className="text-sm font-medium text-[#FF0088] hover:underline">
                    View All 42 Badges
                </button>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-6 gap-4">
                {badges.map((badge) => (
                    <div
                        key={badge.id}
                        className={`rounded-3xl border p-6 transition-all hover:scale-[1.02]
              ${badge.active
                                ? "border-[#243314] bg-[#0D1508]"
                                : "border-[#1A1A1A] bg-[#050505]"
                            }
            `}
                    >
                        {/* Icon */}
                        <div
                            className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full
                ${badge.active
                                    ? "bg-[#1A2B08]"
                                    : "bg-[#111111]"
                                }
              `}
                        >
                            <i
                                className={`${badge.icon} text-2xl ${badge.color}`}
                            />
                        </div>

                        {/* Content */}
                        <div className="mt-5 text-center">
                            <h3
                                className={`font-semibold ${badge.active
                                    ? "text-white"
                                    : "text-gray-500"
                                    }`}
                            >
                                {badge.title}
                            </h3>

                            <p
                                className={`mt-2 text-xs leading-5 ${badge.active
                                    ? "text-gray-400"
                                    : "text-gray-600"
                                    }`}
                            >
                                {badge.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default badge
