'use client'
import React from 'react'
import { useState } from 'react';
const purchases = [
    {
        id: 1,
        date: "Oct 24, 2023",
        transactionId: "TXN_992104",
        credits: "25,000 CRD",
        amount: "$199.00",
        status: "Success"
    },
    {
        id: 2,
        date: "Sep 18, 2023",
        transactionId: "TXN_881201",
        credits: "5,000 CRD",
        amount: "$49.00",
        status: "Success"
    },
    {
        id: 3,
        date: "Aug 02, 2023",
        transactionId: "TXN_772091",
        credits: "100,000 CRD",
        amount: "$699.00",
        status: "Success"
    }
];
const Foot = () => {
    const [amount, setAmount] = useState(50000);
    const [autoRecharge, setAutoRecharge] = useState(true);
    return (
        <div className='mx-10 mt-15 mb-10'>
            <div className="space-y-6 font-heading">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
                    <div className="rounded-2xl border border-white/10 bg-[#11150E] p-7">

                        <div className="flex items-center gap-3">
                            <i className="ri-equalizer-2-line text-white"></i>
                            <h3 className="text-2xl text-white">Custom Amount</h3>
                        </div>

                        <div className="mt-8 flex items-center justify-between">

                            <span className="text-white/60">
                                Amount to purchase
                            </span>

                            <span className="text-4xl font-semibold text-neon-green font-sans">
                                {amount.toLocaleString()} CRD
                            </span>

                        </div>

                        <input
                            type="range"
                            min={5000}
                            max={100000}
                            step={5000}
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            className="mt-6 w-full accent-neon-green"
                        />

                        <div className="mt-8 rounded-2xl bg-white/5 p-5">

                            <div className="flex items-start justify-between">

                                <div>
                                    <p className="text-[10px] uppercase tracking-[2px] text-white/40">
                                        Estimated Cost
                                    </p>

                                    <h4 className="mt-2 text-4xl font-sans font-semibold text-white">
                                        $349.00
                                    </h4>
                                </div>

                                <div className="text-right">

                                    <p className="text-sm font-medium text-neon-green">
                                        12% Vol. Discount
                                    </p>

                                    <p className="mt-1 text-lg text-white/40 line-through">
                                        $396.00
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>



                    <div className="space-y-6">

                        <div className="rounded-3xl border border-white/10 bg-[#11150E] p-7">

                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-4">

                                    <i className="ri-refresh-line text-xl text-neon-green"></i>

                                    <div>
                                        <h3 className="text-2xl text-white">
                                            Auto-Recharge
                                        </h3>

                                        <p className="text-sm text-white/50">
                                            Refill when below 1,000 CRD
                                        </p>
                                    </div>

                                </div>

                                <button
                                    onClick={() => setAutoRecharge(!autoRecharge)}
                                    className={`relative h-7 w-14 rounded-full transition-all ${autoRecharge
                                            ? "bg-neon-green"
                                            : "bg-white/10"
                                        }`}
                                >
                                    <span
                                        className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${autoRecharge
                                                ? "left-8"
                                                : "left-1"
                                            }`}
                                    />
                                </button>

                            </div>

                        </div>

              

                        <div className="rounded-3xl border border-white/10 bg-[#11150E] p-7">

                            <div className="flex items-center gap-3">

                                <i className="ri-bank-card-line text-white"></i>

                                <h3 className="text-2xl text-white">
                                    Payment Method
                                </h3>

                            </div>

                            <div className="mt-6 flex items-center justify-between rounded-2xl border border-neon-green/20 bg-neon-green/5 p-5">

                                <div className="flex items-center gap-4">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-xs font-bold text-white"> 
                                        VISA
                                    </div>

                                    <div>

                                        <p className="text-white">
                                            Corporate Visa •••• 8821
                                        </p>

                                        <p className="text-sm text-white/40">
                                            Exp: 12/26
                                        </p>

                                    </div>

                                </div>

                                <button className="font-medium text-neon-green">
                                    Change
                                </button>

                            </div>

                            <button className="mt-6 flex w-full items-center justify-center gap-2 text-white/50 transition-all hover:text-neon-green">
                                <i className="ri-add-line"></i>
                                Add New Method
                            </button>

                        </div>

                    </div>

                </div>

       

                <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#11150E] mt-15">

                    <div className="flex items-center justify-between border-b border-white/10 px-7 py-6">

                        <h2 className="text-2xl font-semibold text-white">
                            Recent Purchases
                        </h2>

                        <button className="font-medium text-neon-green">
                            View Invoice History
                        </button>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            <thead>

                                <tr className="border-b border-white/10 text-left">

                                    <th className="px-7 py-4 text-xs uppercase tracking-[2px] text-white/40">
                                        Date
                                    </th>

                                    <th className="px-7 py-4 text-xs uppercase tracking-[2px] text-white/40">
                                        Transaction ID
                                    </th>

                                    <th className="px-7 py-4 text-xs uppercase tracking-[2px] text-white/40">
                                        Amount
                                    </th>

                                    <th className="px-7 py-4 text-xs uppercase tracking-[2px] text-white/40">
                                        Price
                                    </th>

                                    <th className="px-7 py-4 text-xs uppercase tracking-[2px] text-white/40">
                                        Status
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {purchases.map((purchase) => (

                                    <tr
                                        key={purchase.id}
                                        className="border-b border-white/5 last:border-none"
                                    >

                                        <td className="px-7 py-6 text-white">
                                            {purchase.date}
                                        </td>

                                        <td className="px-7 py-6 text-white/50">
                                            {purchase.transactionId}
                                        </td>

                                        <td className="px-7 py-6 font-medium text-white font-sans">
                                            {purchase.credits}
                                        </td>

                                        <td className="px-7 py-6 text-white font-sans">
                                            {purchase.amount}
                                        </td>

                                        <td className="px-7 py-6">

                                            <span className="rounded-lg bg-neon-green/10 px-3 py-1 text-xs font-medium text-neon-green">
                                                {purchase.status}
                                            </span>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default Foot
