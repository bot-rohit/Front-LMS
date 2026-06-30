"use client";

import { useState } from "react";
import React from 'react'
const actions = [
    "Give me Practise Questions",
    "Explain the topic in simple terms",
    "Give me a Summary",
    "Give me a real life example",
];


const Deeper = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleAction = (action: string) => {
        console.log(action);

        // Add your API call or modal logic here
    };

    return (
        <div>
            <div className="w-auto px-10 font-heading">

                <div className="mt-0 overflow-hidden rounded-2xl border-l-4 border-neon-green bg-gradient-to-r from-[#101B05] to-[#1A240C]">
                    <div className="flex items-center justify-between px-6 py-5">
                        <div className="flex items-center gap-2">
                            <i className="ri-sparkling-2-fill text-white/70" />

                            <h3 className="text-xl font-semibold text-[#E8E8DF]">
                                Dive Deeper into this topic
                            </h3>
                        </div>

                        <button
                            onClick={() => setIsOpen((prev) => !prev)}
                            className="text-white"
                        >
                            <i
                                className={`ri-arrow-up-s-line text-2xl transition-transform duration-300 ${!isOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                    </div>

                    {isOpen && (
                        <div className="flex flex-wrap gap-4 px-6 pb-6">
                            {actions.map((action) => (
                                <button
                                    key={action}
                                    onClick={() => handleAction(action)}
                                    className="
                  rounded-lg
                  border
                  border-[#A7F000]
                  px-5
                  py-3
                  text-xs
                  text-[#E8E8DF]
                  transition-all
                  hover:bg-[#A7F000]
                  hover:text-black
                "
                                >
                                    {action}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Deeper
