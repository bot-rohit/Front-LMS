import React from 'react'
const stats = [
    {
        title: "Total Enrollments",
        value: "1,248",
        growth: "+12%",
        icon: "ri-group-line",
        iconBg: "bg-neon-green/10",
        iconColor: "text-neon-green",
    },
    {
        title: "Active Learners",
        value: "856",
        growth: "+8%",
        icon: "ri-flashlight-line",
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-400",
    },
    {
        title: "Monthly Revenue",
        value: "₹2.8L",
        growth: "+24%",
        icon: "ri-money-rupee-circle-line",
        iconBg: "bg-yellow-500/10",
        iconColor: "text-yellow-400",
    },
    {
        title: "Avg. Completion Rate",
        value: "68%",
        growth: "-3%",
        icon: "ri-focus-3-line",
        iconBg: "bg-neon-green/10",
        iconColor: "text-neon-green",
    },
];
const header = () => {
    return (
        <div className='font font-heading flex flex-col gap-10 pt-10 px-5 w-auto pr-15' >
            <div>
                <h1 className="font-heading text-4xl font-bold text-white">
                    Welcome back, Rohit!
                </h1>

                <p className="mt-2 text-card-font">
                    Here's what's happening with your courses today
                </p>
            </div>

            <div className="grid grid-cols-4 gap-5 w-auto ">
                {stats.map((stat) => (
                    <div
                        key={stat.title}
                        className="rounded-3xl border border-neon-green/10 p-5 w-full bg-card-page/30"
                    >
                        <div className="flex items-start justify-between">
                            <div
                                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.iconBg}`}
                            >
                                <i
                                    className={`${stat.icon} text-xl ${stat.iconColor}`}
                                ></i>
                            </div>

                            <div
                                className={`flex items-center gap-1 text-sm font-semibold ${stat.growth.startsWith("-")
                                        ? "text-yellow-400"
                                        : "text-neon-green"
                                    }`}
                            >
                                <i
                                    className={
                                        stat.growth.startsWith("-")
                                            ? "ri-arrow-right-down-line"
                                            : "ri-arrow-right-up-line"
                                    }
                                />
                                {stat.growth}
                            </div>
                        </div>

                        <h2 className="mt-6 text-4xl font-bold text-white font-sans">
                            {stat.value}
                        </h2>

                        <p className="mt-2 text-sm text-card-font">
                            {stat.title}
                        </p>
                    </div>
                ))}
            </div>



        </div>
    )
}

export default header
