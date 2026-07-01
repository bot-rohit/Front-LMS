'use client'
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';


const Right = () => {
    const [documents, setDocuments] = useState({
        nism: null as File | null,
        pnl: null as File | null,
        demat: null as File | null,
        affiliation: null as File | null,
    });

    const handleFileUpload = (
        e: React.ChangeEvent<HTMLInputElement>,
        key: keyof typeof documents
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setDocuments((prev) => ({
            ...prev,
            [key]: file,
        }));
    };

    return (
        <div className="rounded-3xl border border-lime-900/40 bg-[#050800] p-8 font-heading" >


            <div className="flex items-start justify-between">
                <div>
                    <div className="flex items-center gap-3">
                        <h2 className="font-heading text-3xl font-bold text-white">
                            Professional proof
                        </h2>

                        <span className="rounded-full border border-neon-green/40 bg-neon-green/10 px-3 py-1 text-xs text-neon-green">
                            In progress
                        </span>
                    </div>

                    <p className="mt-4 max-w-md text-card-font">
                        Upload any 2 documents that prove your trading expertise.
                    </p>
                </div>
            </div>

            <div className="my-8 h-px bg-zinc-800" />


            <div className="grid grid-cols-2 gap-5">


                <label className={`group cursor-pointer rounded-2xl border p-5 transition
            ${documents.nism
                        ? "border-neon-green bg-neon-green/5"
                        : "border-zinc-800 bg-card-page hover:border-neon-green/50"
                    }`}
                >
                    <input
                        type="file"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, "nism")}
                    />

                    <div className="mb-5 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon-green/10">
                            <i className="ri-award-line text-neon-green"></i>
                        </div>

                        {documents.nism && (
                            <i className="ri-checkbox-circle-fill text-xl text-neon-green"></i>
                        )}
                    </div>

                    <h3 className="font-medium text-white">
                        NISM Certificate
                    </h3>

                    <p className="mt-1 text-sm text-card-font">
                        Uploaded • Verified
                    </p>

                    <div className="mt-6 border-t border-zinc-800 pt-4 text-sm text-card-font">
                        {documents.nism
                            ? documents.nism.name
                            : "Upload certificate"}
                    </div>
                </label>

                <label
                    className={`group cursor-pointer rounded-2xl border p-5 transition
    ${documents.pnl
                            ? "border-neon-green bg-neon-green/5"
                            : "border-zinc-800 bg-card-page hover:border-neon-green/50"
                        }`}
                >
                    <input
                        type="file"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, "pnl")}
                    />

                    <div className="mb-5 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon-green/10">
                            <i className="ri-file-chart-line text-neon-green"></i>
                        </div>

                        {documents.pnl && (
                            <i className="ri-checkbox-circle-fill text-xl text-neon-green"></i>
                        )}
                    </div>

                    <h3 className="font-medium text-white">
                        Trading P&L Statement
                    </h3>

                    <p className="mt-1 text-sm text-card-font">
                        Drag & drop or browse
                    </p>

                    <div className="mt-6 border-t border-zinc-800 pt-4 text-sm text-card-font">
                        {documents.pnl
                            ? documents.pnl.name
                            : "Upload statement"}
                    </div>
                </label>

                <label
                    className={`group cursor-pointer rounded-2xl border p-5 transition
    ${documents.demat
                            ? "border-neon-green bg-neon-green/5"
                            : "border-zinc-800 bg-card-page hover:border-neon-green/50"
                        }`}
                >
                    <input
                        type="file"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, "demat")}
                    />

                    <div className="mb-5 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon-green/10">
                            <i className="ri-bank-line text-neon-green"></i>
                        </div>

                        {documents.demat && (
                            <i className="ri-checkbox-circle-fill text-xl text-neon-green"></i>
                        )}
                    </div>

                    <h3 className="font-medium text-white">
                        Demat Account Proof
                    </h3>

                    <p className="mt-1 text-sm text-card-font">
                        PDF • Max 8 MB
                    </p>

                    <div className="mt-6 border-t border-zinc-800 pt-4 text-sm text-card-font">
                        {documents.demat
                            ? documents.demat.name
                            : "Upload proof"}
                    </div>
                </label>
                <label
                    className={`group cursor-pointer rounded-2xl border p-5 transition
    ${documents.affiliation
                            ? "border-neon-green bg-neon-green/5"
                            : "border-zinc-800 bg-card-page hover:border-neon-green/50"
                        }`}
                >
                    <input
                        type="file"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, "affiliation")}
                    />

                    <div className="mb-5 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon-green/10">
                            <i className="ri-graduation-cap-line text-neon-green"></i>
                        </div>

                        {documents.affiliation && (
                            <i className="ri-checkbox-circle-fill text-xl text-neon-green"></i>
                        )}
                    </div>

                    <div className="flex items-center gap-2">
                        <h3 className="font-medium text-white">
                            Course Affiliation
                        </h3>

                        <span className="rounded bg-zinc-800 px-2 py-1 text-[10px] uppercase text-card-font">
                            Optional
                        </span>
                    </div>

                    <p className="mt-1 text-sm text-card-font">
                        Institution letter or ID
                    </p>

                    <div className="mt-6 border-t border-zinc-800 pt-4 text-sm text-card-font">
                        {documents.affiliation
                            ? documents.affiliation.name
                            : "Upload document"}
                    </div>
                </label>
            </div>

            {/* Info Card */}
            <div className="mt-10 rounded-2xl border border-zinc-800 bg-card-page p-5">
                <div className="flex gap-4">
                    <div className="mt-1">
                        <i className="ri-information-line text-neon-green"></i>
                    </div>

                    <div>
                        <h3 className="font-medium text-white">
                            Why we verify
                        </h3>

                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-card-font">
                            TradeVed maintains a high standard for creator credibility.
                            Verifying your professional background ensures learners trust
                            your content, leading to higher engagement and platform
                            prioritization.
                        </p>
                    </div>
                </div>
            </div>


            <div className="mt-10 border-t border-zinc-800 pt-6">
                <div className="flex items-center justify-between">
                    <Link href={'/creators'} className="text-card-font transition hover:text-white">
                        Save & continue later
                    </Link>

                    <Link href={'/creators/status'}
                        // disabled={
                        //     !(
                        //         (documents.nism && documents.pnl) ||
                        //         (documents.nism && documents.demat) ||
                        //         (documents.pnl && documents.demat)
                        //     )
                        // }
                        className="flex items-center text-sm gap-2 rounded-full bg-neon-green px-8 py-2 font-semibold text-black
                         disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        Submit for Review
                        <i className="ri-arrow-right-line"></i>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Right
