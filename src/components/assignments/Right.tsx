import React from 'react'

const Right = () => {
    const requirements = [
        "Minimum of 3 chart screenshots",
        "Price Action markers included",
        "Risk management plan outlined",
    ];

    return (
        <div className='mr-10 mt-10 mb-15 font-heading'>
            <div className="space-y-6 ">

                <div className="rounded-2xl border border-[#243218] bg-[#091105] p-7">
                    <h2 className="mb-8 text-md font-heading font-bold uppercase tracking-wider text-lime-500">
                        Task Details
                    </h2>

                    <div className="space-y-8">
        
                        <div className="flex gap-4">
                            <i className="ri-calendar-line mt-1 text-xl text-lime-400"></i>

                            <div>
                                <p className="text-xs uppercase tracking-widest text-lime-600">
                                    Deadline
                                </p>

                                <p className="mt-1 text-md font-sans font-semibold text-pink-500">
                                    March 16, 2026 • 11:59 PM
                                </p>
                            </div>
                        </div>

             
                        <div className="flex gap-4">
                            <i className="ri-star-line mt-1 text-xl text-lime-400"></i>

                            <div>
                                <p className="text-xs uppercase tracking-widest text-lime-600">
                                    Weight
                                </p>

                                <p className="mt-1 text-md font-semibold text-white">
                                    15% of total grade
                                </p>
                            </div>
                        </div>


                        <div className="flex gap-4">
                            <i className="ri-information-line mt-1 text-2xl text-lime-400"></i>

                            <div>
                                <p className="text-sm uppercase  text-lime-600">
                                    Status
                                </p>

                                <span className="mt-2 inline-flex rounded-md bg-pink-900/40 px-3 py-1 text-xs font-medium text-pink-500">
                                    Not Submitted
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="my-6 h-px bg-[#243218]" />

  
                    <h3 className="mb-5 text-xl font-semibold text-white">
                        Requirements
                    </h3>

                    <div className="space-y-2">
                        {requirements.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3"
                            >
                                <i className="ri-checkbox-circle-line text-md text-lime-400"></i>

                                <span className="text-sm text-gray-300">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

        
                <div className="relative overflow-hidden rounded-2xl border border-pink-900/30 bg-[#16040C] p-7">
                    <h3 className="text-2xl font-heading font-bold text-white">
                        Need help?
                    </h3>

                    <p className="mt-2 leading-7 text-xs text-gray-400">
                        Check our knowledge base or ask the community if you're
                        stuck.
                    </p>

                    <button className="mt-4 flex items-center text-sm gap-2 font-semibold text-pink-500 transition hover:gap-4">
                        Visit Community
                        <i className="ri-arrow-right-line text-xl"></i>
                    </button>

      
                    <i className="ri-question-line absolute -bottom-6 -right-4 text-[110px] text-pink-900/30"></i>
                </div>
            </div>


        </div>
    )
}

export default Right
