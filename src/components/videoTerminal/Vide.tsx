import React from 'react'

const lessonMeta = [
    {
        id: 1,
        label: "Advanced Strategy",
        icon: "ri-line-chart-line",
        color: "text-[#A6FF00]",
    },
    {
        id: 2,
        label: "Updated March 2026",
        icon: "ri-time-line",
        color: "text-gray-400",
    },
];

const lessonActions = [
    {
        id: 1,
        label: "Resources",
        icon: "ri-download-cloud-2-line",
        variant: "secondary",
    },
    {
        id: 2,
        label: "Complete Lesson",
        icon: "ri-check-line",
        variant: "primary",
    },
];

const Vide = () => {

    return (
        <div className=' px-5 pt-10 font-heading  '>
            <div className="overflow-hidden  bg-black">
                <div className="relative h-110 overflow-hidden border-1 border-white/10">
                    <img
                        src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1600&auto=format&fit=crop"
                        alt="Lesson Thumbnail"
                        className="h-full w-full object-cover"
                    />
  

                    <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#A6FF00] transition-all duration-300 hover:scale-110">
                        <i className="ri-play-fill text-3xl text-black"></i>
                    </button>
                </div>

                <div className=" bg-black px-7 py-6 mt-5">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <h2 className="max-w-xl text-3xl font-bold leading-tight text-white">
                                The Order Book & <br />
                                Liquidity Dynamics
                            </h2>

                            <div className="mt-5 flex flex-wrap items-center gap-6">
                                {lessonMeta.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center gap-2"
                                    >
                                        <i
                                            className={`${item.icon} text-sm ${item.color}`}
                                        ></i>

                                        <span
                                            className={`text-sm ${item.color}`}
                                        >
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            {lessonActions.map((action) => (
                                <button
                                    key={action.id}
                                    className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all ${action.variant === "primary"
                                        ? "bg-[#FF0088] text-white hover:opacity-90"
                                        : "border border-[#243512] bg-[#18240d] text-white hover:bg-[#223313]"
                                        }`}
                                >
                                    <i className={action.icon}></i>
                                    {action.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 h-px w-full bg-[#223512]"></div>
                </div>
            </div>

        </div>
    )
}

export default Vide
