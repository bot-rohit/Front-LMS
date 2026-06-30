import React from 'react'
import Nav from '@/components/videoTerminal/Nav'
import SideBar from '@/components/videoTerminal/SideBar'
import Vid from '@/components/videoTerminal/Vide'
import Deeper from '@/components/videoTerminal/Deeper'
import Footer from '@/components/videoTerminal/Footer'

const page = () => {
    return (
        <div className='w-auto'>

                <Nav />
            <div className=' w-auto flex h-full'>
                <div className=' '>
                    <SideBar />
                </div>
                <div className=' '>
                    <Vid />
                    <Deeper />
                    <Footer />

                </div>

            </div>
        </div>
    )
}

export default page
