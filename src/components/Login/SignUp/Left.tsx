'use client'
import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';

interface SignupFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
interface ShowError {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    terms: string,

}
interface subornot {

}
interface coming {
    formdata: SignupFormData,
    handle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    submit: () => Promise<void>;
    error: ShowError,
    accept: React.Dispatch<React.SetStateAction<boolean>>;
    load: boolean,
}
const Left = ({ formdata, handle, submit, error, accept, load }: coming) => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <form className="w-full flex items-center justify-center font-heading "

                noValidate
                onSubmit={(e) => {

                    e.preventDefault();
                    submit();
                }}>
                <div className="w-full  ">
                    <div className='flex justify-start gap-3 font-heading text-2xl font-semibold items-center pb-10 '>
                        <Image src="/assets/Nav/logo.png" alt="logo" width={35} height={20} />
                        <p className='text-white'>TradeVed</p>

                    </div>



                    <div className="flex flex-col gap-3">
                        <h1 className="text-white text-4xl font-bold leading-tight">
                            Start your trading
                            <br />
                            journey <span className="text-[#A6FF00]">today.</span>
                        </h1>
                        <p className="text-card-font text-md">
                            Join the elite community of stock traders and master the markets.
                        </p>
                    </div>


                    <div className={`flex flex-col  font-heading pt-10 
                        ${error.firstName ? "gap-1" : "gap-4"} `} >
                        <div className="grid grid-cols-2 gap-5">

                            <div className='gap-1'>
                                <div className="flex flex-col gap-3 ">
                                    <label className="text-card-font text-md">
                                        First Name
                                    </label>
                                    <input
                                        type="text" name='firstName' placeholder="John" value={formdata.firstName} onChange={handle}
                                        className="rounded-xl py-3 bg-[#0B1203]
                                    border border-[#27331B] transition-all focus:border-[#A6FF00] 
                                    outline-none text-white px-4" />
                                </div>

                                {error.firstName && (
                                    <div className='mb-0'>
                                        <p className='text-red-given '>{error.firstName}</p>
                                    </div>
                                )}
                            </div>

                            <div className='gap-1'>
                                <div className="flex flex-col gap-3">
                                    <label className="text-card-font text-md ">
                                        Last Name
                                    </label>
                                    <input type="text" name='lastName' placeholder="Doe"
                                        value={formdata.lastName} onChange={handle}
                                        className=" rounded-xl  py-3 bg-[#0B1203]
                                    border border-[#27331B] px-4 text-white outline-none
                                    focus:border-[#A6FF00] transition-all" />
                                </div>
                                {error.lastName && (
                                    <div className='mb-0'>
                                        <p className='text-red-given'>{error.lastName}</p>
                                    </div>
                                )}
                            </div>

                        </div>


                        <div className='gap-1'>
                            <div className="flex flex-col gap-3">

                                <label className="text-card-font text-md">
                                    Email Address
                                </label>

                                <input type="email" placeholder="john@example.com"
                                    name='email' value={formdata.email} onChange={handle}
                                    className="py-3 rounded-xl  border bg-[#0B1203]
                            border-[#27331B] px-4 text-white outline-none focus:border-[#A6FF00] transition-all" />
                            </div>
                            {error.email && (
                                <div>
                                    <p className='text-red-given'>{error.email}</p>
                                </div>
                            )}

                        </div>


                        <div className='gap-1'>
                            <div className="flex flex-col gap-3">

                                <label className="text-card-font text-md">
                                    Password
                                </label>


                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        name="password"
                                        value={formdata.password}
                                        onChange={handle}
                                        className="w-full py-3 rounded-xl border border-[#27331B]
                                      bg-[#0B1203] px-4 pr-12 text-white outline-none
                                       focus:border-[#A6FF00] transition-all"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                                    >
                                        <i
                                            className={
                                                showPassword
                                                    ? "ri-eye-off-line text-xl"
                                                    : "ri-eye-line text-xl"
                                            }
                                        />
                                    </button>
                                </div>

                            </div>
                            {error.password && (
                                <div>
                                    <p className='text-red-given'>{error.password}</p>
                                </div>
                            )}

                            <p className="text-xs italic text-zinc-500 pt-2">
                                Must be at least 8 characters with one special symbol.
                            </p>

                        </div>


                        <div className="flex items-center gap-3">

                            <input onChange={(e) => accept(e.target.checked)}
                                type="checkbox" className="p-2 mt-0.2 appearance-none bg-black border border-white checked:bg-neon-green checked:border-neon-green 
                            relative rounded-sm checked:after:content-['✓'] checked:after:text-black checked:after:text-[12px] 
                            checked:after:flex checked:after:items-center checked:after:justify-center checked:after:absolute checked:after:inset-0" />
                            <p className="text-sm text-card-font ">
                                I agree to the{" "}
                                <span className="text-[#A6FF00]">
                                    Terms of Service
                                </span>{" "}
                                and{" "}
                                <span className="text-[#A6FF00]">
                                    Privacy Policy.
                                </span>
                            </p>

                        </div>
                        {error.terms && <div>
                            <p className='text-red-given'>
                                {error.terms}
                            </p>
                        </div>}

                        <button type='submit'
                            disabled={load}
                            className={`mt-2 py-2 rounded-xl bg-[#A6FF00] text-black text-xl font-medium hover:scale-[1.01]
                                ${load
                                    ? "bg-gray-500 cursor-not-allowed"
                                    : "bg-[#A6FF00] hover:scale-[1.01]"
                                }
                             transition-all`}>
                            {load ? "Creating Account..." : "Create My Account"}
                        </button>

                        {/* login */}
                        <p className="text-center text-card-font text-md">

                            Already have an account?{" "}
                            <Link href="/login ">
                                <span className="text-neon-green cursor-pointer hover:text-white transition-all">
                                    Login here
                                </span>
                            </Link>

                        </p>

                    </div>

                </div>

            </form>

            
        </div>
    )
}

export default Left
