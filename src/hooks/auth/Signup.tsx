'use client'
import React from 'react'
import { useState } from 'react';

interface SignupFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}


const useSignup = () => {
    const [formData, setFormData] = useState<SignupFormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // const { name, value } = e.target;
        const name = e.target.name;
        const value = e.target.value;

        setFormData((prev) => ({ ...prev, [name]: value, }));
    }

    return {
        formData,
        handleChange,
    };


}

export default useSignup
