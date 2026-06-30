import React from 'react'
export const games = [
    {
        id: 1,
        title: "Trading Quiz",
        action: "PLAY NOW",
        badge: "+50 XP",
        icon: "ri-questionnaire-line",
        accent: "border-l-[#A6FF00]",
    },
    {
        id: 2,
        title: "Mental Maths",
        action: "PLAY NOW",
        badge: "+25 XP",
        icon: "ri-calculator-line",
        accent: "border-l-[#FF008C]",
    },
    {
        id: 3,
        title: "Spin & Win",
        action: "PLAY NOW",
        badge: "SPIN",
        icon: "ri-focus-3-line",
        accent: "border-l-[#A6FF00]",
    },
    {
        id: 4,
        title: "Revision Wheel",
        action: "PLAY NOW",
        badge: "REVIEW",
        icon: "ri-refresh-line",
        accent: "border-l-[#FF008C]",
    },
];

const challengescard = () => {
    return (
        <>
            <div className='mt-20 mr-10 ml-10 '>
                <div className='flex gap-2 mb-5'>
                    <i className="ri-flashlight-line text-pink-300 text-xl"></i>
                    <p className='text-card-font text-xl font-bold font-heading'>Quick Challenges</p>
                </div>



                <div className="grid grid-cols-2 gap-10">
                    {games.map((game) => (
                        <div
                            key={game.id}
                            className={`overflow-hidden rounded-2xl border-l-4 ${game.accent}
                           bg-[#080C00] p-6 transition-all duration-300  hover:-translate-y-1 
                            hover:border-white/20 `}>
                            <div className='flex  justify-between'>
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2A2F25]">
                                    <i
                                        className={`${game.icon} text-xl text-[#D7FF7A]`}
                                    />
                                </div>

                                <span className=" right-5 top-5 text-xs font-semibold text-[#D8D8D8]">
                                    {game.badge}
                                </span>


                            </div>


                            <h3 className="mt-8 text-2xl font-semibold text-white">
                                {game.title}
                            </h3>

                   
                            <button className="mt-6 flex items-center gap-2 text-xs font-bold tracking-wider text-[#E6FF9B]">
                                {game.action}
                                <i className="ri-arrow-right-line" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default challengescard
