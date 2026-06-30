'use client'
import React from 'react'
import Cdashboard from '@/components/common/dashboard/Commondash'
import Header from '@/components/leaderboard/Header'
import Leader from '@/components/landing/LeaderBoard/Leader'
import Board from '@/components/leaderboard/Board'
import Bottom from '@/components/leaderboard/Bottom'
import Footer from '@/components/landing/Footer'


const page = () => {
  return (
    <div>
          <Cdashboard dashboard='LeaderBoard' />
          <Header/>
          <Leader/>
          <Board/>
          <Bottom/>
          <Footer/>

      
    </div>
  )
}

export default page
