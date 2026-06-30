import React from 'react'

const progress1 = () => {
    return (
        <div>


            <div className="w-auto rounded-3xl border border-lime-500/20 mt-5 px-5 py-10 bg-[#090d08]  font-sans">

                <div>
                    <p className="text-4xl font-bold text-white font-heading">
                        Account information
                    </p>

                    <p className="mt-2 text-card-font font-heading">
                        We'll use this to set up your login.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-5  font-sans text-card-font">

                    <div >
                        <label className="mb-2 block text-xs text-white font-medium uppercase tracking-wider">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Rohit"
                            className="p-3 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 text-white outline-none transition focus:border-lime-400"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-xs font-medium uppercase text-white tracking-wider ">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="rohit@tradeved.in"
                            className="p-3 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 text-white outline-none transition focus:border-lime-400"
                        />
                    </div>


                    <div>
                        <label className="mb-2 block text-xs font-medium text-white uppercase tracking-wider">
                            Phone
                        </label>

                        <input
                            type="text"
                            placeholder="+91 xxxxxxxxxx"
                            className="p-3 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 text-white outline-none transition focus:border-lime-400"
                        />
                    </div>


                    <div className=''>
                        <label className="mb-2 block text-xs font-medium text-white uppercase tracking-wider ">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password123"
                                className="p-3 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 pr-12 text-white outline-none transition focus:border-lime-400"
                            />

                            <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500"
                            >

                            </button>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default progress1
