import React from 'react'
const courseCreationSteps = [
    {
        id: 1,
        title: "Basic Info",
        icon: "ri-file-list-3-line",
        completed: true,
        active: false
    },
    {
        id: 2,
        title: "Day-wise Content",
        icon: "ri-calendar-check-line",
        completed: true,
        active: false
    },
    {
        id: 3,
        title: "Widgets",
        icon: "ri-flashlight-line",
        completed: false,
        active: true
    },
    {
        id: 4,
        title: "Gamification",
        icon: "ri-gamepad-line",
        completed: false,
        active: false
    },
    {
        id: 5,
        title: "Badges",
        icon: "ri-medal-line",
        completed: false,
        active: false
    },
    {
        id: 6,
        title: "Pricing",
        icon: "ri-price-tag-3-line",
        completed: false,
        active: false
    },
    {
        id: 7,
        title: "Preview",
        icon: "ri-play-circle-line",
        completed: false,
        active: false
    }
];

interface coming {
    step: number,
}
interface keeping {
    data: coming

}

const progress = ({ data }: keeping) => {
    console.log(data.step)
    return (
        <>
            <div className='w-full bg-[#0A0F06] py-5 border-y-1 border-y-card-page'>
                <div className='flex justify-between w-full '>

                    {courseCreationSteps.map((step, index) => {
                        const completed = step.id < data.step;
                        const active = step.id === data.step;
                        return (
                            <div key={step.id} className='flex items-center gap-3    '>
                                <div className={` text-xs font-heading flex gap-2 font-bold 
                        
                                
                            py-2 px-4 mx-4 rounded-2xl ${active ? " bg-neon-green" : completed ? "bg-neon-green/30 text-neon-green" :
                                        " text-card-font bg-[#161A13]"}`}>
                                    {completed ? (<i className="ri-check-line"></i>) : (<i className={step.icon}></i>)}

                                    <span>{step.title}</span>


                                </div>
                                {index !== courseCreationSteps.length - 1 && (
                                    <div className="flex-1 h-px w-full min-w-15  bg-white/20" />
                                )}
                            </div>

                        )

                    })}

                </div>
            </div>
        </>
    )
}

export default progress
