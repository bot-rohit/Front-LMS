'use client'
import React from 'react'
import Header from "@/components/create_course/comman/header"
import Progress from '@/components/create_course/comman/progress'
import { useState } from 'react'
import WHead from "@/components/create_course/widgets/Header"
import Cards from '@/components/create_course/widgets/Cards'
import Left from '@/components/create_course/widgets/Left'

const page = () => {
    const [step, setStep] = useState(3);
    return (
        <div className='h-auto '>
            <Header />
            <Progress data={{ step }} />
            <div className='flex h-full'>
                <div className='w-[70%] '>
                    <WHead />
                    <Cards />
                </div>

                <div className='w-[30%] h-auto   '>
                    <Left />
            
                </div>

            </div>

        </div>
    )
}

export default page
