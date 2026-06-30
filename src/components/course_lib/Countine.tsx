import React from 'react'
import Link from 'next/link';
const currentCourse = {
    title: "Mastering Advanced Technical Analysis",
    description:
        "Dive deep into volume profiles, order flow analysis, and multi-timeframe correlation strategies used by professional traders.",
    progress: 65,
    modulesCompleted: 8,
    totalModules: 12,
    duration: "12 hours total",
    level: "Advanced",
    image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop",
};

const countine = () => {
    return (
        <div className="w-full px-10 pt-5 font-heading">
            <p className="mb-4 text-3xl font-bold text-white">
                Continue Learning
            </p>

            <div className="flex items-center gap-6 rounded-2xl border border-[#1B2A08] bg-[#050900] p-5">

                <div className="relative h-28 w-44 shrink-0 overflow-hidden rounded-xl">
                    <img
                        src={currentCourse.image}
                        alt={currentCourse.title}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <button className="flex px-2 py-1 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                            <i className="ri-play-fill text-2xl text-white" />
                        </button>
                    </div>
                </div>


                <div className="flex flex-1 flex-col">
                    <div className="mb-2 flex items-center gap-3">
                        <span className="rounded bg-[#FF0088]/20 px-2 py-1 text-xs font-medium text-red-given">
                            {currentCourse.level}
                        </span>

                        <span className="text-xs text-gray-400">
                            • {currentCourse.duration}
                        </span>
                    </div>

                    <h3 className="text-2xl font-semibold text-white">
                        {currentCourse.title}
                    </h3>

                    <p className="mt-2 max-w-4xl text-sm text-gray-400">
                        {currentCourse.description}
                    </p>


                    <div className="mt-5 flex justify-between gap-10">
                        <div className='w-full'>

                            <div className="mb-2 flex items-center justify-between text-xs">
                                <span className="font-medium text-[#FF0088] font-sans">
                                    {currentCourse.progress}% Completed
                                </span>

                                <span className="text-gray-400">
                                    {currentCourse.modulesCompleted}/
                                    {currentCourse.totalModules} Modules
                                </span>
                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-[#243314]">
                                <div
                                    className="h-full rounded-full bg-[#FF0088]"
                                    style={{
                                        width: `${currentCourse.progress}%`,
                                    }}
                                />

                            </div>
                        </div>
                        <div className='relative'>
                            <p className='absolute z-1 text-red-given font-bold top-15 left-5'>Clickable</p>

                            <Link href={"/courseOverview"} className="rounded-xl whitespace-nowrap bg-neon-green px-6 py-3 text-md font-semibold text-black transition hover:scale-[1.02]">
                                Continue <span>Module</span>
                            </Link>
                        </div>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default countine
