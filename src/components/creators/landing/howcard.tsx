import React from 'react'

type data = {
    id: number,
    title: string,
    description: string,
    number: string,
    icon: string,
}
type coming = {
    sending: data
}

const howcard = ({sending}:coming) => {
  return (
    <>
    <div className='font-heading  '>
        <div>
            <div className='flex text-4xl text-neon-green/40 justify-between font-bold '>
                {sending.number}
                <i className={`${sending.icon} text-3xl text-neon-green/40`}></i>
            </div>
        </div>
        <div className='flex flex-col gap-1 mt-5'>
            <h3 className='text-lg  text-white'>{sending.title}</h3>
            <p className='text-gray-400'>{sending.description}</p>
        </div>

    </div>
    </>
   
  )
}

export default howcard
