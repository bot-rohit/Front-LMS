import React from 'react'

const xpbar = () => {

    return (
        <>
            <div className='flex flex-col gap-5'>
                <div className='h-0.5 bg-card-page mr-10 ml-5 mt-8 mb-10 ' />
                <div className='font-heading mr-10 ml-5 '>
                    <div>
                        <h1 className="text-4xl font-bold text-white">
                            Welcome back, Trader!
                        </h1>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className="mt-3 text-md text-card-font">
                                    Continue your learning journey and maintain your trading learning
                                    streak.
                                </p>
                                <p className="mt-1 text-md text-card-font">
                                    The markets never sleep, and neither should your growth.
                                </p>
                            </div>
                            <div>

                                <button className="flex items-center gap-4 rounded-2xl bg-neon-green px-5 py-2 font-semibold text-black transition hover:scale-[1.02]">
                                    <span>Continue Learning</span>
                                    <i className="ri-arrow-right-line text-md" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-auto rounded-3xl border border-[#243500] px-5 py-5 mt-5 mr-10 ml-5">

                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-md text-white/70">Experience Point</p>
                            <div className="mt-1 flex items-end gap-2">
                                <p className="text-3xl font-bold text-white">
                                    14,250
                                </p>
                                <span className="mb-1 text-sm font-semibold text-neon-green">
                                    XP
                                </span>
                            </div>
                        </div>
                        <div className="rounded-full border border-pink-700 bg-pink-950/50 px-4 py-0.5">
                            <span className="text-xs  text-red-given">
                                NEXT LEVEL: 15,000 XP
                            </span>
                        </div>
                    </div>
                    <div className="mt-5 flex justify-between">
                        <span className="text-sm font-semibold tracking-[0.1em] text-slate-500">
                            LEVEL 14
                        </span>

                        <span className="text-sm font-semibold tracking-[0.1em] text-slate-500">
                            LEVEL 15
                        </span>
                    </div>

                    <div className="mt-2 h-3 overflow-hidden rounded-full bg-[#25340D]">
                        <div
                            className="h-full rounded-full"
                            style={{
                                width: `800px`,
                                background:
                                    "linear-gradient(90deg, #A3FF12 0%, #D3C23A 40%, #FF006E 100%)",
                            }}
                        />
                    </div>

                    <div className="mt-5 text-center text-md text-gray-300">
                        Gain{" "}
                        <span className="font-semibold text-pink-500">
                            {750} XP
                        </span>{" "}
                        more to reach <span className='text-card-font font-bold'>
                            Master Trader
                        </span>{" "}
                        status
                    </div>
                </div>
            </div>
        </>
    )
}

export default xpbar
