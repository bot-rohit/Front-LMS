'use client'
import { useState } from 'react';
import React from 'react'
const features = [
  "85% revenue share",
  "Weekly automated payouts",
  "Bundles, drip & cohort pricing",
  "Affiliate program built-in",
];

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
        <div className='w-[50%]'>
          {/* <div>
            {tabs.map((element) => (
              <button key={element.id}
                onClick={() => setActiveTab(element.id)} className=' text-2xl text-amber-50 flex gap-5'>
                {element.label}

              </button>

            ))};
          </div>
          <div key={activeTab}>
            <ActiveComponent />
          </div> */}



        </div>
      </div>
    </>
  )
}

export default earning
