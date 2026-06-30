import React from 'react'

const Active = () => {
    return (
        <div>
            <div className="space-y-4 mt-10 bg-[#0A0F06] rounded-xl p-5">
                {students.map((student, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl bg-[#141914] p-5 border-l-4 ${student.risk ? "border-pink-500" : "border-lime-400"
                            }`}
                    >

                        <div className="flex justify-between items-center">
                            <div className="flex gap-4">
                                <div className="h-12 w-12 rounded-full bg-lime-900 flex items-center justify-center text-lime-300 font-semibold">
                                    {student.avatar}
                                </div>

                                <div>
                                    <h2 className="text-white font-semibold">{student.name}</h2>
                                    <p className="text-xs text-gray-400">{student.email}</p>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <div
                                    className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs ${student.risk
                                        ? "bg-yellow-500/20 text-yellow-300"
                                        : "bg-lime-500/20 text-lime-300"
                                        }`}
                                >
                                    <i className="ri-checkbox-blank-circle-fill text-[8px]" />
                                    {student.status}
                                </div>

                                <div className="flex items-center gap-1 rounded-full bg-lime-500/20 px-3 py-1 text-xs text-lime-300">
                                    <i className="ri-trophy-line" />
                                    Rank {student.rank}
                                </div>
                            </div>
                        </div>


                        <div className="mt-5">
                            <div className="flex justify-between text-xs mb-2">
                                <span className="text-white">Course Progress</span>
                                <span className="text-lime-400 font-semibold">
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


                        <div className="grid grid-cols-6 gap-3 mt-5">
                            {[
                                {
                                    icon: "ri-award-line",
                                    color: "text-lime-400",
                                    value: student.xp,
                                    label: "XP Earned",
                                },
                                {
                                    icon: "ri-book-open-line",
                                    color: "text-blue-400",
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
                                    icon: "ri-folder-open-line",
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
                                    color: "text-gray-300",
                                    value: student.avg,
                                    label: "Avg/Day",
                                },
                            ].map((item, i) => (
                                <div key={i} className="rounded-xl bg-[#0B100B] p-3">
                                    <div className="flex items-center gap-2">
                                        <i className={`${item.icon} ${item.color} text-base`} />
                                        <span className="text-white font-semibold text-sm">
                                            {item.value}
                                        </span>
                                    </div>

                                    <p className="mt-2 text-[10px] text-gray-400">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Active
const students = [
    {
        name: "Rohit",
        email: "hi@example.com",
        avatar: "R",
        progress: 20,
        xp: "20",
        modules: "17/20",
        quiz: "2%",
        sessions: "8/10",
        streak: "12",
        avg: "45m",
        status: "ACTIVE",
        rank: "#1",
        risk: false,
    },
    {
        name: "Messi",
        email: "priya.patel@example.com",
        avatar: "P",
        progress: 78,
        xp: "2180",
        modules: "16/20",
        quiz: "88%",
        sessions: "9/10",
        streak: "8",
        avg: "52m",
        status: "ACTIVE",
        rank: "#2",
        risk: false,
    },
    {
        name: "Sneha Reddy",
        email: "sneha.reddy@example.com",
        avatar: "S",
        progress: 72,
        xp: "2020",
        modules: "14/20",
        quiz: "85%",
        sessions: "7/10",
        streak: "6",
        avg: "38m",
        status: "ACTIVE",
        rank: "#3",
        risk: false,
    },
    {
        name: "Vikram Singh",
        email: "vikram.singh@example.com",
        avatar: "V",
        progress: 65,
        xp: "1820",
        modules: "13/20",
        quiz: "80%",
        sessions: "6/10",
        streak: "5",
        avg: "42m",
        status: "ACTIVE",
        rank: "#5",
        risk: false,
    },
];
