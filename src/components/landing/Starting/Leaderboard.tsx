import React from 'react'

const Leaderboard = () => {
    return (
        <div>
            <div className="hidden min-[1200px]:flex lg:flex-col rounded-2xl border border-lime-500/10 bg-transparent p-5">


                <div className="absolute inset-0 " />

                <div className="flex items-center gap-4">

                    <div className="text-neon-green text-2xl">
                        <i className="ri-bar-chart-box-line"></i>
                    </div>

                    <h2 className="text-white text-xl font-bold">
                        Leaderboard
                    </h2>

                </div>
                <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-3">
                        <span className="text-md font-bold text-white/40">
                            12
                        </span>
                        <img
                            src="https://i.pravatar.cc/100?img=12"
                            className="w-10 h-10 rounded-full" />
                        <p className="text-white/40 text-md">
                            Lakshay
                        </p>

                    </div>
                    <p className="text-white/30 text-md">
                        14.2k pts
                    </p>
                </div>
                <div className="mt-5 gap-15 rounded-2xl border-2 p-3 border-neon-green/20 bg-lime-500/10 backdrop-blur-xl flex items-center justify-between shadow-[0_0_30px_rgba(163,230,53,0.15)]">
                    <div className="flex items-center gap-4  ">
                        <span className="text-lime-400 text-md font-bold">
                            11
                        </span>
                        <img
                            src="https://i.pravatar.cc/100?img=15"
                            className="w-10 h-10 rounded-full"
                        />

                        <div>

                            <h3 className="text-white text-md font-bold leading-tight">
                                You (Moving up!)
                            </h3>

                        </div>

                    </div>

                    <div className="text-neon-green text-2xl">
                        ↑
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Leaderboard
