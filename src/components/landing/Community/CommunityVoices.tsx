import React from 'react'
import Card from './Card'


const Review = [
    {
        Stars: 3,
        Data: "The Structured Courses completely changed how I look at market structure. I finally stopped guessing and started trading with a plan.",
        Profile: "person.png",
        Name: "Julian V.",
        Role: "Options Trader",

    },
    {
        Stars: 3,
        Data: "Mental Maths game is a hidden gem. It made me so much faster at sizing my risk under pressure. Best platform out there.",
        Profile: "person.png",
        Name: "Aria S.",
        Role: "Day Trader",

    },
    {
        Stars: 3,
        Data: "I've taken many trading courses, but the community and leaderboard at TradeVed keep me accountable like nothing else.",
        Profile: "person.png",
        Name: "Liam M.",
        Role: "Technical Analyst",

    },

]

const CommunityVoices = () => {
    return (
        <>
            <div className='flex flex-col items-center font-heading gap-10 lg:py-10 mt-50  lg:px-5 lg:mx-20 px-4 bg-[#080C00] pt-20 lg:mt-20 pb-20 '>
                <div className='text-card-head bold text-4xl font-bold'>Community Voices</div>
                <div className='flex lg:flex-row flex-col gap-5 w-full'>
                    {Review.map((element) => (
                        <div key={element.Name} className='flex-1'>
                            <Card data={element} />



                        </div>

                    ))}
                </div>
            </div>







        </>
    )
}

export default CommunityVoices
