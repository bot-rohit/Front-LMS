'use client'
import React from 'react'
import Anylysis from '@/components/create_course/preview/Anylysis'
import Header from "@/components/create_course/comman/header"
import { useState } from 'react'
import Progress from '@/components/create_course/comman/progress'

const page = () => {
  const [step, setStep] = useState(7);
  return (
    <div>
      <Header />
      <Progress data={{ step }} />
      <Anylysis />

    </div>
  )
}

export default page
