import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const nav = () => {
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

                <div className='hidden min-[900]:flex bg-transparent font-sans font-medium text-sm justify-center items-center gap-4 '>

                    <p className='text-white mr-3'>Welcome Back  ! </p>
                    <i className="bi bi-bell text-white  text-xl"></i>
                    <Image src="/assets/Nav/person.png" alt="logos" width={40} height={40} className='' />
                    <Link href={"/creators/dashboard"} className='bg-[#FFE633]/10 relative text-[#FFE633] border-2 border-[#FFE633] px-8 ml-3 py-1 rounded-xl
                     font-semibold gap-2 flex items-center justify-center align-middle '>
                        Approval Pending
                        <i className="ri-arrow-right-line text-lg"></i>
                        <p className='absolute z-1 text-red-given font-bold top-15'>Clickable</p>
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

export default nav
