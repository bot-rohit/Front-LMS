'use client'
import Link from 'next/link';
import React from 'react'
const unlockItems = [
    {
        id: 1,
        icon: "ri-flask-line",
        title: "Paper Trading",
        description:
            "Test strategies in real-time markets without financial risk.",
        credits: "50",
    },
    {
        id: 2,
        icon: "ri-settings-5-line",
        title: "Backtesting Engine",
        description:
            "Analyze historical data across 10+ years for any asset pair.",
        credits: "100",
    },
];
const vouchers = [
    {
        id: 1,
        type: "money",
        value: "$100",
        icon: "ri-star-fill",
        title: "Growth Multiplier",
        code: "TS-X982-K01",
        expires: "Expires: 12 Oct",
        button: "Redeem Now",
        badge: "",
    },
    {
        id: 2,
        type: "course",
        value: "FREE",
        icon: "ri-graduation-cap-fill",
        title: "Advanced Quant Course",
        code: "EDU-GRAD-772",
        expires: "Expires: 04 Nov",
        button: "Apply to Course",
        badge: "",
    },
];


const earnCredits = [
    {
        id: 1,
        icon: "ri-store-2-line",
        title: "Daily Spin",
        description: "1 free spin per day → unlocks a game",
        reward: "Up to 300 XP",
    },
    {
        id: 2,
        icon: "ri-bear-smile-line",
        title: "Bull or Bear",
        description: "Quick-fire trend identification",
        reward: "150 XP max",
    },
    {
        id: 3,
        icon: "ri-candle-line",
        title: "Candle ID",
        description: "Identify candlestick patterns",
        reward: "200 XP max",
    },
    {
        id: 4,
        icon: "ri-scales-3-line",
        title: "Risk Runner",
        description: "Calculate position sizes fast",
        reward: "200 XP max",
    },
];

const Reedem = () => {
    return (
        <div className='mt-5 mb-15'>
            <section className="space-y-6">
    
                <div className="flex items-start justify-between">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-white">
                            Unlock with Credits
                        </h2>

                        <p className="mt-2 text-zinc-400">
                            Don't need a full subscription? Spend your earned
                            credits on individual tools.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 rounded-full bg-[#23271C] px-5 py-3">
                        <div className="flex px-1.5 py-0.5 items-center justify-center rounded-full bg-lime-400">
                            <i className="ri-money-dollar-circle-fill text-md text-black"></i>
                        </div>

                        <span className="text-xl font-sans font-bold text-white">
                            1,250
                        </span>

                        <span className="text-xs uppercase  text-white/70">
                            Balance
                        </span>
                    </div>
                </div>

      

                <div className="grid grid-cols-12 gap-5 mt-10">
      

                    {unlockItems.map((item) => (
                        <div
                            key={item.id}
                            className="col-span-3 rounded-2xl border border-l-2 border-l-neon-green border-[#26311B] bg-[#11140E] p-6 transition hover:border-lime-400/40"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10">
                                <i
                                    className={`${item.icon} text-2xl text-lime-400`}
                                ></i>
                            </div>

                            <h3 className="mt-8 text-2xl font-semibold text-white">
                                {item.title}
                            </h3>

                            <p className="mt-4 leading-7 text-zinc-400">
                                {item.description}
                            </p>

                            <div className="mt-10 flex items-center justify-between">
                                <div>
                                    <span className="text-4xl font-bold text-white">
                                        {item.credits}
                                    </span>

                                    <span className="ml-2 text-xs uppercase tracking-wider text-zinc-500">
                                        Credits/MO
                                    </span>
                                </div>

                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-400">
                                    <i className="ri-lock-fill text-sm text-black"></i>
                                </div>
                            </div>
                        </div>
                    ))}

                 

                    <div className="col-span-6 border-l-2 border-l-neon-green overflow-hidden rounded-2xl border border-[#26311B] bg-[#11140E]">
                        <div className="flex h-full">
      

                            <div className="relative w-[180px]">
                                <img
                                    src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=700&q=80"
                                    alt=""
                                    className="h-full w-full object-cover"
                                />

                                <span className="absolute bottom-3 left-3 rounded bg-lime-400 px-2 py-1 text-[10px] font-bold uppercase text-black">
                                    New
                                </span>
                            </div>

                    

                            <div className="flex flex-1 flex-col justify-center p-8">
                                <p className="text-xs uppercase tracking-[4px] text-zinc-500">
                                    Education
                                </p>

                                <h2 className="mt-3 text-3xl font-semibold text-white">
                                    Advanced Macro Analysis
                                </h2>

                                <p className="mt-4 max-w-md leading-7 text-zinc-400">
                                    Master global liquidity cycles and institutional
                                    trade setups.
                                </p>

                                <div className="mt-8 flex items-center gap-6">
                                    <button className="rounded-lg bg-lime-400 px-8 py-4 font-semibold text-black transition hover:bg-lime-300">
                                        Unlock Course - 250 Credits
                                    </button>

                                    <button className="font-medium text-zinc-400 transition hover:text-white">
                                        Browse All
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="rounded-2xl bg-[#10170A] p-6 mt-10">
             

                <div className="mb-8 flex items-center gap-3">
                    <h2 className="text-3xl font-heading font-bold text-white">
                        My Active Vouchers
                    </h2>

                    <span className="rounded-md bg-[#31352A] px-3 py-1 text-xs font-semibold text-zinc-300">
                        {vouchers.length} Total
                    </span>
                </div>



                <div className="grid grid-cols-2 gap-6">
                    {vouchers.map((voucher) => (
                        <div
                            key={voucher.id}
                            className="relative overflow-hidden rounded-2xl border border-[#2B331F] bg-[#141B0F]"
                        >
                            <div className="flex">
                     

                                <div
                                    className={`relative flex w-36 flex-col items-center justify-center ${voucher.type === "money"
                                        ? "bg-lime-400"
                                        : "bg-[#3A3D33]"
                                        }`}
                                >
                     

                                    <div className="absolute -right-3 top-10 h-6 w-6 rounded-full bg-[#10170A]" />

                                    <div className="absolute -right-3 bottom-10 h-6 w-6 rounded-full bg-[#10170A]" />

                                    <i
                                        className={`${voucher.icon} text-3xl ${voucher.type === "money"
                                            ? "text-[#2E4510]"
                                            : "text-lime-400"
                                            }`}
                                    ></i>

                                    <h2
                                        className={`mt-4 text-5xl font-bold ${voucher.type === "money"
                                            ? "text-[#2E4510]"
                                            : "text-lime-400"
                                            }`}
                                    >
                                        {voucher.value}
                                    </h2>
                                </div>


                                <div className="flex flex-1 flex-col justify-between p-6">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-3xl font-bold text-white">
                                                {voucher.title}
                                            </h3>

                                            <p className="mt-2 text-zinc-400">
                                                Code: {voucher.code}
                                            </p>
                                        </div>

                                        <span className="rounded-md bg-[#31352A] px-3 py-2 text-xs font-semibold text-lime-400">
                                            {voucher.expires}
                                        </span>
                                    </div>

                                    <div className="mt-8 flex items-center gap-4">
                                        <button className="flex-1 rounded-lg bg-[#45483D] py-4 font-semibold text-white transition hover:bg-lime-400 hover:text-black">
                                            {voucher.button}
                                        </button>

                                        <button className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#505545] text-white transition hover:border-lime-400 hover:text-lime-400">
                                            <i className="ri-arrow-right-line text-xl"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Link href={'/gifts'} className="mt-8 flex justify-end">
                    <button className="flex items-center gap-3 rounded-2xl bg-lime-400 px-8 py-2 font-semibold text-black transition hover:bg-lime-300">
                        <i className="ri-gift-line text-xl"></i>

                        Buy More and Gift
                    </button>
                </Link>
            </section>

            <section className="rounded-2xl border border-[#28311F] bg-[#10170A] p-8 mt-10">
      

                <h2 className="mb-8 text-3xl font-heading font-bold text-white">
                    How to Earn More Credits
                </h2>

   

                <div className="grid grid-cols-4 gap-5">
                    {earnCredits.map((item) => (
                        <div
                            key={item.id}
                            className="group rounded-2xl border border-[#2B3421] bg-[#171D12] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-lime-400/40 hover:bg-[#1A2114]"
                        >
                            {/* Icon */}

                            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10 transition group-hover:bg-lime-400/20">
                                <i
                                    className={`${item.icon} text-2xl text-lime-400`}
                                ></i>
                            </div>

                            {/* Title */}

                            <h3 className="text-2xl font-semibold text-white">
                                {item.title}
                            </h3>

                            {/* Description */}

                            <p className="mt-3 min-h-[48px] leading-6 text-zinc-400">
                                {item.description}
                            </p>

                            {/* Reward */}

                            <p className="mt-6 font-semibold text-lime-400">
                                {item.reward}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default Reedem
