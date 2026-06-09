import React from 'react'
import Link from 'next/link'

const Areg = () => {
    return (
        <div className='scale-[70%] pl-55'>
            <div className="relative bg-[#1A1D13] rounded-xl px-20 py-30 w-fit">
                <div className="flex flex-col items-center">
                    <div className=" rounded-full bg-red-given flex items-center justify-center py-2 px-3">
                        <i className="ri-error-warning-line text-white text-4xl"></i>
                    </div>
                    <p className="text-center pt-7 text-white text-4xl font-semibold leading-tight">
                        This email is already registered.
                    </p>
                    <p className="mt-3 text-center text-zinc-400 text-2xl leading-relaxed">
                        Try logging in or use another email to create your elite trading account.
                    </p>
                    <div className="mt-14 w-full flex flex-col gap-6">
                        <Link href='/login' className="py-3 rounded-2xl bg-neon-green text-black text-xl px-80
                         font-semibold flex items-center justify-center gap-4 hover:scale-[1.01] transition-all ">
                            Login to TraderStop
                            <i className="ri-arrow-right-line text-4xl"></i>
                        </Link>
                        <Link href='/signup' className="py-4 rounded-2xl bg-white/10 border border-white/5 text-white 
                        text-md font-semibold flex items-center justify-center gap-4 uppercase tracking-wide hover:text-neon-green">
                            <i className="ri-mail-line"></i>
                            Change Email
                        </Link>
                    </div>
                    <Link href='/forgotpassword' className="flex items-center gap-3 tracking-wide text-neon-green text-lg pt-10 font-semibold  uppercase
                    hover:text-white transition-all">
                        <i className="ri-loop-left-line"></i>
                        Reset Password
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default Areg
