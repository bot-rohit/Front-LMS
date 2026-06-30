"use client"
import React from 'react'


import { useState } from "react";

const lectureTabs = [
    {
        id: "transcript",
        label: "Transcript",
    },
    {
        id: "qa",
        label: "Q&A",
    },
    {
        id: "takeaways",
        label: "Key Takeaways",
    },
    {
        id: "assignments",
        label: "Assignments",
    },
    {
        id: "announcements",
        label: "Announcements",
    },
];

const transcriptData = [
    {
        id: 1,
        timestamp: "00:00",
        text: "Welcome back traders. In this session, we're diving deep into the engine of every exchange: the Order Book. Many retail traders look at price charts in isolation, but the real moves happen behind the scenes where buy and sell orders clash.",
    },
];

const questionData = [
    {
        id: 1,
        initials: "PS",
        question:
            "Can I become profitable without risk management?",
        lecture: "Lecture 1",
        timeAgo: "1 Day ago",
        replies: 0,
    },
    {
        id: 2,
        initials: "JA",
        question:
            "Why do traders lose even after learning strategies?",
        lecture: "Lecture 1",
        timeAgo: "2 Day ago",
        replies: 4,
    },
];

const takeawayData = [
    {
        id: 1,
        title: "Liquidity Drives Price",
        description:
            "Markets move towards liquidity pools before expanding in the intended direction.",
    },
    {
        id: 2,
        title: "Order Flow Matters",
        description:
            "Institutional participation can often be identified through volume imbalances.",
    },
    {
        id: 3,
        title: "Avoid Chasing Price",
        description:
            "Wait for confirmations instead of reacting emotionally to market moves.",
    },
];

const announcementsData = [
    {
        id: 1,
        title: "Live Market Session",
        date: "March 28, 2026",
        description:
            "Join the live liquidity sweep breakdown and Q&A session this weekend.",
    },
];

const proTip =
    "Liquidity is not just about volume. It's about how much the price moves per unit of volume traded. Thin liquidity often precedes volatile spikes.";

const Footer = () => {
    const [activeTab, setActiveTab] = useState("transcript");
    const [search, setSearch] = useState("");
    return (
        <div className='px-10 pt-10 pb-10 font-heading'>
            <section className="w-full">
                <div className="flex flex-wrap gap-8 border-b border-[#223512]">
                    {lectureTabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative pb-4 text-sm font-semibold transition-all ${activeTab === tab.id
                                ? "text-neon-green"
                                : "text-[#73809b]"
                                }`}
                        >
                            {tab.label}

                            {activeTab === tab.id && (
                                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-neon-green" />
                            )}
                        </button>
                    ))}
                </div>

                <div className="mt-5 flex  gap-5 w-full">
                    <div className='w-[60%]'>
                        {activeTab === "transcript" && (
                            <div className="space-y-6">
                                {transcriptData.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex gap-4"
                                    >
                                        <span className="shrink-0 font-mono text-sm font-bold text-neon-green">
                                            {item.timestamp}
                                        </span>

                                        <p className="max-w-4xl text-md leading-9 text-gray-300">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === "qa" && (
                            <div className='w-auto'>
                                <div className="mb-8 flex gap-3 ">
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                        placeholder="Search all course Questions"
                                        className="p-2 flex-1 rounded-xl border border-[#1f3010] bg-[#111c08] px-4 text-white outline-none placeholder:text-[#55703b]"
                                    />

                                    <button className="flex px-3 py-1 items-center justify-center rounded-xl ml-4 bg-neon-green">
                                        <i className="ri-search-line text-xl text-black"></i>
                                    </button>
                                </div>

                                <h2 className="mb-8 text-xl font-heading font-bold text-white">
                                    All Questions in this Lecture 
                                </h2>

                                {/* <div className="space-y-8">
                                    {questionData.map((question) => (
                                        <div
                                            key={question.id}
                                            className="flex items-start justify-between"
                                        >
                                            <div className="flex gap-4">
                                                <div className="flex px-5 py-1 items-center justify-center rounded-full bg-neon-green font-bold text-black">
                                                    {
                                                        question.initials
                                                    }
                                                </div>

                                                <div>
                                                    <h3 className="text-md font-semibold text-white">
                                                        {
                                                            question.question
                                                        }
                                                    </h3>

                                                    <div className="mt-3 flex items-center gap-2 text-sm">
                                                        <span className="text-[#2D9CFF]">
                                                            {
                                                                question.lecture
                                                            }
                                                        </span>

                                                        <span className="text-gray-500">
                                                            •
                                                        </span>

                                                        <span className="text-gray-400">
                                                            {
                                                                question.timeAgo
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-1 text-white">
                                                <i className="ri-chat-3-fill text-2xl"></i>

                                                <span className="font-semibold">
                                                    {
                                                        question.replies
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div> */}
                            </div>
                        )}

                        {activeTab === "takeaways" && (
                            <div className="grid gap-4">
                                {takeawayData.map((item) => (
                                    <div
                                        key={item.id}
                                        className="rounded-2xl border border-[#1f3010] bg-[#101908] p-5"
                                    >
                                        <h3 className="text-md font-semibold text-neon-green">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-gray-300">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === "assignments" && (
                            <div className="rounded-xl bg-neon-green py-3 text-center">
                                <p className="text-md font-semibold text-black">
                                    Click on this Tab to view Assignments
                                </p>
                            </div>
                        )}

                        {activeTab === "announcements" && (
                            <div className="space-y-4">
                                {announcementsData.map(
                                    (announcement) => (
                                        <div
                                            key={announcement.id}
                                            className="rounded-2xl border border-[#1f3010] bg-[#101908] p-5"
                                        >
                                            <h3 className="text-xl font-semibold text-white">
                                                {
                                                    announcement.title
                                                }
                                            </h3>

                                            <p className="mt-2 text-xs text-[#A6FF00]">
                                                {
                                                    announcement.date
                                                }
                                            </p>

                                            <p className="mt-4 text-gray-300">
                                                {
                                                    announcement.description
                                                }
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                    </div>

                    <div className='w-[40%]'>
                        <div className="relative overflow-hidden rounded-2xl border-l-4 border-red-given bg-gradient-to-r from-[#18260c] to-[#212014] p-6">
                            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#6b3c26]/20"></div>

                            <div className="relative">
                                <div className="mb-4 flex items-center gap-2">
                                    <i className="ri-lightbulb-flash-line text-red-given"></i>

                                    <span className="font-bold uppercase text-red-given">
                                        Pro Tip :
                                    </span>
                                </div>

                                <p className="leading-6 text-gray-300 text-sm">
                                    {proTip}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Footer
