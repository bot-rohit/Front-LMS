import React from 'react'
import Graph from './Graph';
import Seats from './Seats';
import Leaderboard from './Leaderboard';
import Streak from './Streak';
const benefitsData = [
    {
        icon: "ri-book-open-line",
        title: "100+ lessons",
    },

    {
        icon: "ri-bar-chart-box-line",
        title: "Real market examples",
    },

    {
        icon: "ri-refresh-line",
        title: "Interactive quizzes",
    },

    {
        icon: "ri-flashlight-line",
        title: "Gamified rewards",
    },
];

const Start = () => {
    return (
        <>
            <div className=' flex px-20 pt-20 h-full gap-20  '>
                <div className='w-[50%]'>

                    <div className='flex flex-col gap-5 pr-5 font-heading'>
                        <div className='text-xs flex justify-star align-middle gap-1  items-center border-2 px-2 rounded-xl py-1 border-[#2A4100] bg-[#0A1600] w-fit'>
                            <i className="ri-circle-fill text-neon-green pb-0.5 "></i>
                            <p className='text-neon-green'>REFUNDABLE FEE MODEL</p>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col items-start gap-1 font-bold text-6xl gap-2'>
                                <p className='text-white'>Master the</p>
                                <p className='text-white'>Markets with  </p>
                                <p className='text-neon-green'>Interactive </p>
                                <p className='text-white'>Design </p>
                            </div>
                            <div className='max-w-130'>

                                <p className='text-card-font'>Structured trading courses, real-time market simulations,</p>
                                <p className='text-card-font'>and a gamified experience designed to turn beginners into pros.</p>
                            </div>
                        </div>


                        <div className='bg-neon-green py-2 rounded-md w-full'>
                            <button className='flex w-full  font-bold gap-1 justify-center items-center align-middle '>
                                <p>
                                    Enroll & Pay Refundable Fee
                                </p>

                                <i className="ri-arrow-right-line"></i>
                            </button>
                        </div>
                        <div className=' grid grid-rows-2 grid-cols-2 gap-5 pt-5'>
                            {benefitsData.map((element) => (
                                <div key={element.title} className='flex items-center gap-5'>
                                    <i className={`${element.icon} bg-red-given text-card-white p-1 rounded-md text-xl`}></i>
                                    <p className='text-card-white'>
                                        {element.title}
                                    </p>

                                </div>

                            ))}

                        </div>
                    </div>


                </div>
                <div className='w-[50%] relative h-auto    '>


                    <div className=' absolute min-h-100 px-20 pt-20 pb-10 z-1  border-2 rounded-2xl
                    // bg-[radial-gradient(circle_at_center,rgba(124,255,0,0.18)_0%,rgba(124,255,0,0.08)_35%,rgba(0,0,0,0.95)_75%)]
                    bg-[radial-gradient(circle_at_30%_40%,rgba(140,255,0,0.16)_0%,rgba(124,255,0,0.07)_35%,rgba(0,0,0,0.78)_100%)]
                    '>
                        <Graph />
                    </div>
                    <div className=' absolute z-5 items-end -right-4 scale-75 pb-10 -top-10 origin-top-right backdrop-blur-xl'>
                        <Seats/>

                    </div>
                    <div className='absolute z-3 -right-8 bottom-4  scale-75 origin-top-right backdrop-blur-xl '>

                        <Streak/>
                    </div>
                    <div className='absolute z-4 left-0 bottom-0 backdrop-blur-xl   scale-75 origin-top-right  '>
                        <Leaderboard/>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Start
