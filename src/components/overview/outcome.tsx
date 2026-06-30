import React from 'react'

const outcome = () => {
    
    return (
        <div className='px-15 font-heading'>
            <div className=''>
                <p className="text-4xl font-bold text-white">
                    Course Overview
                </p>

                <div className="mt-8 flex flex-col gap-5 ">
                    <p className="text-md leading-relaxed text-card-font">
                        This program is designed for intermediate traders who want to
                        bridge the gap between retail trading and professional
                        institutional strategies. We focus on market psychology,
                        liquidity zones, and the sophisticated use of order flow data.
                    </p>

                    <p className="text-md leading-relaxed text-card-font">
                        You will move beyond simple RSI and MACD strategies to
                        understand why markets move, how large institutions position
                        themselves, and how to find high-probability setups in any
                        market condition.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default outcome
