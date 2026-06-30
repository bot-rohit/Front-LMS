import React from 'react'
import Image from 'next/image'
const header = () => {
    return (
        <>
            <div className='px-25 w-auto  flex font-heading pt-15 '>
                <div className='w-[50%] py-10 '>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500 bg-yellow-500/10 text-yellow-400 text-xs font-medium">
                        <i className="ri-time-line"></i>
                        Verification in Progress
                    </div>

                    <p className="mt-8 text-5xl font-bold text-white">
                        Your Application is
                    </p>

                    <p className="text-neon-green text-5xl font-bold">
                        Under Review
                    </p>

                    <p className="mt-6 text-card-font text-md max-w-xl">
                        Great news! We've received your creator application and our
                        team is currently reviewing your credentials. Most creators are
                        approved within 24 hours.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">

                        <div className="rounded-2xl border border-neon-green/30 bg-neon-green/10 px-4 py-3">
                            <div className="flex items-center gap-2 text-white font-medium">
                                <i className="ri-checkbox-circle-line text-neon-green"></i>
                                Application Submitted
                            </div>
                            <p className="mt-1 text-xs text-card-font">
                                Submitted 2 hours ago
                            </p>
                        </div>

                        <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 px-4 py-3">
                            <div className="flex items-center gap-2 text-white font-medium">
                                <i className="ri-time-line text-yellow-400"></i>
                                Estimated Wait
                            </div>
                            <p className="mt-1 text-xs text-card-font">
                                12–24 hours
                            </p>
                        </div>

                        <button
                            className="px-6 py-3 rounded-2xl bg-zinc-900 border
        border-zinc-800 text-white font-bold
        hover:bg-zinc-800 transition-all duration-200"
                        >
                            Explore Studio
                        </button>
                    </div>


                    <div className="mt-12 flex items-start gap-12 font-sans">
                        <div>
                            <h3 className="text-2xl font-bold text-neon-green">
                                ₹4.2 Cr+
                            </h3>
                            <p className="text-zinc-500 mt-1 text-md">
                                Paid to creators
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-neon-green text-md">
                                180k+
                            </h3>
                            <p className="text-zinc-500 mt-1">
                                Active learners
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-neon-green text-md">
                                92%
                            </h3>
                            <p className="text-zinc-500 mt-1">
                                Avg. course rating
                            </p>
                        </div>
                    </div>


                </div>
                <div className="w-[50%]  flex justify-center">
                    <div className="relative  bg-white/10 p-3 rounded-3xl w-[70%] h-[70%]  border-1 mt-15 border-white/7">
                        <div className="relative h-full w-full overflow-hidden rounded-xl">
                            <Image
                                src="/assets/Nav/person2.png"
                                alt="img"
                                fill
                                className="object-cover rounded-4xl"
                            />
                        </div>
                        <div className='absolute z-1 top-10 -left-8'>

                            <div className="rounded-3xl border border-neon-green/10 bg-card-page/95 px-6 py-5 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                                <p className="text-xs uppercase tracking-[0.15em] text-card-font">
                                    This Month
                                </p>

                                <h3 className="mt-2 text-2xl font-bold text-neon-green font-heading font-sans">
                                    +₹84,200
                                </h3>
                            </div>

                        </div>
                        <div className='absolute z-2 bottom-10 -right-10 w-fit'>

                            <div className="rounded-3xl border border-neon-green/10 bg-card-page/95 px-6 py-5 
                               backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                                <p className="text-xs uppercase tracking-[0.15em] text-card-font">
                                    New Students
                                </p>

                                <div className="mt-2 flex items-center gap-3">
                                    <h3 className="text-2xl font-bold text-white font-heading font-sans">
                                        312
                                    </h3>

                                    <div className="flex items-center text-neon-green">
                                        <i className="ri-arrow-right-up-line text-xl"></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>






            </div>

        </>
    )
}

export default header
