"use client"
import React from 'react'
const summary = [
    {
        title: "Total XP Earned",
        value: "4,250 XP",
        color: "text-lime-400",
    },
    {
        title: "Total Credits",
        value: "129",
        color: "text-yellow-400",
    },
    {
        title: "From Spins",
        value: "87",
        color: "text-yellow-400",
    },
    {
        title: "From Gameplay",
        value: "42",
        color: "text-sky-400",
    },
];

const transactions = [
    {
        icon: "ri-star-line",
        iconBg: "bg-lime-500/10",
        iconColor: "text-lime-400",
        activity: "Spin Win — 1 Credit",
        xp: "—",
        xpColor: "text-zinc-400",
        credit: "+1 Cr",
        creditColor: "text-yellow-400",
        date: "Jun 10, 2026",
        time: "3:45 PM",
        balance: "129 Cr",
        xpBalance: "4,250 XP",
    },
    {
        icon: "ri-flashlight-line",
        iconBg: "bg-sky-500/10",
        iconColor: "text-sky-400",
        activity: "Mini-game Bonus — 90 XP",
        xp: "+90 XP",
        xpColor: "text-lime-400",
        credit: "—",
        creditColor: "text-zinc-400",
        date: "Jun 10, 2026",
        time: "3:47 PM",
        balance: "129 Cr",
        xpBalance: "4,250 XP",
    },
    {
        icon: "ri-refresh-line",
        iconBg: "bg-yellow-500/10",
        iconColor: "text-yellow-400",
        activity: "100 XP → 1 Credit",
        xp: "-100 XP",
        xpColor: "text-red-500",
        credit: "+1 Cr",
        creditColor: "text-yellow-400",
        date: "Jun 10, 2026",
        time: "11:00 AM",
        balance: "128 Cr",
        xpBalance: "4,160 XP",
    },
    {
        icon: "ri-star-line",
        iconBg: "bg-lime-500/10",
        iconColor: "text-lime-400",
        activity: "Spin Win — 2 Credits",
        xp: "—",
        xpColor: "text-zinc-400",
        credit: "+2 Cr",
        creditColor: "text-yellow-400",
        date: "Jun 9, 2026",
        time: "4:10 PM",
        balance: "127 Cr",
        xpBalance: "4,160 XP",
    },
    {
        icon: "ri-flashlight-line",
        iconBg: "bg-sky-500/10",
        iconColor: "text-sky-400",
        activity: "Mini-game Bonus — 130 XP",
        xp: "+130 XP",
        xpColor: "text-lime-400",
        credit: "—",
        creditColor: "text-zinc-400",
        date: "Jun 9, 2026",
        time: "4:12 PM",
        balance: "125 Cr",
        xpBalance: "4,160 XP",
    },
    {
        icon: "ri-line-chart-line",
        iconBg: "bg-lime-500/10",
        iconColor: "text-lime-400",
        activity: "Quiz Completed — 200 XP",
        xp: "+200 XP",
        xpColor: "text-lime-400",
        credit: "—",
        creditColor: "text-zinc-400",
        date: "Jun 9, 2026",
        time: "9:00 AM",
        balance: "125 Cr",
        xpBalance: "4,030 XP",
    },
    {
        icon: "ri-close-line",
        iconBg: "bg-zinc-600/20",
        iconColor: "text-zinc-500",
        activity: "Missed Daily Spin",
        xp: "—",
        xpColor: "text-zinc-400",
        credit: "—",
        creditColor: "text-zinc-400",
        date: "Jun 8, 2026",
        time: "—",
        balance: "125 Cr",
        xpBalance: "3,830 XP",
    },
    {
        icon: "ri-arrow-right-up-line",
        iconBg: "bg-red-500/10",
        iconColor: "text-red-500",
        activity: "Redeemed 5 Credits — Signals",
        xp: "—",
        xpColor: "text-zinc-400",
        credit: "-5 Cr",
        creditColor: "text-red-500",
        date: "Jun 7, 2026",
        time: "6:22 PM",
        balance: "125 Cr",
        xpBalance: "3,830 XP",
    },
    {
        icon: "ri-star-line",
        iconBg: "bg-lime-500/10",
        iconColor: "text-lime-400",
        activity: "Spin Win — 5 Credits",
        xp: "—",
        xpColor: "text-zinc-400",
        credit: "+5 Cr",
        creditColor: "text-yellow-400",
        date: "Jun 7, 2026",
        time: "4:30 PM",
        balance: "130 Cr",
        xpBalance: "3,830 XP",
    },
    {
        icon: "ri-flashlight-line",
        iconBg: "bg-sky-500/10",
        iconColor: "text-sky-400",
        activity: "Mini-game Bonus — 60 XP",
        xp: "+60 XP",
        xpColor: "text-lime-400",
        credit: "—",
        creditColor: "text-zinc-400",
        date: "Jun 7, 2026",
        time: "4:32 PM",
        balance: "125 Cr",
        xpBalance: "3,830 XP",
    },
];

const Trans = () => {
    return (
        <div className='mb-15'>
            <div className="overflow-hidden rounded-2xl border border-[#28321D] bg-[#0F160A]">

                <div className="grid grid-cols-4 border-b border-[#28321D]">
                    {summary.map((item) => (
                        <div
                            key={item.title}
                            className="border-r border-[#28321D] p-6 last:border-r-0"
                        >
                            <p className="text-sm text-zinc-400">{item.title}</p>

                            <h2 className={`mt-2 text-4xl font-sans font-bold ${item.color}`}>
                                {item.value}
                            </h2>
                        </div>
                    ))}
                </div>

  
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#28321D] text-left text-sm uppercase tracking-wider text-zinc-400">
                                <th className="px-6 py-5">Activity</th>
                                <th className="px-6 py-5">XP Change</th>
                                <th className="px-6 py-5">Credit Change</th>
                                <th className="px-6 py-5">Date & Time</th>
                                <th className="px-6 py-5">Balance</th>
                            </tr>
                        </thead>

                        <tbody>
                            {transactions.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-[#222B18] transition hover:bg-[#171F10]"
                                >
               

                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className={`flex h-12 w-12 items-center justify-center rounded-full ${item.iconBg}`}
                                            >
                                                <i
                                                    className={`${item.icon} text-xl ${item.iconColor}`}
                                                ></i>
                                            </div>

                                            <span className="font-semibold text-white">
                                                {item.activity}
                                            </span>
                                        </div>
                                    </td>

                                    
                                    <td
                                        className={`px-6 py-5 font-semibold ${item.xpColor} font-sans`}
                                    >
                                        {item.xp}
                                    </td>

                                    {/* Credit */}

                                    <td
                                        className={`px-6 py-5 font-semibold ${item.creditColor}`}
                                    >
                                        {item.credit}
                                    </td>

                                    {/* Date */}

                                    <td className="px-6 py-5">
                                        <p className="text-white">{item.date}</p>

                                        <p className="mt-1 text-sm font-sans text-zinc-500">
                                            {item.time}
                                        </p>
                                    </td>

                                    {/* Balance */}

                                    <td className="px-6 py-5">
                                        <p className="font-semibold text-yellow-400">
                                            {item.balance}
                                        </p>

                                        <p className="mt-1 font-sans text-sm text-zinc-500">
                                            {item.xpBalance}
                                        </p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Trans
