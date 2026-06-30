import Link from 'next/link'
import React from 'react'

const streak = () => {
    return (
        <>
            <div className='ml-5 mr-10 mt-20 '>
                <Link href={"/streak"}>


                    <div className="relative overflow-hidden rounded-2xl border border-[#1A2608] bg-[#040900] p-8">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(167,240,0,0.08),transparent_35%)]" />

                        {/* Fire Watermark */}
                        <i className="ri-fire-fill absolute z-1 right-8 top-4 text-[120px] text-[#A7F000]/10" />
                        {/* absolue it what makes them come one after one  like layer assume it to be the coordinate systum*/}
                        <div className="relative z-10">

                            <div className="flex items-start justify-between font-sans">
                                <div>
                                    <p className="text-3xl font-bold text-[#E8E8DF]">
                                        30-Day Learning Streak
                                    </p>

                                    <p className="mt-2 text-sm uppercase text-[#A6AA9B]">
                                        Consistency is the trader&apos;s edge
                                    </p>
                                </div>

                                <div className="rounded-full border border-[#335500] bg-[#0C1400] px-6 py-1">
                                    <span className="text-sm font-semibold text-neon-green">
                                        Current Streak: 12 Days
                                    </span>
                                </div>
                            </div>


                            <div className="mt-8 flex items-start gap-15">
                                <div className="flex flex-col items-center">
                                    <div className="flex px-4 py-3 items-center justify-center rounded-full bg-neon-green ">
                                        <i className="ri-check-line text-2xl text-black" />
                                    </div>

                                    <span className="mt-3 text-sm font-medium text-[#A7F000]">
                                        D1
                                    </span>
                                </div>

                                {/* Day 11 */}
                                <div className="flex flex-col items-center">
                                    <div className="flex px-4 py-3 items-center justify-center rounded-full bg-neon-green">
                                        <i className="ri-check-line text-2xl text-black" />
                                    </div>

                                    <span className="mt-3 text-sm font-medium text-[#A7F000]">
                                        D11
                                    </span>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#A7F000] bg-[#152000] shadow-[0_0_18px_rgba(167,240,0,0.25)]">
                                        <span className="text-lg font-bold text-[#A7F000]">
                                            12
                                        </span>
                                    </div>

                                    <span className="mt-3 text-sm font-bold text-[#A7F000]">
                                        TODAY
                                    </span>
                                </div>

                                {/* Day 15 */}
                                <div className="relative flex flex-col items-center">
                                    <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-pink-500" />

                                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#3B4330]">
                                        <i className="ri-flashlight-line text-xl text-[#C1C4B8]" />
                                    </div>

                                    <span className="mt-3 text-sm text-[#C1C4B8]">
                                        D15
                                    </span>
                                </div>

                                {/* Day 30 */}
                                <div className="flex flex-col items-center">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#2E3623]">
                                        <i className="ri-award-line text-xl text-[#5F6654]" />
                                    </div>

                                    <span className="mt-3 text-sm text-[#5F6654]">
                                        D30
                                    </span>
                                </div>

                                {/* Remaining Dots */}
                                <div className="mt-6 flex items-center gap-20">
                                    <div className="h-2 w-2 rounded-full bg-[#1B2116]" />
                                    <div className="h-2 w-2 rounded-full bg-[#1B2116]" />
                                    <div className="h-2 w-2 rounded-full bg-[#1B2116]" />
                                    <div className="h-2 w-2 rounded-full bg-[#1B2116]" />
                                </div>
                            </div>

                            {/* Progress Header */}
                            <div className="mt-8 flex items-center justify-between">
                                <span className="text-sm uppercase  text-[#D2D2C7]">
                                    Progress To Milestone (Day 15)
                                </span>
                                <span className="text-md font-bold text-neon-green">
                                    12 / 30 DAYS
                                </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#31342D] mb-10">
                                <div className="h-full w-[40%] rounded-full bg-neon-green" />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>


        </>
    )
}

export default streak
