import React from 'react'
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

const statusData = [
    { week: "Week 1", completed: 0, active: 5, atRisk: 0, inactive: 0 },
    { week: "Week 2", completed: 0, active: 5, atRisk: 0, inactive: 0 },
    { week: "Week 3", completed: 0, active: 5, atRisk: 0, inactive: 0 },
    { week: "Week 4", completed: 1, active: 6, atRisk: 1, inactive: 2 },
    { week: "Week 5", completed: 5, active: 6, atRisk: 1, inactive: 2 },
    { week: "Week 6", completed: 8, active: 5, atRisk: 0, inactive: 1 },
];

const engagementData = [
    { day: "Mon", sessions: 42, time: 32 },
    { day: "Tue", sessions: 45, time: 35 },
    { day: "Wed", sessions: 38, time: 35 },
    { day: "Thu", sessions: 44, time: 40 },
    { day: "Fri", sessions: 35, time: 30 },
    { day: "Sat", sessions: 28, time: 24 },
    { day: "Sun", sessions: 25, time: 20 },
];

const funnel = [
    {
        id: 1,
        title: "Enrolled",
        count: 5,
        percent: 100,
    },
    {
        id: 2,
        title: "Started Course",
        count: 5,
        percent: 100,
    },
    {
        id: 3,
        title: "50% Complete",
        count: 4,
        percent: 80,
    },
    {
        id: 4,
        title: "80% Complete",
        count: 3,
        percent: 60,
    },
    {
        id: 5,
        title: "Completed",
        count: 1,
        percent: 20,
    },
];

const insights = [
    {
        id: 1,
        title: "Avg. Daily Study Time",
        value: "39m",
        icon: "ri-time-line",
        color: "text-blue-400",
    },
    {
        id: 2,
        title: "Live Session Attendance",
        value: "78%",
        icon: "ri-vidicon-line",
        color: "text-yellow-400",
    },
    {
        id: 3,
        title: "Avg. Quiz Score",
        value: "85%",
        icon: "ri-checkbox-circle-line",
        color: "text-neon-green",
    },
];

const completedStudents = [
    {
        id: 1,
        name: "Anjali Desai",
        initials: "A",
        xp: 3200,
        score: 95,
        refund: true,
        processed: false,
    },
    {
        id: 2,
        name: "Karthik Iyer",
        initials: "K",
        xp: 2880,
        score: 90,
        refund: true,
        processed: true,
    },
    {
        id: 3,
        name: "Manish Verma",
        initials: "M",
        xp: 2100,
        score: 82,
        refund: false,
        processed: false,
    },
];

const inactiveStudents = [
    {
        id: 1,
        name: "Neha Gupta",
        initials: "N",
        last: "3 weeks ago",
        completion: "25%",
    },
    {
        id: 2,
        name: "Rohan Mehta",
        initials: "R",
        last: "1 month ago",
        completion: "18%",
    },
];
const Anylysis = () => {
    const CustomTooltip = ({ active, payload, label }: any) => {
        if (!active || !payload || !payload.length) return null;

        const data = payload[0].payload;

        return (
            <div className="rounded-xl border border-[#2A2A2A] bg-black/40 p-4 text-white shadow-lg">
                <p className="mb-2 font-semibold">{label}</p>

                <p>🟢 Active: {data.active}</p>
                <p>✅ Completed: {data.completed}</p>
                <p>⚠️ At Risk: {data.atRisk}</p>
            </div>
        );
    };
    return (
        <div>
            <div className="space-y-6 font-heading">

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">


                    <div className="rounded-3xl border border-white/10 bg-[#11150E] p-6">

                        <h2 className="mb-6 text-2xl font-semibold text-white">
                            Student Status Over Time
                        </h2>

                        <ResponsiveContainer width="100%" height={260}>
                            <AreaChart data={statusData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                                <XAxis dataKey="week" stroke="#6b7280" />
                                <YAxis stroke="#6b7280" />
                                <Tooltip content={<CustomTooltip />} />
                                <Area
                                    type="monotone"
                                    dataKey="active"
                                    stroke="#9EFF00"
                                    fill="#9EFF00"
                                    fillOpacity={0.15}
                                />
                            </AreaChart>
                        </ResponsiveContainer>

                        <div className="mt-5 flex justify-center gap-6 text-sm">

                            <div className="flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                                Completed
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full bg-neon-green"></span>
                                Active
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                                At Risk
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full bg-white/40"></span>
                                Inactive
                            </div>

                        </div>

                    </div>



                    <div className="rounded-3xl border border-white/10 bg-[#11150E] p-6">

                        <h2 className="mb-6 text-2xl font-semibold text-white">
                            Daily Engagement Pattern
                        </h2>

                        <ResponsiveContainer width="100%" height={260}>
                            <LineChart data={engagementData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                                <XAxis dataKey="day" stroke="#6b7280" />
                                <YAxis stroke="#6b7280" />
                                <Tooltip content={<CustomTooltip />} />
                                <Line
                                    type="monotone"
                                    dataKey="sessions"
                                    stroke="#9EFF00"
                                    strokeWidth={3}
                                    dot={{ r: 4 }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="time"
                                    stroke="#3b82f6"
                                    strokeWidth={3}
                                    dot={{ r: 4 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>

                        <div className="mt-5 flex justify-center gap-8 text-sm">

                            <div className="flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full bg-neon-green"></span>
                                Active Sessions
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                                Avg Time (minutes)
                            </div>

                        </div>

                    </div>

                </div>



                <div className="rounded-3xl border border-white/10 bg-[#11150E] p-8 ">

                    <h2 className="mb-8 text-3xl font-semibold text-white">
                        Completion Funnel
                    </h2>

                    <div className="space-y-6">

                        {funnel.map((item) => (

                            <div key={item.id}>

                                <div className="mb-2 flex items-center justify-between">

                                    <span className="text-white">
                                        {item.title}
                                    </span>

                                    <span className="font-medium text-neon-green">
                                        {item.count} ({item.percent}%)
                                    </span>

                                </div>

                                <div className="h-2 overflow-hidden rounded-full bg-white/10">

                                    <div
                                        className="h-full rounded-full bg-neon-green transition-all duration-500"
                                        style={{ width: `${item.percent}%` }}
                                    />

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

            <div className="space-y-6 font-heading mt-8">

      

                <div className="rounded-3xl border border-white/10 bg-[#11150E] p-6">

                    <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon-green/10">
                            <i className="ri-bar-chart-box-line text-neon-green"></i>
                        </div>

                        <h2 className="text-2xl font-semibold text-white">
                            Key Insights
                        </h2>

                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">

                        {insights.map((item) => (

                            <div
                                key={item.id}
                                className="rounded-2xl bg-black/25 p-5"
                            >

                                <div className="flex items-center gap-3">

                                    <i className={`${item.icon} ${item.color}`}></i>

                                    <span className="text-3xl font-semibold text-white font-sans">
                                        {item.value}
                                    </span>

                                </div>

                                <p className="mt-4 text-sm text-white/50">
                                    {item.title}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

   

                <div className="grid grid-cols-1 xl:grid-cols-[1fr_0.9fr] gap-6 mb-10 items-start">



                    <div className="rounded-3xl border border-white/10 bg-[#11150E] py-6 px-10">

                        <div className="flex items-center gap-3">

                            <i className="ri-trophy-line text-xl text-blue-400"></i>

                            <div>

                                <h2 className="text-2xl font-semibold text-white">
                                    Completed Students (3)
                                </h2>

                                <p className="text-sm text-white/40">
                                    Celebrate and retain your graduates
                                </p>

                            </div>

                        </div>


                        <div className="mt-6 rounded-2xl border border-neon-green/20 bg-neon-green/10 p-5">

                            <div className="flex items-center justify-between">

                                <h3 className="font-semibold text-white">
                                    ₹ Performance Refund Program
                                </h3>

                                <span className="text-sm font-medium text-neon-green">
                                    2 Eligible
                                </span>

                            </div>

                            <p className="mt-3 text-sm text-white/50">
                                Students who complete with 20+ day streak, 3000+ XP and
                                90%+ quiz score get full refund.
                            </p>

                            <div className="mt-5 grid grid-cols-2 gap-4">

                                <div className="rounded-xl bg-black/40 p-4">

                                    <p className="text-xs text-white/40">
                                        Pending Refunds
                                    </p>

                                    <h2 className="mt-2 text-3xl font-bold text-neon-green">
                                        ₹4,999
                                    </h2>

                                </div>

                                <div className="rounded-xl bg-black/40 p-4">

                                    <p className="text-xs text-white/40">
                                        Processed
                                    </p>

                                    <h2 className="mt-2 text-3xl font-bold text-blue-400">
                                        1
                                    </h2>

                                </div>

                            </div>

                        </div>

                        <div className="mt-6 space-y-4">

                            {completedStudents.map((student) => (

                                <div
                                    key={student.id}
                                    className="rounded-2xl bg-black p-4"
                                >

                                    <div className="flex items-center justify-between">

                                        <div className="flex items-center gap-4">

                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                                                {student.initials}
                                            </div>

                                            <div>

                                                <h3 className="font-medium text-white">
                                                    {student.name}
                                                </h3>

                                                <p className="text-xs text-white/40">
                                                    {student.xp} XP • {student.score}% avg score
                                                </p>

                                            </div>

                                        </div>

                                        <i className="ri-checkbox-circle-line text-blue-400"></i>

                                    </div>

                                    {student.refund && (

                                        <div
                                            className={`mt-4 flex items-center justify-between rounded-xl px-4 py-3 text-sm ${student.processed
                                                ? "bg-blue-500/10 text-blue-400"
                                                : "bg-neon-green/10 text-neon-green"
                                                }`}
                                        >

                                            <span>
                                                {student.processed
                                                    ? "₹ Refund Processed • ₹4,999"
                                                    : "₹ Refund Eligible • ₹4,999"}
                                            </span>

                                            {!student.processed && (
                                                <button className="font-medium">
                                                    Process →
                                                </button>
                                            )}

                                        </div>

                                    )}

                                </div>

                            ))}

                        </div>

                        <div className="mt-15 space-y-3 ">

                            <button className="w-full rounded-2xl bg-neon-green py-4 font-medium text-black">
                                ₹ Process All Pending Refunds (1)
                            </button>

                            <button className="w-full rounded-2xl bg-blue-500/10 py-4 text-blue-400">
                                <i className="ri-mail-send-line mr-2"></i>
                                Send Certificates to All
                            </button>

                            <button className="w-full rounded-2xl border border-white/10 py-4 text-white">
                                Request Testimonials
                            </button>

                            <button className="w-full rounded-2xl border border-white/10 py-4 text-white">
                                Offer Advanced Course
                            </button>

                        </div>

                    </div>

 

                    <div className="rounded-3xl border border-white/10 bg-[#11150E] p-6  self-start pt-10 pb-15  ">

                        <div className="flex items-center gap-3">

                            <i className="ri-timer-line text-xl text-yellow-400"></i>

                            <div>

                                <h2 className="text-2xl font-semibold text-white">
                                    Inactive Students (2)
                                </h2>

                                <p className="text-sm text-white/40">
                                    Re-engage dormant learners
                                </p>

                            </div>

                        </div>

                        <div className="mt-6 space-y-4">

                            {inactiveStudents.map((student) => (

                                <div
                                    key={student.id}
                                    className="flex items-center justify-between rounded-2xl bg-black/25 p-4"
                                >

                                    <div className="flex items-center gap-4">

                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60">
                                            {student.initials}
                                        </div>

                                        <div>

                                            <h3 className="font-medium text-white">
                                                {student.name}
                                            </h3>

                                            <p className="text-xs text-white/40">
                                                Last active {student.last} • {student.completion} complete
                                            </p>

                                        </div>

                                    </div>

                                    <button>
                                        <i className="ri-close-circle-line text-white/40"></i>
                                    </button>

                                </div>

                            ))}

                        </div>

                        <div className="mt-8 space-y-3 ">

                            <button className="w-full rounded-2xl bg-neon-green/20 py-4 font-medium text-neon-green">
                                <i className="ri-mail-send-line mr-2"></i>
                                Send Re-engagement Email
                            </button>

                            <button className="w-full rounded-2xl border border-white/10 py-4 text-white">
                                Offer Progress Reset
                            </button>

                            <button className="w-full rounded-2xl border border-white/10 py-4 text-white">
                                Schedule 1-on-1 Check-in
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Anylysis
