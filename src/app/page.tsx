'use client'
import React, { use } from 'react'
import { useState } from 'react'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import SideBar from '@/components/common/SideBar'
import Cdashboard from '@/components/common/dashboard/Commondash'
import Courcecard from '@/components/landing/Courcecard'
import Learning from '@/components/landing/Learning'
import Start from '@/components/landing/Start'
import Left from '@/components/landing/PlatformEco/Left'
import Right from '@/components/landing/PlatformEco/Right'
import Fullgamified from '@/components/landing/Gamified/Fullgamified'
import Community from '@/components/landing/Community/CommunityVoices'
import Why from '@/components/landing/WhyChoose/Wht'
import Frequently from '@/components/landing/Faq/Frequently'
import Refund from '@/components/landing/Refund/WhyRefund'
import Zero from '@/components/landing/ZeroRisk/Zero'
import Starting from '@/components/landing/Starting/Startingpage'
import Graph from '@/components/landing/Starting/Graph'
import Leader from '@/components/landing/LeaderBoard/Leader'
import VideoPlayer from '@/components/common/VideoPlayer'
import SuRight from '@/components/Login/SignUp/Left'
import SuLeft from '@/components/Login/SignUp/Right'
import RAlready from '@/components/Login/Already/Areg'
import LoginM from '@/components/Login/LogMain/Right'
import In from '@/components/Login/Invalid/In'
import For from '@/components/Login/Forgot/Reset'
import ResetA from '@/components/Login/Forgot/ResetAccess'
import { redirect } from 'next/navigation'


const page = () => {
  const[dashboard,setDashboard] = useState('Course Library') 
  return (
    <div>
      <Navbar />
      <Starting/>
      <Right/>
      <Fullgamified/> 
      <Leader/>
      <Learning/>
      <Zero/>
      <Refund/>
      <Why/>
      <Community/>
      <Frequently/>
      <Start/>
      <Footer />   
    </div>
  )
}

export default page
