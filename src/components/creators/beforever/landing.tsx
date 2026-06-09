import React from 'react'

const landing = () => {
    return (
        <>
            <div className='p-20'>

                <div className="w-full rounded-2xl border border-lime-500/30 bg-[#161A13]
        px-8 py-20 flex flex-col items-center justify-center text-center ">
                    <i className="ri-shield-line text-lime-400 text-5xl pb-4"></i>
                    <h2 className="text-white text-4xl font-bold leading-tight">
                        We'll Notify You via Email
                    </h2>
                    <div>


                        <p className="text-zinc-400 mt-5 text-md">
                            You'll receive an email notification as soon as your application is approved. Make sure</p>
                        <p className="text-zinc-400  text-md">
                            to check your inbox and spam folder regularly.
                        </p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default landing
