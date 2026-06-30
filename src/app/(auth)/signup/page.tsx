'use client';
import React from 'react'
import SuRight from '@/components/Login/SignUp/Left'
import SuLeft from '@/components/Login/SignUp/Right'
import useSignup from '@/hooks/auth/Signup'
import { sign } from 'crypto';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const page = () => {
    const signup = useSignup();

    return (
        <>
            <div className='flex h-screen'>
                <div className='lg:w-[50%] w-full py-17 lg:pl-20 p-5 lg:scale-90   origin-top-left '>
                    <SuRight formdata={signup.formData} handle={signup.handleChange} submit={signup.handleSubmit}
                        accept={signup.setAcceptedTerms}
                        error={signup.errors} load={signup.loading} />
                </div>
                <div className='lg:w-[50%] lg:flex hidden  py-17 lg:px-20 bg-[#14180D]'>
                    <SuLeft />
                </div>


            </div>
            <ToastContainer position='top-right' theme="dark" />



        </>
    )
}

export default page
