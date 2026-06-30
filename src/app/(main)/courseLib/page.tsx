import React from 'react'
import Cdashboard from '@/components/common/dashboard/Commondash'
import Header from '@/components/course_lib/Header'
import Countine from '@/components/course_lib/Countine'
import Recommend from '@/components/course_lib/Recommend'
import Release from '@/components/course_lib/Release'
import Start from '@/components/landing/Start'
import Footer from '@/components/landing/Footer'



const page = () => {
    return (
        <div>
            <Cdashboard dashboard='Course Library' />
            <Header />
            <Countine />
            <Recommend />
            <Release />
            <div className=' pt-20 pb-20 px-10 '>
                <Start />
            </div>
            <Footer />


        </div>
    )
}

export default page
