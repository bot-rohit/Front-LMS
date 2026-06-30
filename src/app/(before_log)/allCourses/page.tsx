import React from 'react'
import Navbar from '@/components/landing/Navbar'
import Header from '@/components/coursesAll/Header'
import Available from '@/components/coursesAll/Available'
import Selection from '@/components/coursesAll/Selection'
import WhyElite from '@/components/coursesAll/WhyElite'
import Game from '@/components/coursesAll/Game'
import Footer from '@/components/landing/Footer'

const page = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Available/>
            <Selection/>
            <WhyElite/>
            <Game/>
            <Footer/>


        </div>
    )
}

export default page
