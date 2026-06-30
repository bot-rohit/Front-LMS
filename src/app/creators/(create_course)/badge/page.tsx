'use client'
import React from 'react'
import { useState } from 'react'
import Header from "@/components/create_course/comman/header"
import Progress from '@/components/create_course/comman/progress'
import Top from '@/components/create_course/badges/Header'
import Builder from '@/components/create_course/badges/Builder'
import Rules from '@/components/create_course/badges/Rules'


const page = () => {
    const [step, setStep] = useState(5);
    return (
        <div className='w-auto'>
            <Header />
            <Progress data={{ step }} />
            <Top />
            <div className='flex gap-10 '>
                <div className='w-[35%] '>
                    <Builder />
              
                </div>
                    <div className='w-[65%] '>
                        <Rules />

                    </div>

            </div>

        </div>
    )
}

export default page
