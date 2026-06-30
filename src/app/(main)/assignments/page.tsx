'use client'
import React from 'react'

import Dash from '@/components/dashboard/navbar'
import SideBar from '@/components/common/SideBar'
import Header from '@/components/assignments/Header'
import Left from '@/components/assignments/Left'
import Right from '@/components/assignments/Right'
const page = () => {
  return (
    <div>
      <div className='flex gap-5 w-auto  '>
        <SideBar />
        <div className='flex-1'>

          <Dash />
          <Header/>


          <div className='w-auto flex gap-5'>
            <div className='w-[65%] '>
              <Left/>
        
            </div>
            <div className='w-[35%]'>
              <Right/>
  

            </div>
          </div>


        </div>
      </div>


    </div>
  )
}

export default page
