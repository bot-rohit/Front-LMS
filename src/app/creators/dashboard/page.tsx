import React from 'react'
import Nav from '@/components/creators/dashboard/Nav'
import Sidebar from '@/components/creators/dashboard/Sidebar'
import Head from '@/components/creators/dashboard/header'
import Mid from '@/components/creators/dashboard/mid'
import One from '@/components/creators/dashboard/graph_one'
import Two from '@/components/creators/dashboard/graph_two'

const page = () => {
    return (
        <div className=' w-auto h-full'>
            <Nav />
            <div className='flex gap-5 w-full h-full'>
                <div className=' h-auto'>
                    <Sidebar />
                </div>

                <div className='flex-1'>
                    <Head />
                    <Mid />
                    <One />
                    <Two />
                </div>
            </div>

        </div>
    )
}

export default page
