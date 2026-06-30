import React from 'react'

const second = () => {
    return (
        <div className='flex'>
            <div className='w-[30%]'>
                <div className="w-full max-w-md text-white">
                    {/* Header */}
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#A6FF00]">
                        Trust & Verification
                    </p>

                    <h1 className="text-5xl font-semibold leading-tight">
                        Get the verified
                        <br />
                        creator badge.
                    </h1>

                    <p className="mt-6 text-lg text-[#8A8A8A]">
                        Verified creators see 2.4× more
                        <br />
                        enrollments and higher trust ratings.
                    </p>

                    {/* Steps */}
                    <div className="mt-14 space-y-8">
                        {/* Step 1 */}
                        <div className="flex gap-4">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#A6FF00]">
                                <i className="ri-check-line text-[#A6FF00]" />
                            </div>

                            <div>
                                <h3 className="font-medium text-white">
                                    Identity Verification
                                </h3>

                                <p className="mt-1 text-sm text-[#6F6F6F]">
                                    ID and Face Scan complete.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 Active */}
                        <div className="flex gap-4">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#A6FF00] shadow-[0_0_15px_rgba(166,255,0,0.4)]">
                                <div className="h-3 w-3 rounded-full bg-[#A6FF00]" />
                            </div>

                            <div>
                                <h3 className="font-medium text-[#A6FF00]">
                                    Professional Proof
                                </h3>

                                <p className="mt-1 text-sm text-[#6F6F6F]">
                                    Upload relevant documents.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-4">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#222] bg-[#0C0C0C] text-[#444]">
                                3
                            </div>

                            <div>
                                <h3 className="font-medium text-[#808080]">
                                    Bank Details
                                </h3>

                                <p className="mt-1 text-sm text-[#505050]">
                                    Setup payout methods.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Review Card */}
                    <div className="mt-12 rounded-3xl border border-white/10 bg-[#111214] p-6">
                        <div className="flex items-start gap-3">
                            <i className="ri-file-list-3-line text-xl text-[#CFCFCF]" />

                            <div>
                                <h3 className="font-medium text-white">
                                    Verification under review
                                </h3>

                                <p className="mt-2 text-sm text-[#7C7C7C]">
                                    Most reviews complete within 24 hours of final
                                    submission.
                                </p>
                            </div>
                        </div>

                        {/* Progress */}
                        <div className="mt-6">
                            <div className="h-2 overflow-hidden rounded-full bg-[#242A18]">
                                <div className="h-full w-[66%] rounded-full bg-[#A6FF00]" />
                            </div>

                            <div className="mt-3 flex items-center justify-between text-sm">
                                <span className="text-[#7C7C7C]">Step 2 of 3</span>
                                <span className="text-[#7C7C7C]">66%</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-[70%] '>
                <div className="w-full rounded-3xl border border-[#A6FF00]/20 bg-[#040700] p-8">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                        <h2 className="text-4xl font-semibold text-white">
                            Professional proof
                        </h2>

                        <span className="rounded-full bg-[#A6FF00]/15 px-3 py-1 text-xs font-medium text-[#A6FF00]">
                            In progress
                        </span>
                    </div>

                    <p className="mt-3 max-w-md text-sm text-[#8A8A8A]">
                        Upload any 2 documents that prove your trading expertise.
                    </p>

                    <div className="my-8 h-px w-full bg-white/10" />

                    {/* Upload Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* NISM Certificate */}
                        <div className="rounded-2xl border border-white/10 bg-[#181B18] p-5 transition hover:border-[#A6FF00]/40">
                            <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-lg bg-[#232723]">
                                <i className="ri-award-line text-[#A6FF00]" />
                            </div>

                            <h3 className="text-base font-medium text-white">
                                NISM Certificate
                            </h3>

                            <p className="mt-1 text-sm text-[#7E7E7E]">
                                Upload certificate
                            </p>
                        </div>

                        {/* Trading P&L */}
                        <div className="rounded-2xl border border-white/10 bg-[#181B18] p-5 transition hover:border-[#A6FF00]/40">
                            <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-lg bg-[#232723]">
                                <i className="ri-file-chart-line text-[#A6FF00]" />
                            </div>

                            <h3 className="text-base font-medium text-white">
                                Trading P&L statement
                            </h3>

                            <p className="mt-1 text-sm text-[#7E7E7E]">
                                Drag & drop or browse
                            </p>
                        </div>

                        {/* Demat */}
                        <div className="rounded-2xl border border-white/10 bg-[#181B18] p-5 transition hover:border-[#A6FF00]/40">
                            <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-lg bg-[#232723]">
                                <i className="ri-bank-card-line text-[#A6FF00]" />
                            </div>

                            <h3 className="text-base font-medium text-white">
                                Demat account proof
                            </h3>

                            <p className="mt-1 text-sm text-[#7E7E7E]">
                                PDF • max 8 MB
                            </p>
                        </div>

                        {/* Course Affiliation */}
                        <div className="rounded-2xl border border-white/10 bg-[#181B18] p-5 transition hover:border-[#A6FF00]/40">
                            <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-lg bg-[#232723]">
                                <i className="ri-graduation-cap-line text-[#A6FF00]" />
                            </div>

                            <div className="flex items-center gap-2">
                                <h3 className="text-base font-medium text-white">
                                    Course affiliation
                                </h3>

                                <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] uppercase text-[#9A9A9A]">
                                    Optional
                                </span>
                            </div>

                            <p className="mt-1 text-sm text-[#7E7E7E]">
                                Institution letter or ID
                            </p>
                        </div>
                    </div>

                    {/* Why verify */}
                    <div className="mt-12 rounded-2xl border border-white/10 bg-[#171A17] p-5">
                        <div className="flex items-start gap-3">
                            <i className="ri-information-line mt-1 text-[#A6FF00]" />

                            <div>
                                <h4 className="font-medium text-white">
                                    Why we verify
                                </h4>

                                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#7E7E7E]">
                                    TradeVed maintains a high standard for creator
                                    credibility. Verifying your professional background
                                    ensures learners trust your content, leading to higher
                                    engagement and platform prioritization.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-12 h-px w-full bg-white/10" />

                    <div className="mt-6 flex items-center justify-between">
                        <button className="text-sm text-[#A0A0A0]">
                            Save & continue later
                        </button>

                        <button className="flex items-center gap-2 rounded-full bg-[#A6FF00] px-8 py-3 font-semibold text-black transition hover:opacity-90">
                            Submit for Review
                            <i className="ri-arrow-right-line" />
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default second
