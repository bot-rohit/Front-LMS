'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
const voucherss = [
    {
        title: "Starter",
        price: "$50",
        credits: "5,000 XP",
        tag: "ENTRY",
        featured: false,
    },
    {
        title: "Growth",
        price: "$250",
        credits: "25,000 XP",
        tag: "POPULAR",
        featured: false,
    },
    {
        title: "Elite",
        price: "$1,000",
        credits: "110,000 XP",
        tag: "BEST",
        featured: true,
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

const Gifts = () => {
    const [activeTab, setActiveTab] = useState("Popular");
    return (
        <div>

            <div className='flex justify-between w-auto  bg-black min-h-10 my-3 p-0.5 mx-20 py-2'  >

                <Link href={'/creators'} className='flex  justify-center items-center gap-2 font-heading text-xl font-bold '>
                    <Image src="/assets/Nav/logo.png" alt="logo" width={30} height={25} />
                    <p className='text-white'>TradeVed</p>
                    <div className='w-0.5 h-7 mx-5 bg-white' />
                    <p className='text-white'>Creator</p>

                </Link>


                <div className="hidden min-[900px]:flex items-center gap-8 font-heading">

                    <Link
                        href={'#'}
                        className="flex items-center gap-2 rounded-xl bg-neon-green px-8 py-1 text-sm font-semibold text-black hover:scale-[1.02] transition"
                    >
                        Buy Credits
                    </Link>

                    <button className="relative text-card-font hover:text-white transition">
                        <i className="ri-notification-3-line text-xl"></i>

                        <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-pink-500" />
                    </button>



                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neon-green/30 bg-neon-green/10 text-sm font-semibold text-neon-green">
                        AM
                    </div>

                </div>
            </div>
            <hr className='border-1  border-neon-green' />

            <div className="space-y-10 mx-20 mt-10 font-heading">


                <div className="rounded-3xl border border-lime-700/40 bg-gradient-to-br from-[#10150F] via-[#0A0D09] to-[#070707] p-10">
                    <h1 className="text-5xl font-bold text-white">
                        The Gift of Precision
                    </h1>

                    <p className="mt-4 max-w-2xl text-xl leading-8 text-white/60">
                        Unlock premium trading tools, advanced courses and exclusive
                        rewards. Gift XP to friends or redeem vouchers for yourself.
                    </p>
                </div>


                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-4xl font-bold text-white">
                            Voucher Store
                        </h2>

                        <p className="mt-2 text-white/50">
                            Choose a voucher to purchase.
                        </p>
                    </div>

                    <div className="inline-flex rounded-2xl bg-[#23261D] p-1">
                        <button
                            onClick={() => setActiveTab("Popular")}
                            className={`rounded-xl px-8 py-2 text-lg font-semibold transition-all duration-200 ${activeTab === "Popular"
                                    ? "bg-[#3A3D32] text-white shadow-sm"
                                    : "text-white/60 hover:text-white"
                                }`}
                        >
                            Popular
                        </button>

                        <button
                            onClick={() => setActiveTab("New")}
                            className={`rounded-xl px-8 py-2 text-lg font-semibold transition-all duration-200 ${activeTab === "New"
                                    ? "bg-[#3A3D32] text-white shadow-sm"
                                    : "text-white/60 hover:text-white"
                                }`}
                        >
                            New
                        </button>
                    </div>
                </div>


                <div className="grid gap-8 lg:grid-cols-4">

                    {voucherss.map((voucher) => (
                        <div
                            key={voucher.title}
                            className={`relative rounded-3xl border bg-[#11140F] p-8 transition hover:-translate-y-1
                ${voucher.featured
                                    ? "border-lime-400 shadow-[0_0_30px_rgba(160,255,0,.18)]"
                                    : "border-white/10"
                                }`}
                        >

                            <span className="absolute right-5 top-5 rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black">
                                {voucher.tag}
                            </span>

                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-lime-400/10">
                                <i className="ri-coupon-3-line text-4xl text-lime-400"></i>
                            </div>

                            <h3 className="mt-8 font-sans text-center text-5xl font-bold text-white">
                                {voucher.price}
                            </h3>

                            <p className="mt-3 text-center text-white/60">
                                Redeem for {voucher.credits}
                            </p>

                            <button className="mt-10 w-full rounded-xl bg-lime-400 py-3 font-semibold text-black transition hover:bg-lime-300">
                                Buy for Self
                            </button>

                            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 py-3 font-medium text-white transition hover:border-lime-400 hover:text-lime-400">
                                <i className="ri-gift-line"></i>
                                Gift to Friend
                            </button>

                        </div>
                    ))}



                    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-lime-500/30 bg-[#10120E] p-8">

                        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-lime-500/30">
                            <i className="ri-add-line text-4xl text-lime-400"></i>
                        </div>

                        <h3 className="mt-8 text-3xl font-bold text-white">
                            Custom
                        </h3>

                        <p className="mt-2 text-center text-white/50">
                            Enter your own amount.
                        </p>

                        <input
                            type="number"
                            placeholder="$0"
                            className="mt-8 w-full rounded-xl border border-white/15 bg-transparent px-5 py-3 text-center text-white outline-none focus:border-lime-400"
                        />

                        <button className="mt-5 w-full rounded-xl bg-lime-400 py-3 font-semibold text-black transition hover:bg-lime-300">
                            Continue
                        </button>

                    </div>

                </div>

            </div>

            <section className="rounded-2xl bg-[#10170A] p-6 mt-20 font-heading mx-20 ">


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

            <div className="mt-16 border-t border-lime-500/20 pt-8 font-heading mx-20 mb-20">
                <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

                    {/* Left */}
                    <div>
                        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/40">
                            Accepted Payment Methods
                        </p>

                        <div className="flex flex-wrap items-center gap-8">

                            <div className="flex items-center gap-2 text-white/70">
                                <i className="ri-bank-card-line text-xl text-lime-400"></i>
                                <span className="font-medium">Fiat Money</span>
                            </div>

                            <div className="flex items-center gap-2 text-white/70">
                                <i className="ri-coins-line text-xl text-lime-400"></i>
                                <span className="font-medium">TS Credits</span>
                            </div>

                            <div className="flex items-center gap-2 text-white/70">
                                <i className="ri-bit-coin-line text-xl text-lime-400"></i>
                                <span className="font-medium">Crypto Assets</span>
                            </div>

                        </div>
                    </div>

                    {/* Right */}
                    <p className="max-w-md text-right text-sm leading-6 italic text-white/45">
                        All gift vouchers are instantly transferable upon purchase
                        and protected by <span className="text-lime-400">TraderStop SecureEscrow</span>.
                    </p>

                </div>
            </div>

        </div>
    )
}

export default Gifts
