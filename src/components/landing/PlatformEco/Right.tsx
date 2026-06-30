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
        <div className='flex flex-col text-white  bg-[#080C00] pt-20 rounded-2xl gap-2 lg:mx-20  mt-20 pb-10 px-4 sm:px-8 lg:px-8  lg:pt-20'>
            <div className='font-heading font-bold text-3xl'>
                <p>Platform Ecosystem</p>
            </div>
            <div className='flex gap-10 mt-5 w-full ' >
                <div className='flex-1 ' >
                    <Left />

                </div>
                <div className='lg:flex-1 lg:flex flex-col gap-5 hidden  '>
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
