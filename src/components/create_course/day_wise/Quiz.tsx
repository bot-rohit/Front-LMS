'use client'

import React, { useState } from 'react'

const questionTypes = [
    {
        id: "mcq",
        title: "Multiple Choice",
        icon: "ri-checkbox-circle-line",
    },
    {
        id: "multi",
        title: "Multi-Select",
        icon: "ri-checkbox-multiple-line",
    },
    {
        id: "truefalse",
        title: "True/False",
        icon: "ri-check-double-line",
    },
    {
        id: "scenario",
        title: "Scenario-based",
        icon: "ri-error-warning-line",
    },
    {
        id: "chart",
        title: "Chart Analysis",
        icon: "ri-line-chart-line",
    },
]

interface QuizData {
    title: string
    description: string
}
const answerVisibilityOptions = [
    'Immediately',
    'After Submit',
    'Never',
]
const Quiz = () => {
    const [quizData, setQuizData] = useState<QuizData>({
        title: '',
        description: '',
    })

    const [selectedQuestionType, setSelectedQuestionType] =
        useState('mcq')

    const [passingScore, setPassingScore] = useState(70)

    const [xpReward, setXpReward] = useState(100)

    const [timeLimitEnabled, setTimeLimitEnabled] =
        useState(false)

    const [allowRetakes, setAllowRetakes] =
        useState(true)

    const [maxAttempts, setMaxAttempts] =
        useState(3)

    const [showAnswers, setShowAnswers] =
        useState('After Submit')

    const [randomizeQuestions, setRandomizeQuestions] =
        useState(false)

    const [randomizeOptions, setRandomizeOptions] =
        useState(false)

    return (
        <div className="mt-6 space-y-6 font-heading">

            {/* Quiz Details */}

            <div className="rounded-3xl border border-neon-green/10 bg-card-page/40 p-8">

                <div className="flex items-center justify-between mb-8">

                    <h2 className="text-2xl font-semibold text-white">
                        Quiz Details
                    </h2>

                    <button className="flex items-center gap-2 rounded-full border border-neon-green/20 bg-neon-green/10 px-5 py-3 text-neon-green font-medium whitespace-nowrap">
                        <i className="ri-magic-line"></i>
                        Generate Questions
                    </button>

                </div>

                <div className="mb-6">

                    <label className="block mb-3 text-white font-medium">
                        Quiz Title *
                    </label>

                    <input
                        type="text"
                        value={quizData.title}
                        onChange={(e) =>
                            setQuizData({
                                ...quizData,
                                title: e.target.value,
                            })
                        }
                        placeholder="e.g. Day 1 Knowledge Check"
                        className="
                    w-full
                    rounded-2xl
                    border border-zinc-800
                    bg-black/20
                    px-5 py-4
                    text-white
                    outline-none
                    placeholder:text-card-font
                "
                    />

                </div>

                <div>

                    <label className="block mb-3 text-white font-medium">
                        Description (Optional)
                    </label>

                    <textarea
                        rows={4}
                        value={quizData.description}
                        onChange={(e) =>
                            setQuizData({
                                ...quizData,
                                description: e.target.value,
                            })
                        }
                        placeholder="Brief description of what this quiz covers..."
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
                "
                    />

                </div>

            </div>

            {/* Question Type */}

            <div className="rounded-3xl border border-neon-green/10 bg-card-page/40 p-8">

                <h2 className="text-2xl font-semibold text-white mb-8">
                    Add Question
                </h2>

                <div className="grid grid-cols-5 gap-4">

                    {questionTypes.map((type) => {

                        const active =
                            selectedQuestionType === type.id

                        return (
                            <button
                                key={type.id}
                                onClick={() =>
                                    setSelectedQuestionType(
                                        type.id
                                    )
                                }
                                className={`
                            rounded-3xl
                            border
                            p-5
                            transition-all
                            text-center

                            ${active
                                        ? 'border-neon-green bg-neon-green/10'
                                        : 'border-zinc-800 bg-black/20'
                                    }
                        `}
                            >

                                <div
                                    className="
                                mx-auto
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

                                <p className="mt-4 text-sm font-medium text-white">
                                    {type.title}
                                </p>

                            </button>
                        )
                    })}

                </div>

            </div>
            <div className="mt-6 rounded-3xl border border-neon-green/10 bg-card-page/40 p-8 font-heading">

                <h2 className="text-2xl font-semibold text-white mb-10">
                    Quiz Settings
                </h2>

                {/* Passing Score */}

                <div className="mb-10">

                    <label className="block mb-4 text-white font-medium">
                        Passing Score (%)
                    </label>

                    <div className="flex items-center gap-5">

                        <input
                            type="range"
                            min={0}
                            max={100}
                            value={passingScore}
                            onChange={(e) =>
                                setPassingScore(
                                    Number(e.target.value)
                                )
                            }
                            className="flex-1 accent-lime-400"
                        />

                        <div
                            className="
                            min-w-[140px]
                            rounded-3xl
                            border border-zinc-800
                            bg-black/20
                            px-6 py-5
                            text-center
                        "
                        >
                            <p className="text-5xl font-bold text-neon-green">
                                {passingScore}%
                            </p>
                        </div>

                    </div>

                </div>

                {/* XP Reward */}

                <div className="mb-10">

                    <label className="block mb-4 text-white font-medium">
                        XP Reward (on passing)
                    </label>

                    <div className="flex items-center gap-5">

                        <input
                            type="range"
                            min={10}
                            max={500}
                            step={10}
                            value={xpReward}
                            onChange={(e) =>
                                setXpReward(
                                    Number(e.target.value)
                                )
                            }
                            className="flex-1 accent-lime-400"
                        />

                        <div
                            className="
                            min-w-[140px]
                            rounded-3xl
                            border border-zinc-800
                            bg-black/20
                            px-6 py-5
                            flex items-center justify-center gap-3
                        "
                        >
                            <i className="ri-award-line text-neon-green text-xl"></i>

                            <span className="text-4xl font-bold text-neon-green">
                                {xpReward}
                            </span>
                        </div>

                    </div>

                </div>

                {/* Time Limit */}

                <div className="flex items-center justify-between mb-10">

                    <h3 className="text-white font-medium text-lg">
                        Time Limit
                    </h3>

                    <button
                        onClick={() =>
                            setTimeLimitEnabled(
                                !timeLimitEnabled
                            )
                        }
                        className={`
                        relative h-8 w-16 rounded-full transition
                        ${timeLimitEnabled
                                ? 'bg-neon-green'
                                : 'bg-zinc-700'
                            }
                    `}
                    >
                        <div
                            className={`
                            absolute top-1 h-6 w-6 rounded-full bg-white transition
                            ${timeLimitEnabled
                                    ? 'right-1'
                                    : 'left-1'
                                }
                        `}
                        />
                    </button>

                </div>

                {/* Retakes + Attempts */}

                <div className="grid grid-cols-2 gap-10 mb-10">

                    <div>

                        <div className="flex items-center justify-between">

                            <div>

                                <h3 className="text-white font-medium">
                                    Allow Retakes
                                </h3>

                                <p className="text-card-font text-sm mt-1">
                                    Let learners try again
                                </p>

                            </div>

                            <button
                                onClick={() =>
                                    setAllowRetakes(
                                        !allowRetakes
                                    )
                                }
                                className={`
                                relative h-8 w-16 rounded-full transition
                                ${allowRetakes
                                        ? 'bg-neon-green'
                                        : 'bg-zinc-700'
                                    }
                            `}
                            >
                                <div
                                    className={`
                                    absolute top-1 h-6 w-6 rounded-full bg-white transition
                                    ${allowRetakes
                                            ? 'right-1'
                                            : 'left-1'
                                        }
                                `}
                                />
                            </button>

                        </div>

                    </div>

                    <div>

                        <label className="block mb-3 text-white font-medium">
                            Max Attempts
                        </label>

                        <input
                            type="number"
                            value={maxAttempts}
                            onChange={(e) =>
                                setMaxAttempts(
                                    Number(e.target.value)
                                )
                            }
                            className="
                            w-full
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

                {/* Show Correct Answers */}

                <div className="mb-10">

                    <h3 className="text-white font-medium mb-5">
                        Show Correct Answers
                    </h3>

                    <div className="grid grid-cols-3 gap-4">

                        {answerVisibilityOptions.map(
                            (option) => {
                                const active =
                                    showAnswers === option

                                return (
                                    <button
                                        key={option}
                                        onClick={() =>
                                            setShowAnswers(
                                                option
                                            )
                                        }
                                        className={`
                                        rounded-3xl
                                        border
                                        px-6 py-5
                                        font-semibold
                                        transition

                                        ${active
                                                ? 'border-neon-green bg-neon-green/10 text-neon-green'
                                                : 'border-zinc-800 bg-black/20 text-white'
                                            }
                                    `}
                                    >
                                        {option}
                                    </button>
                                )
                            }
                        )}

                    </div>

                </div>

                {/* Randomization */}

                <div className="grid grid-cols-2 gap-10">

                    <div className="flex items-center justify-between">

                        <div>

                            <h3 className="text-white font-medium">
                                Randomize Questions
                            </h3>

                            <p className="text-card-font text-sm mt-1">
                                Shuffle question order
                            </p>

                        </div>

                        <button
                            onClick={() =>
                                setRandomizeQuestions(
                                    !randomizeQuestions
                                )
                            }
                            className={`
                            relative h-8 w-16 rounded-full transition
                            ${randomizeQuestions
                                    ? 'bg-neon-green'
                                    : 'bg-zinc-700'
                                }
                        `}
                        >
                            <div
                                className={`
                                absolute top-1 h-6 w-6 rounded-full bg-white transition
                                ${randomizeQuestions
                                        ? 'right-1'
                                        : 'left-1'
                                    }
                            `}
                            />
                        </button>

                    </div>

                    <div className="flex items-center justify-between">

                        <div>

                            <h3 className="text-white font-medium">
                                Randomize Options
                            </h3>

                            <p className="text-card-font text-sm mt-1">
                                Shuffle answer choices
                            </p>

                        </div>

                        <button
                            onClick={() =>
                                setRandomizeOptions(
                                    !randomizeOptions
                                )
                            }
                            className={`
                            relative h-8 w-16 rounded-full transition
                            ${randomizeOptions
                                    ? 'bg-neon-green'
                                    : 'bg-zinc-700'
                                }
                        `}
                        >
                            <div
                                className={`
                                absolute top-1 h-6 w-6 rounded-full bg-white transition
                                ${randomizeOptions
                                        ? 'right-1'
                                        : 'left-1'
                                    }
                            `}
                            />
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Quiz
