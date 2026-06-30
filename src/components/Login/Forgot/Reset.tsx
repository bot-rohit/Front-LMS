'use client '
import React from 'react'


interface datae {
    email:string;
}
interface coming {
    data:datae, 
    func:(e:React.ChangeEvent<HTMLInputElement>)=>void ;
    
}


const Reset = ({data , func}:coming) => {
    console.log(data)
    return (
        <>
            <div className='flex flex-col lg:px-20 px-4 py-20 gap-15'>
                <div className="flex flex-col gap-4">
                    <p className="text-neon-green uppercase tracking-[0.20em] text-sm font-medium">
                        Security Protocol
                    </p>
                    <h1 className="lg:text-5xl text-3xl font-bold leading-none">
                        <span className="text-white">Forgot </span>
                        <span className="text-neon-green">Password?</span>
                    </h1>

                    <p className="max-w-3xl text-card-font text-lg leading-relaxed">
                        Input your registered terminal identifier (email) to receive a
                        secure decryption link for your account credentials.
                    </p>

                </div>
                <div className='w-full font-heading'>
                    <div className="bg-[#141610]/95 border border-white/5 rounded-2xl overflow-hidden p-10 border-l-4 border-l-red-given">

                        <p className="text-lg uppercase text-neon-green mb-5">
                            Terminal Email
                        </p>
                        <div className="flex items-center gap-4 border-b border-white/10 pb-5">

                            <span className="text-white/70 text-2xl">@</span>

                            <input
                                type="email"
                                name='email'
                                value={data.email}
                                onChange={func}
                                placeholder="trader@stop.io"
                                className="bg-transparent 
                                outline-none border-none text-white placeholder:text-white/20 text-xl w-full"
                            />
                        </div>
                        <button className="mt-5 w-full py-3 rounded-full bg-neon-green
                         text-black font-bold tracking-wide uppercase text-md hover:scale-[1.01] transition-all duration-300">
                            Send Reset Link
                        </button>

                        <div className="flex items-center gap-2 mt-5 text-card-font text-sm tracking-wider uppercase">
                            <i className="ri-shield-check-line text-sm"></i>
                            <p>Encrypted 256-bit transmission</p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Reset
