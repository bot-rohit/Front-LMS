import React from 'react'
import Card from './Card';
import Image from 'next/image';

const featuresData = [
    {
        icon: "ri-flashlight-line",
        title: "Motivation",
        description:
            "Financial incentive drives consistent learning and discipline in market analysis.",
    },

    {
        icon: "ri-medal-line",
        title: "Performance-Based",
        description:
            "Earn back your investment by demonstrating proficiency and completing goals.",
    },

    {
        icon: "ri-shield-check-line",
        title: "Trust & Transparency",
        description:
            "Automated refund triggers ensure you get paid exactly when you hit benchmarks.",
    },

    {
        icon: "ri-scales-3-line",
        title: "Fair Learning Model",
        description:
            "Education should be an investment in yourself, not a sunk cost for others.",
    },
];

const WhyRefund = () => {
    return (
        <>
            <div className='flex py-20 lg:px-10  font-heading lg:mx-20 px-4 lg:bg-[#080C00] justify-center'>
                <div className='lg:w-[50%] '>

                    <div className='flex flex-col gap-5 pr-5'>
                        <div className='text-xs'>
                            <p className='text-neon-green'>THE INTEGRITY PROTOCOL</p>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <div className='flex items-start gap-1 font-bold text-3xl gap-2'>
                                <p className='text-white'>Why </p>
                                <p className='text-neon-green'>REFUND?</p>
                            </div>
                            <div className='max-w-130'>

                                <p className='text-card-font'>Traditional education benefits when you don’t finish.</p>
                                <p className='text-card-font'>    We succeed when you do. Complete the course, prove your discipline, and get your full fee refunded.</p>
                            </div>

                        </div>

                        <div className='bg-amber-100'>
                            <div className='flex justify-center relative'>
                                <Image src={'/assets/Landing/Mentor.png'} alt='img' height={200} width={200}
                                    className=' absolute z-1
                                                border-2 border-card-page rounded-2xl w-xl p-5 object-cover opacity-100 '/>
                                <div className=' absolute z-2 lg:mt-60 mt-33 px-2 py-1 gap-2 rounded-full bg-red-given flex justify-center align-middle items-center'>
                                    <i className="bi bi-play-fill text-neon-green text-2xl "></i>
                                    <p>Watch Explainer</p>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>



                <div className='lg:w-[50%] lg:grid lg:grid-rows-2 hidden grid-cols-2 gap-5 ' >

                    {featuresData.map((element) => (
                        <div key={element.title}>
                            <Card sending={element} />

                        </div>


                    ))}

                </div>

            </div>
        </>
    )
}

export default WhyRefund
