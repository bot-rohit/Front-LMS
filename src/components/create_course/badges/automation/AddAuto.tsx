'use client'
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
const triggers = [
    {
        id: 1,
        title: "Watched 20 Video Lectures",
        icon: "ri-play-circle-line"
    },
    {
        id: 2,
        title: "100% Score in 5 Assignments",
        icon: "ri-checkbox-circle-line"
    },
    {
        id: 3,
        title: "7-Day Activity Streak",
        icon: "ri-fire-line"
    }
];

const stats = [
    {
        id: 1,
        label: "Active Triggers",
        value: "12",
        extra: "+2 Today"
    },
    {
        id: 2,
        label: "Badges Awarded (24h)",
        value: "1,248",
        extra: "88% Auto"
    }
];
const AddAuto = () => {
    const [selectedTrigger, setSelectedTrigger] = useState(1);
    return (
        <div className='mx-10 mt-20'>
            <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6 font-heading">

   

                <div className="rounded-3xl border border-white/10 bg-[#11150E] overflow-hidden border-l-4 border-l-neon-green">

                    <div className=" px-6 py-6">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-[11px] tracking-[3px] uppercase text-neon-green">
                                    Automation Engine
                                </p>

                                <h2 className="mt-2 text-4xl font-semibold text-white">
                                    Add New Automation Rule
                                </h2>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-neon-green">
                                <i className="ri-magic-line text-xl"></i>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">



                        <div>

                            <p className="mb-4 text-[10px] tracking-[2px] uppercase text-white/40">
                                Step 1: Select Event Trigger
                            </p>

                            <div className="space-y-3">

                                {triggers.map((trigger) => (
                                    <button
                                        key={trigger.id}
                                        onClick={() => setSelectedTrigger(trigger.id)}
                                        className={`w-full rounded-2xl border p-4 transition-all ${selectedTrigger === trigger.id
                                            ? "border-neon-green/40 bg-neon-green/5"
                                            : "border-white/10 hover:border-white/20"
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">

                                            <div className="flex items-center gap-4">

                                                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${selectedTrigger === trigger.id
                                                    ? "bg-neon-green/10 text-neon-green"
                                                    : "bg-white/5 text-white/60"
                                                    }`}>
                                                    <i className={`${trigger.icon} text-lg`}></i>
                                                </div>

                                                <span className="text-left text-white">
                                                    {trigger.title}
                                                </span>

                                            </div>

                                            <div className={`h-5 w-5 rounded-full border-2 ${selectedTrigger === trigger.id
                                                ? "border-neon-green bg-neon-green"
                                                : "border-white/40"
                                                }`} />

                                        </div>
                                    </button>
                                ))}

                            </div>

                        </div>

                
                        <div>

                            <p className="mb-4 text-[10px] tracking-[2px] uppercase text-white/40">
                                Step 2: Assign Reward
                            </p>

                            <div className="flex min-h-[220px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-neon-green/10 to-transparent p-6 text-center">

                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-neon-green/10 text-neon-green">
                                    <i className="ri-trophy-line text-4xl"></i>
                                </div>

                                <p className="mt-5 text-white/70">
                                    Select a badge from the library below
                                </p>

                                <button className="mt-4 text-sm font-semibold uppercase tracking-[2px] text-neon-green">
                                    Browse Library
                                </button>

                            </div>

                        </div>

                    </div>

                    <div className="flex justify-end px-6 pb-6">
                        <Link href={'/creators/badge'}
                         className="rounded-2xl bg-neon-green px-10 py-4 font-semibold text-black] transition-all hover:scale-105">
                            Deploy Automation
                        </Link>
                    </div>

                </div>

                <div className="rounded-3xl border border-white/10 bg-[#11150E] p-5">

                    <div>
                        <p className="text-xs tracking-[2px] uppercase text-white/50">
                            Ecosystem Stats
                        </p>

                        <p className="mt-1 text-sm text-white/40">
                            Real-time automation impact
                        </p>
                    </div>

                    <div className="mt-6 space-y-4">

                        {stats.map((stat) => (
                            <div key={stat.id} className="rounded-2xl bg-white/5 p-4">

                                <p className="text-sm text-white/50">
                                    {stat.label}
                                </p>

                                <div className="mt-2 flex items-end justify-between">
                                    <h3 className="text-4xl font-semibold text-white font-sans">
                                        {stat.value}
                                    </h3>

                                    <span className="text-sm font-medium text-neon-green">
                                        {stat.extra}
                                    </span>
                                </div>

                            </div>
                        ))}

                        <div className="rounded-2xl bg-white/5 p-4">

                            <div className="mb-3 flex items-center justify-between">
                                <span className="text-sm text-white/50">
                                    System Efficiency
                                </span>

                                <span className="font-medium text-neon-green">
                                    94%
                                </span>
                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-white/10">
                                <div className="h-full w-[94%] rounded-full bg-neon-green"></div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AddAuto
