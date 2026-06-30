'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from "next/navigation";


const Sidebar = () => {
    const menuItems = [
        {
            name: "Dashboard",
            text: "Dashboard",
            url_icon: "ri-dashboard-line",
            disabled: false,
            href: "1#",
        },
        {
            name: "Courses Library",
            text: "Courses Library",
            url_icon: "ri-book-open-line",
            disabled: false,
            href: "/creators/courses",
        },
        {
            name: "All Students",
            text: "All Students",
            url_icon: "ri-booklet-line",
            disabled: false,
            href: "/creators/students",
        },
        {
            name: "Assignments",
            text: "Assignments",
            url_icon: "ri-file-list-3-line",
            disabled: false,
            href: "/creators/assignments",
        },
        {
            name: "Leaderboard",
            text: "Leaderboard",
            url_icon: "ri-bar-chart-grouped-line",
            disabled: false,
            href: "/creators/leaderboard",
        },
        {
            name: "Live Session",
            text: "Live Session",
            url_icon: "ri-live-line",
            disabled: false,
            href: "/creators/live",
        },
        {
            name: "Games",
            text: "Games",
            url_icon: "ri-puzzle-line",
            disabled: false,
            href: "/creators/games",
        },
        {
            name: "Quizzes",
            text: "Quizzes",
            url_icon: "ri-questionnaire-line",
            disabled: false,
            href: "/creators/quizzes",
        },
        {
            name: "Badges",
            text: "Badges",
            url_icon: "ri-award-line",
            disabled: false,
            href: "/creators/badges",
        },
        {
            name: "Balance",
            text: "Balance",
            url_icon: "ri-wallet-3-line",
            disabled: false,
            href: "/creators/balance",
        },
        {
            name: "Settings",
            text: "Settings",
            url_icon: "ri-settings-3-line",
            disabled: false,
            href: "/creators/settings",
        },
    ];
    const pathname = usePathname();



    return (
        <>
            <div className=' pl-2 pr-4 h-full flex flex-col bg-[#151B0A] ml-10 items-start '>

                <div className='flex justify-center gap-3 font-heading text-md font-semibold items-center mt-5 mb-3 ml-5'>
                    <Image src="/assets/Nav/logo.png" alt="logo" width={20} height={15} />
                    <p className='text-white'>TradeVed</p>
                </div>

                <div className=' mt-5 flex flex-col gap-2 w-full '>

                    {menuItems.map((element) => (
                        <div key={element.name}>
                            {!element.disabled && (
                                <div className={` py-1 flex flex-col justify-center items-start font-sans text-xs
                                    transition-all duration-200 
                                ${element.href === "1#" ?
                                        " text-neon-green bg-[#2A3615] w-55  m-auto rounded-md border-1  " : "text-gray-400"}
                                `}>
                                    <Link href={element.href} className='items-center gap-2 flex ml-5  '>

                                        <i className={`${element.url_icon} text-2xl`}></i>
                                        <p>{element.text}</p>
                                    </Link>
                                </div>

                            )}
                        </div>
                    ))}

                </div>

                <div className='flex flex-col bg-[#2A3615] px-15 gap-2 ml-5 items-start pl-3 rounded-md mt-auto mb-10  pt-2 pb-3 '>
                    <div className='font-sans text-xs font-medium text-neon-green'>
                        <p>CURRENT RANK</p>

                    </div>
                    <div className='flex gap-2 justify-center items-center '>
                        <div>
                            <Image src="/assets/Sidebar/Top.png" alt="logo" width={35} height={20} />

                        </div>
                        <div>
                            <p className='text-xs font-medium font-sans text-white '>Name </p>
                            <p className='text-gray-400 font-sans text-xs'> Top 5% overall</p>
                        </div>

                    </div>

                </div>





            </div>

        </>
    )
}

export default Sidebar

