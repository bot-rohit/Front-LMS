'use client'
import React, { useState } from 'react'




interface Timestamp {
    id: number
    title: string
    time: string
}

const Videos = () => {
    const [transcript, setTranscript] = useState('')
    const [timestamps, setTimestamps] = useState<Timestamp[]>([])
    const addTimestamp = () => {
        setTimestamps([
            ...timestamps,
            {
                id: Date.now(),
                title: '',
                time: '',
            },
        ])
    }

    return (
        <div>
            <div className="space-y-5 mt-6 font-heading">

                {/* Video Upload */}

                <div className="rounded-3xl border border-neon-green/10 bg-card-page/40 p-5">

                    <div className="flex items-center justify-between mb-5">

                        <h2 className="text-xl font-semibold text-white">
                            Video Lesson
                        </h2>

                        <button
                            className="
                            flex items-center gap-2
                            rounded-2xl
                            border border-neon-green/20
                            bg-neon-green/10
                            px-4 py-2
                            text-sm
                            font-medium
                            text-neon-green
                        "
                        >
                            <i className="ri-magic-line"></i>
                            AI Tools
                        </button>

                    </div>

                    <div
                        className="
                        flex flex-col items-center justify-center
                        rounded-3xl border border-dashed border-zinc-700
                        py-20
                    "
                    >

                        <i className="ri-upload-cloud-2-line text-7xl text-zinc-500"></i>

                        <h3 className="mt-4 text-3xl font-semibold text-white">
                            Upload Video
                        </h3>

                        <p className="mt-2 text-card-font">
                            Drag and drop or click to browse
                        </p>

                        <button
                            className="
                            mt-6 flex items-center gap-2
                            rounded-2xl bg-neon-green
                            px-6 py-3
                            font-semibold text-black
                        "
                        >
                            <i className="ri-upload-line"></i>
                            Upload Here
                        </button>

                    </div>

                </div>

                {/* Transcript */}

                <div className="rounded-3xl border border-neon-green/10 bg-card-page/40 p-5">

                    <div className="flex items-center justify-between mb-5">

                        <h2 className="text-xl font-semibold text-white">
                            Video Transcript
                        </h2>

                        <button
                            className="
                            flex items-center gap-2
                            rounded-2xl
                            border border-neon-green/20
                            bg-neon-green/10
                            px-4 py-2
                            text-sm
                            font-medium
                            text-neon-green
                        "
                        >
                            <i className="ri-sparkling-line"></i>
                            Auto-Generate
                        </button>

                    </div>

                    <textarea
                        value={transcript}
                        onChange={(e) => setTranscript(e.target.value)}
                        placeholder="Video transcript will appear here..."
                        className="
                        h-40 w-full resize-none
                        rounded-3xl border border-zinc-800
                        bg-black/20 p-5
                        text-white outline-none
                        placeholder:text-card-font
                    "
                    />

                </div>

                {/* Timestamps */}

                <div className="rounded-3xl border border-neon-green/10 bg-card-page/40 p-5">

                    <div className="flex items-center justify-between mb-5">

                        <h2 className="text-xl font-semibold text-white">
                            Chapter Timestamps
                        </h2>

                        <button
                            className="
                            flex items-center gap-2
                            rounded-2xl
                            border border-neon-green/20
                            bg-neon-green/10
                            px-4 py-2
                            text-sm
                            font-medium
                            text-neon-green
                        "
                        >
                            <i className="ri-radar-line"></i>
                            Auto-Detect
                        </button>

                    </div>

                    <button
                        onClick={addTimestamp}
                        className="
                        w-full
                        rounded-2xl
                        border border-dashed border-zinc-700
                        py-4
                        text-card-font
                        transition
                        hover:border-neon-green
                        hover:text-neon-green
                    "
                    >
                        <i className="ri-add-line mr-2"></i>
                        Add Timestamp
                    </button>

                    {timestamps.length > 0 && (
                        <div className="mt-5 space-y-3">

                            {timestamps.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="
                                    flex gap-3
                                    rounded-2xl
                                    border border-zinc-800
                                    bg-black/20
                                    p-4
                                "
                                >
                                    <input
                                        placeholder={`Chapter ${index + 1}`}
                                        className="
                                        flex-1
                                        bg-transparent
                                        text-white
                                        outline-none
                                    "
                                    />

                                    <input
                                        placeholder="00:00"
                                        className="
                                        w-24
                                        bg-transparent
                                        text-white
                                        outline-none
                                    "
                                    />
                                </div>
                            ))}

                        </div>
                    )}

                </div>

            </div>

        </div>
    )
}

export default Videos
