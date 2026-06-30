import React from 'react'
const topPerformers = [
    {
        id: 1,
        name: "Rahul Sharma",
        initials: "R",
        xp: 2450,
        rank: 1,
        border: "border-yellow-400",
        badge: "bg-yellow-400 text-black",
        size: "h-28 w-28",
    },
    {
        id: 2,
        name: "Priya Patel",
        initials: "P",
        xp: 2180,
        rank: 2,
        border: "border-white/60",
        badge: "bg-white text-black",
        size: "h-20 w-20",
    },
    {
        id: 3,
        name: "Sneha Reddy",
        initials: "S",
        xp: 2020,
        rank: 3,
        border: "border-orange-400",
        badge: "bg-orange-400 text-black",
        size: "h-20 w-20",
    },
];

const rankings = [
    {
        id: 1,
        rank: 1,
        name: "Rahul Sharma",
        initials: "R",
        xp: 2450,
        completion: 85,
        streak: 12,
        medal: "ri-trophy-line",
        medalColor: "text-yellow-400",
    },
    {
        id: 2,
        rank: 2,
        name: "Priya Patel",
        initials: "P",
        xp: 2180,
        completion: 78,
        streak: 8,
        medal: "ri-medal-line",
        medalColor: "text-white/70",
    },
    {
        id: 3,
        rank: 3,
        name: "Sneha Reddy",
        initials: "S",
        xp: 2020,
        completion: 72,
        streak: 6,
        medal: "ri-award-line",
        medalColor: "text-orange-400",
    },
    {
        id: 4,
        rank: 5,
        name: "Vikram Singh",
        initials: "V",
        xp: 1820,
        completion: 65,
        streak: 5,
        medal: null,
    },
    {
        id: 5,
        rank: 8,
        name: "Amit Kumar",
        initials: "A",
        xp: 1240,
        completion: 45,
        streak: 0,
        medal: null,
    },
];
const LeaderBoard = () => {
    return (
        <div>
            <div className="space-y-8 font-heading mt-15">



                <div className="rounded-3xl border border-white/10 bg-[#11150E] p-8 py-15">

                    <h2 className="text-center text-3xl font-semibold text-white">
                        Top Performers
                    </h2>

                    <div className="mt-10 flex items-end justify-center gap-12 ">

                        {[topPerformers[1], topPerformers[0], topPerformers[2]].map((student) => (

                            <div key={student.id} className="text-center ">

                                <div className="relative">

                                    <div
                                        className={`flex ${student.size} items-center justify-center rounded-full border-[3px] ${student.border} bg-white/5 text-5xl font-bold text-white`}
                                    >
                                        {student.initials}
                                    </div>

                                    <div
                                        className={`absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full ${student.badge}`}
                                    >
                                        {student.rank === 1 ? (
                                            <i className="ri-trophy-line text-lg"></i>
                                        ) : (
                                            <span className="font-semibold">
                                                {student.rank}
                                            </span>
                                        )}
                                    </div>

                                </div>

                                <h3 className="mt-5 text-xl font-semibold text-white">
                                    {student.name}
                                </h3>

                                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-neon-green/10 px-4 py-2 text-neon-green">

                                    <i className="ri-medal-line"></i>

                                    <span className="font-medium">
                                        {student.xp} XP
                                    </span>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>



                <div className="rounded-3xl border border-white/10 bg-[#11150E] py-10 px-10  mt-10">

                    <h2 className="mb-6 text-3xl font-semibold text-white">
                        Complete Rankings
                    </h2>

                    <div className="space-y-4">

                        {rankings.map((student) => (

                            <div
                                key={student.id}
                                className="flex items-center justify-between border-l-4 border-l-neon-green rounded-2xl border border-white/5 bg-white/5 p-5 transition-all hover:border-neon-green/30"
                            >

                                <div className="flex items-center gap-5 pl-5" >

                                    {student.medal ? (
                                        <i
                                            className={`${student.medal} ${student.medalColor} text-2xl`}
                                        ></i>
                                    ) : (
                                        <span className="w-8 text-center font-semibold text-white/40">
                                            #{student.rank}
                                        </span>
                                    )}

                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neon-green/10 font-semibold text-neon-green">
                                        {student.initials}
                                    </div>

                                    <div>

                                        <h3 className="font-semibold text-white">
                                            {student.name}
                                        </h3>

                                        <div className="mt-2 flex flex-wrap items-center gap-5 text-sm">

                                            <span className="flex items-center gap-1 text-neon-green">
                                                <i className="ri-medal-line"></i>
                                                {student.xp} XP
                                            </span>

                                            <span className="flex items-center gap-1 text-white/50">
                                                <i className="ri-pie-chart-line"></i>
                                                {student.completion}% Complete
                                            </span>

                                            <span className="flex items-center gap-1 text-orange-400">
                                                <i className="ri-fire-line"></i>
                                                {student.streak} day streak
                                            </span>

                                        </div>

                                    </div>

                                </div>

                                <div className="flex gap-2">

                                    {Array.from({
                                        length: student.rank <= 3 ? 3 : 1,
                                    }).map((_, index) => (

                                        <button
                                            key={index}
                                            className="flex h-9 w-9 items-center justify-center rounded-full bg-neon-green/10 text-neon-green transition-all hover:bg-neon-green hover:text-black"
                                        >
                                            <i className="ri-star-line"></i>
                                        </button>

                                    ))}

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default LeaderBoard
