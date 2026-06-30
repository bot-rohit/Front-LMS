'use client'
import { useState } from 'react';
import React from 'react'
const features = [
  "85% revenue share",
  "Weekly automated payouts",
  "Bundles, drip & cohort pricing",
  "Affiliate program built-in",
];
const earningsData = {
  "3M": [
    { month: "Jan", earnings: 120000 },
    { month: "Feb", earnings: 145000 },
    { month: "Mar", earnings: 180000 },
  ],
  "6M": [
    { month: "Jan", earnings: 120000 },
    { month: "Feb", earnings: 145000 },
    { month: "Mar", earnings: 180000 },
    { month: "Apr", earnings: 210000 },
    { month: "May", earnings: 240000 },
    { month: "Jun", earnings: 255400 },
  ],
  "1Y": [
    { month: "Jan", earnings: 120000 },
    { month: "Feb", earnings: 145000 },
    { month: "Mar", earnings: 138000 },
    { month: "Apr", earnings: 180000 },
    { month: "May", earnings: 195000 },
    { month: "Jun", earnings: 190000 },
    { month: "Jul", earnings: 225000 },
    { month: "Aug", earnings: 255000 },
    { month: "Sep", earnings: 248000 },
    { month: "Oct", earnings: 300000 },
    { month: "Nov", earnings: 350000 },
    { month: "Dec", earnings: 405000 },
  ],
};
import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
function ThreeMonthData() {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">3 Month Performance</h2>
      <p>Showing data for the last 3 months.</p>
    </div>
  );
}

function SixMonthData() {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">6 Month Performance</h2>
      <p>Showing data for the last 6 months.</p>
    </div>
  );
}

function OneYearData() {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">1 Year Performance</h2>
      <p>Showing data for the last 1 year.</p>
    </div>
  );
}
const tabs = [
  {
    id: "3M",
    label: "3M",
    component: ThreeMonthData,
  },
  {
    id: "6M",
    label: "6M",
    component: SixMonthData,
  },
  {
    id: "1Y",
    label: "1Y",
    component: OneYearData,
  },
];

const earning = () => {
  const [activeTab, setActiveTab] = useState("1Y");
  const ActiveComponent =
    tabs.find((tab) => tab.id === activeTab)?.component;
  const [range, setRange] = useState<"3M" | "6M" | "1Y">("1Y");
  return (
    <>
      <div className='w-auto mx-20 mt-20 bg-[#080C00] rounded-2xl flex  '>
        <div className='w-[50%] '>

          <div className=' rounded-2xl  '>
            <div className=' p-20 font-heading rounded-xl'>
              <div className=" text-white">
                <p className="text-neon-green text-xs font-bold tracking-[0.1em] uppercase mb-2">
                  Earnings Potential
                </p>

                <h2 className="text-3xl font-bold leading-tight mb-6 font-sans">
                  Top creators earn ₹3L+ a <p>month.</p>
                </h2>

                <p className="text-zinc-400 text-md leading-relaxed mb-10 font-sans">
                  A typical instructor with 1,200 learners and a ₹2,499 course makes
                  ~₹2.55L/month after platform fee.
                </p>

                <div className=" flex flex-col gap-1">
                  {features.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 font-sans">
                      <i className="ri-checkbox-circle-line text-[#C8FF00] text-lg"></i>
                      <span className="text-md text-zinc-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='w-[50%] p-10 font-heading '>
          <div className="rounded-3xl border border-zinc-800  p-6">

            <div className="mb-8 flex items-start justify-between">

              <div>
                <p className="text-sm text-card-font">
                  Projected monthly earnings
                </p>

                <h2 className="mt-2 text-3xl font-bold text-neon-green font-sans">
                  ₹2,55,400
                </h2>
              </div>

              <div className="flex gap-2 font-sans">
                {["3M", "6M", "1Y"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setRange(item as "3M" | "6M" | "1Y")}
                    className={`rounded-xl px-4 py-2 text-sm font-medium transition
                    ${range === item
                        ? "bg-neon-green text-black"
                        : "border border-zinc-700 text-white"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

            </div>

            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={earningsData[range]}>
                  <defs>
                    <linearGradient
                      id="earnings"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#A6FF00"
                        stopOpacity={0.35}
                      />
                      <stop
                        offset="100%"
                        stopColor="#A6FF00"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>

                  <Area
                    type="monotone"
                    dataKey="earnings"
                    stroke="#A6FF00"
                    strokeWidth={3}
                    fill="url(#earnings)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 font-sans">

              <div className="rounded-2xl border border-zinc-800 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-wider text-card-font">
                  Students
                </p>

                <p className="mt-2 text-3xl font-bold text-white">
                  1,248
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-wider text-card-font">
                  Avg. Price
                </p>

                <p className="mt-2 text-3xl font-bold text-white">
                  ₹2,499
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-wider text-card-font">
                  Conversion
                </p>

                <p className="mt-2 text-3xl font-bold text-white">
                  8.4%
                </p>
              </div>

            </div>

          </div>


        </div>
      </div>
    </>
  )
}

export default earning
