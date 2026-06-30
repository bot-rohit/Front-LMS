import React from 'react'
const sessionData = {
    title: "Live Market Analysis Session",
    description: "Real-time analysis of market movements and trading opportunities",
    date: "June 10, 2026",
    time: "18:00",
    duration: "60 minutes",
    platform: "Zoom",
    link: "https://zoom.us/j/123456789",
    status: "LIVE CLASS"
}
export const statsData = [
    {
        id: 1,
        title: "Registered",
        value: 45,
        icon: "ri-group-line",
        color: "text-neon-green",
        bg: "bg-neon-green/10"
    },
    {
        id: 2,
        title: "Attended",
        value: "-",
        icon: "ri-checkbox-circle-line",
        color: "text-blue-400",
        bg: "bg-blue-500/10"
    },
    {
        id: 3,
        title: "Total XP",
        value: 75,
        icon: "ri-award-line",
        color: "text-yellow-400",
        bg: "bg-yellow-500/10"
    }
];
export const agendaData = [
    {
        id: 1,
        time: "0:00",
        title: "Welcome and Overview",
        duration: "5 minutes"
    },
    {
        id: 2,
        time: "5:00",
        title: "Market Analysis",
        duration: "30 minutes"
    },
    {
        id: 3,
        time: "35:00",
        title: "Q&A Session",
        duration: "25 minutes"
    }
];
export const attendeeData = [
    {
        id: 1,
        name: "Rahul Sharma",
        xp: "+75 XP",
        status: "completed"
    },
    {
        id: 2,
        name: "Priya Patel",
        xp: "+75 XP",
        status: "completed"
    },
    {
        id: 3,
        name: "Amit Kumar",
        xp: "Registered",
        status: "pending"
    },
    {
        id: 4,
        name: "Sneha Reddy",
        xp: "+50 XP",
        status: "completed"
    },
    {
        id: 5,
        name: "Vikram Singh",
        xp: "Registered",
        status: "pending"
    }
];
const Detail = () => {
    return (
        <div>
            <div className="w-full px-20 py-10 font-heading">
                <div className="flex items-center justify-between mb-8">
                    <button className="px-3  py-2 rounded-full border border-white/10 bg-[#141610] flex items-center justify-center text-white/70 hover:text-white transition-all">
                        <i className="ri-close-line text-xl"></i>
                    </button>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 rounded-full border border-white/10 bg-[#141610] text-white font-medium hover:border-neon-green/30 transition-all">
                            Edit Session
                        </button>

                        <button className="px-8 py-2 rounded-full bg-neon-green text-black font-semibold hover:scale-[1.02] transition-all">
                            <span className="flex items-center gap-2">
                                <i className="ri-external-link-line"></i>
                                Join Session
                            </span>
                        </button>
                    </div>
                </div>

                <div className="bg-card-page/35 border border-white/5 border-l-4
                 rounded-3xl p-10 overflow-hidden relative">

                    <div className="absolute top-8 right-8 flex gap-3">
                        <button className="px-3  py-1 rounded-xl bg-neon-green/10 border border-neon-green/20 text-neon-green flex items-center justify-center">
                            <i className="ri-file-copy-line text-lg"></i>
                        </button>

                        <button className="px-3 py-1 rounded-xl bg-neon-green/10 border border-neon-green/20 text-neon-green flex items-center justify-center">
                            <i className="ri-send-plane-line text-lg"></i>
                        </button>
                    </div>

                    <div className="inline-flex px-4 py-2 rounded-full
                     bg-neon-green/10 text-neon-green text-xs font-bold uppercase tracking-widest mb-8">
                        {sessionData.status}
                    </div>

                    <h1 className="text-3xl font-bold text-white mb-4">
                        {sessionData.title}
                    </h1>

                    <p className="text-card-font text-md max-w-4xl mb-10">
                        {sessionData.description}
                    </p>

                    <div className="flex flex-wrap gap-10 text-card-font mb-10">
                        <div className="flex items-center gap-3">
                            <i className="ri-calendar-line text-neon-green"></i>
                            <span>{sessionData.date}</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <i className="ri-time-line text-neon-green"></i>
                            <span>
                                {sessionData.time} ({sessionData.duration})
                            </span>
                        </div>

                        <div className="flex items-center gap-3 ">
                            <i className="ri-video-line text-neon-green"></i>
                            <span>{sessionData.platform}</span>
                        </div>
                    </div>

                    <div className="bg-card-page/40 border border-white/5 rounded-2xl p-6 flex items-center justify-between">

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-neon-green/10 border border-neon-green/20 flex items-center justify-center">
                                <i className="ri-link text-neon-green text-lg"></i>
                            </div>

                            <div>
                                <p className="text-white font-semibold">
                                    Meeting Link
                                </p>
                                <p className="text-card-font text-sm">
                                    {sessionData.link}
                                </p>
                            </div>
                        </div>

                        <button className="px-6 py-3 rounded-2xl bg-neon-green/10 border border-neon-green/20 text-neon-green font-semibold flex items-center gap-2 hover:bg-neon-green/20 transition-all">
                            <i className="ri-file-copy-line"></i>
                            Copy
                        </button>

                    </div>



                </div>

                <div className='mt-10 flex w-full gap-10'>

                    <div className='w-[70%] mt-5 flex flex-col gap-5'>

                        <div className="grid grid-cols-3 gap-4">
                            {statsData.map((item) => (
                                <div key={item.id} className="bg-card-page/35 border border-neon-green/10 rounded-3xl px-6 py-10 flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.bg}`}>
                                            <i className={`${item.icon} ${item.color} text-lg`} />
                                        </div>

                                        <h2 className="text-3xl font-semibold text-white">
                                            {item.value}
                                        </h2>
                                    </div>

                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-card-page/35 border border-neon-green/10 rounded-3xl p-8 mt-5">
                            <h2 className="text-white text-2xl font-semibold mb-8">
                                Session Agenda
                            </h2>

                            <div className="flex flex-col gap-4">
                                {agendaData.map((item) => (
                                    <div key={item.id} className="bg-card-page/30 border border-white/5 rounded-2xl p-5 flex items-center gap-5">
                                        <div className="px-4 py-3 rounded-xl bg-neon-green/10 text-neon-green font-semibold">
                                            {item.time}
                                        </div>

                                        <div>
                                            <h3 className="text-white font-medium text-lg">
                                                {item.title}
                                            </h3>

                                            <p className="text-zinc-500 text-sm">
                                                {item.duration}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='w-[30%] font-heading'>
                        <div className="bg-card-page/35 border border-neon-green/10 rounded-3xl p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-white text-xl font-semibold">
                                    Attendees
                                </h2>

                                <i className="ri-download-line text-neon-green text-lg" />
                            </div>

                            <div className="flex flex-col gap-4">
                                {attendeeData.map((item) => (
                                    <div key={item.id} className="bg-white/[0.03] rounded-2xl p-4 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center text-neon-green font-semibold">
                                                {item.name[0]}
                                            </div>

                                            <div>
                                                <h3 className="text-white font-medium">
                                                    {item.name}
                                                </h3>

                                                <p className="text-zinc-500 text-sm">
                                                    {item.xp}
                                                </p>
                                            </div>
                                        </div>

                                        <i
                                            className={
                                                item.status === "completed"
                                                    ? "ri-checkbox-circle-line text-neon-green text-xl"
                                                    : "ri-time-line text-zinc-500 text-xl"
                                            }
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-card-page/35 mt-10 border border-neon-green/10 rounded-3xl p-6 flex flex-col min-h-[260px]">
                            <div className="flex items-center justify-between">
                                <h2 className="text-white text-xl font-semibold">
                                    Materials
                                </h2>

                                <button>
                                    <i className="ri-add-line text-neon-green text-xl" />
                                </button>
                            </div>

                            <div className="flex-1 flex flex-col items-center justify-center gap-4">
                                <i className="ri-file-list-3-line text-6xl text-zinc-500" />

                                <p className="text-zinc-500 text-center">
                                    No materials uploaded
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default Detail
