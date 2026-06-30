import React from 'react'
import Navbar from '@/components/creators/beforever/nav'
import Header from '@/components/creators/beforever/header'
import Whytrade from '@/components/creators/landing/whytrade'
import How from '@/components/creators/landing/how'
import Earning from '@/components/creators/landing/earning'
import Loved from '@/components/creators/landing/loved'

import Footer from '@/components/creators/beforever/landing'

const page = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Whytrade />
            <How />
            <Earning />
            <Loved />
            <Footer />


        </div>
    )
}

export default page
