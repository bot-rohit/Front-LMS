import React from 'react'

const learningOutcomes = [
    {
        id: 1,
        title:
            "Develop a personalized mechanical trading plan with fixed rules for entry and exit.",
    },
    {
        id: 2,
        title:
            "Master multi-timeframe analysis to find confluence and high-reward setups.",
    },
    {
        id: 3,
        title:
            "Understand institutional order blocks and liquidity sweeps to avoid retail traps.",
    },
    {
        id: 4,
        title:
            "Calculate professional position sizing to ensure long-term capital preservation.",
    },
];



const view = () => {
    return (
        <div>
            <section className="w-auto mt-20 mx-15 font-heading mb-10 ">
                <p className="mb-10 text-3xl font-semibold text-white ">
                    Learning Outcomes
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                    {learningOutcomes.map((outcome) => (
                        <div
                            key={outcome.id}
                            className="group rounded-2xl border border-[#1a2235] bg-gradient-to-r from-[#050a18] to-[#060d1f] p-5 transition-all duration-300 hover:border-[#FF0088]/30"
                        >
                            <div className="flex items-start gap-3">
                                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                    <i className="ri-checkbox-circle-line text-lg text-[#FF0088]"></i>
                                </div>

                                <p className="max-w-md text-md leading-6 text-white ">
                                    {outcome.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default view
