import React from 'react'
import { useState } from 'react';

const ResetAccess = () => {
    const [password, setPassword] = useState("********");
    return (
        <>
            <div>
                <div className="w-full p-20 font-heading h-screen ">
                    <div className='pl-18'>
                        <p className="text-red-given tracking-[0.25em] text-sm uppercase">
                            Authentication
                        </p>
                        <p className="mt-4 text-5xl font-bold  text-white">
                            Reset <span className="text-neon-green">Access</span>
                        </p>
                    </div>

                    <div className="mt-12 rounded-2xl bg-[#101709]/90 border border-[#1C2414] p-8 scale-[90%] origin-top">


                        <div className="rounded-2xl bg-[#2A1018]/80 border-l-3 border-red-given px-6 py-5 flex gap-5">
                            <i className="ri-alert-line text-red-given text-2xl mt-1"></i>
                            <div>
                                <h3 className="text-red-given uppercase tracking-wider text-xs font-semibold">
                                    Security Requirement
                                </h3>
                                <p className="mt-1 text-card-font text-md ">
                                    New password must contain at least 12 characters, including one trading symbol (special character)
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col gap-10">
                            <div>
                                <label className="text-zinc-400 uppercase tracking-[0.12em] text-sm">
                                    New Access Key
                                </label>

                                <div className="mt-5 flex items-center border-b border-[#39432B] pb-4">

                                    <i className="ri-lock-2-line text-zinc-500 text-xl"></i>
                                    <input
                                        type="password"
                                        value={password}
                                        className="flex-1 bg-transparent px-4 text-white text-xl outline-none"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                    <button type="button">
                                        <i className="ri-eye-line text-zinc-400 text-2xl"></i>
                                    </button>
                                </div>
                            </div>
                            <div>

                                <label className="text-zinc-400 uppercase tracking-[0.15em] text-sm">
                                    Confirm Access Key
                                </label>

                                <div className="mt-5 flex items-center border-b border-[#FF007A] pb-4">

                                    <i className="ri-shield-keyhole-line text-zinc-500 text-xl"></i>

                                    <input
                                        type="password"
                                        placeholder="Re-enter access key"
                                        className="flex-1 bg-transparent px-4 text-zinc-400 text-xl outline-none"
                                    />

                                </div>

                                <p className="mt-3 text-red-given uppercase text-xs">
                                    Keys do not match
                                </p>

                            </div>

                        </div>

                 
                        <button
                            className=" mt-12 w-full hover:scale-[1.01] transition-all bg-neon-green rounded-2xl py-2 font-bold">
                            Save New Password
                        </button>

                    </div>

                </div>

            </div>
        </>
    )
}

export default ResetAccess
