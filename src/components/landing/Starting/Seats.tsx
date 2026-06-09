import React from 'react'

const Seats = () => {
    return (
        <div className='font-heading  w-full border border-lime-500/20 rounded-2xl p-6 pr-3  '>
            <div>
                <div className='flex justify-between  items-center align-middle' >
                    <p className='text-neon-green text-xs'>
                        PROGRAM AVAILABILITY
                    </p>
                    <i className="bi bi-dot text-4xl text-red-given" ></i>

                </div>
                <h2 className='text-white text-2xl font-extrabold font-sans pb-3'>
                    14 Seats Remaining
                </h2>

                <div className=' h-1 rounded-full overflow-hidden'>
                    <div className='w-[80%] h-full bg-pink-500' />

                </div>

            </div>

        </div>
    )
}

export default Seats
