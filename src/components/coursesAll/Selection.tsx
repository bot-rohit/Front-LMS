import React from 'react'
const moduleStats = {
    currentDay: 18,
    totalDays: 50,
    progress: 36,
    completed: 17,
    missed: 1,
};

const modules = [
    {
        day: 1,
        title: "Introduction to Markets",
        subtitle: "Completed on Oct 12, 2024",
        status: "completed",
    },
    {
        day: 10,
        title: "Candlestick Patterns",
        subtitle: "Completed on Oct 21, 2024",
        status: "completed",
        badge: "BOOSTER UNLOCKED",
    },
    {
        day: 15,
        title: "Technical Indicators Part I",
        subtitle: "Session Missed",
        status: "missed",
    },
    {
        day: 18,
        title: "Risk Management Basics",
        subtitle: "Active Today: Start your session now",
        status: "current",
    },
    {
        day: 19,
        title: "Emotional Discipline",
        subtitle: "Locked until previous module completion",
        status: "locked",
    },
    {
        day: 20,
        title: "Advanced Position Sizing",
        subtitle: "Locked",
        status: "locked",
    },
    {
        day: 25,
        title: "Mid-Way Mastery Challenge",
        subtitle: "",
        status: "challenge",
        badge: "BOOSTER UNLOCKED",
    },
];

const selection = () => {
    return (
        <div className='px-10 pt-20 font-heading'>
            <div className="grid grid-cols-[1fr_2fr] gap-10 ">

                <div>
                    <p className="text-xs font-semibold tracking-[2px] text-neon-green uppercase">
                        Current Selection
                    </p>
                    <h2 className="mt-3 text-4xl font-bold leading-tight text-white">
                        Trading Basics
                        <br />
                        Module Breakdown
                    </h2>

                    <p className="mt-5 text-card-font">
                        Track your curriculum progress. Every day is a brick in your
                        financial fortress. Do not skip the foundation.
                    </p>

                    <div className="mt-8 rounded-3xl border border-[#1A2608] bg-[#071000] p-5">
                        <p className="text-xs uppercase tracking-widest text-gray-400">
                            Current Status
                        </p>
                        <div className="mt-3 flex items-center justify-between font-sans">
                            <h3 className="text-3xl font-bold text-neon-green">
                                Day {moduleStats.currentDay} of {moduleStats.totalDays}
                            </h3>

                            <span className="text-3xl font-bold text-white">
                                {moduleStats.progress}%
                            </span>
                        </div>
                        <div className="mt-5 h-3 overflow-hidden rounded-full bg-[#333]">
                            <div
                                className="h-full rounded-full bg-neon-green"
                                style={{ width: `${moduleStats.progress}%` }}
                            />
                        </div>
                    </div>


                    <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className="rounded-xl bg-[#11170A] px-4 py-4">
                            <div className="flex items-center gap-2">
                                <span className="p-1 rounded-full bg-neon-green" />
                                <span className="text-xs text-card-font">
                                    {moduleStats.completed} COMPLETED
                                </span>
                            </div>
                        </div>

                        <div className="rounded-xl bg-[#11170A] px-4 py-4">
                            <div className="flex items-center gap-2">
                                <span className="p-1 rounded-full bg-red-given" />
                                <span className="text-xs text-card-font">
                                    {moduleStats.missed} MISSED
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="rounded-3xl border border-[#1A2608] bg-[#071000] p-6">
                    <div className="flex flex-col gap-5">
                        {modules.map((module) => (
                            <div
                                key={module.day}
                                className={`flex items-center justify-between rounded-2xl p-5
                ${module.status === "current"
                                        ? "border border-neon-green bg-[#1B2514]"
                                        : "bg-[#11170A]"
                                    }
                ${module.status === "challenge"
                                        ? "border border-dashed border-[#2A2A2A]"
                                        : ""
                                    }
              `}
                            >
                                <div className="flex items-center gap-5">
                                    <div
                                        className={`flex h-10 w-10 items-center justify-center rounded-full font-bold font-sans
                    ${module.status === "completed"
                                                ? "bg-neon-green text-black"
                                                : module.status === "current"
                                                    ? "bg-neon-green text-black"
                                                    : module.status === "missed"
                                                        ? "bg-[#6A3A00] text-[#FF9D00]"
                                                        : "bg-[#1A1A1A] text-gray-500"
                                            }
                  `}
                                    >
                                        {module.day}
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2">
                                            <p
                                                className={`font-semibold ${module.status === "current"
                                                    ? "text-neon-green"
                                                    : "text-white"
                                                    }`}
                                            >
                                                {module.title}
                                            </p>

                                            {module.badge && (
                                                <span className="rounded bg-red-given px-3 py-0.5 text-xs ml-4 font-bold text-white">
                                                    {module.badge}
                                                </span>
                                            )}
                                        </div>

                                        <p
                                            className={`text-sm ${module.status === "missed"
                                                ? "text-[#FF9D00]"
                                                : "text-gray-400"
                                                }`}
                                        >
                                            {module.subtitle}
                                        </p>
                                    </div>
                                </div>

                         
                                {module.status === "completed" && (
                                    <i className="ri-checkbox-circle-fill text-2xl text-neon-green" />
                                )}

                                {module.status === "missed" && (
                                    <button className="text-xs font-semibold text-neon-green">
                                        RETAKE MODULE
                                    </button>
                                )}

                                {module.status === "current" && (
                                    <button className="rounded-full bg-[#A6FF00] px-5 py-2 text-xs font-bold text-black">
                                        RESUME
                                    </button>
                                )}

                                {["locked", "challenge"].includes(module.status) && (
                                    <i className="ri-lock-line text-xl text-gray-500" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default selection
