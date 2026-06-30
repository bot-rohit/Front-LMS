import React from 'react'
import Link from 'next/link';
const activeWidgets = [
    {
        id: 1,
        title: "Calculator",
        subtitle: "Step 1: Risk Assessment",
        icon: "ri-calculator-line",
        active: true
    },
    {
        id: 2,
        title: "Payoff Visualizer",
        subtitle: "Step 2: Strategy Flow",
        icon: "ri-line-chart-line",
        active: false
    },
    {
        id: 3,
        title: "Quiz Block",
        subtitle: "Step 3: Validation",
        icon: "ri-questionnaire-line",
        active: false
    }
];

const Left = () => {
    return (
        <div className=' flex flex-col h-full mr-10 ml-10 border-x  border-white/5 bg-[#161B12] p-5 font-heading justify-between '>
            <div className="w-full ">

                <div className="flex items-center justify-between pt-5">
                    <h2 className="text-2xl font-medium text-white">
                        Active Sequence
                    </h2>

                    <span className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-white/60">
                        {activeWidgets.length} WIDGETS
                    </span>
                </div>

                <div className="mt-10 flex flex-col gap-5 ">
                    {activeWidgets.map((widget) => (
                        <div
                            key={widget.id}
                            className={`rounded-2xl border p-3 transition-all ${widget.active
                                ? "border-neon-green bg-neon-green/10"
                                : "border-white/5 bg-white/5"
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">

                                    <div className="text-white/20">
                                        <i className="ri-draggable text-lg"></i>
                                    </div>

                                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${widget.active
                                        ? "bg-neon-green text-black"
                                        : "bg-black/40 text-neon-green"
                                        }`}>
                                        <i className={`${widget.icon} text-lg`}></i>
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-medium text-white">
                                            {widget.title}
                                        </h3>

                                        <p className={`text-[11px] ${widget.active
                                            ? "text-neon-green"
                                            : "text-white/40"
                                            }`}>
                                            {widget.subtitle}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-white/60">
                                    <button>
                                        <i className="ri-pencil-line text-sm"></i>
                                    </button>

                                    <button>
                                        <i className="ri-delete-bin-line text-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <button className="flex py-5 flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 text-white/30 transition-all hover:border-neon-green/40 hover:text-neon-green">
                        <i className="ri-add-line text-2xl"></i>

                        <span className="mt-2 text-[10px] tracking-wide">
                            DRAG WIDGET HERE
                        </span>
                    </button>
                </div>


            </div>
            <Link href={'/creators/badge'} className="">
                <div className="flex items-center relative justify-between text-xs">
                      <p className='absolute z-1 text-red-given font-bold -top-6'>Clickable</p>

                    <span className="text-white/40">
                        Total XP Reward:
                    </span>

                    <span className="font-semibold text-neon-green">
                        450 XP
                    </span>
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[65%] rounded-full bg-neon-green"></div>
                </div>
            </Link>

        </div>
    )
}

export default Left
