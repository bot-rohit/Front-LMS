import React from 'react'
import Link from 'next/link';
const rules = [
    {
        id: 1,
        metric: "Assignment Score",
        target: "Module 4: Bull Put Spread",
        condition: "Score > 90%",
        enabled: true
    },
    {
        id: 2,
        metric: "Peer Review Streak",
        target: "Any Community Post",
        condition: "5 Consecutive Positive Reviews",
        enabled: false
    }
];

const badges = [
    {
        id: 1,
        title: "Option Strategist",
        desc: "Complete all advanced hedging modules with 100% score.",
        rarity: "LEGENDARY",
        earned: 924,
        icon: "ri-line-chart-line",
        color: "text-neon-green border-neon-green"
    },
    {
        id: 2,
        title: "Risk Manager",
        desc: "Maintained a stop-loss discipline for 30 consecutive days.",
        rarity: "RARE",
        earned: 552,
        icon: "ri-shield-line",
        color: "text-white/70 border-white/30"
    },
    {
        id: 3,
        title: "Market Scholar",
        desc: "Read over 50 technical analysis whitepapers.",
        rarity: "COMMON",
        earned: 1204,
        icon: "ri-book-open-line",
        color: "text-white/70 border-white/30"
    }
];
const Rules = () => {
    return (
        <div className='mr-10 w-auto mb-10'>
            <div className="font-heading">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#11150E]">
                    <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                        <div className="flex items-center gap-3">
                            <i className="ri-settings-4-line text-xl text-neon-green"></i>
                            <h2 className="text-2xl font-semibold text-white">Automation Rules</h2>
                        </div>

                        <Link href={'/creators/badge/automation'} className="text-sm font-medium text-neon-green hover:opacity-80">
                            + Add New Rule
                        </Link>
                    </div>

                    <div>
                        {rules.map((rule) => (
                            <div key={rule.id} className="flex items-center justify-between border-b border-white/5 px-6 py-5 last:border-none">

                                <div>
                                    <div className="flex flex-wrap items-center gap-2 text-sm">
                                        <span className="text-white/40">IF</span>

                                        <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-white">
                                            {rule.metric}
                                        </span>

                                        <span className="text-white/40">ON</span>

                                        <span className="text-white">
                                            {rule.target}
                                        </span>
                                    </div>

                                    <p className="mt-2 text-sm text-white/70">
                                        <span className="mr-2 text-[10px] tracking-[2px] text-white/40">
                                            CONDITION
                                        </span>
                                        {rule.condition}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">

                                    <button
                                        className={`relative h-7 w-14 rounded-full transition-all ${rule.enabled ? "bg-neon-green" : "bg-white/20"
                                            }`}
                                    >
                                        <span
                                            className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${rule.enabled ? "left-8" : "left-1"
                                                }`}
                                        />
                                    </button>

                                    <button className="text-white/40 hover:text-red-400">
                                        <i className="ri-delete-bin-6-line"></i>
                                    </button>

                                </div>

                            </div>
                        ))}
                    </div>
                </div>


                <div>

                    <div className="mb-6 flex items-center justify-between mt-15">
                        <div className="flex items-center gap-3">
                            <i className="ri-apps-2-line text-xl text-neon-green"></i>
                            <h2 className="text-4xl font-semibold text-white">Badge Library</h2>
                        </div>

                        <div className="flex gap-2">
                            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60">
                                <i className="ri-menu-line"></i>
                            </button>

                            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60">
                                <i className="ri-filter-3-line"></i>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {badges.map((badge) => (
                            <div
                                key={badge.id}
                                className="rounded-3xl border border-white/10 bg-[#11150E] p-6 transition-all hover:border-neon-green/20"
                            >

                                <div className="flex items-start justify-between">

                                    <div className={`flex h-14 w-14 items-center justify-center rounded-full border ${badge.color}`}>
                                        <i className={`${badge.icon} text-xl`}></i>
                                    </div>

                                    <span
                                        className={`rounded-md px-3 py-1 text-[10px] font-semibold ${badge.rarity === "LEGENDARY"
                                                ? "bg-neon-green/10 text-neon-green"
                                                : "bg-white/10 text-white/60"
                                            }`}
                                    >
                                        {badge.rarity}
                                    </span>

                                </div>

                                <h3 className="mt-5 text-xl text-white">
                                    {badge.title}
                                </h3>

                                <p className="mt-2 min-h-[55px] text-sm text-white/60">
                                    {badge.desc}
                                </p>

                                <div className="mt-5 border-t border-white/10 pt-4 text-xs text-white/40">
                                    <i className="ri-user-line mr-2"></i>
                                    {badge.earned.toLocaleString()} Earned
                                </div>

                            </div>
                        ))}

              

                        <button className="flex min-h-[250px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/20 bg-[#11150E] transition-all hover:border-neon-green hover:bg-neon-green/5">

                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
                                <i className="ri-add-line text-2xl"></i>
                            </div>

                            <span className="mt-5 text-sm tracking-[3px] text-white/60 uppercase">
                                Create Another
                            </span>

                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Rules
