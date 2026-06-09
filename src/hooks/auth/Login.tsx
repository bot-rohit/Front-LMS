'use client'


import React, { useState } from 'react'

interface Loginformdata {
    email:string, 
    password:string,    
}

const useLogin = () => {
    const [logindata , setLogindata] = useState<Loginformdata>({
        email:'', 
        password:'',
    })
    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        const name=e.target.name;
        const value=e.target.value;

        setLogindata(( prev)=>({...prev , [name] :value,}));       

    }
  return {
    logindata,
    handleChange,

  };
}

export default useLogin
