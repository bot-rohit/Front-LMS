'use client'
import React from 'react'
import { useState } from 'react'
import All from './All'
import Active from './Active'
import Risk from './Risk'
import Completed from './Completed'
import Inactive from './Inactive'


const tabs = [
    "All",
    "Active",
    "At risk",
    "Completed",
    "Inactive",
];


const AllStudents = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [search, setSearch] = useState("");

    const renderPage = () => {
        switch (activeTab) {
            case "All":
                return <All />;

            case "Active":
                return <Active />;

            case "At risk":
                return <Risk/>;

            case "Completed":
                return <Completed/>;

            case "Inactive":
                return <Inactive />;

            default:
                return <All  />;
        }
    };
    return (
        <div>
            <div className="space-y-6">

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0A0F06] p-3">

                    <div className="flex-1">

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search students by name or email..."
                            className="w-full  rounded-xl border border-white/10 bg-[#181D16] py-3 px-5 text-white placeholder:text-white/30 outline-none"
                        />
                    </div>


                    <div className="flex items-center gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`rounded-xl px-5 py-3 text-sm font-medium transition-all ${activeTab === tab
                                    ? "bg-neon-green text-black"
                                    : "bg-[#1B2018] border-1 text-white/70 hover:bg-[#252B22]"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='overflow-y-auto flex-1'>

                    {renderPage()}
                </div>


            </div>

        </div>
    )
}

export default AllStudents
