'use client'

import React, { useState } from 'react'

interface AssignmentType {
    id: number
    title: string
    description: string
    icon: string
}
interface AssignmentData {
    title: string
    description: string
    instructions: string
}

interface RubricItem {
    id: number
    title: string
    points: number
}

const assignmentTypes: AssignmentType[] = [
    {
        id: 1,
        title: 'Text Response',
        description: 'Essay or short answer submission',
        icon: 'ri-file-text-line',
    },
    {
        id: 2,
        title: 'File Upload',
        description: 'Document, spreadsheet, or presentation',
        icon: 'ri-file-upload-line',
    },
    {
        id: 3,
        title: 'Screenshot Upload',
        description: 'Screen capture of trading platform',
        icon: 'ri-camera-line',
    },
    {
        id: 4,
        title: 'Market Observation',
        description: 'Analyze and document market movements',
        icon: 'ri-bar-chart-grouped-line',
    },
    {
        id: 5,
        title: 'Trading Journal',
        description: 'Reflect on trading decisions',
        icon: 'ri-chat-1-line',
    },
    {
        id: 6,
        title: 'Scenario Analysis',
        description: 'Solve a trading scenario/case study',
        icon: 'ri-error-warning-line',
    },
    {
        id: 7,
        title: 'Peer Review',
        description: "Review another learner's work",
        icon: 'ri-check-double-line',
    },
]
const reviewTypes = [
    {
        id: 'manual',
        title: 'Manual Review',
        description: 'You review each submission',
    },
    {
        id: 'ai',
        title: 'AI Review',
        description: 'AI provides instant feedback',
    },
    {
        id: 'peer',
        title: 'Peer Review',
        description: 'Learners review each other',
    },
]

const Assign = () => {
    const [selectedTypes, setSelectedTypes] = useState<number[]>([1])

    const toggleType = (id: number) => {
        if (selectedTypes.includes(id)) {
            setSelectedTypes(
                selectedTypes.filter((item) => item !== id)
            )
        } else {
            setSelectedTypes([...selectedTypes, id])
        }
    }
    const [assignmentData, setAssignmentData] =
        useState<AssignmentData>({
            title: '',
            description: '',
            instructions: '',
        })

    const [rubrics, setRubrics] = useState<RubricItem[]>([])

    const [deadline, setDeadline] = useState(3)

    const [xpReward, setXpReward] = useState(150)

    const [reviewType, setReviewType] =
        useState('manual')

    const [allowResubmission, setAllowResubmission] =
        useState(true)

    const [maxSubmissions, setMaxSubmissions] =
        useState(3)

    const addCriterion = () => {
        setRubrics([
            ...rubrics,
            {
                id: Date.now(),
                title: `Criterion ${rubrics.length + 1}`,
                points: 10,
            },
        ])
    }

    const totalPoints = rubrics.reduce(
        (sum, item) => sum + item.points,
        0
    )


    return (
        <div className="mt-6 font-heading">

            <div className="rounded-3xl border border-neon-green/10 bg-card-page/40 p-8">

                {/* Header */}

                <div className="flex items-center justify-between mb-8">

                    <h2 className="text-2xl font-semibold text-white">
                        Assignment Type
                    </h2>

                    <div
                        className="
                            rounded-full
                            border border-neon-green/20
                            bg-neon-green/10
                            px-4 py-2
                            text-sm text-neon-green
                        "
                    >
                        You can Select Multiple
                    </div>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

                    {assignmentTypes.map((type) => {

                        const active = selectedTypes.includes(type.id)

                        return (
                            <button
                                key={type.id}
                                onClick={() => toggleType(type.id)}
                                className={`
                                    rounded-3xl
                                    border
                                    p-6
                                    text-left
                                    transition-all
                                    duration-300
                                    min-h-[220px]

                                    ${active
                                        ? 'border-neon-green bg-neon-green/10'
                                        : 'border-zinc-800 bg-black/20 hover:border-neon-green/30'
                                    }
                                `}
                            >

                                {/* Icon */}

                                <div
                                    className="
                                        flex h-12 w-12
                                        items-center justify-center
                                        rounded-2xl
                                        bg-neon-green/10
                                        text-neon-green
                                        text-xl
                                    "
                                >
                                    <i className={type.icon}></i>
                                </div>

                                {/* Content */}

                                <h3 className="mt-6 text-xl font-semibold text-white">
                                    {type.title}
                                </h3>

                                <p className="mt-3 text-card-font leading-relaxed">
                                    {type.description}
                                </p>

                                {active && (
                                    <div className="mt-5 flex items-center gap-2 text-neon-green text-sm">
                                        <i className="ri-check-line"></i>
                                        Selected
                                    </div>
                                )}

                            </button>
                        )
                    })}

                </div>

                {/* Selected Preview */}

                <div className="mt-8 rounded-2xl border border-zinc-800 bg-black/20 p-5">

                    <p className="text-sm text-card-font mb-3">
                        Selected Assignment Types
                    </p>

                    <div className="flex flex-wrap gap-3">

                        {selectedTypes.map((id) => {
                            const item = assignmentTypes.find(
                                (type) => type.id === id
                            )

                            return (
                                <div
                                    key={id}
                                    className="
                                        rounded-full
                                        bg-neon-green/10
                                        border border-neon-green/20
                                        px-4 py-2
                                        text-neon-green
                                        text-sm
                                    "
                                >
                                    {item?.title}
                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>
            <div className="mt-6 rounded-3xl border border-neon-green/10 bg-card-page/40 p-8 font-heading">

                {/* Header */}

                <div className="flex items-center justify-between mb-10">

                    <h2 className="text-2xl font-semibold text-white">
                        Assignment Details
                    </h2>

                    <button className="flex flex-row items-center gap-2 rounded-full border border-neon-green/20 bg-neon-green/10 px-5 py-3 text-neon-green font-medium whitespace-nowrap">
                        <i className="ri-magic-line"></i>
                        AI Generate
                    </button>

                </div>

                {/* Assignment Title */}

                <div className="mb-6">

                    <label className="block mb-3 text-white font-medium">
                        Assignment Title *
                    </label>

                    <input
                        type="text"
                        value={assignmentData.title}
                        onChange={(e) =>
                            setAssignmentData({
                                ...assignmentData,
                                title: e.target.value,
                            })
                        }
                        placeholder="e.g. Analyze a Real Options Trade"
                        className="
                        w-full
                        rounded-2xl
                        border border-zinc-800
                        bg-black/20
                        px-5 py-4
                        text-white
                        outline-none
                        placeholder:text-card-font
                        focus:border-neon-green/30
                    "
                    />

                </div>

                {/* Description */}

                <div className="mb-6">

                    <label className="block mb-3 text-white font-medium">
                        Description
                    </label>

                    <textarea
                        rows={4}
                        value={assignmentData.description}
                        onChange={(e) =>
                            setAssignmentData({
                                ...assignmentData,
                                description: e.target.value,
                            })
                        }
                        placeholder="Brief overview of what learners need to do..."
                        className="
                        w-full
                        resize-none
                        rounded-2xl
                        border border-zinc-800
                        bg-black/20
                        p-5
                        text-white
                        outline-none
                        placeholder:text-card-font
                        focus:border-neon-green/30
                    "
                    />

                </div>

                {/* Detailed Instructions */}

                <div>

                    <label className="block mb-3 text-white font-medium">
                        Detailed Instructions
                    </label>

                    <textarea
                        rows={8}
                        value={assignmentData.instructions}
                        onChange={(e) =>
                            setAssignmentData({
                                ...assignmentData,
                                instructions: e.target.value,
                            })
                        }
                        placeholder="Step-by-step instructions for completing this assignment..."
                        className="
                        w-full
                        resize-none
                        rounded-2xl
                        border border-zinc-800
                        bg-black/20
                        p-5
                        text-white
                        outline-none
                        placeholder:text-card-font
                        focus:border-neon-green/30
                    "
                    />

                </div>

            </div>

            <div className="mt-6 space-y-6 font-heading">

                {/* Grading Rubric */}

                <div className="rounded-3xl border border-neon-green/10 bg-card-page/40 p-8">

                    <div className="flex items-center justify-between mb-6">

                        <h2 className="text-2xl font-semibold text-white">
                            Grading Rubric
                        </h2>

                        <button className="flex items-center gap-2 rounded-full border border-neon-green/20 bg-neon-green/10 px-5 py-3 text-neon-green font-medium whitespace-nowrap">
                            <i className="ri-magic-line"></i>
                            Generate Rubric
                        </button>

                    </div>

                    <button
                        onClick={addCriterion}
                        className="
                        w-full
                        rounded-2xl
                        border border-dashed border-zinc-700
                        py-5
                        text-card-font
                        transition
                        hover:border-neon-green
                        hover:text-neon-green
                    "
                    >
                        <i className="ri-add-line mr-2"></i>
                        Add Criterion
                    </button>

                    {rubrics.length > 0 && (
                        <div className="mt-5 space-y-3">

                            {rubrics.map((item) => (
                                <div
                                    key={item.id}
                                    className="
                                    flex items-center justify-between
                                    rounded-2xl
                                    border border-zinc-800
                                    bg-black/20
                                    p-4
                                "
                                >
                                    <span className="text-white">
                                        {item.title}
                                    </span>

                                    <input
                                        type="number"
                                        value={item.points}
                                        onChange={(e) =>
                                            setRubrics(
                                                rubrics.map((rubric) =>
                                                    rubric.id === item.id
                                                        ? {
                                                            ...rubric,
                                                            points:
                                                                Number(
                                                                    e.target
                                                                        .value
                                                                ),
                                                        }
                                                        : rubric
                                                )
                                            )
                                        }
                                        className="
                                        w-20 rounded-xl
                                        bg-zinc-900
                                        px-3 py-2
                                        text-white
                                        outline-none
                                    "
                                    />
                                </div>
                            ))}

                        </div>
                    )}

                    <div className="mt-6 border-t border-zinc-800 pt-6 flex items-center justify-between">

                        <p className="text-card-font">
                            Total Points
                        </p>

                        <p className="text-4xl font-bold text-neon-green">
                            {totalPoints}
                        </p>

                    </div>

                </div>

                {/* Assignment Settings */}

                <div className="rounded-3xl border border-neon-green/10 bg-card-page/40 p-8">

                    <h2 className="text-2xl font-semibold text-white mb-8">
                        Assignment Settings
                    </h2>

                    {/* Deadline */}

                    <div className="mb-8">

                        <label className="block mb-3 text-white font-medium">
                            Deadline
                        </label>

                        <div className="flex gap-4">

                            <input
                                type="range"
                                min={1}
                                max={30}
                                value={deadline}
                                onChange={(e) =>
                                    setDeadline(
                                        Number(e.target.value)
                                    )
                                }
                                className="flex-1 accent-lime-400"
                            />

                            <div className="w-32 rounded-2xl border border-zinc-800 bg-black/20 px-5 py-4 flex justify-between items-center">
                                <span className="text-white font-semibold">
                                    {deadline}
                                </span>

                                <span className="text-card-font">
                                    days
                                </span>
                            </div>

                        </div>

                    </div>

                    {/* XP */}

                    <div className="mb-10">

                        <label className="block mb-3 text-white font-medium">
                            XP Reward
                        </label>

                        <div className="flex gap-4 items-center">

                            <input
                                type="range"
                                min={50}
                                max={1000}
                                step={50}
                                value={xpReward}
                                onChange={(e) =>
                                    setXpReward(
                                        Number(e.target.value)
                                    )
                                }
                                className="flex-1 accent-lime-400"
                            />

                            <div className="rounded-2xl border border-zinc-800 bg-black/20 px-6 py-4 flex items-center gap-2">
                                <i className="ri-award-line text-neon-green"></i>

                                <span className="text-3xl font-bold text-neon-green">
                                    {xpReward}
                                </span>
                            </div>

                        </div>

                    </div>

                    {/* Review Type */}

                    <div className="mb-10">

                        <label className="block mb-4 text-white font-medium">
                            Review Type
                        </label>

                        <div className="grid grid-cols-3 gap-4">

                            {reviewTypes.map((type) => {

                                const active =
                                    reviewType === type.id

                                return (
                                    <button
                                        key={type.id}
                                        onClick={() =>
                                            setReviewType(
                                                type.id
                                            )
                                        }
                                        className={`
                                        rounded-3xl
                                        border
                                        p-5
                                        text-left
                                        transition

                                        ${active
                                                ? 'border-neon-green bg-neon-green/10'
                                                : 'border-zinc-800 bg-black/20'
                                            }
                                    `}
                                    >
                                        <h3
                                            className={`font-semibold ${active
                                                    ? 'text-neon-green'
                                                    : 'text-white'
                                                }`}
                                        >
                                            {type.title}
                                        </h3>

                                        <p className="mt-2 text-sm text-card-font">
                                            {type.description}
                                        </p>
                                    </button>
                                )
                            })}

                        </div>

                    </div>

                    {/* Resubmission */}

                    <div className="flex items-center justify-between mb-8">

                        <div>

                            <h3 className="text-white font-medium">
                                Allow Resubmission
                            </h3>

                            <p className="text-card-font text-sm mt-1">
                                Let learners improve and resubmit
                            </p>

                        </div>

                        <button
                            onClick={() =>
                                setAllowResubmission(
                                    !allowResubmission
                                )
                            }
                            className={`
                            relative
                            h-8 w-16 rounded-full
                            transition

                            ${allowResubmission
                                    ? 'bg-neon-green'
                                    : 'bg-zinc-700'
                                }
                        `}
                        >
                            <div
                                className={`
                                absolute top-1
                                h-6 w-6 rounded-full
                                bg-white transition

                                ${allowResubmission
                                        ? 'right-1'
                                        : 'left-1'
                                    }
                            `}
                            />
                        </button>

                    </div>

                    {/* Max Submission */}

                    <div>

                        <label className="block mb-3 text-white font-medium">
                            Max Submissions
                        </label>

                        <input
                            type="number"
                            value={maxSubmissions}
                            onChange={(e) =>
                                setMaxSubmissions(
                                    Number(e.target.value)
                                )
                            }
                            className="
                            w-32
                            rounded-2xl
                            border border-zinc-800
                            bg-black/20
                            px-5 py-4
                            text-white
                            outline-none
                        "
                        />

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Assign
