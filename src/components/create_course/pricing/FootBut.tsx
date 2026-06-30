import React from 'react'
import Link from 'next/link'

const FootBut = () => {
    return (
        <div className='mx-5 my-10'>
            <div className="sticky bottom-0 flex items-center justify-end gap-4 p-8 py-6 backdrop-blur-md">

                <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-3 font-medium text-white transition-all hover:border-white/20 hover:bg-white/10">
                    Discard Changes
                </button>

                <Link href={'/creators/preview'} className="flex items-center gap-3 rounded-2xl bg-neon-green px-10 py-3 font-semibold text-black   hover:scale-[1.02]">
                    <i className="ri-save-3-line"></i>
                    Save Configuration
                </Link>

            </div>

        </div>
    )
}

export default FootBut
