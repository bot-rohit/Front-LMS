'use client'
import React from 'react'
import Header from "@/components/create_course/comman/header"
import { useState } from 'react'
import Progress from '@/components/create_course/comman/progress'
import Info from '@/components/create_course/comman/info'
import BasicInfo from '@/components/create_course/basic/BasicInfo'
import Type from '@/components/create_course/basic/Type'
import Structure from '@/components/create_course/basic/Structure'

const page = () => {
    const [step , setStep] = useState(1);
  return (
    <div>
        <Header/>
        <Progress data ={{step}}/>
        <Info/>
        <BasicInfo/>
        <Type/>
        <Structure/>

  
        
      
    </div>
  )
}

export default page
