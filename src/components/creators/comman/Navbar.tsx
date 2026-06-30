import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
    return (
        <>

            <div className='flex justify-between w-auto  bg-black min-h-10 my-3 p-0.5 px-20  py-2'  >

                <div className='flex  justify-center items-center gap-2 font-heading text-xl font-bold '>
                    <Image src="/assets/Nav/logo.png" alt="logo" width={30} height={25} />
                    <p className='text-white'>TradeVed</p>

                </div>


                <div className='hidden min-[900]:flex bg-transparent font-sans font-medium text-sm justify-center items-center gap-5 '>
                    <button className='bg-transparent text-white py-2 px-10  font-semibold  flex gap-2
                   '>
                        <i className="ri-arrow-left-line text-md"></i>
                        Back
                    </button>


                </div>
                <div className='flex min-[900]:hidden bg-transparent '>
                    < i className="ri-menu-line text-white text-4xl " ></i>

                </div>

            </div>
            <div className='pb-5'>

                <hr className='border-1  border-neon-green ' />
            </div>

        </>
    )
}

export default Navbar
