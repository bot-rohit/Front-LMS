'use client'

import React from 'react'
import Link from 'next/link';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Area,
} from "recharts";

const learnerData = [
    { week: "Week 1", learners: 75 },
    { week: "Week 2", learners: 135 },
    { week: "Week 3", learners: 48 },
    { week: "Week 4", learners: 165 },
];
const atRiskLearners = [
    {
        name: "Rahul Sharma",
        course: "Day Trading 101",
        risk: "45%",
        lastActive: "5 days ago",
    },
    {
        name: "Priya Patel",
        course: "Options Mastery",
        risk: "62%",
        lastActive: "3 days ago",
    },
];
const graph_two = () => {
    return (
        <div className="flex gap-5 mx-5 mr-15 mt-20 font-heading pb-10 ">

            {/* Chart Card */}
            <div className="w-[65%] rounded-3xl border border-neon-green/10 bg-card-page/30 p-6">

                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-white">
                        Daily Active Learners
                    </h2>

                    <div className="flex items-center gap-2 text-neon-green font-semibold">
                        <i className="ri-arrow-right-up-line"></i>
                        +14.2%
                    </div>
                </div>

                <div className="h-[320px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={learnerData}>
                            <defs>
                                <linearGradient
                                    id="lineGradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                >
                                    <stop offset="0%" stopColor="#ff3b82" />
                                    <stop offset="35%" stopColor="#facc15" />
                                    <stop offset="70%" stopColor="#84cc16" />
                                    <stop offset="100%" stopColor="#A6FF00" />
                                </linearGradient>

                                <linearGradient
                                    id="areaGradient"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#A6FF00"
                                        stopOpacity={0.25}
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="#A6FF00"
                                        stopOpacity={0}
                                    />
                                </linearGradient>
                            </defs>

                            <XAxis
                                dataKey="week"
                                tick={{ fill: "#A1A1AA" }}
                            />

                            <YAxis
                                tick={{ fill: "#A1A1AA" }}
                            />

                            <Area
                                type="monotone"
                                dataKey="learners"
                                fill="url(#areaGradient)"
                                stroke="none"
                            />

                            <Line
                                type="monotone"
                                dataKey="learners"
                                stroke="url(#lineGradient)"
                                strokeWidth={4}
                                dot={{
                                    r: 4,
                                    fill: "#4DA3FF",
                                    strokeWidth: 0,
                                }}
                                activeDot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* At Risk Learners */}
            <div className="w-[35%] rounded-3xl border border-neon-green/10 bg-card-page/30 p-6">

                <div className="mb-6 flex items-center gap-3">
                    <i className="ri-error-warning-line text-xl text-yellow-400"></i>

                    <h2 className="text-xl font-bold text-white">
                        At-Risk Learners
                    </h2>
                </div>

                <div className="space-y-4">

                    {atRiskLearners.map((learner) => (
                        <div
                            key={learner.name}
                            className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-black/20 p-5"
                        >
                            <div className="absolute left-0 top-0 h-full w-1 bg-yellow-400" />

                            <div className="flex items-start justify-between">
                                <h3 className="font-semibold text-white text-sm">
                                    {learner.name}
                                </h3>

                                <span className="text-sm font-semibold text-yellow-400">
                                    {learner.risk}
                                </span>
                            </div>

                            <p className="mt-2 text-xs text-card-font">
                                {learner.course}
                            </p>

                            <div className="mt-3 flex items-center gap-2 text-xs text-card-font">
                                <i className="ri-time-line"></i>
                                Last active: {learner.lastActive}
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
                    <Link href="/creators/students" className="w-full h-full flex justify-center items-center">
                    Send Encouragement
                    </Link>
                </button>

            </div>

        </div>
    )
}

export default graph_two
