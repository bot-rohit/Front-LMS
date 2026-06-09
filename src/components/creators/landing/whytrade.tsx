import React from 'react'
import Whytradecard from './whytradecard';

const features = [
  {
    id: 1,
    title: "Monetize Knowledge",
    description:
      "Set your price, sell to verified learners and keep up to 85% revenue with transparent payouts.",
    icon: "ri-line-chart-line",
    iconBg: "bg-lime-900/40",
    iconColor: "text-lime-400",
  },
  {
    id: 2,
    title: "Build Community",
    description:
      "Native cohorts, live sessions, Q&A and discussion threads built into every course.",
    icon: "ri-team-line",
    iconBg: "bg-blue-900/40",
    iconColor: "text-blue-400",
  },
  {
    id: 3,
    title: "Track Performance",
    description:
      "Real-time analytics on engagement, completion, conversions and revenue across all your courses.",
    icon: "ri-bar-chart-box-line",
    iconBg: "bg-yellow-900/40",
    iconColor: "text-yellow-400",
  },
];


const whytrade = () => {
  return (
    <>
      <div className='w-auto px-20 py-20'>

        <div className=' font-heading bg-[#080C00] py-20 px-10 rounded-2xl'>
          <div className='text-4xl text-neon-green pb-10  '>
            <p className='text-lg pb-3'>WHY TRADEVED</p>
            <p className='text-white font-bold'>Everything you need to teach trading</p>
            <span className='text-white font-bold'> a pro .</span>
          </div>
          <div className='flex gap-5 '>
            {features.map((element, index) => (
              <div
                key={index}

              >
                <div className=' border-2 border-card-page rounded-2xl py-10 px-7 '>
                  <Whytradecard sending={element} />

                </div>
              </div>
            ))}
          </div>

        </div>


      </div>



    </>

  )
}

export default whytrade
