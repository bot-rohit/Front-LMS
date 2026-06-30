import React from 'react'
import Head from '@/components/overview/header'
import Breakdown from '@/components/overview/breakdown'
import Outcome from '@/components/overview/outcome'
import Instructor from '@/components/overview/instructore'
import View from '@/components/overview/view'
import Footer from '@/components/landing/Footer'
import Cdashboard from '@/components/common/dashboard/Commondash'

const page = () => {
    return (
        <div>
            <div className='pb-10'>

                <Cdashboard dashboard='Course Library' />
            </div>
            <Head />
            <Outcome />
            <Breakdown />
            <Instructor />
            <View />
            <div className=' mt-50'>

                <Footer />
            </div>


        </div>
    )
}

export default page
