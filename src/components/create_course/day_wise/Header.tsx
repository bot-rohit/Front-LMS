'use client'
import React, { useState } from 'react'
import Videos from './Videos';
import Notes from './Notes';
import Assign from './Assign';
import Quiz from './Quiz';
import Xp from './Xp';
const tabs = [
    {
        id: "video",
        label: "Video and Content",
        icon: "ri-video-line",
    },
    {
        id: "notes",
        label: "Notes and Resources",
        icon: "ri-file-list-3-line",
    },
    {
        id: "assignment",
        label: "Assignment",
        icon: "ri-file-paper-2-line",
    },
    {
        id: "quiz",
        label: "Quiz",
        icon: "ri-checkbox-circle-line",
    },
    {
        id: "xp",
        label: "XP",
        icon: "ri-checkbox-circle-line",
    }
];
const Header = () => {
    const [activeTab, setActiveTab] = useState("video");

    const renderComponent = () => {
        switch (activeTab) {
            case "video":
                return <Videos />;

            case "notes":
                return <Notes />;

            case "assignment":
                return <Assign />;

            case "quiz":
                return <Quiz />;
            case "xp":
                return <Xp />;

            default:
                return null;
        }
    };
    return (
        <div className="mx-20 mt-10 font-heading relative">
              <p className='absolute z-1 text-red-given font-bold -top-6'>go in xp for next</p>


            {/* Header */}

            <div className="border-b border-zinc-800 pb-6">

                <div className="flex items-start justify-between">

                    <div>
                        <h1 className="text-4xl font-bold text-white">
                            Introduction to Options Trading
                        </h1>

                        <p className="mt-3 text-card-font">
                            Understand the fundamentals of options
                            and call/put basics
                        </p>
                    </div>

                    <div className="flex gap-3">

                        <div className="rounded-2xl bg-card-page/40 px-5 py-3 border border-neon-green/10">
                            <div className="flex items-center gap-2">
                                <i className="ri-time-line text-card-font"></i>
                                <span className="text-white font-semibold">
                                    45
                                </span>
                                <span className="text-card-font text-sm">
                                    min
                                </span>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-card-page/40 px-5 py-3 border border-neon-green/10">
                            <div className="flex items-center gap-2">
                                <i className="ri-award-line text-neon-green"></i>

                                <span className="text-neon-green font-semibold">
                                    100
                                </span>

                                <span className="text-card-font text-sm">
                                    XP
                                </span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            {/* Tabs */}

            <div className="flex gap-3 mt-6 flex-wrap">

                {tabs.map((tab) => {

                    const active = activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                flex items-center gap-2
                                rounded-2xl px-5 py-3
                                font-medium transition
                                
                                ${active
                                    ? "bg-neon-green text-black"
                                    : "bg-card-page/40 border border-neon-green/10 text-white"
                                }
                            `}
                        >
                            <i className={tab.icon}></i>

                            {tab.label}
                        </button>
                    );
                })}

            </div>
            <div className='mb-10'>


            {/* Dynamic Component */}

            {renderComponent()}
            </div>

        </div>
    )
}

export default Header
