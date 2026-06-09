'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from "next/navigation";


const SideBar = () => {
    const menuItems = [
        {
            name: "Dashboard",
            text: "Dashboard",
            url_icon: "ri-dashboard-line",
            disabled: false,
            href: "#",

        },
        {
            name: "Courses Library",
            text: "Courses Library",
            url_icon: "ri-booklet-line",
            disabled: false,
            href: "#",

        },
        {
            name: "Assignments",
            text: "Assignments",
            url_icon: "ri-file-text-line",
            disabled: false,
            href: "#",

        },
        {
            name: "Referrals",
            text: "Referrals",
            url_icon: "ri-group-line",
            disabled: false,
            href: "#",


        },
        {
            name: "Reminders",
            text: "Reminders",
            url_icon: "ri-notification-3-line ",
            disabled: false,
            href: "#",
        },
        {
            name: "Hall of Fame",
            text: "Hall of Fame",
            url_icon: "ri-medal-2-fill",
            disabled: false,
            href: "#",
        },

        {
            name: "Quizzes",
            text: "Quizzes",
            url_icon: "ri-questionnaire-line",
            disabled: false,
            href: "#",
        },
        {
            name: "Settings",
            text: "Settings",
            url_icon: "ri-settings-3-line",
            disabled: false,
            href: "1#",
        }
    ]
    const pathname = usePathname();



    return (




        <>
            <div className='w-65 h-screen flex flex-col bg-[#151B0A] ml-10 items-start '>

                <div className='flex justify-center gap-3 font-heading text-md font-semibold items-center mt-5 ml-5'>
                    <Image src="/assets/Nav/logo.png" alt="logo" width={20} height={15} />
                    <p className='text-white'>TraderStop</p>
                </div>
        
                <div className=' mt-5 flex flex-col gap-1 w-full '>

                    {menuItems.map((element) => (
                        <div key={element.name}>
                            {!element.disabled && (
                                <div className={` h-9 flex flex-col justify-center items-start font-sans text-xs
                                    transition-all duration-200 
                                ${element.href === "1#" ?
                                 " text-neon-green bg-[#2A3615] w-55  m-auto rounded-md border-1  " : "text-gray-400"}
                                `}>     
                                    <Link href="#" className='items-center gap-2 flex ml-5  '>

                                        <i  className={`${element.url_icon } text-lg`}></i>
                                        <p>{element.text}</p>
                                    </Link>
                                </div>

                            )}
                        </div>
                    ))}

                </div>
                
                <div className='flex flex-col bg-[#2A3615] px-0 gap-2 ml-5 items-start pl-3 rounded-md mt-auto mb-10 w-55 pt-2 pb-3 '>
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

export default SideBar

