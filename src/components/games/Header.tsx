import React from 'react'

const Header = () => {
    return (
        <div>
            <header className="flex items-center justify-between border-b border-[#222]  font-heading px-8 py-4">
      
                <div className="flex items-center gap-4">
                    <button className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[#1B2314]">
                        <i className="ri-arrow-left-line text-xl text-zinc-400"></i>
                    </button>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A260E]">
                        <i className="ri-star-line text-lg text-lime-400"></i>
                    </div>

                    <div>
                        <h1 className="font-heading text-md font-bold text-white">
                            Spin & Win
                        </h1>

                        <p className="text-sm text-zinc-500">
                            Daily Credit Magic • 100 XP = 1 Credit
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 font-sans">

                    <div className="flex items-center gap-2 rounded-xl border border-lime-500/30 bg-[#18220D] px-5 py-1">
                        <i className="ri-flashlight-fill text-neon-green"></i>

                        <span className="font-semibold text-sm text-neon-green">
                            4,250 XP
                        </span>
                    </div>


                    <div className="flex items-center gap-2 rounded-xl border border-yellow-500/30 bg-[#231D09] px-5 py-1">
                        <i className="ri-coins-line text-yellow-400"></i>

                        <span className="font-semibold text-sm text-yellow-400">
                            129 Credits
                        </span>
                    </div>


                    <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-[#241010] px-5 py-1">
                        <i className="ri-refresh-line text-red-400"></i>

                        <span className="font-semibold text-sm text-red-400">
                            5 Spins
                        </span>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Header
