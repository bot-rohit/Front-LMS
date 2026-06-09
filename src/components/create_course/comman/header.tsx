import React from 'react'

const header = () => {
  return (
    <>

      <div className='w-auto flex justify-between font-heading mx-5 my-3'>
        <div className='flex gap-4 align-middle items-center'>
          <i className="ri-arrow-left-line text-[#A2A69F] text-2xl"></i>
          <div>
            <p className='text-white text-xl font-bold'>Create New Course</p>
            <p className='font-sans  text-[#A2A69F] text-md' >Step 1 of 12</p>
          </div>
        </div>

        <div>
          <button className=' rounded-full border border-neutral-700 px-8 py-3 text-sm
            font-medium text-white transition hover:border-neutral-500 hover:bg-neutral-900'>Save Draft</button>

        </div>

      </div>




    </>
  )
}

export default header
