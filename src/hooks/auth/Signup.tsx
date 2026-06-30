'use client'
import React from 'react'
import { useState } from 'react';
import { initialiseProfile, registerUser } from '@/services/authService'
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
interface SignupFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;

}

const useSignup = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [formData, setFormData] = useState<SignupFormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',

    });
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        terms: "",

    })
    const validateForm = () => {
        const newErrors = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            terms: "",
        };

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First Name is required";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        }
        else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // else if (!passwordRegex.test(formData.password)) {
        //     newErrors.password =
        //         "Password must contain 8+ chars, uppercase, lowercase, number and special character";
        // }
        if (!acceptedTerms) {
            newErrors.terms = "Please accept the Terms & Conditions";
        }

        setErrors(newErrors);
        return !Object.values(newErrors).some(Boolean);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        // const { name, value } = e.target;
        const name = e.target.name;
        const value = e.target.value;

        setFormData((prev) => ({ ...prev, [name]: value, }));
        setErrors((prev) => ({ ...prev, [name]: "", }))
    }

    const handleSubmit = async () => {
        try {
            if (!validateForm()) return;

            setLoading(true);
            const data = await toast.promise(
                registerUser(formData),
                
                {
                    pending: "Creating account...",
                    success: "Account Created! Redirecting 🎉 ",
                    error: "User Already Exists",
                    
                },
                
                {
                    pauseOnHover: false,
                    autoClose: 2000,
                    position: "top-right",
                }
                
            );
            initialiseProfile()
            setTimeout(() => {
                router.push("/login");
            }, 2500);
            // console.log("hi")
            // console.log(data)

        } catch (error: any) {

            console.log(error.response?.data);


        } finally {
            setLoading(false);
        }

    };

    return {
        formData,
        errors,
        handleChange,
        handleSubmit,
        setAcceptedTerms,
        loading,

    };


}

export default useSignup
