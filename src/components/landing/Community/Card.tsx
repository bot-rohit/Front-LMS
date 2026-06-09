import React from 'react'
import Image from 'next/image'

type desc = {
  Stars: number,
  Data: string,
  Profile: string,
  Role: string,
  Name: string,

}
type coming = {
  data: desc
}


const Card = ({ data }: coming) => {
  return (
    <div className=' font-heading bg-card-page flex flex-col gap-5 rounded-xl w-full h-full p-5'>

      <div className='flex flex-col gap-5'>
        <div className='flex justify-between items-center '>
          <div>
            {Array.from({ length: data.Stars }).map((_, index) => (
              <i
                key={index}
                className="ri-star-fill text-neon-green"
              ></i>
            ))}
          </div>
          <Image src={"/assets/Landing/Community/1.png"} alt='hi' width={25} height={25} />
        </div>


        <div className='text-card-font max-w-90'>
          {data.Data}
        </div>
      </div>


      <div className='flex gap-3 '>
        <div>
          <Image src={"/assets/Landing/Community/2.png"} alt='hi' width={50} height={50} />

        </div>
        <div className='flex flex-col justify-center items-start text-card-font  '>
          <div className='text-card-head'>
            {data.Name}
          </div>
          <div>
            {data.Role}
          </div>

        </div>


      </div>



    </div>
  )
}

export default Card
