import React from 'react'
const badgeLibrary = [
    {
        id: 1,
        title: "Video Voyager",
        desc: "Awarded for consuming 20+ hours of video content within a course.",
        icon: "ri-rocket-line"
    },
    {
        id: 2,
        title: "Perfectionist",
        desc: "Secured after maintaining a 100% score on 5 consecutive assessments.",
        icon: "ri-award-line"
    },
    {
        id: 3,
        title: "Consistent Committer",
        desc: "Recognizing students who engage with the platform for 7 consecutive days.",
        icon: "ri-flashlight-line"
    },
    {
        id: 4,
        title: "Knowledge Guru",
        desc: "For contributing 50+ helpful comments in course discussions.",
        icon: "ri-chat-3-line"
    }
];

const activeRules = [
    {
        id: 1,
        title: "Course Completionist",
        trigger: "100% video watched",
        badge: "ULTRAFINISHER",
        icon: "ri-play-circle-line",
        issued: "2,450",
        last: "2M AGO",
        active: true
    },
    {
        id: 2,
        title: "Fast Learner",
        trigger: "First module in <24h",
        badge: "SONIC BOOM",
        icon: "ri-speed-up-line",
        issued: "1,102",
        last: "45M AGO",
        active: true
    },
    {
        id: 3,
        title: "Community Leader",
        trigger: "50 forum likes received",
        badge: "INFLUENCER",
        icon: "ri-message-2-line",
        issued: "0",
        last: "DISABLED",
        active: false
    }
];

const Predefined = () => {
    return (
        <div className='mx-10 mt-20'>
            <div className="space-y-10 font-heading">

    

                <div>

                    <div className="mb-6 flex items-center justify-between">

                        <div>
                            <h2 className="text-4xl font-semibold text-white">
                                Predefined Badge Library
                            </h2>

                            <p className="mt-1 text-white/50">
                                Ready-to-use professional assets for your curriculum
                            </p>
                        </div>

                        <div className="flex gap-2">

                            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60">
                                <i className="ri-arrow-left-s-line"></i>
                            </button>

                            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60">
                                <i className="ri-arrow-right-s-line"></i>
                            </button>

                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

                        {badgeLibrary.map((badge) => (

                            <div
                                key={badge.id}
                                className="rounded-3xl border border-white/10 bg-[#11150E] p-4 transition-all hover:border-neon-green/30"
                            >

                                <div className="flex h-50 items-center justify-center rounded-2xl bg-white/10">

                                    <i className={`${badge.icon} text-5xl text-neon-green`}></i>

                                </div>

                                <h3 className="mt-5 text-xl text-white">
                                    {badge.title}
                                </h3>

                                <p className="mt-2 line-clamp-2 text-sm text-white/50">
                                    {badge.desc}
                                </p>

                                <button className="mt-5 w-full rounded-xl bg-white/10 py-3 text-xs font-medium uppercase text-white transition-all hover:bg-neon-green hover:text-black">
                                    Select For Automation
                                </button>

                            </div>

                        ))}

                    </div>

                </div>


                <div className=' mt-20 mb-10'>

                    <div className="mb-5 flex items-center justify-between">

                        <h2 className="text-4xl font-semibold text-white">
                            Active Automation Rules
                        </h2>

                        <div className="flex items-center gap-3">

                            <span className="text-sm text-white/50">
                                Show:
                            </span>

                            <select className="rounded-xl border border-white/10 bg-[#11150E] px-4 py-2 text-sm text-white outline-none">
                                <option>All Active</option>
                                <option>Enabled</option>
                                <option>Disabled</option>
                            </select>

                        </div>

                    </div>

                    <div className="space-y-3">

                        {activeRules.map((rule) => (

                            <div
                                key={rule.id}
                                className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#11150E] px-5 py-4"
                            >

                                <div className="flex items-center gap-4">

                                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${rule.active
                                            ? "bg-neon-green/10 text-neon-green"
                                            : "bg-white/5 text-white/40"
                                        }`}>
                                        <i className={`${rule.icon} text-lg`}></i>
                                    </div>

                                    <div>

                                        <h3 className="font-medium text-white">
                                            {rule.title}
                                        </h3>

                                        <p className="text-sm text-white/50">
                                            Triggers on: {rule.trigger}
                                        </p>

                                    </div>

                                </div>

                                <div className="hidden lg:flex items-center gap-3">

                                    <i className="ri-arrow-right-line text-neon-green"></i>

                                    <span className={`rounded-full border px-3 py-1 text-xs ${rule.active
                                            ? "border-neon-green/20 bg-neon-green/10 text-neon-green"
                                            : "border-white/10 bg-white/5 text-white/40"
                                        }`}>
                                        {rule.badge}
                                    </span>

                                </div>

                                <div className="flex items-center gap-6">

                                    <div className="text-right">

                                        <p className="font-mono text-sm text-white">
                                            {rule.issued} issued
                                        </p>

                                        <p className="text-xs text-white/40">
                                            {rule.last}
                                        </p>

                                    </div>

                                    <button
                                        className={`relative h-7 w-14 rounded-full transition-all ${rule.active
                                                ? "bg-neon-green"
                                                : "bg-white/10"
                                            }`}
                                    >
                                        <span
                                            className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${rule.active
                                                    ? "left-8"
                                                    : "left-1"
                                                }`}
                                        />
                                    </button>

                                    <button className="text-white/40 hover:text-white">
                                        <i className="ri-more-2-fill"></i>
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                    <div className="mt-6 flex justify-center">

                        <button className="flex items-center gap-2 text-sm uppercase tracking-[2px] text-white/60 hover:text-neon-green">
                            <i className="ri-arrow-down-s-line"></i>
                            View All 12 Rules
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Predefined
