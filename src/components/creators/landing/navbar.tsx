import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navbar = () => {
    return (
        <>

            <div className='flex justify-around w-auto  bg-black min-h-10 my-3 p-0.5'  >

                <div className='flex  justify-center items-center gap-2 font-heading text-xl font-bold '>
                    <Image src="/assets/Nav/logo.png" alt="logo" width={30} height={25} />
                    <p className='text-white'>TradeVed</p>

                </div>
                <div className='hidden md:flex font-sans text-sm font-medium justify-center items-center gap-5
              text-gray-300 bg-trasparent '>
                    <p>Benefits</p>
                    <p>How it works</p>
                    <p>Earnings</p>
                    <p>Stories</p>


                </div>

                <div className='hidden min-[900]:flex bg-transparent font-sans font-medium text-sm justify-center items-center gap-5 '>
                    <button className='bg-transparent text-white border-2  py-2 px-10 rounded-xl font-semibold 
                  border-neon-green  '>
                        Sign in
                    </button>
                    <Link href={"/creators/account_setup"} className='bg-neon-green text-black px-10 py-1 rounded-xl
                     font-semibold gap-2 flex items-center justify-center align-middle '>
                        Become a creator
                        <i className="ri-arrow-right-line text-lg"></i>
                    </Link>

                </div>
                <div className='flex min-[900]:hidden bg-transparent '>
                    < i className="ri-menu-line text-white text-4xl " ></i>

                </div>

            </div>
            <hr className='border-1  border-neon-green' />

        </>

    )
}

export default navbar
