import React from 'react'
import Image from 'next/image'
type format ={
    icon:string,
    title:string,
    description:string
}
type aformat={
    given:format,
}

const card = ( {given}:aformat) => {
  return (
    <>
    <div className='p-8 bg-card-page rounded-xl gap-3 flex flex-col font-heading'>
        <Image src={`/assets/Landing/Why/${given.icon}`} alt='img' width={50} height={50}/>    
        <p className='text-card-head text-2xl font-bold pt-3'>{given.title}</p>
        <p className='text-card-font max-w-70 '> {given.description}</p>
    </div>
    
    
    </>
  
  )
}

export default card
