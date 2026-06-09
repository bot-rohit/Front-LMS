import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  icon: string,
  course: number,
  data: string,
  number: number,

}
type component = {
  data: Props,
}


const Courcecard = ({ data }: component) => {

  return (
    
    

    <div className='bg-[#282B21] p-5 border-4 border-[#1A1D13] rounded-3xl py-7 px-8 h-full '>
      <div className='flex flex-col justify-center text-white gap-5 font-sans font-medium '>
        <Image src={`/assets/Landing/${data.icon}`} alt='icon' width={50} height={50} />
        <p  className='text-xl'> Course {data.course}</p>

        <p className='text-sm font-normal text-[#C1CAAE] mr-[5vw]'>{data.data}</p>
      </div>
      <div className=' flex justify-between text-[#C1CAAE] mt-5 text-sm font-heading'>
        <p>{data.number} MODULES</p>
        <Link  href="#" className=' font-heading text-base text-neon-green'>Start Now </Link>
      </div>


    </div>
  )
}

export default Courcecard
