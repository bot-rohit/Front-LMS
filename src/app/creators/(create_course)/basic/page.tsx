'use client'
import React from 'react'
import Header from "@/components/create_course/comman/header"
import { useState } from 'react'
import Progress from '@/components/create_course/comman/progress'
import Info from '@/components/create_course/comman/info'

const page = () => {
    const [step , setStep] = useState(1);
  return (
    <div>
        <Header/>
        <Progress data ={{step}}/>
        <Info/>
        <div className='w-auto'>
            <div className='w-[30%] bg-white'>
                <p> gi</p>
            </div>
            <div className='w-[70%] bg-pink-50'>

            </div>

        </div>
        
      
    </div>
  )
}

export default page
