import React from 'react'
const insights = [
    {
        title: "Drop-off Alert: Day 7 Pattern Detected",
        description:
            'Your learners in "Day Trading 101" are dropping off at Day 7. The quiz difficulty might be too high.',
        action: "View Details",
        icon: "ri-error-warning-line",
    },
    {
        title: "Engagement Boost Opportunity",
        description:
            "Learners who attend live sessions have 2.3x higher completion rates. Schedule more Q&A sessions.",
        action: "Schedule Session",
        icon: "ri-line-chart-line",
    },
];
const mid = () => {
    return (
        <div>
            <div className="rounded-3xl border border-neon-green/10 bg-card-page/60 p-6 mx-5 mr-15 mt-20 font-heading ">

                <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neon-green/10">
                        <i className="ri-ai-generate text-xl text-neon-green"></i>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl font-bold text-white">
                            AI Insights
                        </h2>

                        <p className="text-sm text-card-font">
                            Powered by your teaching data
                        </p>
                    </div>
                </div>


                <div className="grid grid-cols-2 gap-5">
                    {insights.map((item) => (
                        <div
                            key={item.title}
                            className="
                    rounded-3xl
                    border border-neon-green/10
                    bg-black/30
                    p-6
                    relative
                    overflow-hidden
                "
                        >

                            <div className="absolute left-0 top-0 h-full w-1 bg-neon-green" />

                            <div className="flex items-start gap-4">
                                <div className="mt-1">
                                    <i
                                        className={`${item.icon} text-xl text-neon-green`}
                                    ></i>
                                </div>

                                <div>
                                    <h3 className="text-md font-semibold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm text-card-font leading-relaxed">
                                        {item.description}
                                    </p>

                                    <button className="mt-5 flex items-center gap-2 font-semibold text-sm text-neon-green transition hover:translate-x-1">
                                        {item.action}
                                        <i className="ri-arrow-right-line"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default mid
