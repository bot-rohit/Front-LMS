"use client";
import React from 'react'

import { useState } from "react";
const weekData = [
    { day: "MON", completed: true },
    { day: "TUE", completed: true },
    { day: "WED", completed: false, current: true, date: 15 },
    { day: "THU", completed: false },
    { day: "FRI", completed: false },
    { day: "SAT", completed: false },
    { day: "SUN", completed: false },
];

const routines = [
    {
        icon: "ri-sun-line",
        title: "Morning Learning",
        description:
            "Optimal for strategy deep-dives. Peak mental clarity.",
        color: "text-sky-400",
    },
    {
        icon: "ri-moon-clear-line",
        title: "Evening Learning",
        description:
            "Reflect on daily market moves and backtest trades.",
        color: "text-pink-500",
    },
    {
        icon: "ri-flight-takeoff-line",
        title: "Weekend Practice",
        description:
            "Intense drills and simulation marathons.",
        color: "text-lime-400",
    },
];
const Left = () => {
    const [goal] = useState(15);
    const [completed] = useState(9);

    const progress = (completed / goal) * 100;
    return (
        <div className='ml-5 mt-15 mb-15 font-heading'>
            <div className="space-y-8">
   

                <div className="flex items-start justify-between">
                    <div>
                        <p className="font-semibold uppercase text-lime-400">
                            Routine Builder
                        </p>

                        <h1 className="mt-2 text-4xl font-heading font-bold text-white">
                            Forge Your{" "}
                            <span className="italic text-lime-400">
                                Trading Edge
                            </span>
                        </h1>
                    </div>

                    <div className="rounded-2xl bg-[#161C11] px-6 py-2">
                        <p className="text-xs uppercase tracking-widest text-zinc-400">
                            Active Streak
                        </p>

                        <div className="mt-2 flex items-center gap-3">
                            <h2 className="text-2xl font-sans font-bold text-lime-400">
                                30 DAYS
                            </h2>

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-400/20">
                                <i className="ri-fire-fill text-xl text-lime-400"></i>
                            </div>
                        </div>
                    </div>
                </div>

       

                <div className="relative rounded-2xl bg-[#18220D] p-8">
                    <div className="flex items-center gap-3">
                        <i className="ri-focus-3-line text-xl text-lime-400"></i>

                        <h2 className="text-xl font-semibold text-white">
                            Daily Goal
                        </h2>
                    </div>

                    <div className="mt-8">
                        <div className="flex items-end gap-2">
                            <span className="text-4xl font-bold text-white font-sans">
                                {goal}
                            </span>

                            <span className=" text-zinc-400">
                                MINS/DAY
                            </span>
                        </div>

                        <div className="mt-6 h-2 overflow-hidden rounded-full bg-[#2A311F]">
                            <div
                                style={{ width: `${progress}%` }}
                                className="h-full rounded-full bg-red-given transition-all duration-700"
                            />
                        </div>

                        <p className="mt-3 text-sm text-zinc-400">
                            {completed} mins completed today
                        </p>
                    </div>

                    <button className="absolute right-8 top-8 text-sm font-semibold uppercase tracking-wider text-lime-400">
                        Edit
                    </button>

                    <i className="ri-timer-line absolute right-8 top-12 text-[90px] text-white/5"></i>
                </div>

        

                <div className="rounded-2xl bg-[#12190B] p-8">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-3xl font-semibold text-white">
                            Weekly Progress
                        </h2>

                        <div className="flex gap-3">
                            <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-lime-400/10">
                                <i className="ri-arrow-left-s-line text-xl text-white"></i>
                            </button>

                            <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-lime-400/10">
                                <i className="ri-arrow-right-s-line text-xl text-white"></i>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-7 gap-4">
                        {weekData.map((item) => (
                            <div key={item.day}>
                                <p className="mb-3 text-center text-xs font-semibold tracking-wider text-zinc-500">
                                    {item.day}
                                </p>

                                <div
                                    className={`relative flex h-20 items-center justify-center rounded-xl border transition ${item.current
                                            ? "border-lime-400 bg-[#18220D]"
                                            : item.completed
                                                ? "border-lime-400/30 bg-lime-400/20"
                                                : "border-[#23291D] bg-[#171D12]"
                                        }`}
                                >
                                    {item.completed && (
                                        <i className="ri-checkbox-circle-fill text-2xl text-lime-400"></i>
                                    )}

                                    {item.current && (
                                        <>
                                            <span className="text-3xl font-bold text-lime-400">
                                                {item.date}
                                            </span>

                                            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-pink-500"></span>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



                <div className="grid grid-cols-3 gap-6">
                    {routines.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl bg-[#18220D] p-8 transition hover:-translate-y-2 hover:border hover:border-lime-400/30"
                        >
                            <i
                                className={`${item.icon} text-3xl ${item.color}`}
                            ></i>

                            <h3 className="mt-8 text-2xl font-semibold text-white">
                                {item.title}
                            </h3>

                            <p className="mt-4  text-sm text-zinc-400">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Left
