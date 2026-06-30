import React from 'react'

const header = () => {
    return (
        <div className='px-10 py-20 font-heading'>

            <div className="flex items-center justify-between">

                <div>
                    <p className="text-6xl font-bold leading-none text-white">
                        All Courses
                    </p>
                    <p className="mt-4 text-lg text-card-font">
                        Browse all available courses, each structured over 50 days,
                        with detailed modules.
                    </p>
                </div>
      
                <button className="flex items-center gap-2 rounded-xl bg-[#1A220D] px-6 py-2 border-l 
                 text-sm font-semibold text-neon-green transition hover:bg-[#232F12]">
                    <i className="ri-arrow-left-line text-lg" />
                    Back to Landing
                </button>
            </div>
        </div>
    )
}

export default header
