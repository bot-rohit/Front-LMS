'use client'
import React from 'react'
import Dash from '@/components/dashboard/navbar'
import SideBar from '@/components/common/SideBar'
import Xpbar from '@/components/dashboard/xpbar'
import Modulee from '@/components/dashboard/module'
import Challenge from '@/components/dashboard/challengescard'
import Streak from '@/components/dashboard/streak'
import Badge from '@/components/dashboard/badge'
import Mobile from '@/components/errors/mobile'
const page = () => {
  return (
    <>
      <div className="lg:hidden px-10 py-20">
        <Mobile />
      </div>
      <div className="hidden lg:flex gap-5 w-auto">
        <SideBar />

        <div className="flex-1">
          <Dash />
          <Xpbar />

          <div className="flex w-auto">
            <div className="w-[40%]">
              <Modulee />
            </div>

            <div className="w-[60%]">
              <Challenge />
            </div>
          </div>

          <Streak />
          <Badge />
        </div>

      </div>

    </>
  )
}

export default page
