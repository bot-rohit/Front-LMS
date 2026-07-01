import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
    return (
        <>

            <div className='flex justify-between w-auto  bg-black min-h-10 my-3 p-0.5 mx-20 py-2'  >

                <Link href={'/creators'} className='flex  justify-center items-center gap-2 font-heading text-xl font-bold '>
                    <Image src="/assets/Nav/logo.png" alt="logo" width={30} height={25} />
                    <p className='text-white'>TradeVed</p>
                    <div className='w-0.5 h-7 mx-5 bg-white' />
                    <p className='text-white'>Creator</p>

                </Link>


                <div className="hidden min-[900px]:flex items-center gap-8 font-heading">

                    <Link
                        href="/creators/basic"
                        className="flex items-center gap-2 rounded-xl bg-neon-green px-8 py-1 text-sm font-semibold text-black hover:scale-[1.02] transition"
                    >
                        <i className="ri-add-line text-lg"></i>
                        Create Course
                    </Link>

                    <button className="relative text-card-font hover:text-white transition">
                        <i className="ri-notification-3-line text-xl"></i>

                        <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-pink-500" />
                    </button>



                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neon-green/30 bg-neon-green/10 text-sm font-semibold text-neon-green">
                        AM
                    </div>

                </div>
            </div>
            <hr className='border-1  border-neon-green' />

        </>
    )
}

export default Nav
