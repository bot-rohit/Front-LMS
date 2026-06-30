'use client'
import React from 'react'
import LeaderBoard from './LeaderBoard';
import { useState } from 'react';
import Anylysis from './Anylysis';
import AllStudents from './AllStudents';
const stats = [
    {
        id: 1,
        title: "Total Students",
        value: "5",
        growth: "+15%",
        color: "bg-neon-green/10",
        colorfont: "text-neon-green",
        icon: "ri-group-line",
    },
    {
        id: 2,
        title: "Active Learners",
        value: "4",
        growth: "+8%",
        color: "bg-blue-500/10",
        colorfont: "text-blue-500",
        icon: "ri-flashlight-line",
    },
    {
        id: 3,
        title: "Avg. Completion",
        value: "71%",
        growth: "+12%",
        color: "bg-yellow-500/10",
        colorfont: "text-yellow-400",
        icon: "ri-focus-3-line",
    },
    {
        id: 4,
        title: "At-Risk Students",
        value: "1",
        growth: "-5%",
        color: "bg-red-500/10",
        colorfont: "text-red-400",
        icon: "ri-error-warning-line",
    },
];
const tabs = [
    {
        id: "students",
        label: "All Students",
        component: <AllStudents />,
    },
    {
        id: "leaderboard",
        label: "Leaderboard",
        component: <LeaderBoard />,
    },
    {
        id: "analytics",
        label: "Analytics",
        component: <Anylysis />,
    },
];

const Header = () => {
    const [activeTab, setActiveTab] = useState("leaderboard");
    return (
        <div className='mx-20 mt-15'>
            <div className="space-y-8 font-heading">
                <div>
                    <h1 className="text-4xl font-semibold text-white">
                        Student Management
                    </h1>

                    <p className="mt-2 text-lg text-white/50">
                        Track progress, engagement, and performance of your learners
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                    {stats.map((item) => {

                        const Icon = item.icon;

                        return (
                            <div
                                key={item.id}
                                className="rounded-3xl border border-white/10 bg-[#11150E] p-6 transition-all hover:border-neon-green/30"
                            >

                                <div className="flex items-center justify-between">

                                    <div
                                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.color}`}
                                    >
                                        <i

                                            className={`${item.icon}  ${item.colorfont}`}
                                        />
                                    </div>

                                    <span
                                        className={`text-sm font-medium ${item.growth.startsWith("+")
                                                ? "text-neon-green"
                                                : "text-yellow-400"
                                            }`}
                                    >
                                        {item.growth}
                                    </span>

                                </div>

                                <h2 className="mt-8 text-4xl font-sans font-semibold text-white">
                                    {item.value}
                                </h2>

                                <p className="mt-3 text-white/50">
                                    {item.title}
                                </p>

                            </div>
                        );
                    })}

                </div>

       

                <div className="flex gap-3">

                    {tabs.map((tab) => (

                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`rounded-full px-6 py-3 text-sm font-medium transition-all ${activeTab === tab.id
                                    ? "bg-neon-green text-black"
                                    : "border border-white/10 bg-[#11150E] text-white/60 hover:border-white/20"
                                }`}
                        >
                            {tab.label}
                        </button>

                    ))}

                </div>


                <div>

                    {tabs.find(tab => tab.id === activeTab)?.component}

                </div>

            </div>

        </div>
    )
}

export default Header
