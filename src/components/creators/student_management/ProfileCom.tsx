import React from 'react'
import ProfileComman from './ProfileComman';
const completion = {
    title: "Course Completed!🎉",
    desc: "Anjali Desai has successfully completed the course on 2026-05-20. Consider sending a certificate and requesting a testimonial.",
    icon: "ri-trophy-line",
    buttons: [
        {
            text: "Issue Certificate",
            icon: "ri-file-paper-2-line",
            className: "bg-blue-500 hover:bg-blue-600 text-white",
        },
        {
            text: "Offer Next Course",
            icon: "",
            className:
                "border border-[#2B3228] bg-[#1A1F18] text-white hover:bg-[#232822]",
        },
    ],
};

const refund = {
    title: "Performance Refund Eligible!",
    desc: "Anjali Desai qualifies for a full refund of ₹4,999 for exceptional performance!",
    icon: "ri-money-dollar-circle-line",
    criteria: [
        {
            label: "Course Completion",
            value: "100%",
        },
        {
            label: "Max Streak (min 20 days)",
            value: "25 days",
        },
        {
            label: "Total XP (min 3000)",
            value: "3200 XP",
        },
        {
            label: "Avg Quiz Score (min 90%)",
            value: "95%",
        },
    ],
    buttons: [
        {
            text: "Process Refund (₹4,999)",
            icon: "ri-money-dollar-circle-line",
            className: "bg-lime-400 text-black hover:bg-lime-300",
        },
        {
            text: "View Details",
            icon: "",
            className:
                "border border-[#2B3228] bg-[#1A1F18] text-white hover:bg-[#232822]",
        },
    ],
};

const achievements = [
    {
        icon: "ri-star-line",
        title: "Course Master",
    },
    {
        icon: "ri-star-line",
        title: "Perfect Attendance",
    },
    {
        icon: "ri-star-line",
        title: "Top Scorer",
    },
    {
        icon: "ri-star-line",
        title: "Completion Champion",
    },
];

const activities = [
    {
        icon: "ri-checkbox-circle-line",
        iconBg: "bg-lime-500/20",
        iconColor: "text-lime-400",
        title: "Completed Module 17: Advanced Option Strategies",
        time: "2 hours ago",
    },
    {
        icon: "ri-live-line",
        iconBg: "bg-blue-500/20",
        iconColor: "text-blue-400",
        title: "Attended Live Session: Market Analysis",
        time: "1 day ago",
    },
    {
        icon: "ri-book-open-line",
        iconBg: "bg-yellow-500/20",
        iconColor: "text-yellow-400",
        title: "Submitted Assignment: Risk Management",
        time: "2 days ago",
    },
];
interface Student {
    name: string;
    email: string;
    avatar: string;
    progress: number;
    xp: string;
    modules: string;
    quiz: string;
    sessions: string;
    streak: string;
    avg: string;
    status: string;
    badge?: string;
    border?: string;
    badgeColor?: string;
    rightBadgeColor?: string;
    rightIcon?: string;
    rank?: string;
}

interface ProfileCommanProps {
    student: Student | null;
    onClose: () => void;
}


const ProfileCom = ({student , onClose}:ProfileCommanProps) => {
    console.log('hi')
    console.log(student)
    return (
        <div>
            <div className="space-y-6 ">


                <div className="rounded-2xl border border-blue-700/40 bg-gradient-to-r from-[#171C15] to-[#23241C] p-6">
                    <div className="flex gap-4">
                        <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                            <i
                                className={`${completion.icon} text-2xl text-blue-400`}
                            />
                        </div>

                        <div className="flex-1">
                            <h2 className="text-xl font-semibold text-white">
                                {completion.title}
                            </h2>

                            <p className="mt-2 text-gray-400">
                                {completion.desc}
                            </p>

                            <div className="mt-6 flex gap-3">
                                {completion.buttons.map((button, index) => (
                                    <button
                                        key={index}
                                        className={`flex items-center gap-2 rounded-xl px-5 py-3 font-semibold transition ${button.className}`}
                                    >
                                        {button.icon && <i className={button.icon} />}
                                        {button.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Refund Card */}

                <div className="rounded-2xl border border-lime-700/40 bg-gradient-to-r from-[#171C15] to-[#23241C] p-6">
                    <div className="flex gap-4">
                        <div className="h-12 w-12 rounded-xl bg-lime-500/20 flex items-center justify-center">
                            <i
                                className={`${refund.icon} text-2xl text-lime-400`}
                            />
                        </div>

                        <div className="flex-1">
                            <h2 className="text-2xl font-semibold text-white">
                                {refund.title}
                            </h2>

                            <p className="mt-2 text-gray-400">
                                {refund.desc}
                            </p>

                            <div className="mt-6 rounded-2xl bg-[#090D08] p-6">
                                <h3 className="text-lg font-semibold text-white mb-5">
                                    Refund Criteria Met
                                </h3>

                                <div className="space-y-4">
                                    {refund.criteria.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between"
                                        >
                                            <div className="flex items-center gap-2 text-gray-300">
                                                <i className="ri-checkbox-circle-line text-lime-400" />
                                                {item.label}
                                            </div>

                                            <span className="font-semibold text-lime-400">
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 flex gap-4">
                                {refund.buttons.map((button, index) => (
                                    <button
                                        key={index}
                                        className={`flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition ${button.className}`}
                                    >
                                        {button.icon && <i className={button.icon} />}
                                        {button.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-6">

                {/* Achievements */}

                <div className="rounded-2xl border border-[#2B3228] bg-[#171C15] p-6">

                    <h2 className="text-2xl font-semibold text-white mb-6">
                        Achievements
                    </h2>

                    <div className="flex flex-wrap gap-4">
                        {achievements.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 rounded-xl border border-lime-700 bg-lime-500/10 px-5 py-3 text-lime-400 font-semibold"
                            >
                                <i className={`${item.icon} text-lg`} />
                                {item.title}
                            </div>
                        ))}
                    </div>

                </div>

                {/* Recent Activity */}

                <div className="rounded-2xl border border-[#2B3228] bg-[#171C15] p-6">

                    <h2 className="text-2xl font-semibold text-white mb-6">
                        Recent Activity
                    </h2>

                    <div className="space-y-6">
                        {activities.map((item, index) => (
                            <div key={index} className="flex gap-4">

                                <div
                                    className={`h-11 w-11 rounded-xl ${item.iconBg} flex items-center justify-center`}
                                >
                                    <i className={`${item.icon} ${item.iconColor} text-xl`} />
                                </div>

                                <div>
                                    <h3 className="text-white">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-400 mt-1">
                                        {item.time}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProfileCom
