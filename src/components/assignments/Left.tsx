'use client'
import React from 'react'
import { useRef, useState } from "react";


const Left = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [preview, setPreview] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [notes, setNotes] = useState("");

    const handleFile = (selectedFile: File) => {
        setFile(selectedFile);

        if (selectedFile.type.startsWith("image/")) {
            const reader = new FileReader();

            reader.onload = () => {
                setPreview(reader.result as string);
            };

            reader.readAsDataURL(selectedFile);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        if (e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const saveDraft = () => {
        localStorage.setItem(
            "assignmentDraft",
            JSON.stringify({
                notes,
                image: preview,
            })
        );

        alert("Draft Saved!");
    };

    const submitAssignment = () => {
        console.log({
            file,
            notes,
        });

        alert("Assignment Submitted!");
    };
    return (
        <div className='pl-10 font-heading mt-10 mb-15'>
            <div className="space-y-8">
            
                <div className="rounded-2xl border border-[#2A341E] bg-[#0A1207] p-6">
                    <div className="mb-6 flex items-center gap-3">
                        <i className="ri-file-upload-line text-2xl text-lime-400"></i>

                        <h2 className="text-xl font-heading font-semibold text-white">
                            Chart Screenshots
                        </h2>
                    </div>

                    <div
                        onClick={() => inputRef.current?.click()}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleDrop}
                        className="cursor-pointer rounded-2xl border-2 border-dashed border-lime-500/40 bg-lime-950/10 px-8 py-16 transition hover:border-lime-400"
                    >
                        <div className="flex flex-col items-center">
                            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-lime-900/40">
                                <i className="ri-upload-cloud-2-line text-5xl text-lime-400"></i>
                            </div>

                            <h3 className="text-xl font-semibold text-white">
                                Click to upload or drag and drop
                            </h3>

                            <p className="mt-3 text-base text-lime-500">
                                PNG, JPG or PDF (Max 10MB per file)
                            </p>
                        </div>

                        <input
                            ref={inputRef}
                            type="file"
                            accept="image/*,.pdf"
                            className="hidden"
                            onChange={handleChange}
                        />
                    </div>

                    {preview && (
                        <div className="mt-6 flex items-start gap-4">
                            <div className="relative">
                                <img
                                    src={preview}
                                    alt="preview"
                                    className="h-32 w-48 rounded-xl border border-[#2A341E] object-cover"
                                />

                                <button
                                    onClick={() => {
                                        setPreview(null);
                                        setFile(null);
                                    }}
                                    className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 transition hover:bg-red-600"
                                >
                                    <i className="ri-close-line text-lg text-white"></i>
                                </button>
                            </div>
                        </div>
                    )}
                </div>

           
                <div className="rounded-2xl border border-[#2A341E] bg-[#0A1207] p-6">
                    <div className="mb-6 flex items-center gap-3">
                        <i className="ri-sticky-note-line text-2xl text-lime-400"></i>

                        <h2 className="text-xl font-heading font-semibold text-white">
                            Analysis Notes
                        </h2>
                    </div>

                    <textarea
                        rows={10}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Describe your strategy, entry/exit points, stop-loss, target, risk-reward ratio..."
                        className="w-full rounded-xl border border-lime-500/20 bg-lime-950/10 p-5 text-white outline-none transition placeholder:text-lime-700 focus:border-lime-400"
                    />
                </div>

                {/* Bottom Buttons */}
                <div className="flex justify-end gap-4">
                    <button
                        onClick={saveDraft}
                        className="rounded-xl border border-lime-500/30 px-8 py-2 font-medium text-white transition hover:border-lime-400 hover:bg-lime-500/10"
                    >
                        Save Draft
                    </button>

                    <button
                        onClick={submitAssignment}
                        className="rounded-xl bg-red-given  px-10 py-2 font-semibold text-white transition hover:scale-105"
                    >
                        Submit Assignment
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Left
