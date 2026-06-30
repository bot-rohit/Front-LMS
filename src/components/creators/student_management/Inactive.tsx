import React from 'react'
const students = [
    {
        name: "Neha Gupta",
        email: "neha.gupta@example.com",
        avatar: "N",
        progress: 25,
        xp: "580",
        modules: "5/20",
        quiz: "65%",
        sessions: "1/10",
        streak: "0",
        avg: "12m",
        status: "INACTIVE",
        rank: "#12",
        border: "border-white/60",
    },
    {
        name: "Rohan Mehta",
        email: "rohan.mehta@example.com",
        avatar: "R",
        progress: 18,
        xp: "420",
        modules: "3/20",
        quiz: "58%",
        sessions: "0/10",
        streak: "0",
        avg: "8m",
        status: "INACTIVE",
        rank: "#15",
        border: "border-white/60",
    },
];
const Inactive = () => {
    return (
        <div>
            <div className="mt-10 bg-[#0A0F06] rounded-xl p-5">
                <div className="space-y-4">
                    {students.map((student, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border-l-4 ${student.border} bg-[#141914] p-5`}
                        >

                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-900/60 text-xl font-semibold text-lime-300">
                                        {student.avatar}
                                    </div>

                                    <div>
                                        <h2 className="text-lg font-semibold text-white">
                                            {student.name}
                                        </h2>

                                        <p className="text-xs text-white/45">
                                            {student.email}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <div className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold text-white/60">
                                        <i className="ri-checkbox-blank-circle-fill text-[7px]"></i>
                                        {student.status}
                                    </div>

                                    <div className="flex items-center gap-1 rounded-full bg-lime-500/20 px-3 py-1 text-[11px] font-semibold text-lime-400">
                                        <i className="ri-trophy-line"></i>
                                        Rank {student.rank}
                                    </div>
                                </div>
                            </div>


                            <div className="mt-6">
                                <div className="mb-2 flex items-center justify-between text-xs">
                                    <span className="font-medium text-white">
                                        Course Progress
                                    </span>

                                    <span className="font-semibold text-lime-400">
                                        {student.progress}%
                                    </span>
                                </div>

                                <div className="h-2 rounded-full bg-[#2F342E] overflow-hidden">
                                    <div
                                        className="h-full rounded-full bg-lime-400"
                                        style={{ width: `${student.progress}%` }}
                                    />
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-6 gap-3">
                                {[
                                    {
                                        icon: "ri-award-line",
                                        color: "text-lime-400",
                                        value: student.xp,
                                        label: "XP Earned",
                                    },
                                    {
                                        icon: "ri-book-open-line",
                                        color: "text-sky-400",
                                        value: student.modules,
                                        label: "Modules",
                                    },
                                    {
                                        icon: "ri-checkbox-circle-line",
                                        color: "text-lime-400",
                                        value: student.quiz,
                                        label: "Quiz Score",
                                    },
                                    {
                                        icon: "ri-vidicon-line",
                                        color: "text-yellow-400",
                                        value: student.sessions,
                                        label: "Sessions",
                                    },
                                    {
                                        icon: "ri-fire-line",
                                        color: "text-orange-400",
                                        value: student.streak,
                                        label: "Day Streak",
                                    },
                                    {
                                        icon: "ri-time-line",
                                        color: "text-gray-400",
                                        value: student.avg,
                                        label: "Avg/Day",
                                    },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="rounded-2xl bg-[#0B100B] p-4"
                                    >
                                        <div className="flex items-center gap-2">
                                            <i
                                                className={`${item.icon} ${item.color} text-sm`}
                                            ></i>

                                            <span className="text-sm font-semibold text-white">
                                                {item.value}
                                            </span>
                                        </div>

                                        <p className="mt-1 text-[10px] text-white/40">
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Inactive
