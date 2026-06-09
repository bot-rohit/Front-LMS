'use client'
import React from 'react'

import For from '@/components/Login/Forgot/Reset'
import useForgorpassword from '@/hooks/auth/forgorpassword'


const page = () => {
    const format = useForgorpassword();
  return (
    <div>
        <For data={format.input} func= {format.handlechange}/>

    </div>
  )
}

export default page
