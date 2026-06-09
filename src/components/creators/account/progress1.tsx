import React from 'react'

const progress1 = () => {
    return (
        <div>

            <div className="w-[520px] rounded-2xl border border-lime-400/20 bg-[#0B0F08] p-8 shadow-lg">
                {/* Header */}
                <div>
                    <h2 className="text-4xl font-bold text-white">
                        Account information
                    </h2>

                    <p className="mt-2 text-zinc-400">
                        We'll use this to set up your login.
                    </p>
                </div>

                {/* Form */}
                <div className="mt-10 grid grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                        <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
                            Full Name
                        </label>

                        <input
                            type="text"
                            defaultValue="Aarav Mehta"
                            className="h-12 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 text-white outline-none transition focus:border-lime-400"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
                            Email
                        </label>

                        <input
                            type="email"
                            defaultValue="aarav@tradeved.in"
                            className="h-12 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 text-white outline-none transition focus:border-lime-400"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
                            Phone
                        </label>

                        <input
                            type="text"
                            defaultValue="+91 98765 43210"
                            className="h-12 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 text-white outline-none transition focus:border-lime-400"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type="password"
                                defaultValue="password123"
                                className="h-12 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 pr-12 text-white outline-none transition focus:border-lime-400"
                            />

                            <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500"
                            >

                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-10 flex items-center justify-between">
                    <button className="text-zinc-400 transition hover:text-white">
                        ← Back
                    </button>

                    <button className="rounded-full bg-lime-400 px-8 py-3 font-semibold text-black transition hover:scale-105">
                        Continue →
                    </button>
                </div>
            </div>

        </div>
    )
}

export default progress1
