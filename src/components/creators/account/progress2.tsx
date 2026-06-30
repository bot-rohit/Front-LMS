'use client'
import React from 'react'
import { useState } from "react";

const creatorTypes = [
    {
        id: "individual",
        title: "Individual Educator",
        description: "Solo trader sharing knowledge",
        icon: "ri-team-fill",
    },
    {
        id: "influencer",
        title: "Influencer",
        description: "Building a broad financial audience",
        icon: "ri-megaphone-line"
    },
    {
        id: "institute",
        title: "Coaching Institute",
        description: "Organization with multiple educators",
        icon: "ri-government-line"
    },
];
const progress2 = () => {
    const [selected, setSelected] = useState("individual");
    return (
        <>
            <div className="w-auto font-heading bg-[#090d08] rounded-3xl border border-lime-500/20 mt-5 px-5 py-8">
                <p className="text-3xl font-bold text-white">
                    What kind of creator are you?
                </p>
                <p className="text-card-font">
                    This helps us personalize your studio.
                </p>

                <div className='mt-5'>
                    {creatorTypes.map((item) => (
                        <div key={item.id} className='flex flex-col pb-5 '>
                            <button
                                onClick={() => setSelected(item.id)}
                                className={`w-auto rounded-xl border-2 p-5 transition-all duration-200 
            ${selected === item.id
                                        ? "border-lime-400 bg-[#18220B]"
                                        : "border-gray-700 bg-[#141414] hover:border-gray-500"
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`py-3 px-4 rounded-full flex items-center justify-center
                ${selected === item.id
                                                    ? "bg-lime-500/20"
                                                    : "bg-gray-700/40"
                                                }`}
                                        >
                                            <i className={`${item.icon} text-sm  ${selected === item.id ? "text-neon-green" : "text-white"}`}></i>

                                        </div>
                                        <div className="text-left">
                                            <p className="text-md font-semibold text-white">
                                                {item.title}
                                            </p>
                                            <p className="text-xs text-gray-400">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className={`py-2 px-2 rounded-full border-2 flex items-center justify-center
                ${selected === item.id
                                                ? "border-lime-400"
                                                : "border-gray-500"
                                            }`}
                                    >
                                        {selected === item.id && (
                                            <div className="py-1 px-1 rounded-full bg-lime-400" />
                                        )}
                                    </div>
                                </div>
                            </button>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default progress2
