import React from 'react'
const students = [
    {
        name: "Anjali Desai",
        email: "anjali.desai@example.com",
        avatar: "A",
        progress: 100,
        xp: "3200",
        modules: "20/20",
        quiz: "95%",
        sessions: "10/10",
        streak: "0",
        avg: "48m",
        status: "COMPLETED",
        badge: "Refunded",
        border: "border-lime-400",
        badgeColor: "bg-blue-500/20 text-blue-400",
        rightBadgeColor: "bg-lime-500/20 text-lime-400",
        rightIcon: "ri-money-dollar-circle-line",
    },
    {
        name: "Karthik Iyer",
        email: "karthik.iyer@example.com",
        avatar: "K",
        progress: 100,
        xp: "2980",
        modules: "20/20",
        quiz: "90%",
        sessions: "9/10",
        streak: "0",
        avg: "44m",
        status: "COMPLETED",
        badge: "Eligible for Refund",
        border: "border-yellow-400",
        badgeColor: "bg-blue-500/20 text-blue-400",
        rightBadgeColor: "bg-yellow-500/20 text-yellow-300",
        rightIcon: "ri-coupon-3-line",
    },
    {
        name: "Manish Verma",
        email: "manish.verma@example.com",
        avatar: "M",
        progress: 100,
        xp: "2100",
        modules: "20/20",
        quiz: "82%",
        sessions: "7/10",
        streak: "0",
        avg: "32m",
        status: "COMPLETED",
        badge: "Not Eligible for Refund",
        border: "border-pink-500",
        badgeColor: "bg-blue-500/20 text-blue-400",
        rightBadgeColor: "bg-pink-500/20 text-pink-400",
        rightIcon: "ri-close-circle-line",
    },
];

const Completed = () => {
    return (
        <div>

            <div className="space-y-4 mb-5 mt-10 bg-[#0A0F06] rounded-xl p-5 ">
                {students.map((student, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl border-l-4  ${student.border} bg-[#141914] p-5`}
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-900/60 text-xl font-semibold text-lime-300">
                                    {student.avatar}
                                </div>

                                <div>
                                    <h2 className="text-[18px] font-semibold text-white">
                                        {student.name}
                                    </h2>

                                    <p className="text-xs text-white/45">
                                        {student.email}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <div
                                    className={`${student.badgeColor} flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-semibold uppercase`}
                                >
                                    <i className="ri-checkbox-blank-circle-fill text-[7px]"></i>
                                    {student.status}
                                </div>

                                <div
                                    className={`${student.rightBadgeColor} flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-medium`}
                                >
                                    <i className={student.rightIcon}></i>
                                    {student.badge}
                                </div>
                            </div>
                        </div>

                        {/* Progress */}
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

                        {/* Bottom Cards */}
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

export default Completed
