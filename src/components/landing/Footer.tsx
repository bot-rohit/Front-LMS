import React from 'react'
import Image from 'next/image'
const supportCard = {
    title: "Need help?",
    subtitle: "Contact TraderStop Support",
};
const Footer = () => {
    return (

        <>
            <div className=' w-auto mt-5 bg-[#111111]  hidden lg:flex lg:flex-col'>

                <div className='w-full relative min-h-40 p-10  border-t-3 border-white py-15'>

                    <div className='flex  relative justify-between md:px-[7vw] w-full'>



                        <div className='flex flex-col items-start  gap-2 '>
                            <div className='flex justify-center gap-3 font-heading text-xl font-semibold items-center '>
                                <Image src="/assets/Nav/logo.png" alt="logo" width={35} height={20} />
                                <p className='text-white'>TraderStop</p>
                            </div>

                            <div className='font-sans text-sm leading-relaxed
                    font-medium justify-center items-center max-w-[250px]  text-gray-500 gap-5  bg-trasparent mt-2 '>
                                <p>Empowering the next generation of
                                    retail traders with professional
                                    institutional tools and education.</p>

                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='font-sans text-white font-semibold text-base '>Platform</p>
                            <ul className='text-gray-400 text-sm flex flex-col gap-2'>
                                <li><a href='#'>All Courses</a></li>
                                <li><a href='#'>Free Resources</a></li>
                                <li><a href='#'>Trade Copier</a></li>
                            </ul>


                        </div>
                        <div className=' flex flex-col gap-4'>
                            <p className='font-sans text-white font-semibold text-base'>Support</p>
                            <ul className='text-gray-500 text-sm flex flex-col gap-2'>
                                <li><a href='#'>Contact Us</a></li>
                                <li><a href='#'>FAQs</a></li>
                                <li><a href='#'>Help Center</a></li>
                            </ul>
                        </div>


                        <div className='flex flex-col  gap-4 align-middle px-[6vw]'>
                           


                            <div className="overflow-hidden rounded-2xl border border-[#232b1a] bg-gradient-to-r
                             from-[#1a1d14] via-[#23251b] to-[#1a1d14] p-5">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5b1e3f]">
                                        <i className="ri-customer-service-2-line text-2xl text-[#FFB6D5]"></i>
                                    </div>

                                    <div>
                                        <h3 className="text-md font-bold text-[#E8E8DD]">
                                            {supportCard.title}
                                        </h3>

                                        <p className="mt-1 text-sm text-[#C8C8BA]">
                                            {supportCard.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>






                </div>



                <div className='flex justify-center font-sans text-gray-500 border-t-2 w-auto border-[#1E293B] mx-auto mt-5 ks:mt-20 py-25 '>
                    <p>© 2026 TraderStop by TradeVed. All rights reserved. </p>
                </div>

            </div>



        </>


    )
}

export default Footer
