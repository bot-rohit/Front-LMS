'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link';
const modules = [
    {
        id: 1,
        title: "Foundations of Day Trading",
        xp: 650,
        completed: true,
        lessons: [
            { id: 1, title: "Intro to Market Mechanics", type: "video", xp: 50 },
            { id: 2, title: "Terminal Setup Guide", type: "document", xp: 100 },
            { id: 3, title: "Foundations Quiz", type: "quiz", xp: 500 }
        ]
    },
    {
        id: 2,
        title: "Advanced Technical Analysis",
        xp: 1200,
        completed: false,
        lessons: [
            { id: 1, title: "Candlestick Patterns", type: "video", xp: 150 },
            { id: 2, title: "Support & Resistance", type: "document", xp: 250 },
            { id: 3, title: "Technical Assessment", type: "quiz", xp: 800 }
        ]
    },
    {
        id: 3,
        title: "Risk & Psychology",
        xp: 600,
        completed: false,
        lessons: [
            { id: 1, title: "Trader Psychology", type: "video", xp: 100 },
            { id: 2, title: "Risk Framework", type: "document", xp: 200 },
            { id: 3, title: "Final Assessment", type: "quiz", xp: 300 }
        ]
    }
];

const mandatoryContent = [
    { id: 1, title: "Module 01: Foundations Exam", completed: true },
    { id: 2, title: "Module 03: Risk Assessment", completed: true },
    { id: 3, title: "Final Strategy Submission", completed: false }
];

const refundStats = {
    currentXP: 1800,
    requiredXP: 1800,
    totalXP: 2450,
    completion: 90,
    maxPotentialXP: 2450,
    eligibilityGap: 650,
    status: "ACTIVE"
};


const Xp = () => {
    const [openModule, setOpenModule] = useState(1);

    const totalXP = modules.reduce((acc, module) => acc + module.xp, 0);

    const lessonIcon = {
        video: "ri-play-circle-line",
        document: "ri-file-list-3-line",
        quiz: "ri-questionnaire-line"
    };
    return (
        <div>
            <div className="flex items-center justify-between border-b border-neon-green/10 pb-6 font-heading pt-15 mx-2 " >
                <div>

                    <h1 className="text-4xl font-bold text-white">
                        XP Mapping & Refund Logic
                    </h1>

                    <p className="mt-2 text-card-font">
                        Configure gamification rewards and strict refund eligibility criteria.
                    </p>

                </div>
                <div className="flex items-center gap-4">

                    <button
                        className="
                rounded-2xl
                border border-neon-green
                px-6 py-3
                font-medium
                text-neon-green
                transition
                hover:bg-neon-green/10
            "
                    >
                        Discard Changes
                    </button>

                    <Link href={'/creators/widgets'}
                        className="
                rounded-2xl
                bg-neon-green
                px-6 py-3
                font-semibold
                text-black
                transition
                hover:opacity-90
            "
                    >
                        Publish Policy
                    </Link>

                </div>

            </div>
            <div className='flex pt-5 gap-5'>
                <div className='w-[50%]'>
                    <div className="w-full rounded-3xl border border-neon-green/10 bg-gradient-to-br from-[#071007] via-[#0A120A] to-[#050805] p-6 shadow-[0_0_40px_rgba(163,255,18,0.05)]">

                        <div className="mb-8 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <i className="ri-layout-grid-line text-2xl text-neon-green"></i>
                                <h2 className="text-xl font-semibold text-white">Course Structure</h2>
                            </div>

                            <div className="flex items-center gap-2 text-xs text-zinc-400 font-sans">
                                <span>TOTAL MODULES: {modules.length}</span>
                                <span>|</span>
                                <span>TOTAL XP: {totalXP.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            {modules.map((module, index) => (
                                <div key={module.id} className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03]">

                                    <div
                                        onClick={() => setOpenModule(openModule === module.id ? 0 : module.id)}
                                        className={`flex cursor-pointer items-center justify-between p-5 transition-all duration-300 ${openModule === module.id ? "border-l-4 border-neon-green" : "border-l-4 border-transparent"}`}
                                    >
                                        <div className="flex items-center gap-4">

                                            <i className={`${openModule === module.id ? "ri-arrow-down-s-line text-neon-green" : "ri-arrow-right-s-line text-zinc-500"} text-xl`}></i>

                                            <div>
                                                <p className="mb-1 text-xs uppercase tracking-[2px] text-neon-green font-sans">
                                                    Module {String(index + 1).padStart(2, "0")}
                                                </p>

                                                <h3 className="text-md font-semibold text-white">
                                                    {module.title}
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-5">
                                            <span className="text-zinc-400 font-sans">{module.xp} XP</span>

                                            <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${module.completed ? "bg-neon-green text-black" : "border border-zinc-700 text-zinc-600"}`}>
                                                {module.completed ? (
                                                    <i className="ri-check-line text-lg"></i>
                                                ) : (
                                                    <i className="ri-close-line text-lg"></i>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {openModule === module.id && (
                                        <div className="pb-5 pl-16 pr-5">
                                            <div className="flex flex-col gap-3">
                                                {module.lessons.map((lesson) => (
                                                    <div
                                                        key={lesson.id}
                                                        className={`flex items-center justify-between rounded-xl border p-4 transition-all hover:border-neon-green/30 ${lesson.type === "quiz"
                                                            ? "border-neon-green/30 bg-neon-green/[0.03]"
                                                            : "border-white/10 bg-white/[0.02]"
                                                            }`}
                                                    >
                                                        <div className="flex items-center gap-3">

                                                            <i className={`${lessonIcon[lesson.type as keyof typeof lessonIcon]} text-lg text-neon-green`}></i>
                                                            <span className="text-base text-zinc-200">{lesson.title}</span>
                                                        </div>

                                                        <div className="flex items-center gap-3">
                                                            <div className="rounded-lg border border-neon-green/30 bg-black/40 px-4 py-2 font-sans text-center text-xl font-medium text-neon-green">
                                                                {lesson.xp}
                                                            </div>

                                                            <span className="text-xs uppercase tracking-widest text-zinc-500">
                                                                XP
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-4 flex justify-end">
                                                <button className="flex items-center gap-2 rounded-xl border border-neon-green/20 bg-neon-green/10 px-4 py-2 text-sm font-medium text-neon-green transition-all hover:bg-neon-green/20">
                                                    <i className="ri-play-circle-line"></i>
                                                    Continue Module
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
                <div className='w-[50%]'>
                    <div className="flex flex-col gap-5">

                     
                        <div className="rounded-3xl border border-l-4 border-l-neon-green border-neon-green/20  bg-gradient-to-br from-[#091109] via-[#101610] to-[#060806] p-6">

                            <div className="mb-8 flex items-center gap-3">
                                <i className="ri-shield-check-line text-xl text-neon-green"></i>
                                <h2 className="text-2xl font-semibold text-white">
                                    Refund Policy Rules
                                </h2>
                            </div>

                            <div className="mb-8">
                                <p className="mb-4 text-xs uppercase tracking-[3px] text-zinc-500">
                                    Minimum XP Threshold
                                </p>

                                <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                                    <div
                                        className="h-full rounded-full bg-neon-green"
                                        style={{ width: `${(refundStats.currentXP / refundStats.totalXP) * 100}%` }}
                                    />
                                </div>

                                <div className="flex items-center justify-between text-xs font-sans">
                                    <span className="text-zinc-500">0 XP</span>
                                    <span className="font-medium text-neon-green">
                                        {refundStats.requiredXP.toLocaleString()} XP REQUIRED
                                    </span>
                                    <span className="text-zinc-500">
                                        {refundStats.totalXP.toLocaleString()} XP
                                    </span>
                                </div>
                            </div>

                            <div className="mb-8">
                                <p className="mb-4 text-xs uppercase tracking-[3px] text-zinc-500">
                                    Mandatory Content
                                </p>

                                <div className="flex flex-col gap-3">
                                    {mandatoryContent.map((item) => (
                                        <div key={item.id} className="flex items-center gap-3 rounded-xl border border-white/5 bg-black/20 p-4">

                                            <div className={`flex h-5 w-5 items-center justify-center rounded-md ${item.completed ? "bg-neon-green text-black" : "border border-white/15"}`}>
                                                {item.completed && (
                                                    <i className="ri-check-line text-xs"></i>
                                                )}
                                            </div>

                                            <span className="text-zinc-200">
                                                {item.title}
                                            </span>

                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="mb-4 text-xs uppercase tracking-[3px] text-zinc-500">
                                    Total Course Completion
                                </p>

                                <div className="flex items-end gap-4">
                                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                                        <div
                                            className="h-full rounded-full bg-neon-green"
                                            style={{ width: `${refundStats.completion}%` }}
                                        />
                                    </div>

                                    <span className="text-3xl font-sans font-semibold text-white">
                                        {refundStats.completion}%
                                    </span>
                                </div>
                            </div>

                        </div>


                        <div className="rounded-3xl border border-neon-green/20 bg-[#282B22CC]/50 p-6 border-l-4 border-l-neon-green">

                            <h3 className="mb-6 text-sm uppercase tracking-[2px] text-neon-green">
                                Elite Policy Preview
                            </h3>

                            <div className="mb-6 grid grid-cols-2 gap-4">

                                <div className="rounded-xl bg-black/60 p-4">
                                    <p className="mb-2 text-xs uppercase text-zinc-500">
                                        Max Potential XP
                                    </p>

                                    <h4 className="text-3xl font-sans font-semibold text-white">
                                        {refundStats.maxPotentialXP.toLocaleString()}
                                    </h4>
                                </div>

                                <div className="rounded-xl bg-black/60 p-4">
                                    <p className="mb-2 text-xs uppercase text-zinc-500">
                                        Eligibility Gap
                                    </p>

                                    <h4 className="text-3xl font-sans font-semibold text-zinc-300">
                                        {refundStats.eligibilityGap} XP
                                    </h4>
                                </div>

                            </div>

                            <div className="mb-4 flex items-center justify-between">
                                <span className="text-zinc-400">
                                    System Status
                                </span>

                                <div className="rounded-lg bg-neon-green/15 px-3 py-1 text-xs font-medium text-neon-green">
                                    {refundStats.status}
                                </div>
                            </div>

                            <div className="rounded-2xl bg-black/60 p-5">
                                <div className="mb-3 flex items-center gap-3">
                                    <i className="ri-information-line text-neon-green"></i>

                                    <span className="font-medium text-white">
                                        STUDENT LOGIC VIEW
                                    </span>
                                </div>

                                <p className="text-sm leading-7 text-zinc-400">
                                    To qualify for a refund, you must achieve at least
                                    <span className="mx-1 text-neon-green">1,800 XP</span>
                                    and complete
                                    <span className="mx-1 text-neon-green">90%</span>
                                    of the curriculum including all mandatory modules.
                                </p>
                            </div>

                            <div className="mt-6 flex items-center gap-3">
                                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                                    <div className="h-full w-[92%] rounded-full bg-neon-green"></div>
                                </div>

                                <span className="text-[10px] uppercase tracking-wider text-zinc-500">
                                    Synced To ETH
                                </span>
                            </div>

                        </div>

                        <div className="flex items-start gap-4 rounded-2xl border border-neon-green/10 bg-neon-green/10 border-l-4 mb-10 border-l-neon-green p-5">

                            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-neon-green/10">
                                <i className="ri-sparkling-2-line text-neon-green"></i>
                            </div>

                            <div>
                                <h4 className="mb-2 font-semibold text-white">
                                    AI Recommendation
                                </h4>

                                <p className="text-sm leading-6 text-zinc-400">
                                    Your current refund threshold (1,800 XP) is 15% higher
                                    than average successful courses. This might increase
                                    student trust but may slightly reduce total sales volume.
                                </p>
                            </div>

                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Xp
