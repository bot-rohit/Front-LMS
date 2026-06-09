import React from 'react'

const xpbar = () => {
    
    return (
        <>


            <div className="w-full rounded-3xl border border-[#243500] bg-[#030700] p-8">
                {/* Header */}
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-lg text-gray-400">title</p>

                        <div className="mt-2 flex items-end gap-2">
                            <h2 className="text-5xl font-bold text-white">
                                {/* {currentXP.toLocaleString()} */}
                            </h2>
                            <span className="mb-1 text-xl font-semibold text-lime-400">
                                XP
                            </span>
                        </div>
                    </div>

                    <div className="rounded-full border border-pink-700 bg-pink-950/50 px-5 py-2">
                        <span className="text-sm font-medium text-pink-400">
                            {/* NEXT LEVEL: {nextLevelXP.toLocaleString()} XP */}
                        </span>
                    </div>
                </div>

                {/* Levels */}
                <div className="mt-10 flex justify-between">
                    <span className="text-sm font-semibold tracking-[0.2em] text-slate-500">
                        LEVEL 
                    </span>

                    <span className="text-sm font-semibold tracking-[0.2em] text-slate-500">
                        LEVEL 
                    </span>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 h-4 overflow-hidden rounded-full bg-[#25340D]">
                    <div
                        className="h-full rounded-full"
                        style={{
                            // width: `${progress}%`,
                            background:
                                "linear-gradient(90deg, #A3FF12 0%, #D3C23A 40%, #FF006E 100%)",
                        }}
                    />
                </div>

                {/* Footer */}
                <div className="mt-5 text-center text-xl text-gray-300">
                    Gain{" "}
                    <span className="font-semibold text-pink-500">
                        {/* {remainingXP.toLocaleString()} XP */}
                    </span>{" "}
                    more to reach Master Trader status
                </div>
            </div>
        </>
    )
}

export default xpbar
