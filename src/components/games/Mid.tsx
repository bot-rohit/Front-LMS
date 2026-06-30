"use client";
import React from 'react'
import { useState } from "react";
import Spin from './Spin';
import Trans from './Trans';
import Reedem from './Reedem';

const streakData = [
    {
        day: "Thu",
        title: "Bull/Bear",
        xp: "140 XP",
        completed: true,
    },
    {
        day: "Fri",
        title: "Candle ID",
        xp: "200 XP",
        completed: true,
    },
    {
        day: "Sat",
        title: "Odd 1 Out",
        xp: "270 XP",
        completed: true,
    },
    {
        day: "Sun",
        title: "-",
        xp: "",
        completed: false,
        missed: true,
    },
    {
        day: "Mon",
        title: "Pattern Q",
        xp: "210 XP",
        completed: true,
    },
    {
        day: "Tue",
        title: "Risk Run",
        xp: "160 XP",
        completed: true,
    },
    {
        day: "Today",
        title: "Go!",
        xp: "",
        current: true,
    },
];
const tabs = [
    {
        key: "spin",
        text: "Spin & Play",
        icon: "ri-star-line",
    },
    {
        key: "history",
        text: "Transaction History",
        icon: "ri-history-line",
    },
    {
        key: "redeem",
        text: "Redeem Credits",
        icon: "ri-gift-line",
    },
];

const Mid = () => {
    const [activeTab, setActiveTab] = useState("spin");

    const renderComponent = () => {
        switch (activeTab) {
                case "spin":
                    return <Spin />;

                case "history":
                    return <Trans />;

                case "redeem":
                    return <Reedem />;

                default:
                    return <Spin />;
            }
        };
        return (
            <div>
                <div className="space-y-8 mx-10 mt-8 font-heading">
   

                    <div className="rounded-2xl border border-[#26301C] bg-[#0F1409] p-6">
                        <div className="mb-6 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <i className="ri-fire-fill text-orange-500"></i>

                                <h2 className="text-xl font-heading font-bold text-white    ">
                                    Daily Streak — 5 days
                                </h2>
                            </div>

                            <div className="flex items-center gap-2 rounded-full bg-[#2A160D] px-4 py-1">
                                <span className="font-semibold text-orange-400">
                                    5
                                </span>

                                <i className="ri-fire-fill text-orange-400"></i>
                            </div>
                        </div>

                        <div className="grid grid-cols-7 gap-6">
                            {streakData.map((item) => (
                                <div
                                    key={item.day}
                                    className="flex flex-col items-center"
                                >
                                    <p className="mb-3 text-sm text-zinc-400">
                                        {item.day}
                                    </p>

                                    <div
                                        className={`flex h-10 w-10 items-center justify-center rounded-xl border transition
                                ${item.completed
                                                ? "border-lime-400 bg-[#1A240E]"
                                                : item.current
                                                    ? "border-2 border-dashed border-lime-500"
                                                    : "border-[#2E3526] bg-[#181D14]"
                                            }`}
                                    >
                                        {item.completed && (
                                            <i className="ri-star-line text-md text-lime-400"></i>
                                        )}

                                        {item.current && (
                                            <i className="ri-star-line text-md text-lime-500"></i>
                                        )}

                                        {item.missed && (
                                            <i className="ri-close-line text-md text-zinc-500"></i>
                                        )}
                                    </div>

                                    <h4
                                        className={`mt-3 text-center text-sm font-semibold ${item.completed || item.current
                                                ? "text-lime-400"
                                                : "text-zinc-500"
                                            }`}
                                    >
                                        {item.title}
                                    </h4>

                                    <p className="mt-1 text-xs text-zinc-500">
                                        {item.xp}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

         

                    <div className="flex gap-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`flex items-center gap-3 rounded-2xl px-7 py-2 text-sm font-semibold transition-all ${activeTab === tab.key
                                        ? "bg-lime-400 text-black"
                                        : "border border-[#2A331E] bg-[#131A0D] text-zinc-300 hover:border-lime-500"
                                    }`}
                            >
                                <i className={tab.icon}></i>

                                {tab.text}
                            </button>
                        ))}
                    </div>

                  

                    {renderComponent()}
                </div>

            </div>
        )
    }

    export default Mid
