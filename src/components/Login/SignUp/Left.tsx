import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface SignupFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
interface coming {
    formdata: SignupFormData,
    handle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Left = ({ formdata, handle }: coming) => {
    console.log(formdata)
    return (
        <div>
            <form className="w-full  flex items-center justify-center font-heading">
                <div className="w-full  ">
                    <div className='flex justify-start gap-3 font-heading text-2xl font-semibold items-center pb-10 '>
                        <Image src="/assets/Nav/logo.png" alt="logo" width={35} height={20} />
                        <p className='text-white'>TraderStop</p>

                    </div>



                    <div className="flex flex-col gap-3">
                        <h1 className="text-white text-4xl font-bold leading-tight">
                            Start your trading
                            <br />
                            journey <span className="text-[#A6FF00]">today.</span>
                        </h1>
                        <p className="text-card-font text-md">
                            Join the elite community of stock traders and master the markets.
                        </p>
                    </div>


                    <div className=" flex flex-col gap-4 font-heading pt-10">
                        <div className="grid grid-cols-2 gap-5">

                            <div className="flex flex-col gap-3">
                                <label className="text-card-font text-md">
                                    First Name
                                </label>
                                <input type="text" name='firstName' placeholder="John" value={formdata.firstName} onChange={handle}

                                    className="rounded-xl py-3 bg-[#0B1203]
                                border border-[#27331B] transition-all focus:border-[#A6FF00] 
                                outline-none text-white px-4" />
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="text-card-font text-md ">
                                    Last Name
                                </label>
                                <input type="text" name='lastName' placeholder="Doe"
                                    value={formdata.lastName} onChange={handle}
                                    className=" rounded-xl  py-3 bg-[#0B1203]
                                  border border-[#27331B] px-4 text-white outline-none
                                   focus:border-[#A6FF00] transition-all" />
                            </div>

                        </div>


                        <div className="flex flex-col gap-3">

                            <label className="text-card-font text-md">
                                Email Address
                            </label>

                            <input type="email" placeholder="john@example.com"
                                name='email' value={formdata.email} onChange={handle}

                                className="py-3 rounded-xl  border bg-[#0B1203]
                            border-[#27331B] px-4 text-white outline-none focus:border-[#A6FF00] transition-all" />

                        </div>


                        <div className="flex flex-col gap-3">

                            <label className="text-card-font text-md">
                                Password
                            </label>

                            <input type="password" placeholder="••••••••"
                                name='password' value={formdata.password} onChange={handle} className=" 
                            py-3 rounded-xl border border-[#27331B] bg-[#0B1203]
                             px-4 text-white outline-none focus:border-[#A6FF00] transition-all" />

                            <p className="text-xs italic text-zinc-500">
                                Must be at least 8 characters with one special symbol.
                            </p>

                        </div>


                        <div className="flex items-center gap-3">

                            <input type="checkbox" className="p-2 mt-0.2 appearance-none bg-black border border-white checked:bg-neon-green checked:border-neon-green 
                            relative rounded-sm checked:after:content-['✓'] checked:after:text-black checked:after:text-[12px] 
                            checked:after:flex checked:after:items-center checked:after:justify-center checked:after:absolute checked:after:inset-0" />

                            <p className="text-sm text-card-font ">
                                I agree to the{" "}
                                <span className="text-[#A6FF00]">
                                    Terms of Service
                                </span>{" "}
                                and{" "}
                                <span className="text-[#A6FF00]">
                                    Privacy Policy.
                                </span>
                            </p>

                        </div>

                        <button className="mt-2 py-2 rounded-xl bg-[#A6FF00] text-black text-xl font-medium hover:scale-[1.01] transition-all">
                            Create My Account
                        </button>

                        {/* login */}
                        <p className="text-center text-card-font text-md">

                            Already have an account?{" "}
                            <Link href="/login ">
                                <span className="text-neon-green cursor-pointer hover:text-white transition-all">
                                    Login here
                                </span>
                            </Link>

                        </p>

                    </div>

                </div>

            </form>

        </div>
    )
}

export default Left
