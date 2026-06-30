'use client'
import React from 'react'
import Dash from '@/components/dashboard/navbar'
import SideBar from '@/components/common/SideBar'
import Xpbar from '@/components/dashboard/xpbar'
import Modulee from '@/components/dashboard/module'
import Challenge from '@/components/dashboard/challengescard'
import Streak from '@/components/dashboard/streak'
import Badge from '@/components/dashboard/badge'
const page = () => {
  return (
    <>
      <div className='flex gap-5 w-auto  '>
        <SideBar />
        <div className='flex-1'>
          <Dash />
          <Xpbar />
          <div className='w-auto flex'>
            <div className='w-[40%] '>
              <Modulee/>
            </div>
            <div className='w-[60%]'>
              <Challenge/>

            </div>
          </div>
          <Streak/>
          <Badge/>
        </div>
      </div>

    </>
  )
}

export default page
