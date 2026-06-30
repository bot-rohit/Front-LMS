'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='w-full'  >
                <div className='flex justify-between  bg-black min-h-10 my-5 p-0.5 px-3 lg:px-20  py-2 lg:py-5'>


                    <div className='flex  justify-center items-center gap-2 font-heading text-xl font-bold '>
                        <Image src="/assets/Nav/logo.png" alt="logo" width={35} height={20} />
                        <p className='text-white'>TradeVed</p>

                    </div>
                    <div className='hidden md:flex font-sans text-sm font-medium justify-center items-center gap-5
        text-gray-300 bg-trasparent '>
                        <p>Dashboard</p>
                        <Link href={'/allCourses'}>Courses</Link>
                        <p>Assignments</p>
                        <p>Quizzes</p>
                        <p>Referrals</p>

                    </div>

                    <div className='hidden min-[900]:flex bg-transparent font-sans font-medium text-sm justify-center items-center gap-5 '>
                        <Link href='/login' className='bg-transparent text-white border-2 px-8 py-2 rounded-xl font-semibold 
            border-neon-green  '>
                            Login
                        </Link>
                        <Link href='/signup' className='bg-neon-green text-black  px-8 py-2 rounded-xl font-semibold '>
                            Sign up

                        </Link>

                    </div>
                    <div className="flex min-[900px]:hidden w-auto">
                        {!open ? (
                            <button onClick={() => setOpen(true)}>
                                <i className="ri-menu-line text-white text-4xl"></i>
                            </button>
                        ) : (
                            <div className="fixed inset-0 z-50 w-auto bg-[#0E0E0E]">
                                <div className="flex justify-end p-6">
                                    <button onClick={() => setOpen(false)}>
                                        <i className="ri-close-line text-white text-4xl"></i>
                                    </button>
                                </div>

                                <div className="flex h-[calc(100%-80px)] flex-col items-center justify-center gap-6 px-6">
                                    <Link
                                        href="/login"
                                        className="flex w-full max-w-xs items-center justify-center rounded-xl border border-card-page py-4 text-white transition hover:bg-white/10"
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        href="/signup"
                                        className="flex w-full max-w-xs items-center justify-center rounded-xl bg-neon-green py-4 font-semibold text-black transition hover:opacity-90"
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <hr className='border-1  border-neon-green' />




        </>

    )
}

export default Navbar
