'use client'
import React from 'react'
import LoginM from '@/components/Login/LogMain/Right'

import useLogin from '@/hooks/auth/Login'

const page = () => {
    const get = useLogin();
    return (
        <div>
            <LoginM data={get.logindata} change={get.handleChange} />

        </div>
    )
}

export default page
