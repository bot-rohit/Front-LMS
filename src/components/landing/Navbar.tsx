'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <div className='w-full'  >
                <div className='flex justify-between  bg-black min-h-10 my-5 p-0.5 px-3 lg:px-20 py-5'>


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
                    <div className='flex min-[900]:hidden bg-transparent '>
                        < i className="ri-menu-line text-white text-4xl " ></i>

                    </div>

                </div>
            </div>
            <hr className='border-1  border-neon-green' />




        </>

    )
}

export default Navbar
