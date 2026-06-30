import React from 'react'
const referralStats = [
    {
        id: 1,
        title: "Total XP Earned",
        value: "12,500",
        badge: "+25% this month",
        icon: "ri-medal-line",
        iconBg: "bg-[#1c2a08]",
        iconColor: "text-[#A6FF00]",
        badgeColor: "text-[#A6FF00]",
    },
    {
        id: 2,
        title: "Successful Referrals",
        value: "42",
        badge: "Active Invites",
        icon: "ri-user-add-line",
        iconBg: "bg-[#2b0818]",
        iconColor: "text-[#FF0088]",
        badgeColor: "text-[#FF0088]",
    },
    {
        id: 3,
        title: "Global Ranking",
        value: "#214",
        badge: "Elite Level",
        icon: "ri-trophy-line",
        iconBg: "bg-[#0c1d35]",
        iconColor: "text-[#4DA3FF]",
        badgeColor: "text-[#4DA3FF]",
    },
];

const card = () => {
    return (
        <div className=' px-10 py-20 w-full text-sans'>
            <section className="flex gap-5 justify-between">
                {referralStats.map((stat) => (
                    <div
                        key={stat.id}
                        className="rounded-3xl border border-[#1b2a0f] bg-[#040900] w-full  p-5"
                    >
                        <div className="mb-8 flex items-start justify-between ">
                            <div
                                className={`flex h-9 w-9 items-center justify-center rounded-xl ${stat.iconBg}`}
                            >
                                <i
                                    className={`${stat.icon} text-lg ${stat.iconColor}`}
                                ></i>
                            </div>

                            <span
                                className={`text-xs font-semibold ${stat.badgeColor}`}
                            >
                                {stat.badge}
                            </span>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400">
                                {stat.title}
                            </p>

                            <h2 className="mt-1 text-5xl font-bold text-white">
                                {stat.value}
                            </h2>
                        </div>
                    </div>
                ))}
            </section>

        </div>
    )
}

export default card
