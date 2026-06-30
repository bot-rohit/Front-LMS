'use client'
import React from 'react'
import { useState } from 'react';
const courseDetails = {
    tag: "Professional Track",
    title: "Mastering Advanced Technical Analysis",
    description:
        "Master the art of technical analysis and risk management with our comprehensive institutional-grade trading course.",
    price: "$499",
    image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&fit=crop",
};
import Link from 'next/link';

const tabs = [
    "Overview",
    "Curriculum",
    "Instructor",
    "Outcomes",
];


const header = () => {

    const [activeTab, setActiveTab] = useState("Overview");
    return (
        <div className='px-5 py-10 font-heading'>
            <div className="w-full">

                <div className="relative overflow-hidden ">

                    <img
                        src={courseDetails.image}
                        alt={courseDetails.title}
                        className="h-[600px] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050900] via-transparent to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-10">

                        <span className="inline-flex items-center gap-2 rounded-full bg-[#FF0088]/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-red-given">
                            <i className="ri-award-line" />
                            {courseDetails.tag}
                        </span>


                        <p className="mt-5 text-5xl font-bold leading-tight text-white">
                            {courseDetails.title}
                        </p>


                        <p className="mt-4 max-w-2xl text-lg leading-8 text-card-font">
                            {courseDetails.description}
                        </p>


                        <div className="mt-8 flex gap-4 font-heading">
                            <button className="rounded-xl bg-red-given px-8 py-3 text-md font-semibold
                             text-white transition hover:scale-[1.02] font-sans">
                                Enroll Now — {courseDetails.price}
                            </button>

                            <Link href={'/vidTerminal'} className="rounded-xl border border-white/20 bg-white/10 px-8 py-3 
                            text-md font-semibold text-white backdrop-blur-sm">
                                Demo Video
                            </Link>
                        </div>

                        <div className="mt-10 flex gap-10 border-b border-white/10">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-4 text-sm font-semibold uppercase tracking-[2px] transition-colors
        ${activeTab === tab
                                            ? "border-b-2 border-red-given text-red-given"
                                            : "text-white"
                                        }
      `}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default header
