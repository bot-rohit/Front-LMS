"use client";
import React from 'react'

const games = [
    {
        name: "Bull or Bear Quick-Fire",
        color: "bg-emerald-500",
        reward: "≤150 XP",
        rewardColor: "text-emerald-400",
    },
    {
        name: "Candle ID Pattern",
        color: "bg-lime-400",
        reward: "≤200 XP",
        rewardColor: "text-lime-400",
    },
    {
        name: "Price Memory",
        color: "bg-blue-500",
        reward: "≤150 XP",
        rewardColor: "text-blue-400",
    },
    {
        name: "Pattern Quiz",
        color: "bg-yellow-500",
        reward: "≤300 XP",
        rewardColor: "text-yellow-400",
    },
    {
        name: "Term Match",
        color: "bg-violet-500",
        reward: "≤375 XP",
        rewardColor: "text-violet-400",
    },
    {
        name: "Price Ladder",
        color: "bg-orange-500",
        reward: "≤180 XP",
        rewardColor: "text-orange-400",
    },
    {
        name: "Risk Runner",
        color: "bg-pink-500",
        reward: "≤200 XP",
        rewardColor: "text-pink-400",
    },
    {
        name: "Odd One Out",
        color: "bg-teal-400",
        reward: "≤300 XP",
        rewardColor: "text-teal-400",
    },
];

import { useState } from "react";

const Wallet = () => {
    const [xp, setXp] = useState(4250);
    const [credits, setCredits] = useState(129);
    const [convert, setConvert] = useState(100);

    const convertXP = () => {
        if (convert < 100) return;

        const earnedCredits = Math.floor(convert / 100);

        if (xp < convert) {
            alert("Not enough XP");
            return;
        }

        setXp((prev) => prev - earnedCredits * 100);
        setCredits((prev) => prev + earnedCredits);
        setConvert(100);
    };
    return (
        <div>
            <div className="space-y-6 font-heading">


                <div className="rounded-2xl border border-[#2B331F] bg-[#101709] p-6">
                    <h2 className="text-2xl font-heading font-bold text-white">
                        Your Wallet
                    </h2>

                    <div className="mt-8 space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <i className="ri-flashlight-fill text-xl text-lime-400"></i>

                                <span className="text-md text-zinc-400">
                                    XP Balance
                                </span>
                            </div>

                            <span className="text-2xl font-sans font-bold text-lime-400">
                                {xp.toLocaleString()}
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <i className="ri-coins-line text-xl text-yellow-400"></i>

                                <span className="text-md text-zinc-400">
                                    Credits
                                </span>
                            </div>

                            <span className="text-2xl font-bold text-yellow-400 font-sans">
                                {credits}
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <i className="ri-fire-fill text-xl text-red-500"></i>

                                <span className="text-md text-zinc-400">
                                    Day Streak
                                </span>
                            </div>

                            <span className="text-xl font-bold text-red-500 font-sans">
                                5 days 🔥
                            </span>
                        </div>
                    </div>

                    <div className="my-4 h-px bg-[#29321F]" />

                    <p className="mb-4 text-xs text-zinc-400">
                        Convert XP → Credits (100 XP = 1 Credit)
                    </p>

                    <div className="flex gap-3">
                        <input
                            type="number"
                            min={100}
                            step={100}
                            value={convert}
                            onChange={(e) =>
                                setConvert(Number(e.target.value))
                            }
                            className="flex-1 rounded-xl border border-[#313A27] bg-[#1A2114] px-5 py-2 text-md text-white outline-none focus:border-lime-400"
                        />

                        <button
                            onClick={convertXP}
                            className="flex px-5 items-center justify-center rounded-xl border border-yellow-500/30 bg-[#2A2411] transition hover:bg-yellow-500/20"
                        >
                            <i className="ri-exchange-dollar-line text-xl text-yellow-400"></i>
                        </button>
                    </div>
                </div>



                <div className="rounded-2xl border border-[#2B331F] bg-[#101709] p-6">
                    <h2 className="mb-8 text-2xl font-heading font-bold text-white">
                        Games on the Wheel
                    </h2>

                    <div className="space-y-5">
                        {games.map((game) => (
                            <div
                                key={game.name}
                                className="flex items-center justify-between transition hover:translate-x-1"
                            >
                                <div className="flex items-center gap-4">
                                    <span
                                        className={`h-3.5 w-3.5 rounded-full ${game.color}`}
                                    />

                                    <span className="text-md text-zinc-300">
                                        {game.name}
                                    </span>
                                </div>

                                <span
                                    className={`font-semibold ${game.rewardColor}`}
                                >
                                    {game.reward}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Wallet
