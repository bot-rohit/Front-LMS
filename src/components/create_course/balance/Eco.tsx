import React from 'react'

const Eco = () => {
    return (
        <div className='mx-10 mt-20'>
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5 font-heading">

               
                <div className="rounded-3xl border border-white/10 bg-[#11150E] p-8">

                    <span className="inline-flex rounded-lg bg-neon-green/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[2px] text-neon-green">
                        Ecosystem Status
                    </span>

                    <h3 className="mt-6 text-3xl font-medium text-white">
                        Fuel Your Course Growth
                    </h3>

                    <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/60">
                        Velocity Credits (CRD) power your engagement ecosystem.
                        Use them to unlock tiered rewards, fund student missions,
                        and scale your content&apos;s reach globally.
                    </p>

                </div>



                <div className="rounded-3xl border border-neon-green/20 border-l-4 border-l-neon-green bg-[#11150E] p-7">

                    <p className="text-sm uppercase tracking-[2px] text-white/60">
                        Current Balance
                    </p>

                    <div className="mt-4 flex items-end gap-2">
                        <h2 className="text-4xl font-semibold text-neon-green font-sans">
                            12,450
                        </h2>

                        <span className="mb-2 text-sm tracking-[2px] text-white/60">
                            CRD
                        </span>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                        <span className="text-white/70">
                            Pending Rewards
                        </span>

                        <span className="font-medium text-white">
                            +1,200
                        </span>
                    </div>

                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[85%] rounded-full bg-neon-green"></div>
                    </div>

                    <p className="mt-3 text-xs text-white/40">
                        Level 4 Creator • 85% to Next Milestone
                    </p>

                </div>

            </div>

        </div>
    )
}

export default Eco
