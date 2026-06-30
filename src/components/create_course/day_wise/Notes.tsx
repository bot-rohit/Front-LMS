'use client'

import React, { useState } from 'react'
const Notes = () => {
    const [notes, setNotes] = useState<string>("")

    const [takeaways, setTakeaways] = useState<
        {
            id: number
            text: string
        }[]
    >([])

    const [reflectionEnabled, setReflectionEnabled] =
        useState<boolean>(false)

    const [resources, setResources] = useState<File[]>([])
    const addTakeaway = () => {
        setTakeaways([
            ...takeaways,
            {
                id: Date.now(),
                text: "",
            },
        ])
    }
    const updateTakeaway = (
        id: number,
        value: string
    ) => {
        setTakeaways(
            takeaways.map((item) =>
                item.id === id
                    ? { ...item, text: value }
                    : item
            )
        )
    }
    const removeTakeaway = (id: number) => {
        setTakeaways(
            takeaways.filter(
                (item) => item.id !== id
            )
        )
    }
    const uploadResource = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const files = Array.from(
            e.target.files || []
        )

        setResources([
            ...resources,
            ...files,
        ])
    }

    return (
        <div className="space-y-5 mt-6 font-heading">

            {/* Notes */}

            <div className="rounded-3xl border border-neon-green/10 bg-card-page/40 p-7">

                <div className="flex items-center justify-between">

                    <h2 className="text-2xl font-semibold text-white">
                        Lesson Notes
                    </h2>

                    <button
                        className="
                            flex items-center gap-2
                            rounded-2xl
                            border border-neon-green/20
                            bg-neon-green/10
                            px-5 py-3
                            text-sm font-medium
                            text-neon-green
                        "
                    >
                        <i className="ri-magic-line"></i>
                        Generate with AI
                    </button>

                </div>

                {/* Toolbar */}

                <div className="flex gap-5 mt-8 text-white">

                    <button>
                        <i className="ri-list-unordered"></i>
                    </button>

                    <button className="font-bold">
                        B
                    </button>

                    <button className="italic">
                        I
                    </button>

                </div>

                <textarea
                    value={notes}
                    onChange={(e) =>
                        setNotes(e.target.value)
                    }
                    placeholder="Write comprehensive notes for this lesson... Supports Markdown"
                    className="
                        mt-6 h-52 w-full resize-none
                        rounded-3xl border border-zinc-800
                        bg-black/20 p-5
                        text-white outline-none
                        placeholder:text-card-font
                    "
                />

            </div>

            {/* Key Takeaways */}

            <div className="rounded-3xl border border-neon-green/10 bg-card-page/40 p-7">

                <h2 className="text-2xl font-semibold text-white mb-5">
                    Key Takeaways
                </h2>

                <button
                    onClick={addTakeaway}
                    className="
                        w-full rounded-2xl
                        border border-dashed border-zinc-700
                        py-4
                        text-card-font
                        transition
                        hover:border-neon-green
                        hover:text-neon-green
                    "
                >
                    <i className="ri-add-line mr-2"></i>
                    Add Takeaway
                </button>

                {takeaways.length > 0 && (
                    <div className="mt-5 space-y-3">

                        {takeaways.map((item, index) => (
                            <div
                                key={item.id}
                                className="
                                    flex items-center gap-3
                                    rounded-2xl
                                    border border-zinc-800
                                    bg-black/20
                                    p-4
                                "
                            >
                                <span className="text-neon-green">
                                    {index + 1}.
                                </span>

                                <input
                                    value={item.text}
                                    onChange={(e) =>
                                        updateTakeaway(
                                            item.id,
                                            e.target.value
                                        )
                                    }
                                    placeholder="Enter takeaway"
                                    className="
                                        flex-1 bg-transparent
                                        text-white outline-none
                                    "
                                />

                                <button
                                    onClick={() =>
                                        removeTakeaway(item.id)
                                    }
                                    className="text-red-400"
                                >
                                    <i className="ri-delete-bin-line"></i>
                                </button>

                            </div>
                        ))}

                    </div>
                )}

            </div>

            {/* Resources */}

            <div className="rounded-3xl border border-neon-green/10 bg-card-page/40 p-7">

                <h2 className="text-2xl font-semibold text-white mb-5">
                    Downloadable Resources
                </h2>

                <label
                    className="
                        flex cursor-pointer items-center
                        justify-center gap-3
                        rounded-2xl
                        border border-dashed border-zinc-700
                        py-4
                        text-card-font
                        transition
                        hover:border-neon-green
                        hover:text-neon-green
                    "
                >
                    <i className="ri-upload-line"></i>

                    Upload Resource

                    <input
                        type="file"
                        multiple
                        className="hidden"
                        onChange={uploadResource}
                    />
                </label>

                {resources.length > 0 && (
                    <div className="mt-5 space-y-2">

                        {resources.map((file, index) => (
                            <div
                                key={index}
                                className="
                                    flex items-center gap-3
                                    rounded-2xl
                                    border border-zinc-800
                                    bg-black/20
                                    p-3
                                "
                            >
                                <i className="ri-file-line text-neon-green"></i>

                                <p className="text-white text-sm">
                                    {file.name}
                                </p>
                            </div>
                        ))}

                    </div>
                )}

            </div>

            {/* Reflection */}

            <div className="rounded-3xl border border-neon-green/10 bg-card-page/40 p-7">

                <div className="flex items-center justify-between">

                    <h2 className="text-2xl font-semibold text-white">
                        Reflection Prompt
                    </h2>

                    <button
                        onClick={() =>
                            setReflectionEnabled(
                                !reflectionEnabled
                            )
                        }
                        className={`
                            rounded-full px-5 py-2 text-sm
                            transition

                            ${reflectionEnabled
                                ? 'bg-neon-green text-black'
                                : 'bg-neon-green/10 text-neon-green border border-neon-green/20'
                            }
                        `}
                    >
                        {reflectionEnabled
                            ? 'Enabled'
                            : 'Enable'}
                    </button>

                </div>

                {reflectionEnabled && (

                    <textarea
                        placeholder="Ask students to reflect on what they learned..."
                        className="
                            mt-5 h-32 w-full resize-none
                            rounded-3xl border border-zinc-800
                            bg-black/20 p-5
                            text-white outline-none
                        "
                    />

                )}

            </div>

        </div>
    )
}

export default Notes
