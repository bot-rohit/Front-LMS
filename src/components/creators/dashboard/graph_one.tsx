'use client'
import React from 'react'
import Link from 'next/link';
const revenueData = [
    { day: "Mon", revenue: 12000 },
    { day: "Tue", revenue: 18000 },
    { day: "Wed", revenue: 16000 },
    { day: "Thu", revenue: 22000 },
    { day: "Fri", revenue: 25500 },
    { day: "Sat", revenue: 29000 },
    { day: "Sun", revenue: 24000 },
];
import {
    AreaChart,
    Area,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";
const liveSessions = [
    {
        title: "Technical Analysis Masterclass",
        date: "Today, 6:00 PM",
        students: 45,
    },
    {
        title: "Options Strategy Workshop",
        date: "Tomorrow, 4:00 PM",
        students: 32,
    },
];

const a = () => {
    return (
        <div>
            <div className="flex gap-5 w-auto mx-5 mr-15 mt-20 font-heading">


                <div className="w-[65%] rounded-3xl border border-neon-green/10 bg-card-page/30 p-6">

                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="font-heading text-3xl font-bold text-white">
                            Revenue (Last 7 Days)
                        </h2>

                        <div className="flex items-center gap-2 text-neon-green font-semibold">
                            <i className="ri-arrow-right-up-line"></i>
                            +18.5%
                        </div>
                    </div>

                    <div className="h-[320px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueData}>
                                <defs>
                                    <linearGradient
                                        id="revenueFill"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="#A6FF00"
                                            stopOpacity={0.35}
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor="#A6FF00"
                                            stopOpacity={0}
                                        />
                                    </linearGradient>
                                </defs>

                                <XAxis
                                    dataKey="day"
                                    tick={{ fill: "#A1A1AA" }}
                                // axisLine={false}
                                // tickLine={false}
                                />

                                <YAxis
                                    tick={{ fill: "#A1A1AA" }}
                                // axisLine={false}
                                // tickLine={false}
                                />

                                {/* <Tooltip /> */}

                                <Area
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="#A6FF00"
                                    strokeWidth={3}
                                    fill="url(#revenueFill)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                </div>


                <div className="w-[35%] rounded-3xl border border-neon-green/10 bg-card-page/30 p-6">

                    <div className="mb-6 flex items-center gap-3">
                        <i className="ri-live-line text-xl text-neon-green"></i>

                        <h2 className="font-heading text-xl font-bold text-white">
                            Upcoming Live Sessions
                        </h2>
                    </div>

                    <div className="space-y-4">

                        {liveSessions.map((session) => (
                            <div
                                key={session.title}
                                className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-black/20 p-5"
                            >
                                <div className="absolute left-0 top-0 h-full w-1 bg-pink-500" />

                                <h3 className="font-semibold text-white text-sm">
                                    {session.title}
                                </h3>

                                <div className="mt-3 flex flex-col gap-2 text-xs text-card-font">
                                    <div className="flex items-center gap-2">
                                        <i className="ri-time-line"></i>
                                        {session.date}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <i className="ri-group-line"></i>
                                        {session.students} registered
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                    <button
                        className="
                mt-6 w-full rounded-2xl
                border border-neon-green/20
                py-3 font-semibold text-neon-green
                transition hover:bg-neon-green/10
            "
                    >
                        <Link href="/creators/live" className="w-full h-full flex justify-center items-center"> 
                        Schedule New Session
                        </Link>
                    </button>

                </div>

            </div>

        </div>
    )
}

export default a
