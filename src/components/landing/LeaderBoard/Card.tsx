import React from 'react'

type coming ={
    name:string,
    rank:string,
    xp:string,

}
type cdata ={
    data:coming,
}



const Card = ({data}:cdata) => {
  return (
    <>

    <div className='w-full flex flex-col gap-3 font-sans bg-card-page rounded-md  px-5 py-2'>
        <div className=' flex gap-3 justify-between'>
            <div className='text-card-font flex justify-start gap-3'>
                <p>{data.rank}</p>
                <p>{data.name}</p>

            </div>
            <div className='text-neon-green'>
                <p>{data.xp}</p>
            </div>

        </div>


    </div>
    </>
  )
}

export default Card
