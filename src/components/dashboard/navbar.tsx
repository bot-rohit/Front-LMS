import React from 'react'
import { useState } from 'react'
import Image from 'next/image'

const navbar = () => {
    const [search, setSearch] = useState('')
    return (
        <>
            <div className='flex justify-around w-full bg-black  my-5 p-0.5'  >

                <div className='flex font-sans font-medium text-sm justify-around items-center gap-3 w-full  '>

                    <div className='bg-[#2A3615] flex gap-2 justify-center items-center px-3 py-1 rounded-sm'>
                        <i className="ri-search-line text-gray-400 text-lg "></i>

                        <input className=' border-none outlint-none focus:outline-none focus:border-none text-gray-400 bg-transparent w-48 h-8 rounded-sm px-2 text-sm '
                            type='text' placeholder='Search Stratergy...'
                        //  value={search} onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className='flex font-sans font-medium text-sm items-center gap-5 '>


                        <i className="bi bi-bell text-white  text-xl"></i>
                      
                        <div className="w-0.5 h-10 bg-card-page " />

                        <div className='text-white flex flex-col items-end justify-center'>
                            <p> name</p>
                            <p>level</p>
                        </div>
                        <Image src="/assets/Nav/person.png" alt="logos" width={40} height={40} className='ml-5' />
                    </div>

                </div>



            </div>

            <div className='h-0.5 bg-card-page mx-20' />






        </>
    )
}

export default navbar
