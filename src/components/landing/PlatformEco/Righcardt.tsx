import React from 'react'
import Image from 'next/image'

type des={
    title:string,
    description:string,
    icon:string,

}
type coming={
    data:des
}
const righcardt = ({data}:coming) => {
  return (



    <div className='bg-[#1E211766]  flex justify-start items-center font-heading gap-5 rounded-xl p-5 border-2 border-[#1A1D13]'>
        <div>
            <Image src={`/assets/Landing/Eco/${data.icon}`} alt='icons' width={40} height={40}/>
            
            

        </div>
        <div className='flex flex-col gap-1'>
            <p className='text-white font-bold text-md'>{data.title}</p>
            <p className='text-[#C1CAAE] text-sm'>{data.description}</p>
        </div>

      
    </div>
  )
}

export default righcardt
