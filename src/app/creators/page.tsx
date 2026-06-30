'use client'
import React from 'react'
import Navbar from '@/components/creators/landing/navbar'
import Createsell from '@/components/creators/landing/createsell'
import Whytrade from '@/components/creators/landing/whytrade'
import How from '@/components/creators/landing/how'
import Earning from '@/components/creators/landing/earning'
import Loved from '@/components/creators/landing/loved'
import Footer from '@/components/creators/landing/footer'
import Setup from '@/components/creators/account/setup'
import Beforever from '@/components/creators/beforever/landing'
import Header from '@/components/creators/profile/header'
import First from '@/components/creators/profile/first'
import Second from '@/components/creators/profile/second'
import Third from '@/components/creators/profile/third'

const page = () => {
  return (
    <>
    <Navbar/>
    <Createsell />
    <Whytrade />
    <How/>
    <Earning/>
    <Loved/>
    <Footer/>
    {/* <Setup/> */}
    {/* <Beforever/> */}
    {/* <Header/> */}
    {/* <First/> */}
    {/* <Second/> */}
    {/* <Third/> */}
    

    </>
   
  )
}

export default page
