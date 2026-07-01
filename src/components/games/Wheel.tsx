"use client"
import React from 'react'

import { motion } from "framer-motion";
import { useState } from "react";


const segments = [
    {
        text: "Bull\nor Bear",
        color: "#0D4F3A",
        textColor: "#A88BFF", // bright mint green
    },
    {
        text: "Candle\nID",
        color: "#3D6300",
        textColor: "#FF8C1A", // neon yellow-green
    },
    {
        text: "Price\nMemory",
        color: "#004F9F",
        textColor: "#FF4DB8", // bright sky blue
    },
    {
        text: "Pattern\nQuiz",
        color: "#805200",
        textColor: "#32E8C2", // golden yellow
    },
    {
        text: "Trend\nMatch",
        color: "#3A256D",
        textColor: "#2EF5A7", // lavender
    },
    {
        text: "Price\nUpdate",
        color: "#803600",
        textColor: "#C8FF1A", // orange
    },
    {
        text: "Risk\nRunner",
        color: "#6A0042",
        textColor: "#3EB5FF", // pink
    },
    {
        text: "Odd\nOne Out",
        color: "#00553F",
        textColor: "#FFC21A", // aqua green
    },
];
const darker = [
    "#2EF5A7",
    "#C8FF1A",
    "#3EB5FF",
    "#FFC21A",
    "#A88BFF",
    "#FF8C1A",
    "#FF4DB8",
    "#32E8C2",
];

const Wheel = () => {
    const [rotation, setRotation] = useState(0);
    const [spinning, setSpinning] = useState(false);
    const [spinCompleted, setSpinCompleted] = useState(false);



    const spin = () => {
        if (spinning) return;
        setSpinCompleted(false);
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
            setSpinCompleted(true)
        }, 5000);
    };

    return (
        <div className="flex flex-col items-center gap-5 ">
            <div className="flex flex-col items-center gap-12 ">

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
                    {/* Outer Glow */}
                    <div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                        style={{
                            width: "580px",
                            height: "580px",
                            background:
                                "radial-gradient(circle, transparent 60%, rgba(180,255,0,.18) 78%, rgba(180,255,0,.05) 100%)",
                            filter: "blur(35px)",
                        }}
                    />

                    {/* Inner Ring Glow */}
                    <div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                        style={{
                            width: "540px",
                            height: "540px",
                            border: "4px solid rgba(180,255,0,.35)",
                            boxShadow: "0 0 35px rgba(180,255,0,.45)",
                        }}
                    />






                    <motion.div
                        animate={{ rotate: rotation }}
                        transition={{
                            duration: 5,
                            ease: [0.12, 0.85, 0.2, 1],
                        }}
                        className="relative  flex h-[520px] w-[520px] items-center justify-center rounded-full border-[8px] border-lime-700 shadow-[0_0_80px_rgba(150,255,0,0.25)]"
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
                        <svg
                            className="absolute inset-0 h-full w-full"
                            viewBox="0 0 520 520"
                        >
                            {segments.map((_, index) => {
                                const cx = 260;
                                const cy = 260;
                                const r = 256;

                                const start = (index * 45 - 90) * (Math.PI / 180);
                                const end = ((index + 1) * 45 - 90) * (Math.PI / 180);

                                const x1 = cx + r * Math.cos(start);
                                const y1 = cy + r * Math.sin(start);

                                const x2 = cx + r * Math.cos(end);
                                const y2 = cy + r * Math.sin(end);

                                return (
                                    <path
                                        key={index}
                                        d={`M ${cx} ${cy}
              L ${x1} ${y1}
              A ${r} ${r} 0 0 1 ${x2} ${y2}
              Z`}
                                        fill="none"
                                        stroke={darker[index]}
                                        strokeWidth="5"
                                    />
                                );
                            })}
                        </svg>
                        <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-lime-400 bg-[#111]">
                            <div className="text-center font-bold text-lime-400">
                                SPIN
                                <br />
                                & WIN
                            </div>
                        </div>
                        {segments.map((segment, index) => {

                            const angle = index * 45 + 22.5;
                            const radius = 170;

                            return (
                                <div key={segment.text}
                                    className="absolute left-1/2 top-1/2.5 z-10  "
                                    style={{
                                        transform: `
            translate(-50%, -50%)
            rotate(${angle}deg)
            translateY(${radius}px)
        `,
                                    }}



                                >
                                    <div
                                        className="w-24 text-center"
                                        style={{
                                            transform: `rotate(${-angle}deg)`,
                                        }}
                                    >
                                        {segment.text.split("\n").map((line, i) => (
                                            <div
                                                key={i}
                                                className="text-lg font-bold leading-5"
                                                style={{ color: segment.textColor }}
                                            >
                                                {line}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}



                    </motion.div>
                </div>



                {!spinCompleted ? (
                    <button
                        onClick={spin}
                        disabled={spinning}
                        className="flex items-center gap-4 rounded-3xl bg-lime-400 px-20 py-5 text-2xl font-semibold text-black transition hover:bg-lime-300 disabled:opacity-50"
                    >
                        <i className="ri-star-line text-2xl"></i>
                        {spinning ? "Spinning..." : "Spin the Wheel!"}
                    </button>
                ) : (
                    <div className="w-fit space-y-8 pt-5">
                        <div className="rounded-[28px] border border-lime-700/70 px-5 py-5">
                            <div className="flex items-start justify-between gap-10">
                                <div className="flex items-start gap-5">
                                    <span className="text-2xl">🎉</span>

                                    <div>
                                        <p className="text-xl text-white/60">You unlocked</p>

                                        <h2 className="mt-1 text-3xl font-bold text-[#98FF00]">
                                            Candle ID
                                        </h2>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="text-xl font-semibold text-[#FFC928]">
                                        Win up to
                                    </p>

                                    <h2 className="mt-1 text-3xl font-bold text-[#FFC928]">
                                        200 XP
                                    </h2>
                                </div>
                            </div>

                            <button
                                className="mt-10 flex w-full items-center justify-center gap-4 rounded-2xl border-[3px] border-[#1F69B8] bg-[#08131E] py-2 text-xl font-semibold text-[#3896FF] transition-all duration-300 hover:bg-[#0D1A28]"
                            >
                                <i className="ri-play-line text-xl"></i>
                                Play Candle ID!
                            </button>
                        </div>

                        <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-[#151914] px-3 py-3 text-md font-semibold text-white/60">
                            ✓ Spun today · Come back tomorrow!
                        </div>
                    </div>
                )}
            </div>


        </div>
    )
}

export default Wheel
