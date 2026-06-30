import React from 'react'


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
const achievements = [
    {
        icon: "ri-star-line",
        title: "Quick Learner",
    },
    {
        icon: "ri-star-line",
        title: "Perfect Score",
    },
    {
        icon: "ri-star-line",
        title: "Streak Master",
    },
];

const recentActivity = [
    {
        icon: "ri-checkbox-circle-line",
        iconColor: "text-lime-400",
        bg: "bg-lime-500/10",
        title: "Completed Module 17: Advanced Option Strategies",
        time: "2 hours ago",
    },
    {
        icon: "ri-vidicon-line",
        iconColor: "text-blue-400",
        bg: "bg-blue-500/10",
        title: "Attended Live Session: Market Analysis",
        time: "1 day ago",
    },
    {
        icon: "ri-book-open-line",
        iconColor: "text-yellow-400",
        bg: "bg-yellow-500/10",
        title: "Submitted Assignment: Risk Management",
        time: "2 days ago",
    },
];


const ProfileComman = ({ student, onClose }: ProfileCommanProps) => {

    const actions = [
        {
            text: "Send Message",
            icon: "ri-mail-line",
            className:
                "border text-sm border-lime-700 bg-[#18220D] text-lime-400 hover:bg-[#1F2C11]",
        },

        student?.progress === 10
            ? {
                text: "Send Encouragement",
                icon: "ri-send-plane-line",
                className:
                    "border border-yellow-700 bg-[#2B2A10] text-yellow-400 hover:bg-[#383517] text-sm",
            }
            : student?.progress === 100
                ? {
                    text: "Refund Student",
                    icon: "ri-money-dollar-circle-line",
                    className:
                        "border border-lime-700 bg-[#18220D] text-lime-400 hover:bg-[#1F2C11] text-sm",
                }
                : {

                },
    ];

    const stats = [
        {
            icon: "ri-trophy-line",
            color: "text-yellow-400",
            value: student?.rank,
            label: "Leaderboard Rank",
        },
        {
            icon: "ri-award-line",
            color: "text-lime-400",
            value: student?.xp,
            label: "Total XP",
        },
        {
            icon: "ri-fire-line",
            color: "text-orange-400",
            value: student?.streak,
            label: "Day Streak",
        },
        {
            icon: "ri-time-line",
            color: "text-blue-400",
            value: student?.avg,
            label: "Daily Avg",
        },
    ];

    const details = [
        {
            title: "Current Rank",
            value: student?.rank ?? "--",
        },
        {
            title: "Learning Streak",
            value: `${student?.streak} Days`,
        },
        {
            title: "Average Study Time",
            value: student?.avg,
        },
    ];


    return (
        <div>
            <div className="space-y-6 bg-[#0A0F06] rounded-2xl px-10 py-10">
                <div className="flex items-start justify-between">
                    <div className="flex gap-4 justify-between items-center">
                        <div className="h-10 w-10 rounded-full bg-lime-900 flex items-center justify-center text-xl font-bold text-lime-300">
                            {student?.avatar}
                        </div>

                        <div >
                            <h1 className="text-xl font-bold text-white">
                                {student?.name}
                            </h1>

                            <p className="text-gray-400 text-sm">
                                {student?.email}
                            </p>
                        </div>

                    </div>

                    <div className="flex items-center gap-2 justify-between">
                        {actions.map((item, index) => (
                            <button
                                key={index}
                                className={`flex items-center gap-2 rounded-2xl px-4 py-2 font-semibold transition ${item.className}`}
                            >
                                <i className={`${item.icon} text-sm`} />
                                {item.text}
                            </button>
                        ))}

                        <button
                            onClick={onClose}
                            className="text-xl text-gray-500 transition hover:text-white"
                        >
                            <i className="ri-close-line" />
                        </button>
                    </div>

                </div>
                <hr className='bg-white/90 h-0.5' />




                <div className="grid grid-cols-4 gap-5">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-[#2B3228] bg-[#171C15] px-6 py-3"
                        >
                            <div className="flex items-center gap-3">
                                <i className={`${item.icon} ${item.color} text-2xl`} />

                                <h2 className="text-2xl font-sans font-bold text-white">
                                    {item.value}
                                </h2>
                            </div>

                            <p className="mt-3 text-sm text-white">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="rounded-3xl border border-[#2B3228] bg-[#171C15] px-8 py-5">
                    <h2 className="text-2xl font-bold text-white">
                        Course Progress
                    </h2>

                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-md text-white/60">
                            Overall Progress
                        </span>

                        <span className="text-md font-bold text-neon-green">
                            {student?.progress}%
                        </span>
                    </div>

                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-[#31352E]">
                        <div
                            className="h-full rounded-full bg-neon-green"
                            style={{ width: `${student?.progress}%` }}
                        />
                    </div>

                    <div className="mt-7 grid grid-cols-3 gap-8">
                        <div>
                            <p className="text-white">
                                Modules Completed
                            </p>

                            <h3 className="mt-2 text-2xl font-sans font-bold text-white">
                                {student?.modules}
                            </h3>
                        </div>

                        <div>
                            <p className="text-white">
                                Sessions Attended
                            </p>

                            <h3 className="mt-2 text-2xl font-sans font-bold text-white">
                                {student?.sessions}
                            </h3>
                        </div>

                        <div>
                            <p className="text-white">
                                Avg. Quiz Score
                            </p>

                            <h3 className="mt-2 text-2xl font-sans font-bold text-white">
                                {student?.quiz}
                            </h3>
                        </div>
                    </div>
                </div>
                {student?.progress === 100 && (
                    <div className="space-y-6">



                        <div className="rounded-3xl border border-blue-500/40 bg-[#171C15] p-6">
                            <div className="flex gap-4">

                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20">
                                    <i className="ri-trophy-line text-2xl text-blue-400"></i>
                                </div>

                                <div className="flex-1">
                                    <h2 className="text-2xl font-semibold text-white">
                                        Course Completed! 🎉
                                    </h2>

                                    <p className="mt-2 text-white/50">
                                        {student.name} has successfully completed the course.
                                        Consider sending a certificate and requesting a testimonial.
                                    </p>

                                    <div className="mt-6 flex gap-4">
                                        <button className="flex items-center gap-2 rounded-2xl bg-blue-500 px-6 py-3 font-semibold text-white">
                                            <i className="ri-file-paper-2-line"></i>
                                            Issue Certificate
                                        </button>

                                        <button className="rounded-2xl border border-white/10 bg-[#1B2018] px-6 py-3 font-semibold text-white">
                                            Offer Next Course
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

       

                        <div className="rounded-3xl border border-lime-500/40 bg-[#171C15] p-6">
                            <div className="flex gap-4">

                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-500/20">
                                    <i className="ri-money-dollar-circle-line text-2xl text-lime-400"></i>
                                </div>

                                <div className="flex-1">

                                    <h2 className="text-2xl font-semibold text-white">
                                        Performance Refund Eligible!
                                    </h2>

                                    <p className="mt-2 text-white/50">
                                        {student.name} qualifies for a full refund for exceptional performance.
                                    </p>

                                    <div className="mt-6 rounded-2xl bg-[#0D120A] p-5">
                                        <h3 className="mb-4 text-lg font-semibold text-white">
                                            Refund Criteria Met
                                        </h3>

                                        <div className="space-y-3 ">

                                            {[
                                                ["Course Completion", "100%"],
                                                ["Max Streak (min 20 days)", "25 days"],
                                                ["Total XP (min 3000)", `${student.xp} XP`],
                                                ["Avg Quiz Score (min 90%)", student.quiz],
                                            ].map(([label, value], index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center justify-between"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <i className="ri-checkbox-circle-line text-xl text-neon-green"></i>

                                                        <span className="text-white/60">
                                                            {label}
                                                        </span>
                                                    </div>

                                                    <span className="font-semibold text-neon-green font-sans">
                                                        {value}
                                                    </span>
                                                </div>
                                            ))}

                                        </div>
                                    </div>

                                    <div className="mt-6 flex gap-4">

                                        <button className="flex items-center gap-2 font-sans rounded-2xl bg-neon-green px-6 py-2 font-semibold text-black">
                                            <i className="ri-money-dollar-circle-line"></i>
                                            Process Refund (€4,999)
                                        </button>

                                        <button className="rounded-2xl border border-white/10 bg-[#1B2018] px-6 py-2 font-semibold text-white">
                                            View Details
                                        </button>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                )}

                {student?.progress === 10 && (
                    <div className="rounded-3xl border border-yellow-600/40 bg-[#171C15] p-6">
                        <div className="flex gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/20">
                                <i className="ri-line-chart-line text-2xl text-yellow-400"></i>
                            </div>

                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold text-white">
                                    At-Risk Student
                                </h2>

                                <p className="mt-2 text-white/50">
                                    {student.name} shows signs of disengagement. Last active
                                    5 days ago. Streak: {student.streak} days. Early
                                    intervention recommended.
                                </p>

                                <div className="mt-6 flex gap-4">
                                    <button className="flex items-center gap-2 rounded-2xl bg-neon-green px-6 py-3 font-semibold text-black">
                                        <i className="ri-send-plane-line"></i>
                                        Send Encouragement
                                    </button>

                                    <button className="rounded-2xl border border-white/10 bg-[#1B2018] px-6 py-3 font-semibold text-white">
                                        Offer Support
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="space-y-5">



                    <div className="rounded-3xl border border-[#2B3228] bg-[#171C15] p-8">
                        <h2 className="text-2xl font-bold text-white">
                            Achievements
                        </h2>

                        <div className="mt-4 flex flex-wrap gap-4">
                            {achievements.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 rounded-2xl border border-lime-700 bg-lime-500/10 px-6 py-2"
                                >
                                    <i
                                        className={`${item.icon} text-xl text-lime-400`}
                                    />

                                    <span className="text-md font-semibold text-lime-400">
                                        {item.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>



                    <div className="rounded-3xl border border-[#2B3228] bg-[#171C15] px-8 pt-8 pb-5">
                        <h2 className="text-2xl font-bold text-white">
                            Recent Activity
                        </h2>

                        <div className="mt-8 space-y-4">
                            {recentActivity.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-5 align-middle"
                                >
                                    <div
                                        className={`flex h-10 w-10 items-center justify-center rounded-2xl ${item.bg}`}
                                    >
                                        <i
                                            className={`${item.icon} ${item.iconColor} text-xl`}
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-md font-medium text-white">
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 text-md text-white/50">
                                            {item.time}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>



            </div>

        </div >
    )
}

export default ProfileComman
