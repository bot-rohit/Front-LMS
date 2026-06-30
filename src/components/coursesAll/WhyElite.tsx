import React from 'react'
const features = [
    {
        id: 1,
        title: "Gamified Learning",
        description:
            "Turn market analysis into a game. Earn XP, unlock boosters, and level up your portfolio skills.",
        icon: "ri-gamepad-line",
        color: "text-[#A6FF00]",
    },
    {
        id: 2,
        title: "Weekly Leaderboard",
        description:
            "Compete with traders worldwide. Top performers win exclusive mentorship sessions and platform credits.",
        icon: "ri-bar-chart-grouped-line",
        color: "text-[#FF0088]",
    },
    {
        id: 3,
        title: "Daily Reminders",
        description:
            "Stay on track with hyper-personalized notification flows designed to ensure you never miss a market move.",
        icon: "ri-alarm-line",
        color: "text-[#A6FF00]",
    },
    {
        id: 4,
        title: "Certified Outcomes",
        description:
            "Professional certification upon completion, recognized by our partner prop-firms and trading floors.",
        icon: "ri-award-line",
        color: "text-[#FF0088]",
    },
];

const WhyElite = () => {
    return (
        <div className=' px-10 py-20 font-heading '>
            <div className="w-full ">

                <p className="mb-8 text-center text-3xl font-bold  text-white">
                    Why Elite Traders Start Here
                </p>


                <div className="grid grid-cols-4 gap-5">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="rounded-3xl border border-[#162108] bg-[#080C00] p-7 transition-all duration-300 hover:border-[#243314]"
                        >
                            <i
                                className={`${feature.icon} text-3xl ${feature.color}`}
                            />

                            <p className="mt-8 text-2xl font-semibold text-white">
                                {feature.title}
                            </p>

                            <p className="mt-5 text-sm leading-7 text-gray-400">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default WhyElite
