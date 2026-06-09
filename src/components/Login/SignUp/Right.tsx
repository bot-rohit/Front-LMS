import React from 'react'

const features = [
  {
    title: "Live Market Signals",
    description: "Real-time entry and exit points for high-probability setups."
  },
  {
    title: "50+ Video Courses",
    description: "Comprehensive curriculum from basics to advanced strategies."
  },
  {
    title: "Priority Discord Access",
    description: "Connect with 10k+ professional traders and mentors."
  },
  {
    title: "Weekly Performance Reports",
    description: "Analyze your trades with our AI-driven insights tool."
  }
]

const Right = () => {
  return (
    <div>
      <div className="w-full flex flex-col justify-between font-heading">
        <div>
          <div className="w-fit  px-5 py-2 rounded-full border border-[#2D4A00] flex items-center gap-3">

            <div className="flex items-center gap-1 text-neon-green text-sm">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-line"></i>
              <i className="ri-star-line"></i>
            </div>

            <p className="text-zinc-300 text-sm">
              3.9/5 Trust Score
            </p>

          </div>
          <p className="mt-7 text-white text-3xl font-semibold">
            Why Join Trader Stock?
          </p>

          <div className="mt-8 flex flex-col gap-5">



            {features.map((element) => (
              <div key={element.title}>

                <div className="flex gap-5">
                  <div className="rounded-lg flex items-center justify-center  ">
                    <i className="ri-check-line text-neon-green text-sm bg-neon-green/20  py-3 px-3 rounded-md"></i>
                  </div>

                  <div>
                    <h2 className="text-white text-lg">{element.title}</h2>

                    <p className="mt-2 text-zinc-500 text-md leading-relaxed">
                      {element.description}
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>

        <div className=" mt-10 rounded-2xl border-l-3 border-1 border-l-red-given p-8 scale-80 origin-top-left">
          <p className="text-card-font text-md italic leading-relaxed">
            “The signals are incredibly accurate. I went from losing $500/month to consistently hitting my weekly targets within the first 30 days.”
          </p>
          <div className="mt-4 flex items-center gap-4">
            <div className="p-2 rounded-full bg-[#3A0025] flex items-center justify-center text-[#FF0080] text-lg">
              MS
            </div>

            <div>
              <h3 className="text-white text-md">Mayank Sharma</h3>
              <p className="text-zinc-500 text-xs">Premium Member since 2026</p>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Right
