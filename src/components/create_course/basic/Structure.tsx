'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link';

const unlockModes = [
    {
        title: "Strict",
        description: "One day unlocks at a time",
    },
    {
        title: "Flexible",
        description: "All content available immediately",
    },
    {
        title: "Hybrid",
        description: "Weekly batches unlock together",
    },
];
const Structure = () => {
    const [duration, setDuration] = useState(30);

    const [unlockMode, setUnlockMode] = useState("Strict");

    const [dailyXP, setDailyXP] = useState(100);
    return (
        <div>
            <div className="mx-5 mt-20 mx-20 font-heading">

       
                <div>
                    <h1 className="text-4xl font-bold text-white">
                        Define Learning Structure
                    </h1>

                    <p className="mt-2 text-card-font">
                        Set up how your course content will be organized and unlocked
                    </p>
                </div>

  
                <div className="rounded-3xl border border-neon-green/10 bg-card-page/40 mt-10 p-5">

                    <h2 className="mb-5 text-xl font-semibold text-white">
                        Course Duration (Days / Modules)
                    </h2>

                    <div className="flex items-center gap-4">

                        <input
                            type="number"
                            value={duration}
                            onChange={(e) =>
                                setDuration(Number(e.target.value))
                            }
                            className="
                    flex-1 rounded-xl border border-zinc-800
                    bg-black/20 px-4 py-3 text-2xl
                    font-bold text-white outline-none
                "
                        />

                        <span className="text-card-font">
                            days
                        </span>

                    </div>

                    <p className="mt-4 text-sm text-card-font">
                        AI Suggestion: 30-day courses have the highest completion rates
                    </p>

                </div>

      
                <div className="rounded-3xl border border-neon-green/10 bg-card-page/40 mt-10 p-5">

                    <h2 className="mb-5 text-xl font-semibold text-white">
                        Content Unlock Mode
                    </h2>

                    <div className="grid grid-cols-3 gap-4">

                        {unlockModes.map((mode) => {
                            const active =
                                unlockMode === mode.title;

                            return (
                                <button
                                    key={mode.title}
                                    onClick={() =>
                                        setUnlockMode(mode.title)
                                    }
                                    className={`
                            rounded-2xl border p-5 text-left transition
                            ${active
                                            ? "border-neon-green bg-neon-green/10"
                                            : "border-zinc-800 bg-black/20"
                                        }
                        `}
                                >
                                    <div className="flex items-center gap-3">

                                        {active && (
                                            <div
                                                className="
                                        flex h-8 w-8 items-center
                                        justify-center rounded-full
                                        bg-neon-green/10
                                    "
                                            >
                                                <i className="ri-check-line text-neon-green"></i>
                                            </div>
                                        )}

                                        <div>
                                            <h3
                                                className={`
                                        text-lg font-semibold
                                        ${active
                                                        ? "text-neon-green"
                                                        : "text-white"
                                                    }
                                    `}
                                            >
                                                {mode.title}
                                            </h3>

                                            <p className="mt-1 text-sm text-card-font">
                                                {mode.description}
                                            </p>
                                        </div>

                                    </div>
                                </button>
                            );
                        })}

                    </div>

                </div>

      
                <div className="rounded-3xl border border-neon-green/10 bg-card-page/40 mt-10 p-5">

                    <h2 className="mb-8 text-xl font-semibold text-white">
                        Daily XP Goal
                    </h2>

                    <div className="flex items-center gap-6">

                        <div className="flex-1">

                            <input
                                type="range"
                                min={10}
                                max={500}
                                step={10}
                                value={dailyXP}
                                onChange={(e) =>
                                    setDailyXP(Number(e.target.value))
                                }
                                className="w-full accent-lime-400"
                            />

                        </div>

                        <div
                            className="
                    rounded-2xl border border-zinc-800
                    bg-black/20 px-6 py-4
                "
                        >
                            <p className="text-3xl font-bold text-neon-green">
                                {dailyXP}
                            </p>

                            <p className="text-xs text-card-font">
                                XP
                            </p>
                        </div>

                        <div
                            className="
                    rounded-2xl border border-zinc-800
                    bg-black/20 px-6 py-4
                "
                        >
                            <p className="text-3xl font-bold text-neon-green">
                                {Math.round(dailyXP / 10)}
                            </p>

                            <p className="text-xs text-card-font">
                                XP / Week
                            </p>
                        </div>

                    </div>

                </div>

                                
                <div className="flex items-center justify-between border-t border-zinc-800 mt-15 pb-10 pt-6">

                    <button
                        className="
                rounded-2xl border border-zinc-800
                px-6 py-3 text-card-font
                transition hover:bg-zinc-900
            "
                    >
                        Back
                    </button>

                    <Link href={'/creators/day_wise'}
                        className="
                flex items-center gap-2
                rounded-2xl bg-neon-green
                px-8 py-3 font-semibold text-black
            "
                    >
                        Save & Continue
                        <i className="ri-arrow-right-line"></i>
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default Structure
