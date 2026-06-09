'use client'
import React from 'react'
import Header from "@/components/create_course/comman/header"
import { useState } from 'react'
import Progress from '@/components/create_course/comman/progress'
import Info from '@/components/create_course/comman/info'

const page = () => {
    const [step , setStep] = useState(2);
  return (
    <div>
        <Header/>
        <Progress data ={{step}}/>
        <Info/>
        
      
    </div>
  )
}

export default page
