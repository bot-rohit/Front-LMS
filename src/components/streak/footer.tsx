import React from 'react'

const footer = () => {
    const getCellStyles = (status: string) => {
        switch (status) {
            case "completed":
                return "bg-neon-green shadow-[0_0_18px_rgba(166,255,0,0.35)]";

            case "partial":
                return "bg-neon-green/30";

            case "missed":
                return "bg-[#1A2412]";

            case "future":
                return "border border-dashed border-[#344028] bg-transparent";

            default:
                return "";
        }
    };
    return (
        <div className='font-heading px-10 pt-10 pb-10' >
            <section className="overflow-hidden rounded-4xl  border border-[#1b2a0f] bg-gradient-to-br from-[#060b02] via-[#091301] to-[#111c08]">
                <div className="p-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-white">
                                Activity Calendar
                            </h2>

                            <p className="mt-2 text-gray-400">
                                Track your learning consistency and trading
                                discipline over the last 30 days.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-5">
                            <div className="flex items-center gap-2">
                                <div className="h-2.5 w-2.5 rounded-full bg-[#1A2412]" />

                                <span className="text-sm text-gray-400">
                                    Missed
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="h-2.5 w-2.5 rounded-full bg-neon-green/30" />

                                <span className="text-sm text-gray-400">
                                    Partial
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="h-2.5 w-2.5 rounded-full bg-neon-green" />

                                <span className="text-sm text-gray-400">
                                    Completed
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-5 gap-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
                        {activityCalendarData.map((day) => (
                            <div
                                key={day.day}
                                className={`group relative aspect-square rounded-xl transition-all duration-300 hover:scale-105 ${getCellStyles(
                                    day.status
                                )}`}
                            >
                                <div className="absolute left-2 top-2 text-[10px] font-semibold text-black/70">
                                    {day.status !== "future" && day.day}
                                </div>

                                <div className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100">
                                    <div className="flex h-full items-end justify-center pb-2 text-[10px] font-semibold text-black">
                                        Day {day.day}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex justify-start gap-15  pt-8 sm:grid-cols-3 font-sans">
                        {activityStats.map((stat) => (
                            <div key={stat.id}>
                                <div className="flex items-end gap-3">
                                    <h3
                                        className={`text-4xl font-bold ${stat.color}`}
                                    >
                                        {stat.value}
                                    </h3>

                                    <span className="mb-2 text-xs font-semibold uppercase tracking-[1px] text-gray-500">
                                        {stat.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
            <div className=" bg-black/40 px-8 py-5 flex justify-center w-full pt-10">
                <div className="flex  gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <p className="text-center text-sm text-gray-400 lg:text-left">
                        Trading streaks reset every Sunday at midnight
                        GMT. Use a "Streak Freeze" from the rewards
                        store if you're taking a day off.
                    </p>

                    {/* <button className="ml-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#A6FF00] text-black transition-all hover:scale-110">
                        <i className="ri-rocket-2-line text-xl"></i>
                    </button> */}
                </div>
            </div>




        </div>
    )
}

export default footer

const activityCalendarData = [
    {
        day: 1,
        status: "partial",
    },
    {
        day: 2,
        status: "partial",
    },
    {
        day: 3,
        status: "completed",
    },
    {
        day: 4,
        status: "completed",
    },
    {
        day: 5,
        status: "missed",
    },
    {
        day: 6,
        status: "partial",
    },
    {
        day: 7,
        status: "completed",
    },
    {
        day: 8,
        status: "partial",
    },
    {
        day: 9,
        status: "missed",
    },
    {
        day: 10,
        status: "completed",
    },
    {
        day: 11,
        status: "completed",
    },
    {
        day: 12,
        status: "completed",
    },
    {
        day: 13,
        status: "completed",
    },
    {
        day: 14,
        status: "completed",
    },
    {
        day: 15,
        status: "partial",
    },
    {
        day: 16,
        status: "missed",
    },
    {
        day: 17,
        status: "completed",
    },
    {
        day: 18,
        status: "completed",
    },
    {
        day: 19,
        status: "completed",
    },
    {
        day: 20,
        status: "missed",
    },
    {
        day: 21,
        status: "missed",
    },
    {
        day: 22,
        status: "completed",
    },
    {
        day: 23,
        status: "completed",
    },
    {
        day: 24,
        status: "completed",
    },
    {
        day: 25,
        status: "completed",
    },
    {
        day: 26,
        status: "completed",
    },
    {
        day: 27,
        status: "completed",
    },
    {
        day: 28,
        status: "completed",
    },
    {
        day: 29,
        status: "completed",
    },
    {
        day: 30,
        status: "future",
    },
];

const activityStats = [
    {
        id: 1,
        value: "24",
        label: "Total Days Active",
        color: "text-white",
    },
    {
        id: 2,
        value: "88%",
        label: "Accuracy Rate",
        color: "text-white",
    },
    {
        id: 3,
        value: "3,400",
        label: "Total XP Earned",
        color: "text-[#4D9FFF]",
    },
];
