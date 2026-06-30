'use client'
import React from 'react'
import LoginM from '@/components/Login/LogMain/Right'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLogin from '@/hooks/auth/Login'

const page = () => {
    const get = useLogin();
    return (
        <div>
            <LoginM data={get.logindata} change={get.handleChange} submit={get.handleSubmit} load={get.loading} error={get.errors} />
            <ToastContainer position='top-right' theme="dark" />


        </div>
    )
}

export default page
