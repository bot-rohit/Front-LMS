import React from 'react'
import Link from 'next/link';
const stats = [
    {
        id: 1,
        title: "Total Badges Active",
        value: "24",
        icon: "ri-medal-line"
    },
    {
        id: 2,
        title: "Total Badges Earned",
        value: "1,482",
        icon: "ri-award-line"
    },
    {
        id: 3,
        title: "Top Performing Student",
        value: "Alex Rivera",
        icon: "ri-star-line"
    }
];
const Header = () => {
    return (
        <div className=' pt-5 pb-15 px-10'>
            <div className="pt-10  font-heading">

                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-4xl font-semibold text-white">
                            Badge Management
                        </h1>
                        <p className="text-white/50 mt-1">
                            Gamify your students&apos; learning journey with custom achievements.
                        </p>
                    </div>

                    <Link href={'/creators/pricing'} 
                    className="flex items-center gap-2 rounded-2xl bg-neon-green px-6 py-2 text-black font-medium shadow-[0_0_30px_rgba(163,255,0,0.35)] transition-all hover:scale-105">
                        <i className="ri-add-circle-line text-lg"></i>
                        Create New Badge
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {stats.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-5 rounded-3xl border border-white/5 bg-[#11150E] p-6 transition-all hover:border-neon-green/30 hover:shadow-lg"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neon-green/10 text-neon-green">
                                <i className={`${item.icon} text-2xl`}></i>
                            </div>

                            <div>
                                <p className="text-sm uppercase  text-white/60">
                                    {item.title}
                                </p>

                                <h2 className="mt-1 text-3xl font-sans font-semibold text-white">
                                    {item.value}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Header
