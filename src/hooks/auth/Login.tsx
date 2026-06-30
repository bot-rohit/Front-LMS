'use client'
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/authService";
import Router from "next/router";


import React, { useState } from 'react'

interface Loginformdata {
    email: string,
    password: string,
}

const useLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const router = useRouter();
    const [logindata, setLogindata] = useState<Loginformdata>({
        email: '',
        password: '',
    })

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setLogindata((prev) => ({ ...prev, [name]: value, }));
        setErrors((prev) => ({ ...prev, [name]: "", }))

    }

    const validateForm = () => {
        const newErrors = {
            email: "",
            password: "",
        }
        if (!logindata.email.trim()) {
            newErrors.email = "Email is required";
        }
        else if (!emailRegex.test(logindata.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!logindata.password.trim()) {
            newErrors.password = "Password cannot be empty"
        }
        setErrors(newErrors);
        return !Object.values(newErrors).some(Boolean);


    }
    const handleSubmit = async () => {
        try {
            if (!validateForm()) return;
            setLoading(true);
            const data = await toast.promise(
                loginUser(logindata),
                {
                    pending: "Logging-In...",
                    success: "Logged-In! Redirecting 🎉 ",
                    error: {
                        render({ data }: any) {
                            const status = data?.response?.status;

                            if (status === 401) {
                                return "User Not Registered";
                            }

                            if (status === 409) {
                                return "Invalid password";
                            }

                            return "Something went wrong";
                        },
                    }

                },

                {
                    pauseOnHover: false,
                    autoClose: 2000,
                    position: "top-right",
                }
            );
            setTimeout(() => {
                router.push("/dashboard");
            }, 2000);
        }
        catch (error: any) {

            console.log(error.response?.data);


        } finally {
            setLoading(false);
        }

    }



    return {
        logindata,
        handleChange,
        errors,
        handleSubmit,
        loading,

    };
}

export default useLogin
