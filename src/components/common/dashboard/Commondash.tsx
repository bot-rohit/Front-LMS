'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

type DashboardProps = {
    dashboard: string
}
const Commondash = ({ dashboard }: DashboardProps) => {

    const [search, setSearch] = useState('')
    return (
        <>
            <div className='flex justify-around w-full bg-black min-h-10 my-5 p-0.5'  >

                <div className='flex  justify-center items-center gap-2 font-heading text-xl font-bold '>

                    <p className='text-neon-green'>{dashboard}</p>

                </div>
                <div className='hidden md:flex font-sans text-sm font-medium justify-center items-center gap-5
         text-gray-300 bg-trasparent '>
                    <Link href={'/dashboard'}>Dashboard</Link>
                    <Link href={'/courseLib'}>Courses</Link>
                    <Link href={'assignments'}>Assignments</Link>
                    <p>Quizzes</p>
                    <Link href={'/referals'}>Referrals</Link>

                </div>

                <div className='hidden min-[900]:flex font-sans font-medium text-sm justify-center items-center gap-3 '>

                    <div className='bg-[#2A3615] flex gap-2 justify-center items-center px-3 py-1 rounded-sm'>
                        <i className="ri-search-line text-gray-400 text-lg "></i>

                        <input className=' border-none outlint-none focus:outline-none focus:border-none text-gray-400 bg-transparent w-48 h-8 rounded-sm px-2 text-sm '
                            type='text' placeholder='Search Stratergy...' value={search} onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <i className="bi bi-bell text-white  text-xl"></i>

                    <Image src="/assets/Nav/person.png" alt="logos" width={40} height={40} className='ml-5' />



                </div>
                <div className='flex min-[900]:hidden bg-transparent '>
                    < i className="ri-menu-line text-white text-4xl " ></i>


                </div>

            </div>
            <hr className='border-1 w-full border-neon-green' />




        </>
    )
}

export default Commondash
