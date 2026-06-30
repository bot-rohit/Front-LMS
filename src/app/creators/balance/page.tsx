'use client'
import React from 'react'
import { useState } from 'react'
import Nav from '@/components/creators/dashboard/Nav'
import Eco from '@/components/create_course/balance/Eco'
import Package from '@/components/create_course/balance/Package'
import Foot from '@/components/create_course/balance/Foot'
const page = () => {
    return (
        <div>
            <Nav/>
            <Eco/>
            <Package/>
            <Foot/>
     

        </div>
    )
}

export default page
