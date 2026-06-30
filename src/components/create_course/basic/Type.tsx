'use client'
import React from 'react'
import { useState } from 'react'

const courseTypes = [
    {
        title: "Self-paced Course",
        description: "Learners progress at their own speed",
        icon: "ri-book-open-line",
        recommended: false,
        features: [
            "Flexible timeline",
            "Lifetime access",
            "Self-directed learning",
        ],
    },
    {
        title: "Live Cohort",
        description: "Structured batch with live sessions",
        icon: "ri-group-line",
        recommended: false,
        features: [
            "Fixed start date",
            "Live interaction",
            "Peer learning",
        ],
    },
    {
        title: "Hybrid Course",
        description: "Mix of pre-recorded + live sessions",
        icon: "ri-flashlight-line",
        recommended: true,
        features: [
            "Best of both worlds",
            "Flexible + structured",
            "Higher engagement",
        ],
    },
    {
        title: "Daily Challenge",
        description: "Daily tasks with streak tracking",
        icon: "ri-trophy-line",
        recommended: false,
        features: [
            "Daily commitment",
            "Gamified",
            "High motivation",
        ],
    },
    {
        title: "Certification Course",
        description: "Formal certification program",
        icon: "ri-focus-3-line",
        recommended: false,
        features: [
            "Certificate on completion",
            "Exams",
            "Professional development",
        ],
    },
];

const Type = () => {
    const [selectedType, setSelectedType] = useState("Hybrid Course");
    return (
        <div>
            <div className="mx-20 mt-20 font-heading ">

                <div>
                    <h1 className="text-4xl font-bold text-white">
                        Choose Course Type
                    </h1>

                    <p className="mt-2 text-card-font">
                        Select the format that best fits your teaching style and content
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-5">

                    {courseTypes.map((course) => {
                        const active = selectedType === course.title;

                        return (
                            <button
                                key={course.title}
                                onClick={() => setSelectedType(course.title)}
                                className={`
                        relative overflow-hidden rounded-3xl border p-5 text-left transition-all
                        ${active
                                        ? "border-neon-green bg-card-page"
                                        : "border-neon-green/10 bg-card-page/30 hover:border-neon-green/30"
                                    }
                    `}
                            >
                                {/* Left Accent */}
                                <div
                                    className={`
                            absolute left-0 top-0 h-full w-1
                            ${active ? "bg-neon-green" : "bg-pink-500"}
                        `}
                                />

                                {course.recommended && (
                                    <span
                                        className="
                                absolute right-5 top-5
                                rounded-full bg-neon-green/10
                                px-3 py-1 text-[10px]
                                font-semibold uppercase
                                text-neon-green
                            "
                                    >
                                        Recommended
                                    </span>
                                )}

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-neon-green/10">
                                    <i
                                        className={`${course.icon} text-3xl text-neon-green`}
                                    ></i>
                                </div>

                                <h2 className="text-2xl font-bold text-white">
                                    {course.title}
                                </h2>

                                <p className="mt-3 text-card-font">
                                    {course.description}
                                </p>

                                <div className="mt-6 flex flex-col gap-3">
                                    {course.features.map((feature) => (
                                        <div
                                            key={feature}
                                            className="flex items-center gap-3 text-card-font"
                                        >
                                            <i className="ri-check-line text-neon-green"></i>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

        </div>
    )
}

export default Type
