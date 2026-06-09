import React from 'react'

type data = {
  id: number,
  title: string,
  description: string,
  icon: string
}
type coming = {
  sending: data
}

const whytradecard = ({ sending }: coming) => {
  return (
    <div>
      <div className='roundex-2xl pb-5 font-sans'>
        <i className={`${sending.icon} text-3xl ${sending.iconColor} ${sending.iconBg} rounded-2xl p-3 `}></i>
      </div>
      <div className='flex flex-col gap-4'>
        <h3 className='text-xl font-semibold text-white'>{sending.title}</h3>
        <p className='text-gray-400'>{sending.description}</p>
      
      </div>


    </div>
  )
}

export default whytradecard
