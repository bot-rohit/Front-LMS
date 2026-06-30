import React from 'react'
import Image from 'next/image'
const mobile = () => {
    return (
        <div>
            <div className="min-h-screen bg-black relative overflow-hidden w-full  flex items-center justify-center px-6 font-heading">


                <div className="absolute inset-3  bg-neon-green/20 blur-3xl opacity-40 group-hover:opacity-70 transition-all duration-500" />


           
                <div className="relative z-10 max-w-lg w-full border border-card-page rounded-3xl bg-[#0B0B0B]/90 backdrop-blur-xl p-8 text-center">

                    <Image
                        src="/assets/Nav/download.jpeg"
                        alt="Laptop Meme"
                        width={300}
                        height={300}
                        className="mx-auto rounded-2xl border border-card-page"
                    />

                    <h1 className="mt-8 text-4xl font-heading font-bold text-white">
                        Oops...
                    </h1>

                    <h2 className="mt-3 text-neon-green text-2xl font-semibold">
                        This screen is a little too tiny 😅
                    </h2>

                    <p className="mt-5 text-gray-400 leading-7">
                        TradeVed is built for the complete experience.
                        Switch to a <span className="text-white font-semibold">Laptop/Desktop {" "}</span>
                        to enjoy interactive charts, analytics, quizzes, and everything else.
                    </p>

                    <div className="mt-8 flex justify-center">
                        <div className="px-6 py-3 rounded-full border border-neon-green text-neon-green flex items-center gap-2">
                            <i className="ri-computer-line text-xl"></i>
                            <span>Recommended Screen: 1024px+</span>
                        </div>
                    </div>

                    <p className="mt-8 text-sm text-gray-500 italic">
                        "Your phone tried its best. We appreciate the effort ❤️"
                    </p>
                </div>
            </div>

        </div>
    )
}

export default mobile
