'use client'
import React from 'react'
import { useState } from 'react';

const Core = () => {
    const [dynamicPricing, setDynamicPricing] = useState(true);

    const [pricing, setPricing] = useState({
        fiat: 499,
        credits: 5000,
        earlyDiscount: 20,
        bulkDiscount: 15,
        coupon: "TRADER25",
        couponUsage: "142/200",
        xpMultiplier: 1.5,
        completionCredits: 250,
        perfectBonus: 50,
        perfectEnabled: true
    });
    return (
        <div className='mx-10 mt-15'>
            <div className="space-y-10 font-heading ">

                {/* Pricing */}

                <div className="rounded-3xl border border-white/10 bg-[#11150E] p-6">

                    <div className="mb-6 flex items-center justify-between">

                        <div className="flex items-center gap-3">
                            <i className="ri-money-dollar-circle-line text-xl text-neon-green"></i>
                            <h2 className="text-2xl text-neon-green">Core Pricing</h2>
                        </div>

                        <button
                            onClick={() => setDynamicPricing(!dynamicPricing)}
                            className={`relative h-7 w-14 rounded-full transition-all ${dynamicPricing ? "bg-neon-green" : "bg-white/10"
                                }`}
                        >
                            <span
                                className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${dynamicPricing ? "left-8" : "left-1"
                                    }`}
                            />
                        </button>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div>
                            <label className="mb-2 block text-xs uppercase tracking-[2px] text-white/50">
                                Fiat Pricing (USD)
                            </label>

                            <div className="flex items-center rounded-2xl border border-white/10 px-4 py-4">
                                <span className="mr-2 text-white/70">$</span>

                                <input
                                    type="number"
                                    value={pricing.fiat}
                                    onChange={(e) =>
                                        setPricing({
                                            ...pricing,
                                            fiat: Number(e.target.value)
                                        })
                                    }
                                    className="w-full bg-transparent text-white outline-none"
                                />
                            </div>

                        </div>

                        <div>
                            <label className="mb-2 block text-xs uppercase tracking-[2px] text-white/50">
                                Credit Pricing
                            </label>

                            <div className="flex items-center rounded-2xl border border-white/10 px-4 py-4">
                                <i className="ri-coin-line mr-2 text-neon-green"></i>

                                <input
                                    type="number"
                                    value={pricing.credits}
                                    onChange={(e) =>
                                        setPricing({
                                            ...pricing,
                                            credits: Number(e.target.value)
                                        })
                                    }
                                    className="w-full bg-transparent text-white outline-none"
                                />
                            </div>

                        </div>

                    </div>

                </div>

        

                <div className="rounded-3xl border border-white/10 bg-[#11150E] p-6">

                    <div className="mb-8 flex items-center gap-3">
                        <i className="ri-price-tag-3-line text-xl text-neon-green"></i>
                        <h2 className="text-2xl text-neon-green">
                            Discounts & Promotions
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        <div className="rounded-2xl bg-white/5 p-5">

                            <p className="mb-5 text-xs uppercase tracking-[2px] text-white/50">
                                Early Bird Discount (%)
                            </p>

                            <div className="flex items-center gap-4">

                                <input
                                    type="range"
                                    min={0}
                                    max={50}
                                    value={pricing.earlyDiscount}
                                    onChange={(e) =>
                                        setPricing({
                                            ...pricing,
                                            earlyDiscount: Number(e.target.value)
                                        })
                                    }
                                    className="flex-1 accent-neon-green"
                                />

                                <span className="font-medium text-neon-green">
                                    {pricing.earlyDiscount}%
                                </span>

                            </div>

                            <p className="mt-4 text-xs text-white/40">
                                Expires in 14 days after launch.
                            </p>

                        </div>

                        <div className="rounded-2xl bg-white/5 p-5">

                            <p className="mb-5 text-xs uppercase tracking-[2px] text-white/50">
                                Bulk Purchase (3+ Seats)
                            </p>

                            <div className="flex items-center gap-4">

                                <input
                                    type="range"
                                    min={0}
                                    max={30}
                                    value={pricing.bulkDiscount}
                                    onChange={(e) =>
                                        setPricing({
                                            ...pricing,
                                            bulkDiscount: Number(e.target.value)
                                        })
                                    }
                                    className="flex-1 accent-neon-green"
                                />

                                <span className="font-medium text-neon-green">
                                    {pricing.bulkDiscount}%
                                </span>

                            </div>

                            <p className="mt-4 text-xs text-white/40">
                                Applied automatically at checkout.
                            </p>

                        </div>

                    </div>

                    <div className="mt-6">

                        <p className="mb-3 text-xs uppercase tracking-[2px] text-white/50">
                            Active Coupon Codes
                        </p>

                        <div className="flex flex-col gap-4 lg:flex-row">

                            <div className="flex flex-1 items-center justify-between rounded-2xl border border-dashed border-white/10 px-4 py-4">

                                <div className="flex items-center gap-4">

                                    <span className="rounded-lg bg-neon-green/15 px-3 py-2 font-medium text-neon-green">
                                        {pricing.coupon}
                                    </span>

                                    <span className="text-sm text-white/50">
                                        25% Off • {pricing.couponUsage} Uses
                                    </span>

                                </div>

                                <button className="text-red-400">
                                    <i className="ri-delete-bin-6-line"></i>
                                </button>

                            </div>

                            <button className="flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-8 py-4 text-white transition-all hover:bg-neon-green hover:text-black">
                                <i className="ri-add-line"></i>
                                Generate
                            </button>

                        </div>

                    </div>

                </div>

        

                <div className="rounded-3xl border border-white/10 bg-[#11150E] p-6">

                    <div className="mb-8 flex items-center gap-3">
                        <i className="ri-flashlight-line text-xl text-neon-green"></i>
                        <h2 className="text-2xl text-neon-green">
                            XP & Ecosystem Rewards
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                        <div className="rounded-2xl bg-white/5 p-5 border-l-4 border-neon-green">

                            <p className="text-xs uppercase tracking-[2px] text-white/50">
                                XP Multiplier
                            </p>

                            <div className="mt-8 flex justify-center">
                                <span className="text-3xl font-semibold text-neon-green font-sans">
                                    {pricing.xpMultiplier}x
                                </span>
                            </div>

                            <input
                                type="range"
                                min={1}
                                max={5}
                                step={0.5}
                                value={pricing.xpMultiplier}
                                onChange={(e) =>
                                    setPricing({
                                        ...pricing,
                                        xpMultiplier: Number(e.target.value)
                                    })
                                }
                                className="mt-5 w-full accent-neon-green"
                            />

                            <p className="mt-3 text-xs text-white/40">
                                Reward per lesson completion
                            </p>

                        </div>

                        <div className="rounded-2xl bg-white/5 p-5 border-l-4 border-neon-green">

                            <p className="text-xs uppercase tracking-[2px] text-white/50">
                                Completion Credits
                            </p>

                            <div className="mt-6 flex justify-center text-white">
                                <i className="ri-coin-line mr-2 text-neon-green font-sans"></i>
                                {pricing.completionCredits}
                            </div>

                            <input
                                value={pricing.completionCredits}
                                onChange={(e) =>
                                    setPricing({
                                        ...pricing,
                                        completionCredits: Number(e.target.value)
                                    })
                                }
                                className="mt-4 w-full rounded-xl border border-white/10 bg-transparent px-4 py-2 text-center text-white outline-none"
                            />

                            <p className="mt-3 text-center text-xs text-white/40">
                                Reward for 100% course completion
                            </p>

                        </div>

                        <div className="rounded-2xl bg-white/5 p-5 border-l-4 border-neon-green">

                            <p className="text-xs uppercase tracking-[2px] text-white/50">
                                Perfect Score Bonus
                            </p>

                            <div className="mt-8 text-center text-3xl text-white font-sans">
                                +{pricing.perfectBonus} XP
                            </div>

                            <button
                                onClick={() =>
                                    setPricing({
                                        ...pricing,
                                        perfectEnabled: !pricing.perfectEnabled
                                    })
                                }
                                className="mt-5 flex items-center justify-center gap-2 text-sm text-white/70"
                            >
                                <i className={`${pricing.perfectEnabled
                                        ? "ri-checkbox-fill text-neon-green"
                                        : "ri-checkbox-blank-line"
                                    }`}></i>

                                Enable for all quizzes
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Core
