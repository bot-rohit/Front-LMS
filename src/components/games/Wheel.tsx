"use client";
import React from 'react'

import { motion } from "framer-motion";
import { useState } from "react";

const segments = [
    { text: "Bull\nor Bear", color: "#0D4F3A" },
    { text: "Candle\nID", color: "#3D6300" },
    { text: "Price\nMemory", color: "#004F9F" },
    { text: "Pattern\nQuiz", color: "#805200" },
    { text: "Trend\nMatch", color: "#3A256D" },
    { text: "Price\nUpdate", color: "#803600" },
    { text: "Risk\nRunner", color: "#6A0042" },
    { text: "Odd\nOne Out", color: "#00553F" },
];


const Wheel = () => {
    const [rotation, setRotation] = useState(0);
    const [spinning, setSpinning] = useState(false);

    const spin = () => {
        if (spinning) return;

        setSpinning(true);

        const winner = Math.floor(Math.random() * segments.length);

        const slice = 360 / segments.length;

        const finalRotation =
            rotation +
            360 * 6 +
            (360 - winner * slice - slice / 2);

        setRotation(finalRotation);

        setTimeout(() => {
            setSpinning(false);
        }, 5000);
    };
    
    return (
        <div>
            <div className="flex flex-col items-center gap-12">

                <div className="relative">

                    <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
                        <div
                            className="h-0 w-0
            border-l-[18px]
            border-r-[18px]
            border-t-[28px]
            border-l-transparent
            border-r-transparent
            border-t-lime-400"
                        />
                    </div>



                    <motion.div
                        animate={{ rotate: rotation }}
                        transition={{
                            duration: 5,
                            ease: [0.12, 0.85, 0.2, 1],
                        }}
                        className="relative flex h-[520px] w-[520px] items-center justify-center rounded-full border-[8px] border-lime-700 shadow-[0_0_80px_rgba(150,255,0,0.25)]"
                        style={{
                            background: `
        conic-gradient(
            #0D4F3A 0deg 45deg,
            #3D6300 45deg 90deg,
            #004F9F 90deg 135deg,
            #805200 135deg 180deg,
            #3A256D 180deg 225deg,
            #803600 225deg 270deg,
            #6A0042 270deg 315deg,
            #00553F 315deg 360deg
        )
        `,
                        }}
                    >



                        <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-lime-400 bg-[#111]">
                            <div className="text-center font-bold text-lime-400">
                                SPIN
                                <br />
                                & WIN
                            </div>
                        </div>
                    </motion.div>
                </div>



                <button
                    onClick={spin}
                    disabled={spinning}
                    className="flex items-center gap-4 rounded-3xl bg-lime-400 px-20 py-5 text-2xl font-semibold text-black transition hover:bg-lime-300 disabled:opacity-50"
                >
                    <i className="ri-star-line text-2xl"></i>

                    {spinning ? "Spinning..." : "Spin the Wheel!"}
                </button>
            </div>

        </div>
    )
}

export default Wheel
