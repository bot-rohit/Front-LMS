import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Lvheader = () => {
    return (
        <div>
            <div className='flex justify-between w-auto  bg-black min-h-10 my-3 p-0.5 mx-20 py-2'  >

                <div className='flex  justify-center items-center gap-2 font-heading text-xl font-bold '>
                    <Image src="/assets/Nav/logo.png" alt="logo" width={30} height={25} />
                    <p className='text-white text-md'>TradeVed</p>
                    <div className='w-0.5 h-7 mx-5 bg-white' />
                    <p className='text-white text-md'>Creator</p>

                </div>


                <div className="hidden min-[900px]:flex items-center gap-8 font-heading">



                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neon-green/30 bg-neon-green/10 text-sm font-semibold text-neon-green">
                        AM
                    </div>

                </div>
            </div>
            <hr className='border-1  border-neon-green' />


        </div>
    )
}

export default Lvheader
