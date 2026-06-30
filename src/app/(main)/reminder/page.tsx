'use client'
import React from 'react'
import Dash from '@/components/dashboard/navbar'
import SideBar from '@/components/common/SideBar'
import Left from '@/components/reminder/Left'
import Right from '@/components/reminder/Right'

const page = () => {
    return (
        <div>
            <div className='flex gap-5 w-auto  '>
                <SideBar />
                <div className='flex-1'>
                    <Dash />
                    <div className='grid grid-cols-[70%_30%] gap-5'>
                        <Left/>
                        <Right/>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default page
