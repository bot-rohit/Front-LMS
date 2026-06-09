import React from 'react'
import Rightcard from './Righcardt'
import Left from './Left'
import { ReactCompilerRuntime } from 'next/dist/server/route-modules/app-page/vendored/rsc/entrypoints'

const features = [
    {
        title: "Assignment",
        description: "Tick-by-tick real market analysis.",
        icon: "1.png"
    },

       {
          title: "Interactive Quizzes",
          description: "Validate module mastery instantly.",
          icon: "2.png"
       },

       {
          title: "Live Q&A",
          description: "Direct mentorship from active traders.",
          icon: "3.png"
       }
]


const right = () => {
    return (
        <div className='flex flex-col text-white  bg-[#080C00] px-8 pt-20 rounded-2xl gap-2 mx-20  mt-20 pb-10'>
            <div className='font-heading font-bold text-3xl'>
                <p>Platform Ecosystem</p>
            </div>
            <div className='flex gap-10 mt-5 w-full ' >
                <div className='flex-1 ' >
                    <Left />

                </div>
                <div className='flex-1 flex flex-col gap-5  '>
                    {features.map((element) => (

                        <div key={element.description}>
                            <Rightcard data={element} />



                        </div>

                    ))}

                </div>


            </div>




        </div>
    )
}

export default right
