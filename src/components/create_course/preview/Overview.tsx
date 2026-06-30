import React from 'react'
import Link from 'next/link';
const completeness = [
    {
        id: 1,
        title: "Basic Information",
        progress: 100,
    },
    {
        id: 2,
        title: "Course Content (1 videos, 1 assignments)",
        progress: 100,
    },
    {
        id: 3,
        title: "Pricing & Refund Policy",
        progress: 100,
    },
    {
        id: 4,
        title: "Gamification Setup",
        progress: 100,
    },
];

const stats = [
    {
        id: 1,
        title: "Course Duration",
        value: "30",
        sub: "Days",
        icon: "ri-calendar-line",
    },
    {
        id: 2,
        title: "Video Content",
        value: "12",
        sub: "Videos uploaded",
        icon: "ri-video-line",
    },
    {
        id: 3,
        title: "Assessments",
        value: "6",
        sub: "Quizzes & Assignments",
        icon: "ri-edit-box-line",
    },
    {
        id: 4,
        title: "Course Price",
        value: "₹4999",
        sub: "50% discount",
        icon: "ri-money-rupee-circle-line",
    },
];

const recommendations = [
    {
        id: 1,
        title: "Add more content",
        description:
            "Courses with at least 10+ days of content have higher completion rates.",
        icon: "ri-focus-3-line",
    },
];

const publishStatus = {
    title: "Course is live!",
    description:
        "Your course is published and visible to students. You can edit and republish anytime.",
    published: "Published: 6/9/2026",
};

const Overview = () => {
    return (
        <div>
            <div className="flex items-center justify-between border-b border-[#1D2516] bg-[#090B08] px-8 py-4">

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-5">
                        <i className="ri-eye-line text-xl text-neon-green"></i>

                        <h1 className="text-xl font-semibold text-white">
                            Course Preview
                        </h1>
                    </div>

                    <span className="rounded-full bg-neon-green/15 border border-neon-green px-3 py-1 text-sm font-medium text-neon-green">
                        Published
                    </span>
                </div>


                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 rounded-2xl border border-[#2A3225] px-6 py-2 text-white transition hover:bg-[#141814]">
                        <i className="ri-edit-line text-md"></i>
                        <span className="text-md font-medium">
                            Edit Course
                        </span>
                    </button>

                    <Link href={'/creators/dashboard'}  className="rounded-xl bg-neon-green px-8 py-2 text-md font-semibold text-black transition hover:bg-neon-green/80">
                        Update Course
                    </Link>
                </div>
            </div>
            <div className="space-y-8 font-heading pt-10 mx-20">



                <div>
                    <h1 className="text-4xl font-semibold text-white">
                        Creator Overview
                    </h1>

                    <p className="mt-3 text-lg text-white/50">
                        Review your course content before publishing
                    </p>

                </div>

     

                <div className="rounded-3xl border border-white/10 bg-[#11150E] p-8">

                    <h2 className="text-2xl font-semibold text-white">
                        Course Completeness
                    </h2>

                    <div className="mt-10 space-y-7">

                        {completeness.map((item) => (

                            <div key={item.id}>

                                <div className="mb-3 flex items-center justify-between">

                                    <span className="text-md text-white/80">
                                        {item.title}
                                    </span>

                                    <span className="font-semibold text-neon-green">
                                        {item.progress}%
                                    </span>

                                </div>

                                <div className="h-1 overflow-hidden rounded-full bg-[#111827]">

                                    <div
                                        className="h-full rounded-full bg-neon-green"
                                        style={{ width: `${item.progress}%` }}
                                    />

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

     
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-5 mx-1">

                    {stats.map((stat) => (

                        <div
                            key={stat.id}
                            className="rounded-3xl border border-white/10 border-l-4 border-l-neon-green bg-[#11150E] p-6 transition-all hover:border-neon-green/30"
                        >

                            <div className="flex items-center gap-3">

                                <i className={`${stat.icon} text-xl text-neon-green`}></i>

                                <span className="text-sm text-white/60">
                                    {stat.title}
                                </span>

                            </div>

                            <h3 className="mt-8 text-4xl font-semibold text-white font-sans">
                                {stat.value}
                            </h3>

                            <p className="mt-6 text-sm text-white/40">
                                {stat.sub}
                            </p>

                        </div>

                    ))}

                </div>

                {/* Recommendations */}

                <div className="rounded-3xl border border-white/10 bg-[#11150E] p-8">

                    <div className="flex items-center gap-3">

                        <i className="ri-sparkling-2-line text-xl text-neon-green"></i>

                        <h2 className="text-2xl font-semibold text-white">
                            Recommendations Before Publishing
                        </h2>

                    </div>

                    <div className="mt-8 space-y-4">

                        {recommendations.map((item) => (

                            <div
                                key={item.id}
                                className="flex gap-4 rounded-2xl border-l-4 border-l-yellow-400 bg-white/5 p-5"
                            >

                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">

                                    <i className={`${item.icon} text-lg`}></i>

                                </div>

                                <div>

                                    <h3 className="text-xl font-medium text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-white/55">
                                        {item.description}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                <div className="rounded-3xl border border-neon-green/20 bg-gradient-to-r from-neon-green/10 to-transparent p-8 mb-10">

                    <div className="flex items-start gap-4">

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neon-green/10 text-neon-green">

                            <i className="ri-checkbox-circle-fill text-2xl"></i>

                        </div>

                        <div>

                            <h2 className="text-3xl font-semibold text-white">
                                {publishStatus.title}
                            </h2>

                            <p className="mt-3 text-white/60">
                                {publishStatus.description}
                            </p>

                            <p className="mt-6 text-sm text-white/40">
                                {publishStatus.published}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Overview
