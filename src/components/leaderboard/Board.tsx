"use client";
import React from 'react'

import { useState } from "react";

const tabs = ["Overall", "Weekly", "City", "Colleges"];

const leaderboard = [
    {
        rank: 1,
        name: "Arjun Mehta",
        college: "IIM Bangalore",
        points: "4,850",
        weekly: "+320",
        score: "96%",
        badges: 8,
    },
    {
        rank: 2,
        name: "Priya Sharma",
        college: "SRCC Delhi",
        points: "4,320",
        weekly: "+280",
        score: "92%",
        badges: 7,
    },
    {
        rank: 3,
        name: "Ravi Kumar",
        college: "XLRI Jamshedpur",
        points: "3,980",
        weekly: "+250",
        score: "89%",
        badges: 6,
    },
    {
        rank: 4,
        name: "Sneha Gupta",
        college: "FMS Delhi",
        points: "3,750",
        weekly: "+210",
        score: "87%",
        badges: 5,
    },
    {
        rank: 5,
        name: "Vikram Singh",
        college: "IIM Ahmedabad",
        points: "3,600",
        weekly: "+190",
        score: "85%",
        badges: 5,
    },
    {
        rank: 6,
        name: "Ananya Joshi",
        college: "SP Jain Mumbai",
        points: "3,420",
        weekly: "+175",
        score: "83%",
        badges: 4,
    },
    {
        rank: 7,
        name: "You",
        college: "NMIMS Mumbai",
        points: "3,200",
        weekly: "+160",
        score: "80%",
        badges: 4,
        me: true,
    },
    {
        rank: 8,
        name: "Karan Patel",
        college: "ISB Hyderabad",
        points: "3,100",
        weekly: "+140",
        score: "78%",
        badges: 3,
    },
    {
        rank: 9,
        name: "Meera Nair",
        college: "IIFT Delhi",
        points: "2,950",
        weekly: "+120",
        score: "76%",
        badges: 3,
    },
    {
        rank: 10,
        name: "Rohit Das",
        college: "MDI Gurgaon",
        points: "2,800",
        weekly: "+100",
        score: "74%",
        badges: 2,
    },
];
const Board = () => {
    const [activeTab, setActiveTab] = useState("Overall");

    return (
        <div className='mx-10 my-10 font-heading'>
            <section className="rounded-2xl bg-[#091004] p-8">

                <div className="mb-8 flex items-center gap-6">
                    <h2 className="whitespace-nowrap text-5xl font-heading font-bold text-white">
                        Leaderboard Rankings
                    </h2>


                </div>

  
                <div className="mb-8 flex gap-3">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`rounded-lg px-7 py-2 text-sm font-medium transition-all ${activeTab === tab
                                ? "bg-lime-400 text-black"
                                : "bg-[#1D2317] text-zinc-300 hover:bg-[#28321d]"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-xl border border-[#5A6053]">
                    <table className="w-full border-collapse">
                        <thead className="bg-[#12170E]">
                            <tr className="border-b border-[#5A6053] text-left text-sm text-zinc-300">
                                <th className="px-6 py-4">Rank</th>
                                <th className="px-6 py-4">Learner Name</th>
                                <th className="px-6 py-4">Institute / College</th>
                                <th className="px-6 py-4">Total Points</th>
                                <th className="px-6 py-4">Weekly</th>
                                <th className="px-6 py-4">Score</th>
                                <th className="px-6 py-4">Badges</th>
                            </tr>
                        </thead>

                        <tbody>
                            {leaderboard.map((student) => (
                                <tr
                                    key={student.rank}
                                    className={`border-b border-[#394032] transition hover:bg-[#151D10] ${student.me
                                        ? "bg-lime-400/5"
                                        : ""
                                        }`}
                                >
                                    <td className="px-6 py-4 font-medium text-white">
                                        #{student.rank}
                                    </td>

                                    <td className="px-6 py-4 text-white">
                                        {student.name}

                                        {student.me && (
                                            <span className="ml-2 text-xs text-zinc-400">
                                                (You)
                                            </span>
                                        )}
                                    </td>

                                    <td className="px-6 py-4 text-zinc-300">
                                        {student.college}
                                    </td>

                                    <td className="px-6 py-4 text-zinc-200">
                                        {student.points}
                                    </td>

                                    <td className="px-6 py-4 font-medium text-lime-400">
                                        {student.weekly}
                                    </td>

                                    <td className="px-6 py-4 text-zinc-200">
                                        {student.score}
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-zinc-200">
                                            <i className="ri-medal-line text-sm"></i>
                                            {student.badges}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

        </div>
    )
}

export default Board
