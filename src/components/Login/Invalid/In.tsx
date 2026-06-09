import React from 'react'
import Link from 'next/link'

const In = () => {
  return (
    <div>
      <div className="w-full rounded-2xl px-100 py-30  bg-[#0A1105]">
        <div className="flex flex-col items-center bg-card-page py-10 px-20  rounded-4xl " >
          <div className=" py-5 px-6 rounded-full bg-[#2B0A1B] flex items-center justify-center">
            <i className="ri-lock-unlock-line text-[#FF007A] text-3xl"></i>
          </div>
          <p className="mt-10 text-center text-card-font text-2xl font-bold leading-tight">
            Invalid email or password
          </p>
          <p className="mt-3 text-center text-zinc-400 text-lg">
            Please check your credentials and try again.
          </p>

          <div className='w-full flex flex-col justify-center'>
            <button className="mt-8 py-2  rounded-xl 
          bg-neon-green text-black text-md font-semibold flex items-center
          justify-center gap-1 hover:scale-[1.01] transition-all">
              Try Again
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>

          <button className="mt-6 text-zinc-300 text-sm tracking-wide uppercase hover:text-[#A6FF00] transition-all">
            Forgot Password?
          </button>


          <div className="mt-10 w-full h-[1px] bg-[#18210F]" />
          
          <Link href='/login' className="mt-8 flex items-center gap-3 text-zinc-500 text-base hover:text-white transition-all">
            <i className="ri-home-4-line"></i>
            Back to Home

          </Link>

        </div>

      </div>

    </div>
  )
}

export default In
