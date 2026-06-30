"use client";
import React from 'react'

import { useState } from "react";

const Right = () => {
    const [enabled, setEnabled] = useState(true);
    const [time, setTime] = useState("08:00");
    return (
        <div className='mt-15 mr-5 font-heading '>
            <div className="space-y-6">

                <div className="rounded-2xl bg-[#17210D] p-7">
                    <h2 className="text-xl font-heading font-bold text-white">
                        Daily Reminders
                    </h2>

                    {/* Toggle */}

                    <div className="mt-8 flex items-center justify-between">
                        <div>
                            <h3 className="text-md font-semibold text-white">
                                Push Notifications
                            </h3>

                            <p className="mt-2 text-xs text-zinc-400">
                                Get notified when it's time to study
                            </p>
                        </div>

                        <button
                            onClick={() => setEnabled(!enabled)}
                            className={`relative h-7 w-14 rounded-full transition ${enabled ? "bg-lime-400" : "bg-zinc-700"
                                }`}
                        >
                            <span
                                className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${enabled ? "left-8" : "left-1"
                                    }`}
                            />
                        </button>
                    </div>

          

                    <div className="mt-10">
                        <p className="mb-4 text-sm font-semibold uppercase  text-zinc-500">
                            Scheduled Time
                        </p>

                        <div className="flex items-center justify-between rounded-xl bg-[#222C18] px-5 py-5">
                            <div className="flex items-end gap-3">
                                <input
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    className="bg-transparent text-2xl font-bold text-white outline-none"
                                />

                                <span className="mb-1 font-semibold text-lime-400">
                                    AM
                                </span>
                            </div>

                            <i className="ri-alarm-line text-2xl text-zinc-400"></i>
                        </div>
                    </div>

 

                    {enabled && (
                        <div className="mt-8 flex items-center gap-4 rounded-xl border border-lime-500/20 bg-[#1C2612] p-5">
                            <div className="flex h-9 w-13 items-center justify-center rounded-full bg-lime-400/15">
                                <i className="ri-checkbox-circle-fill text-2xl text-lime-400"></i>
                            </div>

                            <div>
                                <h4 className="font-semibold text-white">
                                    Reminder Confirmed
                                </h4>

                                <p className="mt-1 text-sm text-zinc-400">
                                    We'll alert you at {time} AM daily. Stay
                                    consistent!
                                </p>
                            </div>
                        </div>
                    )}
                </div>

               

                <div className="relative overflow-hidden rounded-2xl">


                    <img
                        src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80"
                        alt="Stock Market"
                        className="h-[320px] w-full object-cover"
                    />


                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

    

                    <div className="absolute bottom-7 left-7">
                        <span className="rounded-full bg-blue-500/30 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur">
                            Pro Tip
                        </span>

                        <h3 className="mt-5 max-w-xs text-2xl font-heading font-bold leading-tight text-white">
                            Traders who study{" "}
                            <span className="text-lime-400">daily</span> see 40%
                            more consistent returns.
                        </h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Right
