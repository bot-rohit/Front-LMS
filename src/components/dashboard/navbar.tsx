import React from 'react'
import { useState } from 'react'
import Image from 'next/image'

const navbar = () => {
    const [search, setSearch] = useState('')
    return (
        <>
            <div className='flex w-auto justify-between mt-5 pl-5  ml-5 mr-10'  >


                <div className='bg-[#2A3615] flex gap-2 justify-center items-center px-3 py-1 rounded-sm'>
                    <i className="ri-search-line text-gray-400 text-lg "></i>

                    <input className=' border-none outlint-none focus:outline-none focus:border-none text-gray-400 bg-transparent w-48 h-8 rounded-sm px-2 text-sm '
                        type='text' placeholder='Search Stratergy...'
                    />
                </div>
                <div className='flex font-sans font-medium text-sm items-center gap-5 '>


                    <i className="bi bi-bell text-white  text-xl"></i>

                    <div className="w-0.5 h-10 bg-card-page " />

                    <div className='text-white flex flex-col items-end justify-center'>
                        <p> Rohit</p>
                        <p>level 14</p>
                    </div>
                    <Image src="/assets/Nav/person.png" alt="logos" width={40} height={40} className='ml-5' />


                </div>



            </div>








        </>
    )
}

export default navbar
