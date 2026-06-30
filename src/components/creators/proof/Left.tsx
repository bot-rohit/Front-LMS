import React from 'react'

const Left = () => {
    return (
        <div>
            <div className="w-full font-heading ">
                <div className="mb-10">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neon-green">
                        Trust & Verification
                    </p>

                    <h1 className="font-heading text-4xl font-bold leading-tight text-white">
                        Get the verified
                        <br />
                        creator badge.
                    </h1>

                    <p className="mt-5 max-w-xs text-lg leading-relaxed text-card-font">
                        Verified creators see 2.4x more enrollments and higher trust ratings.
                    </p>
                </div>

       
                <div className="relative mb-12 flex flex-col gap-8">
                    <div className="flex items-start gap-4">
                        <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border border-neon-green bg-neon-green/10">
                            <i className="ri-check-line text-neon-green"></i>
                        </div>

                        <div>
                            <h3 className="font-medium text-white">
                                Identity Verification
                            </h3>
                            <p className="mt-1 text-sm text-card-font">
                                ID and face scan complete.
                            </p>
                        </div>
                    </div>

                    <div className="absolute left-5 top-10 h-28 w-px bg-neon-green/30" />

       
                    <div className="flex items-start gap-4">
                        <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-neon-green bg-[#101800]">
                            <div className="h-3 w-3 rounded-full bg-neon-green" />
                        </div>

                        <div>
                            <h3 className="font-medium text-neon-green">
                                Professional Proof
                            </h3>
                            <p className="mt-1 text-sm text-card-font">
                                Upload relevant documents.
                            </p>
                        </div>
                    </div>

     
                    <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#191B19] text-card-font">
                            3
                        </div>

                        <div>
                            <h3 className="font-medium text-card-font">
                                Bank Details
                            </h3>
                            <p className="mt-1 text-sm text-card-font/70">
                                Setup payout methods.
                            </p>
                        </div>
                    </div>
                </div>

      
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-card-page">
                    <div className="p-5">
                        <div className="mb-3 flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-green/10">
                                <i className="ri-file-list-3-line text-neon-green"></i>
                            </div>

                            <div>
                                <h4 className="font-medium text-white">
                                    Verification under review
                                </h4>
                            </div>
                        </div>

                        <p className="text-sm leading-relaxed text-card-font">
                            Most reviews complete within 24 hours of final submission.
                        </p>
                    </div>

                    <div className="border-t border-zinc-800 px-5 py-4">
                        <div className="mb-2 flex items-center justify-between text-xs text-card-font">
                            <span>Step 2 of 3</span>
                            <span>66%</span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-[#1B2313]">
                            <div className="h-full w-[66%] rounded-full bg-neon-green" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Left
