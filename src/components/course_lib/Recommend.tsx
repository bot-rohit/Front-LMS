import React from 'react'

const featuredCourse = {
  image:
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&fit=crop",
  title: "Mastering Advanced Technical Analysis",
  description:
    "The definitive guide to understanding price action, liquidity zones, and risk psychology for the modern retail trader. Zero fluff, pure market logic.",
  level: "Beginner Level",
  lessons: 20,
};


const recomment = () => {
  return (
    <div className='p-10 mt-10'>

      <div className=" font-heading">
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold text-white">
            Recommended for You
          </p>
          <button className="text-sm font-medium text-[#A6FF00] hover:underline">
            View All
          </button>
        </div>


        <div className="overflow-hidden  border border-[#162108] bg-[#040700] mt-10 rounded-2xl">
          <div className="grid grid-cols-2">

            <div className="relative">
              <img
                src={featuredCourse.image}
                alt={featuredCourse.title}
                className="h-full w-full object-cover"
              />


              <div className="absolute left-6 top-6 flex gap-3">
                <span className="rounded-full bg-[#D7FF8D] px-4 py-1 text-md font-bold text-black">
                  FEATURED
                </span>

                <span className="rounded-full bg-[#FF0088] px-4 py-1 text-md font-bold text-white">
                  NEW
                </span>
              </div>
            </div>


            <div className="flex flex-col justify-center px-12 py-10">
              <div className="mb-5 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <i className="ri-bar-chart-grouped-line text-[#A6FF00]" />
                  <span className="text-xs uppercase tracking-wider text-gray-400">
                    {featuredCourse.level}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <i className="ri-time-line text-[#A6FF00]" />
                  <span className="text-xs uppercase tracking-wider text-gray-400">
                    {featuredCourse.lessons} Lessons
                  </span>
                </div>
              </div>

              <p className="max-w-lg text-4xl font-bold leading-tight text-white">
                {featuredCourse.title}
              </p>

              <p className="mt-3 text-md  text-card-font">
                {featuredCourse.description}
              </p>
              <div className="mt-10 flex flex-col gap-4">
                <button className="w-fit rounded-2xl bg-neon-green px-13 py-3 font-semibold text-black transition hover:scale-[1.02]">
                  Start Learning
                </button>

                <button className="w-fit rounded-2xl border border-[#2A2A2A] px-8 py-3 font-semibold text-white transition hover:bg-white/5">
                  View Course Details
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className="flex items-center mt-30 justify-between rounded-[28px] border border-[#202020] bg-gradient-to-r from-[#293C10] via-[#091000] to-[#050505] px-8 py-10">
          <div>
            <p className="text-3xl font-bold text-white">
              Ready to trade like a pro?
            </p>
            <p className="mt-3 text-card-font">
              Join our weekly live trading sessions and get real-time market
              insights.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="rounded-xl border border-neon-green px-8 py-3 font-medium text-neon-green">
              Join Community
            </button>

            <button className="rounded-xl bg-red-given px-8 py-3 font-medium text-white">
              Go Pro Today
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default recomment
