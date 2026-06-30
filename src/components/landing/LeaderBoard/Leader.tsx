import React from 'react'
import Card from './Card';

const leaderboardData = [
    {
        rank: "01",
        name: "Priya arya",
        xp: "12,450 XP",
    },
    {
        rank: "02",
        name: "Princy Sahu",
        xp: "11,900 XP",
    },
    {
        rank: "03",
        name: "Jaswinder Kaur",
        xp: "2,450 XP",
    },


];

const Leader = () => {
    return (
        <>
            <div className='bg-[radial-gradient(circle_at_top,#1a2a00_0%,#040700_55%,#020400_100%)] lg:mx-20 lg:pb-10 px-4 my-3'>
                <div className='font-heading gap-2 flex flex-col lg:px-10 px-4 pt-10'>
                    <div className='flex gap-2 '>
                        <p className='text-red-given'>WHY LEADERBOARD</p>
                        <i className="ri-arrow-right-line text-red-given"></i>
                    </div>
                    <p className='text-card-head font-bold text-4xl'> Weekly Leaders</p>
                </div>

                <div className='scale-75'>
                    <div className='w-full  flex items-center justify-center '>
                        <div className=' flex items-end gap-5'>
                            <div className='flex flex-col items-center gap-3'>
                                <div className='rounded-full border-4 border-neon-green p-1 size-18'>
                                    <img src='/assets/nav/person.png' className='w-full h-full rounded-full object-cover' />
                                </div>
                                <div className='px-7 py-13 rounded-t-3xl bg-[#2D3128] flex items-center justify-center text-white text-4xl font-bold'>
                                    2
                                </div>
                            </div>
                            <div className='flex flex-col items-center gap-3'>
                                <div className=''>
                                    <div className='px-3 py-2 rounded-full border-2 border-[#FFD600] flex items-center justify-center bg-black text-[#FFD600] text-sm'>
                                        ★
                                    </div>
                                </div>
                                <div className=' rounded-full border-4 border-neon-green p-1'>
                                    <img src='/assets/nav/person.png' className='w-full h-full rounded-full object-cover' />
                                </div>
                                <div className='px-7 py-20 rounded-t-3xl bg-neon-green flex items-center justify-center text-black text-5xl font-bold'>
                                    1
                                </div>
                            </div>
                            <div className='flex flex-col items-center gap-3'>
                                <div className='rounded-full border-4 border-neon-green p-1 size-18'>
                                    <img src='/assets/Nav/person.png' className='w-full h-full rounded-full object-cover' />
                                </div>
                                <div className='px-7 py-8 rounded-t-3xl bg-[#2D3128] flex items-center justify-center text-white text-4xl font-bold'>
                                    3
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='gap-5 flex flex-col px-10'>

                    {leaderboardData.map((element) => (
                        <div key={element.name}>
                            <Card data={element} />

                        </div>
                    ))}
                </div>

            </div>

        </>
    )
}

export default Leader
