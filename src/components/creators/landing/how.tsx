import React from 'react'
import Howcard from './howcard'
const steps = [
    {
        id: 1,
        title: "Apply & Verify",
        description:
            "Sign up, complete KYC and showcase your trading credentials.",
        number: "01",
        icon: "ri-arrow-right-line",
    },
    {
        id: 2,
        title: "Build Your Course",
        description:
            "Drag-and-drop modules, lessons, quizzes and live sessions.",
        number: "02",
        icon: "ri-arrow-right-line",
    },
    {
        id: 3,
        title: "Publish & Earn",
        description:
            "Go live to 180k+ learners and get weekly automated payouts.",
        number: "03",
        icon: "ri-arrow-right-line",
    },
];

const how = () => {
    return (
        <>
            <div className='px-20 py-5 w-auto'>
                <div className='font-heading gap-1 flex flex-col mb-10'>
                    <p className='text-neon-green text-md'>HOW IT WORKS</p>
                    <p className='text-white text-3xl font-bold font-sans'>Launch your first course in 3 steps.</p>
                </div>
                <div className='flex gap-5'>
                    {steps.map((element) => (
                        <div key={element.id} className='border px-5 py-5 bg-[#161A13] rounded-2xl'>
                            <Howcard sending={element} />
                        </div>
                    ))}
                </div>

            </div>
        </>

    )
}

export default how
