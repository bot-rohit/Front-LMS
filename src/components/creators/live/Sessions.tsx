import Link from 'next/link';
import React from 'react'
const sessions = [
    {
        id: 1,
        type: "LIVE CLASS",
        title: "Live Market Analysis Session",
        description: "Real-time analysis of market movements and trading opportunities",
        date: "Jun 10, 2026",
        time: "18:00",
        duration: "60 min",
        registered: 45,
        capacity: 100,
        xp: 50,
        agenda: [
            { time: "0:00", topic: "Welcome and Overview" },
            { time: "5:00", topic: "Market Analysis" },
            { time: "35:00", topic: "Q&A Session" }
        ]
    }
];
const Sessions = () => {
    const category = 1;
    return (
        <div className='flex flex-col gap-10 pt-10'>
            <div className="flex items-center justify-between gap-10 rounded-3xl border border-white/5 bg-[#060806] p-6 mx-20 font-heading">

                <div>
                    <h2 className="text-3xl font-semibold text-white">
                        Live Sessions
                    </h2>

                    <p className="mt-2 text-lg text-zinc-400">
                        Schedule and manage live teaching sessions
                    </p>
                </div>

                <Link href={'/creators/live/schedule'} className="flex items-center gap-3 rounded-2xl bg-neon-green px-8 py-2 font-semibold text-black  transition-all duration-300 hover:scale-[1.02] ">
                    <i className="ri-add-line text-xl"></i>
                    Schedule Session
                </Link>

            </div>

            <div className="rounded-2xl mx-20 bg-card-page/30 border border-neon-green/10 font-heading  p-8">

                <h2 className="mb-8 text-2xl font-semibold text-white">
                    Upcoming Sessions ({sessions.length})
                </h2>

                <div className="flex flex-col gap-5">
                    {sessions.map((session) => (
                        <div key={session.id} className="rounded-2xl border border-white/5 bg-card-page/40 p-6">

                            {/* Header */}
                            <div className="mb-5 flex items-start justify-between">

                                <div>
                                    <div className="mb-4 inline-flex rounded-full bg-neon-green/10 px-4 py-2 text-xs font-semibold text-neon-green">
                                        {session.type}
                                    </div>

                                    <h3 className="mb-2 text-3xl font-semibold text-white">
                                        {session.title}
                                    </h3>

                                    <p className="text-zinc-400">
                                        {session.description}
                                    </p>
                                </div>

                                <div className="flex gap-3">

                                    <Link href={`/creators/live/${category}`} className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neon-green/20 bg-neon-green/10 text-neon-green transition-all hover:bg-neon-green/20">
                                        <i className="ri-external-link-line text-lg"></i>
                                    </Link>

                                    <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-zinc-300 transition-all hover:border-neon-green/20">
                                        <i className="ri-file-copy-line text-lg"></i>
                                    </button>

                                </div>

                            </div>

                            {/* Stats */}
                            <div className="mb-6 flex flex-wrap items-center gap-8">

                                <div className="flex items-center gap-2 text-zinc-300">
                                    <i className="ri-calendar-line text-zinc-500"></i>
                                    <span>{session.date}</span>
                                </div>

                                <div className="flex items-center gap-2 text-zinc-300">
                                    <i className="ri-time-line text-zinc-500"></i>
                                    <span>{session.time} ({session.duration})</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <i className="ri-group-line text-zinc-500"></i>
                                    <span className="font-medium text-neon-green">
                                        {session.registered}/{session.capacity}
                                    </span>
                                    <span className="text-zinc-500">
                                        registered
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 text-neon-green">
                                    <i className="ri-award-line"></i>
                                    <span className="font-semibold">
                                        {session.xp} XP
                                    </span>
                                </div>

                            </div>

                            <div className="mb-5 h-px bg-white/10"></div>

                            {/* Agenda */}
                            <div>

                                <h4 className="mb-5 font-semibold text-white">
                                    Agenda:
                                </h4>

                                <div className="grid grid-cols-2 gap-y-4">

                                    {session.agenda.map((item, index) => (
                                        <div key={index} className="flex items-center gap-3">

                                            <span className="min-w-[50px] font-semibold text-neon-green">
                                                {item.time}
                                            </span>

                                            <span className="text-zinc-400">
                                                {item.topic}
                                            </span>

                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>
                    ))}
                </div>

            </div>









        </div>
    )
}

export default Sessions
