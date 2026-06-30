import React from 'react'
const socialPlatforms = [
    {
        id: 1,
        icon: "ri-twitter-x-fill",
        href: "#",
    },
    {
        id: 2,
        icon: "ri-linkedin-box-fill",
        href: "#",
    },
    {
        id: 3,
        icon: "ri-whatsapp-line",
        href: "#",
    },
];

const invitedFriends = [
    {
        id: 1,
        initials: "AJ",
    },
    {
        id: 2,
        initials: "MK",
    },
    {
        id: 3,
        initials: "SR",
    },
];

const email = () => {
    return (
        <div className='w-full flex  justify-between gap-5 pt-15 px-10 font-heading pb-5'>

            <div className="rounded-3xl border border-[#1b2a0f] bg-[#040900] p-6 w-full flex flex-col justify-between">
                <div>

                    <h3 className="text-3xl font-semibold text-white pt-10">
                        Your Unique Referral Link
                    </h3>

                    <p className="mt-3 text-sm text-gray-400">
                        Share this link with your friends to start earning
                        rewards.
                    </p>

                    <div className="mt-8 flex overflow-hidden rounded-2xl border border-[#223512] bg-[#101908]">
                        <div className="flex-1 px-4 py-4 text-sm text-neon-green">
                            https://tradeved.com/ref/user7742
                        </div>

                        <button className="flex items-center gap-2 bg-neon-green px-5 font-bold text-black transition-all hover:opacity-90">
                            <i className="ri-file-copy-line"></i>
                            Copy Link
                        </button>
                    </div>
                </div>
                <div>
                    <p className="mb-4 text-sm font-bold text-gray-400">
                        Quick Share
                    </p>

                    <div className="flex gap-3">
                        {socialPlatforms.map((platform) => (
                            <a
                                key={platform.id}
                                href={platform.href}
                                className="flex px-4 py-2 items-center justify-center rounded-full bg-gray-500 text-lg text-white transition-all hover:scale-105"
                            >
                                <i className={platform.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="rounded-3xl border border-[#1b2a0f] bg-[#040900] p-6 w-full">
                <h3 className="text-3xl font-semibold text-white">
                    Invite via Email
                </h3>

                <p className="mt-3 text-sm text-gray-400">
                    Send a direct invitation to your contacts.
                </p>

                <div className="mt-8 space-y-5">
                    <div>
                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[1px] text-gray-500">
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="friend@example.com"
                            className="h-12 w-full rounded-xl border border-[#223512] bg-[#101908] px-4 text-white outline-none placeholder:text-gray-500 focus:border-[#A6FF00]"
                        />
                    </div>

                    <div className='pt-4'>
                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[1px] text-gray-500">
                            Personal Message (Optional)
                        </label>

                        <textarea
                            rows={3}
                            placeholder="Join me on Trader Stock and let's master the markets together!"
                            className="w-full rounded-xl border border-[#223512] bg-[#101908] p-4 text-white outline-none placeholder:text-gray-500 focus:border-[#A6FF00]"
                        />
                    </div>

                    <button className="flex py-2 mt-2 w-full items-center justify-center gap-3 rounded-xl bg-[#FF0088] font-semibold text-white transition-all hover:opacity-90">
                        <i className="ri-send-plane-line"></i>
                        Send Invite
                    </button>
                </div>

                <div className="mt-5 flex items-center justify-center gap-3">
                    <div className="flex -space-x-3">
                        {invitedFriends.map((friend) => (
                            <div
                                key={friend.id}
                                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#040900] bg-[#4b5563] text-[10px] font-bold text-white"
                            >
                                {friend.initials}
                            </div>
                        ))}
                    </div>

                    <p className="text-xs text-gray-400">
                        <span className="font-semibold text-[#A6FF00]">
                            120+ friends
                        </span>{" "}
                        invited today
                    </p>
                </div>
            </div>


        </div>
    )
}

export default email
