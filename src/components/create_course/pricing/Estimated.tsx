'use client'
import React from 'react'
import { useState } from 'react';
const channels = [
    {
        id: 1,
        title: "Public Marketplace",
        icon: "ri-store-2-line",
        active: true
    },
    {
        id: 2,
        title: "Affiliate Links",
        icon: "ri-links-line",
        active: true
    }
];

const Estimated = () => {
    const [channelData, setChannelData] = useState(channels);

    const toggleChannel = (id: number) => {
        setChannelData((prev) =>
            prev.map((channel) =>
                channel.id === id
                    ? { ...channel, active: !channel.active }
                    : channel
            )
        );
    };
    return (
        <div className='mr-10 mt-15'>
            <div className="space-y-10 font-heading">

       

                <div className="rounded-3xl border border-white/10 border-l-4 border-l-neon-green bg-[#11150E] p-6">

                    <div className="flex items-start justify-between">

                        <div>
                            <p className="text-[10px] uppercase tracking-[3px] text-white/50">
                                Estimated Revenue
                            </p>

                            <h2 className="mt-4 text-6xl font-semibold text-white font-sans">
                                ₹28,450
                            </h2>

                            <p className="mt-2 text-sm text-white/40">
                                Based on next 30 days projection
                            </p>
                        </div>

                        <i className="ri-line-chart-line text-xl text-neon-green"></i>

                    </div>

                    <div className="mt-8 space-y-5">

                        <div>

                            <div className="mb-2 flex items-center justify-between">
                                <span className="text-sm text-white/60">
                                    Conversion Rate
                                </span>

                                <span className="font-medium text-neon-green">
                                    4.2%
                                </span>
                            </div>

                            <div className="h-2 rounded-full bg-white/10">
                                <div className="h-full w-[42%] rounded-full bg-neon-green"></div>
                            </div>

                        </div>

                        <div>

                            <div className="mb-2 flex items-center justify-between">
                                <span className="text-sm text-white/60">
                                    Projected Sales
                                </span>

                                <span className="font-medium text-neon-green">
                                    57 Enrollments
                                </span>
                            </div>

                            <div className="h-2 rounded-full bg-white/10">
                                <div className="h-full w-[65%] rounded-full bg-neon-green"></div>
                            </div>

                        </div>

                    </div>

                    <button className="mt-8 w-full rounded-2xl border border-neon-green/30 bg-neon-green/5 py-4 font-medium text-neon-green transition-all hover:bg-neon-green hover:text-black">
                        View Detailed Analytics
                    </button>

                </div>

                {/* AI Suggestion */}

                <div className="rounded-3xl border border-white/10 border-l-4 border-l-neon-green bg-gradient-to-r from-neon-green/10 to-transparent p-6">

                    <div className="flex items-center gap-3">
                        <i className="ri-sparkling-2-line text-lg text-neon-green"></i>

                        <h3 className="text-xl text-neon-green">
                            AI Optimization Suggestion
                        </h3>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-white/60">
                        Your <span className="text-neon-green">"Early Bird"</span> discount
                        is 5% lower than the market average for options trading courses.
                        Increasing it to <span className="text-neon-green">25%</span> could
                        boost initial conversion by <span className="text-neon-green">12.4%</span>.
                    </p>

                    <button className="mt-5 flex items-center gap-2 font-medium text-neon-green">
                        Apply Optimization
                        <i className="ri-arrow-right-line"></i>
                    </button>

                </div>

                {/* Distribution Channels */}

                <div className="rounded-3xl border border-white/10 bg-[#11150E] p-6">

                    <h3 className="mb-5 text-[10px] uppercase tracking-[3px] text-white/50">
                        Distribution Channels
                    </h3>

                    <div className="space-y-3">

                        {channelData.map((channel) => (

                            <div
                                key={channel.id}
                                className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-4"
                            >

                                <div className="flex items-center gap-4">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/60">
                                        <i className={channel.icon}></i>
                                    </div>

                                    <span className="text-white">
                                        {channel.title}
                                    </span>

                                </div>

                                <button
                                    onClick={() => toggleChannel(channel.id)}
                                    className={`relative h-7 w-14 rounded-full transition-all ${channel.active
                                            ? "bg-neon-green"
                                            : "bg-white/10"
                                        }`}
                                >
                                    <span
                                        className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${channel.active
                                                ? "left-8"
                                                : "left-1"
                                            }`}
                                    />
                                </button>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Estimated
