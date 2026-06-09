import React from 'react'
import Image from 'next/image'

const createsell = () => {
    return (
        <>
            <div className='px-25 w-auto  flex font-heading pt-15 '>
                <div className='w-[50%] py-10 '>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-green bg-lime-500/10 text-neon-green text-xs font-light">
                        <i className="bi bi-stars"></i>
                        India's #1 trading education platform
                    </div>
                    <p className="mt-8 text-5xl font-bold  text-white">
                        Create & Sell Your
                    </p>

                    <p className="text-neon-green text-5xl font-bold">
                        Trading Knowledge
                    </p>


                    <p className="mt-6 text-card-font text-md">
                        Join 4,200+ instructors, influencers and coaching institutes
                        turning their market expertise into a high-margin teaching
                        business on TradeVed.
                    </p>

                    <div className="mt-5 flex items-center gap-4">
                        <button
                            className="px-6 py-3 rounded-2xl bg-neon-green text-black
                     font-bold flex items-center gap-2
                     hover:bg-neon-green/80 transition-all duration-200"
                        >
                            Become a Creator
                            <i className="bi bi-arrow-right"></i>
                        </button>

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
                                src="/assets/Creator/Landing/creator.jpg"
                                alt="img"
                                fill
                                className="object-cover rounded-4xl"
                            />
                        </div>
                    </div>
                </div>






            </div>

        </>
    )
}

export default createsell
