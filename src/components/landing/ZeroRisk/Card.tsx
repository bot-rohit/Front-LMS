import React from 'react'
type receive ={
    icon:string,
    title:string,
    description:string,


}
type fckdata={
    sending:receive,

}

const card = ({sending}:fckdata) => {
    return (
        <>

            <div className=' font-heading px-5 rounded-xl py-10 h-full'>
                <div>
                    <i className={`${sending.icon} text-3xl text-neon-green bg-[#1A1D13] p-2 rounded-2xl`}></i>


                </div>
                <div className='flex flex-col gap-2 max-w-90 pt-5'>
                    <p className='text-white font-semibold text-xl'>{sending.title}</p>
                    <p className='text-[#C1CAAE] text-sm '>{sending.description}</p>
                </div>


            </div>
        </>
    )
}

export default card
