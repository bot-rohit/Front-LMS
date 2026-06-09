import React from 'react'
import Image from 'next/image';
import Card from './Card';

const stepsData = [
    {
        icon: "ri-user-add-line",
        title: "Sign Up",
        description:
            "Create your secure profile and join our elite trading ecosystem in seconds.",
    },

    {
        icon: "ri-graduation-cap-line",
        title: "Enroll in a Course",
        description:
            "Select from our curriculum of institutional-grade market strategies.",
    },

    {
        icon: "ri-line-chart-line",
        title: "Learn & Practice",
        description:
            "Master the charts with interactive simulators and real-time data feeds.",
    },

    {
        icon: "ri-bar-chart-grouped-line",
        title: "Track Progress",
        description:
            "Analyze your performance metrics and hit benchmarks to unlock refunds.",
    },
];

const Zero = () => {
    return (
        <>
            <div className=' font-heading p-10 mx-20 mt-20 pb-20'>
                <div className='flex flex-col gap-5 pr-5 items-center'>
                    <div className='text-xs'>
                        <p className='text-neon-green'>ZERO RISK MASTERY</p>
                    </div>

                    <div className='flex flex-col gap-5 items-center'>
                        <div className='flex items-start gap-1 font-bold text-5xl gap-2'>
                            <p className='text-card-head'>Here's How You Will </p>
                            <p className='text-neon-green'> Learn for Free</p>
                        </div>
                        <div className=' flex flex-col items-center'>


                            <p className='text-card-font'>A streamlined, performance-driven path designed to transform beginners into</p>
                            <p className='text-card-font'> disciplined traders without the financial barrier.</p>

                        </div>

                    </div>
                </div>

                <div className='flex w-full gap-5 pt-10'>
                    {stepsData.map((element) => (
                        <div key={element.description}>
                            <Card sending={element} />




                        </div>
                    ))}

                </div>

                <div className='flex justify-center relative'>

                    <Image src={'/assets/Landing/trading.png'} alt='img' height={200} width={200}
                        className=' 
                    border-2 border-card-page rounded-2xl w-xl p-5 object-cover opacity-40 '/>
                    <div className='shadow-[0_0_80px_#A6FF00]
                     absolute z-2 mt-30 pl-2.5 pr-2  py-2 rounded-full bg-neon-green flex justify-center align-middle items-center'>
                        <i className="bi bi-play-fill text-black text-5xl "></i>

                    </div>

                </div>


            </div>
        </>
    )
}

export default Zero
