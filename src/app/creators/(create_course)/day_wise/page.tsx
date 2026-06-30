'use client'
import React from 'react'
import Header from "@/components/create_course/comman/header"
import { useState } from 'react'
import Progress from '@/components/create_course/comman/progress'
import Info from '@/components/create_course/comman/info'
import Modules from '@/components/create_course/comman/modules'
import Header2 from '@/components/create_course/day_wise/Header'
const page = () => {
  const [step, setStep] = useState(2);
  return (
    <div>
      <Header />
      <Progress data={{ step }} />
      <Info />
      <div className='w-auto flex gap-15'>
        <div className='w-[25%] '>
          <Modules/>
        </div>
        <div className='w-[75%] '>
          <Header2/>

        </div>

      </div>



    </div>
  )
}

export default page
