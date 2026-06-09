'use client'
import React from 'react'
import { useState } from 'react'


interface data {
    email: string,
}

const useForgorpassword = () => {
    const [input, setInput] = useState<data>({
        email: '',
    })
    const handlechange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const name= e.target.name;
        const value = e.target.value;
        setInput((prev)=>({...prev , [name]:value , }))
    }

  return {
    input , handlechange, 

    };


}

export default useForgorpassword
