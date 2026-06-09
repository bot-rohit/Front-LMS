import React from 'react'



const Review =[
        {
            Stars:3,
            Data:"The Structured Courses completely changed how I look at market structure. I finally stopped guessing and started trading with a plan.",
            Profile:"person.png",
            Name:"Julian V.",
            Role:"Options Trader",

        },
        {
            Stars:3,
            Data:"Mental Maths game is a hidden gem. It made me so much faster at sizing my risk under pressure. Best platform out there.",
            Profile:"person.png",
            Name:"Aria S.",
            Role:"Day Trader",

        },
        {
            Stars:3,
            Data:"I've taken many trading courses, but the community and leaderboard at TradeVed keep me accountable like nothing else.",
            Profile:"person.png",
            Name:"Liam M.",
            Role:"Technical Analyst",

        },
   
]

const Community = () => {
  return (
    <div>
        {Review.map((element )=> (
            <div key = {element.Name}>
                {/* <CommunityCard data = {element}/> */}


            </div>

        ))}
      
    </div>
  )
}

export default Community
