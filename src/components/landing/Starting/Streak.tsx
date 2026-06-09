import React from 'react'

const Streak = () => {
    return (
        <div>
            <div className=" px-10 py-7 rounded-2xl border border-lime-500/10 ">

                <div className=" flex flex-col items-center justify-center h-full gap-2">

                    <div className="px-5 py-4 rounded-full bg-[#FFE600]/20 ">
                        <i className="ri-fire-line text-xl text-[#FDE900]"/>
                    </div>

                    <h1 className=" text-xl leading-none font-bold text-[#FDE900] pt-2">
                        30-DAY STREAK
                    </h1>
                    <p className="tracking-wide text-[#BFC7D8]">
                        CONSISTENCY PAYS OFF!
                    </p>

                </div>


            </div>

        </div>
    )
}

export default Streak
