'use client'
import React, { useState } from "react";


const sessionTypes = [
    {
        id: "live",
        title: "Live Class",
        description: "Interactive teaching session",
        icon: "ri-vidicon-line"
    },
    {
        id: "qa",
        title: "Q&A Session",
        description: "Answer learner questions",
        icon: "ri-question-answer-line"
    },
    {
        id: "workshop",
        title: "Workshop",
        description: "Hands-on practice session",
        icon: "ri-settings-4-line"
    }
];



const platforms = [
    { id: "zoom", name: "Zoom", icon: "ri-vidicon-line" },
    { id: "meet", name: "Google Meet", icon: "ri-video-chat-line" },
    { id: "teams", name: "Microsoft Teams", icon: "ri-video-line" },
    { id: "custom", name: "Custom Link", icon: "ri-link" }
];

const reminders = [
    { id: 1, label: "24h before" },
    { id: 2, label: "1h before" },
    { id: 3, label: "15m before" }
];

type AgendaItem = {
    id: number;
    title: string;
};

const type = () => {
    const [selectedType, setSelectedType] = useState("live");
    const [selectedPlatform, setSelectedPlatform] = useState("zoom");

    const [selectedReminders, setSelectedReminders] = useState(["24h before", "1h before"]);
    const [sendReminders, setSendReminders] = useState(true);

    const toggleReminder = (value: string) => {
        setSelectedReminders((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    };

    const [agenda, setAgenda] = useState<AgendaItem[]>([]);

    const addAgendaItem = (): void => {
        setAgenda(prev => [
            ...prev,
            {
                id: Date.now(),
                title: "",
                duration: 5
            }
        ]);
    };
    return (
        <div className="mx-20 pt-15 font-heading">
            <div className="w-full flex flex-col gap-6">


                <div className="flex items-start justify-between">

                    <div className="flex items-start gap-4">

                        <button className="mt-1 text-zinc-400 hover:text-white">
                            <i className="ri-close-line text-2xl"></i>
                        </button>

                        <div>
                            <h1 className="text-3xl font-semibold text-white">
                                Schedule Live Session
                            </h1>

                            <p className="mt-1 text-zinc-400">
                                Create an interactive live session for your learners
                            </p>
                        </div>

                    </div>

                    <button className="flex items-center gap-2 rounded-2xl bg-neon-green px-6 py-3 font-semibold text-black  transition-all hover:scale-[1.02]">
                        <i className="ri-check-line"></i>
                        Create Session
                    </button>

                </div>


                <div className="rounded-[30px] border border-neon-green/10 bg-card-page/30 p-6">

                    <h2 className="mb-8 text-2xl font-semibold text-white">
                        Session Type
                    </h2>

                    <div className="grid grid-cols-3 gap-5">

                        {sessionTypes.map((type) => (
                            <div
                                key={type.id}
                                onClick={() => setSelectedType(type.id)}
                                className={`cursor-pointer rounded-3xl border-l-3 p-5 transition-all ${selectedType === type.id
                                    ? "border-neon-green bg-neon-green/10"
                                    : "border-red-given bg-white/[0.03] hover:border-neon-green/20"
                                    }`}
                            >

                                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${selectedType === type.id
                                    ? "bg-neon-green text-black"
                                    : "bg-neon-green/10 text-neon-green"
                                    }`}>
                                    <i className={`${type.icon} text-2xl`}></i>
                                </div>

                                <h3 className="mb-2 text-xl font-semibold text-white">
                                    {type.title}
                                </h3>

                                <p className="text-sm text-zinc-500">
                                    {type.description}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>


                <div className="rounded-[30px] border border-neon-green/10 bg-card-page/30 p-6 mt-3" >

                    <h2 className="mb-8 text-2xl  font-semibold text-white">
                        Session Details
                    </h2>

                    <div className="space-y-6">

                        <div>
                            <label className="mb-3 block text-sm font-medium text-white">
                                Session Title *
                            </label>

                            <input
                                type="text"
                                placeholder="e.g. Live Market Analysis & Trading Strategies"
                                className="w-full rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-neon-green/30"
                            />
                        </div>

                        <div>
                            <label className="mb-3 block text-sm font-medium text-white">
                                Description
                            </label>

                            <textarea
                                rows={5}
                                placeholder="What will learners gain from this session?"
                                className="w-full resize-none rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-neon-green/30"
                            />
                        </div>

                    </div>

                </div>


                <div className="rounded-[30px] border border-neon-green/10 bg-card-page/30 my-4 p-6">

                    <div className="mb-8 flex items-center justify-between">

                        <h2 className="text-2xl font-semibold text-white">
                            Date & Time
                        </h2>

                        <button className="flex items-center gap-2 rounded-xl border border-neon-green/20 bg-neon-green/10 px-4 py-3 text-sm font-medium text-neon-green">
                            <i className="ri-magic-line"></i>
                            AI Suggest Best Time
                        </button>

                    </div>

                    <div className="grid grid-cols-3 gap-5">

                        <div>
                            <label className="mb-3 block text-sm font-medium text-white">
                                Date *
                            </label>

                            <input
                                type="date"
                                className="w-full rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 text-white outline-none focus:border-neon-green/30"
                            />
                        </div>

                        <div>
                            <label className="mb-3 block text-sm font-medium text-white">
                                Time *
                            </label>

                            <input
                                type="time"
                                className="w-full rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 text-white outline-none focus:border-neon-green/30"
                            />
                        </div>

                        <div>
                            <label className="mb-3 block text-sm font-medium text-white">
                                Duration (minutes)
                            </label>

                            <input
                                type="number"
                                defaultValue={60}
                                className="w-full rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 text-white outline-none focus:border-neon-green/30"
                            />
                        </div>

                    </div>

                </div>

            </div>
            <div className="flex flex-col gap-6">

                <div className="rounded-[30px] border border-neon-green/10 bg-card-page/30 my-5 p-6">

                    <div className="mb-6 flex items-center justify-between">

                        <h2 className="text-2xl font-semibold text-white">
                            Session Agenda
                        </h2>

                        <button className="flex items-center gap-2 rounded-xl border border-neon-green/20 bg-neon-green/10 px-4 py-3 text-sm font-medium text-neon-green">
                            <i className="ri-magic-line"></i>
                            Generate Agenda
                        </button>

                    </div>

                    <button
                        onClick={addAgendaItem}
                        className="flex h-16 w-full items-center justify-center gap-3 rounded-2xl border border-dashed border-white/10 text-zinc-400 transition-all hover:border-neon-green/30 hover:text-neon-green"
                    >
                        <i className="ri-add-line text-lg"></i>
                        Add Agenda Item
                    </button>

                    {agenda.length > 0 && (
                        <div className="mt-4 flex flex-col gap-3">
                            {agenda.map((item) => (
                                <div key={item.id} className="rounded-xl border border-white/5 bg-white/[0.03] p-4 text-white">
                                    {item.title}
                                </div>
                            ))}
                        </div>
                    )}

                </div>

                <div className="rounded-[30px] border border-neon-green/10 bg-card-page/30 p-6 ">

                    <h2 className="mb-8 text-2xl font-semibold text-white">
                        Meeting Platform
                    </h2>

                    <div className="mb-6 grid grid-cols-4 gap-4">

                        {platforms.map((platform) => (
                            <div
                                key={platform.id}
                                onClick={() => setSelectedPlatform(platform.id)}
                                className={`cursor-pointer rounded-3xl border-2 p-5 transition-all ${selectedPlatform === platform.id
                                    ? "border-neon-green bg-neon-green/10"
                                    : "border-white/10 bg-white/[0.03]"
                                    }`}
                            >
                                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${selectedPlatform === platform.id
                                    ? "bg-neon-green/15 text-neon-green"
                                    : "bg-white/5 text-zinc-400"
                                    }`}>
                                    <i className={`${platform.icon} text-xl`}></i>
                                </div>

                                <h3 className={`font-semibold ${selectedPlatform === platform.id
                                    ? "text-neon-green"
                                    : "text-white"
                                    }`}>
                                    {platform.name}
                                </h3>
                            </div>
                        ))}

                    </div>

                    <div className="mb-5">
                        <label className="mb-3 block text-sm font-medium text-white">
                            Meeting Link *
                        </label>

                        <input
                            type="text"
                            placeholder="https://zoom.us/j/..."
                            className="w-full rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-neon-green/30"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-5">

                        <div>
                            <label className="mb-3 block text-sm font-medium text-white">
                                Meeting ID (Optional)
                            </label>

                            <input
                                type="text"
                                placeholder="123 456 789"
                                className="w-full rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-neon-green/30"
                            />
                        </div>

                        <div>
                            <label className="mb-3 block text-sm font-medium text-white">
                                Passcode (Optional)
                            </label>

                            <input
                                type="password"
                                placeholder="Enter passcode"
                                className="w-full rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-neon-green/30"
                            />
                        </div>

                    </div>

                </div>

                <div className="rounded-[30px] border border-neon-green/10 bg-card-page/30  p-6">

                    <div className="mb-8 flex items-center justify-between">

                        <h2 className="text-xl font-semibold text-white">
                            Send Reminders
                        </h2>

                        <button
                            onClick={() => setSendReminders(!sendReminders)}
                            className={`relative h-8 w-14 rounded-full transition-all ${sendReminders ? "bg-neon-green" : "bg-zinc-700"
                                }`}
                        >
                            <span
                                className={`absolute top-1 h-6 w-6 rounded-full bg-white transition-all ${sendReminders ? "right-1" : "left-1"
                                    }`}
                            />
                        </button>

                    </div>

                    <div className="flex gap-3">

                        {reminders.map((reminder) => (
                            <button
                                key={reminder.id}
                                onClick={() => toggleReminder(reminder.label)}
                                className={`rounded-xl border px-5 py-3 text-sm font-medium transition-all ${selectedReminders.includes(reminder.label)
                                    ? "border-neon-green bg-neon-green/10 text-neon-green"
                                    : "border-white/10 bg-white/[0.03] text-zinc-400"
                                    }`}
                            >
                                {reminder.label}
                            </button>
                        ))}

                    </div>

                </div>

         
                <div className="flex items-center justify-between mt-12 mb-10">

                    <button className="rounded-2xl border border-white/10 px-8 py-4 font-medium text-white transition-all hover:border-neon-green/20">
                        Back
                    </button>

                    <button className="flex items-center gap-3 rounded-2xl bg-neon-green px-10 py-3 font-semibold text-black shadow-[0_0_35px_rgba(163,255,18,0.35)]">
                        Continue
                        <i className="ri-arrow-right-line"></i>
                    </button>

                </div>

            </div>

        </div>
    )
}

export default type
