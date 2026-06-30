'use client'
import React from 'react'
import { useState } from 'react'
import Header from "@/components/create_course/comman/header"
import Progress from '@/components/create_course/comman/progress'
import Core from '@/components/create_course/pricing/Core'
import Estimated from '@/components/create_course/pricing/Estimated'
import FootBut from '@/components/create_course/pricing/FootBut'
const page = () => {
    const [step, setStep] = useState(6);
    return (
        <div>
            <Header />
            <Progress data={{ step }} />
            <div className='flex gap-5'>
                <div className='w-[70%]'>
                    <Core />
                </div>
                <div className='w-[30%]'>
                    <Estimated/>
                    
                </div>

            </div>
            <FootBut/>

        </div>
    )
}

export default page
