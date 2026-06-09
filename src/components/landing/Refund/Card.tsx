import React from 'react'
type receive={
    icon:string,
    title:string,
    description:string,


}
type dataf ={
  sending:receive
  
}

const Card = ( {sending}:dataf) => {
  return (
    <>
    <div className='flex flex-col gap-3 bg-card-page py-10 px-10 h-full rounded-xl font-heading'>
      <i className={`${sending.icon} text-neon-green text-2xl`}></i>
      <p className='text-card-head font-bold pt-5'>{sending.title}</p>
      <p className='text-card-font max-w-60'>{sending.description}</p>
      
    </div>
    </>
    
  )
}

export default Card
