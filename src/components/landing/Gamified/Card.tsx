import React from 'react'
import Image from 'next/image'
type des={
    id:number,
    icon:string,
    title:string,
    description:string,

}
type coming={
    data:des
}

const Card = ({data}:coming) => {
  return (
      <div className='  bg-[#1A1D13] font-heading px-5 rounded-xl py-10 h-full'>
        <div>
            <Image src={`/assets/Landing/Gamified/${data.icon}`} alt='icons' width={50} height={50} />

        </div>
          <div className='flex flex-col gap-2 max-w-90 '>
               <p className='text-white font-semibold text-xl'>{data.title}</p>
             <p className='text-[#C1CAAE] text-sm '>{data.description}</p>
        </div>
        
      
    </div>
  )
}

export default Card
