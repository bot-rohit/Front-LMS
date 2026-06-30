import React from 'react'
import Image from 'next/image';
import Card from './Card';

const featuresData = [
  {
    icon: "1.png",
    title: "Expert Mentors",
    description:
      "Learn from institutional veterans who have traded through every market cycle imaginable.",
  },

  {
    icon: "2.png",
    title: "Structured Curriculum",
    description:
      "No fluff. Just a data-backed roadmap from basic mechanics to advanced liquidity concepts.",
  },

  {
    icon: "3.png",
    title: "Interactive Learning",
    description:
      "Gamified modules and real-time feedback loops ensure information sticks for the long term.",
  },

  {
    icon: "4.png",
    title: "Leaderboard & Rewards",
    description:
      "Compete with a global community and earn exclusive trading perks and crypto rewards.",
  },

  {
    icon: "5.png",
    title: "Real Market Practice",
    description:
      "Trade live price action in our proprietary sandbox environment with zero capital at risk.",
  },

  {
    icon: "6.png",
    title: "Supportive Community",
    description:
      "24/7 access to our private Discord where insights are shared and traders grow together.",
  },
];

const Wht = () => {
    return (
        <>
            <div className=' hidden font-heading px-[5vw] py-5 lg:flex lg:flex-col gap-10 mx-10 lg:pt-30 pt-20 bg-black'>
                <div className='flex flex-col gap-5 '>
                    <div className='text-xs'>
                        <p className='text-neon-green'>ENGINEERED FOR SUCCESS</p>
                    </div>
                    <div className='flex justify-between '>
                        <div className='flex items-start gap-1 font-bold text-5xl'>
                            <p className='text-white'>Why Choose </p>
                            <p className='text-neon-green'>Us?</p>

                        </div>
                        <p className='text-card-font'>Building the next generation of professional retail traders.</p>

                    </div>
                </div>


                <div className='grid grid-rows-2 grid-cols-3 gap-5'>
                    
                    {featuresData.map((element)=>(
                        <div key={element.title} className=''>
                            <Card given={element}/>
                        </div>
                    ))}
                    

                </div>


            </div>
        </>
    )
}

export default Wht
