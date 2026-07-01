import React from 'react'
import Link from 'next/link'
const footer = () => {
  return (
    <>
      <div className=' flex flex-col px-10 py-10 font-heading gap-30'>
        <div className="w-full rounded-2xl border border-lime-500/30 bg-[#161A13]
        px-8 py-20 flex flex-col items-center justify-center text-center">
          <h2 className="text-white text-4xl font-bold leading-tight">
            Your trading expertise deserves a real business.
          </h2>

          <p className="text-zinc-400 mt-5 text-sm">
            Apply in under 5 minutes. Most creators are approved within 24 hours.
          </p>

          <Link href={'/creators/account_setup'} className="mt-8 bg-lime-400 text-black font-semibold
           px-8 py-4 rounded-xl flex items-center gap-2 shadow-[0_0_30px_rgba(163,230,53,0.35)] hover:scale-105 transition-all">
            Become a Creator
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
        <div className='flex flex-col align-middle items-center  gap-10 '>
          <div className='bg-card-page h-[0.1px] w-full'/>
          <p className='text-card-font'>© 2026 TradeVed Technologies. All rights reserved.</p>

        </div>

      </div>

    </>
  )
}

export default footer
