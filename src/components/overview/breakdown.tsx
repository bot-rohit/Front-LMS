'use client'
import React from 'react'
import { useState } from "react";

const moduleData = [
    {
        id: "01",
        title: "Market Structure & Dynamics",
        lessons: [
            {
                title: "The 3 Phases of Market Cycles",
                duration: "45 min",
            },
            {
                title: "Identifying Institutional Liquidity",
                duration: "60 min",
            },
        ],
    },
    {
        id: "02",
        title: "Advanced Order Flow",
        lessons: [
            {
                title: "Reading Footprint Charts",
                duration: "50 min",
            },
            {
                title: "Volume Profile Mastery",
                duration: "55 min",
            },
            {
                title: "Liquidity Sweeps & Traps",
                duration: "40 min",
            },
        ],
    },
    {
        id: "03",
        title: "Psychology & Risk Scaling",
        lessons: [
            {
                title: "Managing Trading Emotions",
                duration: "35 min",
            },
            {
                title: "Risk Per Trade Framework",
                duration: "30 min",
            },
            {
                title: "Scaling Winning Positions",
                duration: "45 min",
            },
        ],
    },
];


const breakdown = () => {
    const [openModule, setOpenModule] = useState("01");

    const toggleModule = (moduleId: string) => {
        setOpenModule((prev) => (prev === moduleId ? "" : moduleId));
    };
    return (
        <div className='mx-15 mt-20 font-heading'>
            <section className="w-full bg-black text-white">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold pb-5">
                        Module Breakdown
                    </h2>
                    {moduleData.map((module) => {
                        const isOpen = openModule === module.id;

                        return (
                            <div
                                key={module.id}
                                className="overflow-hidden rounded-2xl border border-[#1f2a10] bg-[#020700]"
                            >
                                <button
                                    onClick={() => toggleModule(module.id)}
                                    className="flex w-full items-center justify-between px-5 py-5 text-left transition-all 
                                    hover:bg-[#050d00]"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-9 w-9 items-center justify-center
                                         rounded-lg bg-[#A6FF00]/10 text-sm font-semibold text-[#A6FF00] border border-[#A6FF00]/20">
                                            {module.id}
                                        </div>

                                        <h3 className="text-lg font-semibold">
                                            {module.title}
                                        </h3>
                                    </div>

                                    <i
                                        className={`ri-arrow-down-s-line text-xl text-gray-400 
                                            transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ${isOpen
                                        ? "grid-rows-[1fr]"
                                        : "grid-rows-[0fr]"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="border-t border-[#1f2a10] px-5 py-4">
                                            <div className="space-y-4">
                                                {module.lessons.map((lesson, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center gap-3 text-sm text-gray-400"
                                                    >
                                                        <i className="ri-play-circle-line text-neon-green" />

                                                        <span className='font-sans'>
                                                            {lesson.title} (
                                                            {lesson.duration})
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

        </div>
    )
}

export default breakdown
