import React from 'react'
const referralTrackingData = [
    {
        id: 1,
        initials: "JD",
        name: "Shrijita",
        email: "shri@example.com",
        joinDate: "Oct 12, 2023",
        status: "Completed Course",
        reward: "+$10.00",
        subText: "500 XP Added",
        completed: true,
    },
    {
        id: 2,
        initials: "AM",
        name: "Priya Arya",
        email: "priya@domain.com",
        joinDate: "Oct 15, 2023",
        status: "Joined",
        reward: null,
        subText: "Pending Module 1",
        completed: false,
    },
    {
        id: 3,
        initials: "RW",
        name: "Jaswinder",
        email: "jass@web.com",
        joinDate: "Oct 18, 2023",
        status: "Completed Course",
        reward: "+$10.00",
        subText: "500 XP Added",
        completed: true,
    },
];

const ref = () => {
    return (
        <div className='px-10 pt-20 font-heading pb-5'>
            <section className="overflow-hidden rounded-3xl border border-[#1b2a0f] bg-[#040900]">
                <div className="flex flex-col gap-4 border-b border-[#16210c] px-6 py-6 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                        <h2 className="text-3xl font-semibold text-white">
                            Referral Tracking
                        </h2>

                        <p className="mt-1 text-sm text-gray-400">
                            Monitor your rewards and friend progress.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 rounded-2xl border border-[#223512] bg-[#101908] px-5 py-3">
                        <div className="h-2 w-2 rounded-full bg-neon-green ml-2" />
                        <span className="text-sm text-gray-300">
                            Total Rewards:
                        </span>

                        <span className="font-semibold text-white">
                            $420
                        </span>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full ">
                        <thead>
                            <tr className="border-b border-[#16210c] text-left bg-[#080C00]">
                                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-[2px] text-gray-500">
                                    Friend Name
                                </th>

                                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-[2px] text-gray-500">
                                    Join Date
                                </th>

                                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-[2px] text-gray-500">
                                    Status
                                </th>

                                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-[2px] text-gray-500">
                                    Reward Earned
                                </th>

                                <th className="px-6 py-4 text-right text-[11px] font-bold uppercase tracking-[2px] text-gray-500">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {referralTrackingData.map((friend) => (
                                <tr
                                    key={friend.id}
                                    className="border-b border-[#111a08] transition-all hover:bg-[#091100]"
                                >
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#6b2f2f] to-[#6a5a11] font-semibold text-white">
                                                {friend.initials}
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-white">
                                                    {friend.name}
                                                </h4>

                                                <p className="text-sm text-gray-500">
                                                    {friend.email}
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-6 py-5 text-gray-400">
                                        {friend.joinDate}
                                    </td>

                                    <td className="px-6 py-5">

                                        <div
                                            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${friend.completed
                                                ? "text-dark-no bg-dark-no/20"
                                                : "bg-neon-green/20  text-neon-green"
                                                }`}
                                        >
                                        
                                            <div className='w-1 h-1 rounded-full bg-dark-no'/>
                                            {friend.status}
                                        </div>
                                    </td>

                                    <td className="px-6 py-5">
                                        {friend.reward ? (
                                            <div>
                                                <h4 className="text-xl font-bold text-[#A6FF00]">
                                                    {friend.reward}
                                                </h4>

                                                <p className="text-xs text-gray-500">
                                                    {friend.subText}
                                                </p>
                                            </div>
                                        ) : (
                                            <span className="text-sm text-gray-500">
                                                {friend.subText}
                                            </span>
                                        )}
                                    </td>

                                    <td className="px-6 py-5 text-right">
                                        <button className="text-xl text-gray-400 transition-all hover:text-white">
                                            <i className="ri-more-2-fill"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-center border-t border-[#16210c] px-6 py-5  bg-[#080C00]">
                    <button className="flex items-center gap-2 text-sm font-medium text-gray-400 transition-all hover:text-white ">
                        View All Referrals
                        <i className="ri-arrow-down-s-line"></i>
                    </button>
                </div>
            </section>

        </div>
    )
}

export default ref
