'use client'
import React from 'react'
import { useState } from 'react'
import Progress1 from './progress1';
import Progress2 from './progress2';
import Progress3 from './progress3';
import { useEffect } from 'react';
import gsap from "gsap";
import { useRef } from 'react';

const details = [
    {
        id: 1,
        title: "Account",
        description: "Basic details & verification",
    },
    {
        id: 2,
        title: "Creator Type",
        description: "How you'll use the platform",
    },
    {
        id: 3,
        title: "Expertise",
        description: "Trading styles & assets",
    },
];


const setup = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [progress, setProgress] = useState(34);
    const barRef = useRef<HTMLDivElement>(null);
    const [step, setStep] = useState(0);

    useEffect(() => {
        gsap.to(barRef.current, {
            width: `${progress}%`,
            duration: 0.5,
            ease: "power2.out",
        });
    }, [progress]);
    const steps = [
        <Progress1 key="1" />,
        <Progress2 key="2" />,
        <Progress3 key="3" />,
    ];



    return (
        <>
            <div className='w-auto px-20 py-10 flex  '>
                <div className='w-[50%] flex flex-col gap-10'>
                    <div className='font-heading flex flex-col gap-3 '>
                        <p className='text-neon-green'>GET STARTED </p>
                        <div className='felx flex-col'>
                            <p className='text-4xl text-white font-bold'>Create your TraderStop</p>
                            <p className='text-4xl font-bold text-white'>Create account.</p>
                        </div>
                        <p className='text-card-font'>Less than 3 minutes. You can edit everything later.</p>
                    </div>

                    <div className="bg-black ">
                        {details.map((step, index) => {
                            const completed = step.id < currentStep;
                            const active = step.id === currentStep;
                            return (
                                <div key={step.id} className="flex font-heading gap-5">
                                    <div className="flex flex-col items-center  gap-0">
                                        <div className={`py-3  rounded-full font-sans   border-2 border-card-font
                                            flex items-center justify-center text-2xl font-bold ${completed ? "bg-neon-green/20 px-4 " : active ? "bg-neon-green px-5 " : " px-5 bg-[#191B19] text-card-font"}`}>

                                            {completed ? (<i className="ri-check-line text-white"></i>) : (step.id)}
                                        </div>

                                        {index !== 2 && (
                                            <div className="w-[1px] h-15 my-3 bg-card-font" />
                                        )}
                                    </div>
                                    <div className="pt-1">
                                        <h2 className={`text-2xl font-semibold 
                                            ${completed ? "text-neon-green" : "text-card-font"}`}>
                                            {step.title}
                                        </h2>
                                        <p className="text-card-font text-md mt-1">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {/* <button className='bg-neon-green w-fit px-5 py-2 rounded-2x'
                        onClick={() => {
                            setCurrentStep((prev) => Math.min(prev + 1, steps.length))
                            { console.log(currentStep) }
                        }}
                    >
                        HI
                    </button> */}
                </div>
                <div className='w-[50%] p-5 rounded-2xl bg-[#080C00] border border-pink flex flex-col justify-between '>


                    <div className=" pt-5">
                        <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                            <div
                                ref={barRef}
                                className="h-full bg-lime-400 rounded-full"
                                style={{ width: "0%" }}
                            />
                        </div>
                        {/* <button
                            className="mt-4 px-4 py-2 bg-black text-white"
                            onClick={() => {
                                setProgress((prev) => Math.min(prev + 33, 100));
                                setStep((prev) => Math.min(prev + 1, steps.length - 1));
                            }}
                        >
                            Next
                        </button> */}
                    </div>

                    <div className='mt-4'>
                        {steps[step]}

                    </div>
                    <div className="mt-8 px-5 flex items-center justify-between">
                        <button
                            onClick={() => {
                                setProgress((prev) => Math.max(prev - 33, 34));
                                setStep((prev) => Math.max(prev -1, 0));
                                setCurrentStep((prev) => Math.max(prev -1, 1))
                            }}

                            className="text-zinc-400 transition hover:text-white">
                            ← Back
                        </button>

                        <button
                            onClick={() => {
                                setProgress((prev) => Math.min(prev + 33, 100));
                                setStep((prev) => Math.min(prev + 1, steps.length - 1));
                                setCurrentStep((prev) => Math.min(prev + 1, steps.length))
                            }}

                            className="rounded-full bg-lime-400 px-8 py-2 font-semibold text-black transition hover:scale-103">
                            Continue →
                        </button>
                    </div>


                </div>

            </div>


        </>
    )
}

export default setup
