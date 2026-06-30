"use client";
import React from 'react'
import Link from 'next/link';


const analytics = [
    {
        id: 1,
        title: "Expected Reach",
        value: "5,000+",
        sub: "Based on your profile",
        icon: "ri-group-line",
    },
    {
        id: 2,
        title: "Conversion Rate",
        value: "12%",
        sub: "Industry avg: 8%",
        icon: "ri-focus-3-line",
    },
    {
        id: 3,
        title: "Est. Revenue",
        value: "₹3L",
        sub: "First month",
        icon: "ri-money-dollar-circle-line",
    },
    {
        id: 4,
        title: "Quality Score",
        value: "9.2/10",
        sub: "Excellent",
        icon: "ri-star-line",
    },
];

const completeness = [
    {
        id: 1,
        title: "Video Content",
        progress: 64,
    },
    {
        id: 2,
        title: "Quizzes & Assignments",
        progress: 95,
    },
    {
        id: 3,
        title: "Live Sessions Scheduled",
        progress: 10,
    },
    {
        id: 4,
        title: "Gamification Setup",
        progress: 30,
    },
];
const recommendations = [
    {
        id: 1,
        title: "Excellent course structure",
        description:
            "Your 30-day progression is well-paced with a good mix of theory and practical exercises.",
        icon: "ri-checkbox-circle-line",
        type: "success",
    },
    {
        id: 2,
        title: "Add more engagement hooks",
        description:
            "Consider adding 2–3 real trading case studies to increase student engagement.",
        icon: "ri-sparkling-2-line",
        type: "suggestion",
    },
    {
        id: 3,
        title: "Optimize pricing strategy",
        description:
            "Your refund policy is unique. Highlight it more prominently in the course description.",
        icon: "ri-focus-3-line",
        type: "tip",
    },
];

const Anylysis = () => {
    return (
        <div className='mx-20  py-10'>
            <div className="space-y-8 font-heading ">

                <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-[#11150E] px-8 py-5">

                    <div className="flex items-center gap-3">
                        <i className="ri-play-line text-2xl text-neon-green"></i>
                        <h2 className="text-xl font-semibold text-white">
                            Course Preview
                        </h2>

                    </div>
                    <div className="rounded-2xl  p-1">

                        <button className="rounded-xl px-5 py-2 mx-5 bg-white/5   text-white/60 transition-all">
                            Student View
                        </button>

                        <button className="rounded-xl bg-neon-green px-5 py-2 font-medium text-black">
                            Creator Analytics
                        </button>

                    </div>

                </div>

                <div>
 
                    <h1 className="text-4xl font-semibold text-white ">
                        Creator Preview Analytics
                    </h1>

                    <p className="mt-3 text-lg text-white/50">
                        How your course looks to potential students
                    </p>

                </div>

      

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                    {analytics.map((item) => (

                        <div
                            key={item.id}
                            className="rounded-3xl border border-white/10 bg-[#11150E] p-6 transition-all hover:border-neon-green/30"
                        >

                            <div className="flex items-center gap-3 text-neon-green">

                                <i className={`${item.icon} text-xl`}></i>

                                <span className="text-sm text-white/70">
                                    {item.title}
                                </span>

                            </div>

                            <h2 className="mt-8 text-4xl font-semibold text-white font-sans">
                                {item.value}
                            </h2>

                            <p className="mt-6 text-sm text-white/40">
                                {item.sub}
                            </p>

                        </div>

                    ))}

                </div>



                <div className="rounded-3xl border border-white/10 bg-[#11150E] p-8 mt-10">

                    <h2 className="text-3xl font-semibold text-white">
                        Course Completeness
                    </h2>

                    <div className="mt-10 space-y-8">

                        {completeness.map((item) => (

                            <div key={item.id}>

                                <div className="mb-3 flex items-center justify-between">

                                    <span className="text-lg text-white/80">
                                        {item.title}
                                    </span>

                                    <span className="font-semibold text-neon-green">
                                        {item.progress}%
                                    </span>

                                </div>

                                <div className="h-2 overflow-hidden rounded-full bg-[#101425]">

                                    <div
                                        className="h-1 rounded-full bg-neon-green transition-all duration-500"
                                        style={{ width: `${item.progress}%` }}
                                    />

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>
            <div className="space-y-16 font-heading mt-10">

          

                <div className="rounded-3xl border border-white/10 bg-[#11150E] p-8">

                    <div className="flex items-center gap-3">

                        <i className="ri-magic-line text-2xl text-neon-green"></i>

                        <h2 className="text-3xl font-semibold text-white">
                            AI Recommendations
                        </h2>

                    </div>

                    <div className="mt-8 space-y-5">

                        {recommendations.map((item) => (

                            <div
                                key={item.id}
                                className="flex items-start gap-5 rounded-2xl bg-white/5 p-6 transition-all hover:bg-white/[0.07]"
                            >

                                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-neon-green/10 text-neon-green">

                                    <i className={`${item.icon} text-xl`}></i>

                                </div>

                                <div className="flex-1">

                                    <h3 className="text-xl font-semibold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 leading-relaxed text-white/55">
                                        {item.description}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

   

                <div className="flex items-center justify-between border-t border-white/10 pt-8">

                    <button className="rounded-2xl border border-white/10 bg-transparent px-8 py-2 font-medium text-white transition-all hover:border-white/20 hover:bg-white/5">
                        Back
                    </button>

                    <Link href={"/creators/overview"} className="flex items-center gap-3 rounded-2xl bg-neon-green px-10 py-2 font-semibold text-black shadow-[0_0_30px_rgba(163,255,0,0.25)] transition-all hover:scale-[1.02]">
                        Publish Course
                        <i className="ri-check-line text-xl"></i>
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default Anylysis
