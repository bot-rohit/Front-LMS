import React from 'react'

const Header = () => {
    return (
        <div className='mx-10 mt-10 font-heading'>
            <div className="space-y-3">

                <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium text-lime-400">
                        Assignments
                    </span>

                    <span className="text-zinc-600">&gt;</span>

                    <span className="text-zinc-300">
                        Weekly Trading Analysis Submission
                    </span>
                </div>


                <h1 className="text-4xl font-heading font-bold text-white">
                    Trading Analysis Submission
                </h1>

     
                <p className="text-sm leading-8 text-zinc-400">
                    Upload your technical analysis charts and descriptive notes for
                    the current market session. Review expected by Monday 9:00 AM.
                </p>
            </div>

        </div>
    )
}

export default Header
