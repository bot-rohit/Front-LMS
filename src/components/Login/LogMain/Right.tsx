import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
interface datatype {
    email: string,
    password: string,
}
interface coming {
    data: datatype,
    change: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Right = ({ data, change }: coming) => {
    console.log(data)
    return (
        <>

            <div className='flex gap-5'>
                <div className='w-[50%] font-heading h-screen flex flex-col justify-center align-middle items-start p-20'>
                    <div className='flex justify-center gap-3 font-heading text-xl font-semibold items-center '>
                        <Image src="/assets/Nav/logo.png" alt="logo" width={35} height={20} />
                        <p className='text-white'>TraderStop</p>
                    </div>

                    <div className='flex flex-col gap-5 pt-5'>
                        <h1 className='text-white font-bold text-4xl leading-tight'>
                            Welcome Back
                            <br />
                            to <span className='text-neon-green'>TraderStop</span>
                        </h1>

                        <p className='text-gray-400 text-xl leading-relaxed '>
                            Continue your journey in mastering the markets with our expert-led trading courses and real-time market insights. Your path to financial freedom starts here.
                        </p>

                    </div>


                </div>
                <div className='w-[50%] font-heading px-20 flex flex-col justify-center align-middle pt-20 bg-[#14180D] h-screen'>
                    <div className="text-center">
                        <p className="text-white text-3xl font-semibold pb-3">
                            Login
                        </p>
                        <p className="mt-1 text-zinc-500 text-md">
                            Master the markets with TradeVed's expert guidance.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-8">
                        <button type="button"
                            className="py-2 rounded-xl
                         border border-[#2A3B12] bg-[#0A1105] flex
                          items-center justify-center gap-3 text-white font-medium hover:border-[#A6FF00] transition-all">
                            <i className="ri-google-fill text-lg"></i>
                            Google
                        </button>


                        <button type="button" className="py-2 rounded-xl border border-[#2A3B12] bg-[#0A1105]
                         flex items-center justify-center gap-3 text-white font-medium hover:border-[#A6FF00]
                          transition-all">
                            <i className="ri-linkedin-box-fill text-[#0A66C2] text-xl"></i>
                            LinkedIn
                        </button>

                    </div>

                    <div className="mt-10 flex items-center justify-center">
                        <div className="w-full h-[1px] bg-[#1B2610]" />
                        <span className="absolute px-4 bg-[#14180D] text-zinc-500 text-sm">
                            Or Email
                        </span>
                    </div>

                    <form>
                        <div className="mt-10 flex flex-col gap-4">
                            <div className="flex flex-col gap-3">

                                <label className="text-white text-sm font-medium">
                                    Email Address
                                </label>

                                <input type="email" placeholder="name@company.com" name='email' value={data.email} onChange={change}
                                    className="p-3 rounded-xl bg-[#0A1105] border
                                  border-[#2A3B12] px-5 text-white placeholder:text-zinc-600 outline-none
                                   focus:border-[#A6FF00] transition-all" />

                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <label className="text-white text-sm font-medium ">
                                        Password
                                    </label>
                                    <Link href='/forgotpassword' className="text-[#A6FF00] text-sm font-medium hover:text-white transition-all">
                                        Forgot Password?
                                    </Link>
                                </div>
                                <div className="relative">

                                    <input type="password" name='password'
                                        placeholder="••••••••"
                                        value={data.password}
                                        onChange={change} className="w-full p-3 rounded-xl bg-[#0A1105] border border-[#2A3B12] px-5 pr-14 text-white placeholder:text-zinc-600 outline-none focus:border-[#A6FF00] transition-all" />

                                    <button type="button" className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500">

                                        <i className="ri-eye-line text-xl"></i>

                                    </button>

                                </div>

                            </div>

                        </div>


                        <button type="submit" className="mt-10 w-full p-4 rounded-xl 
                        bg-neon-green text-black text-md font-semibold flex items-center 
                        justify-center gap-1 hover:scale-[1.01] transition-all">
                            Login to Account
                            <i className="ri-arrow-right-line text-md"></i>

                        </button>

                    </form>
                    <p className="mt-10 text-center text-zinc-500 text-md">
                        Don't have an account?{" "}
                        <Link href="/signup">
                            <span className="text-[#A6FF00] font-medium cursor-pointer hover:text-white transition-all">
                                Create an Account
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Right
