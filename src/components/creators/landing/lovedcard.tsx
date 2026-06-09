import React from 'react'

type data = {
    id: number,
    name: string,
    role: string,
    students: string,
    initials: string,
    rating: number,
    review: string
}
type coming = {
    sending: data
}

const lovedcard = ({ sending }: coming) => {
    return (
        <>
            <div>
                <div className='flex flex-col gap-5 '>
                    <div className='flex flex-col gap-4 font-sans pb-5'>
                        <i className="ri-double-quotes-r text-2xl text-neon-green"></i>
                        <p className='text-gray-300 text-xs '>"{sending.review}"</p>
                    </div>
                    <div className='bg-card-page py-[0.1px] ' />
                    <div className='flex justify-between'>

                        <div className='flex justify-start gap-5 align-middle items-center font-sans'>
                            <div className='p-4 text-[#2794FB] rounded-full
                             bg-[#2794FB33] flex items-center justify-center  font-bold text-xs'>
                                {sending.initials}
                            </div>
                            <div className='flex flex-col gap-1 text-xs'>
                                <h3 className='text-white font-semibold'>{sending.name}</h3>
                                <p className='text-gray-400 text-xs'>{sending.role} - {sending.students}</p>
                            </div>
                        </div>
                        <div className="flex gap-1 text-xs">
                            {[...Array(sending.rating)].map((_, index) => (
                                <i
                                    key={index}
                                    className="bi bi-star-fill text-neon-green"
                                ></i>
                            ))}
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default lovedcard
