import React from 'react'
const commitmentData = {
    title: "Learn for Free with our",
    highlight: "Skin-in-the-Game",
    suffix: "Model",
    description:
        "We value commitment over cash. Pay an upfront commitment fee, complete all 50 days of the course, and we'll issue a 100% refund. Our goal isn't your money it's your mastery.",
    cta: "Enroll Now",
    stat: "0% Risk",
    statDescription: "100% Commitment",
};

const Game = () => {
    return (
        <div className='px-10 pt-20 font-heading pb-40'>
            <div className="overflow-hidden rounded-xl border border-[#18220D] bg-gradient-to-l from-[#120700] via-[#040900] to-[#050900]">
                <div className="flex items-center justify-between px-8 py-12">

                    <div className=" py-10 pl-5 ">
                        <p className="text-5xl font-bold leading-tight text-white">
                            {commitmentData.title}
                            <br />
                            <span className="text-neon-green">
                                {commitmentData.highlight}
                            </span>{" "}
                            {commitmentData.suffix}
                        </p>
                        <p className="mt-6 text-md leading-8 text-card-font max-w-2xl">
                            {commitmentData.description}
                        </p>

                        <div className="mt-8 flex items-center gap-6">
                            <button className="rounded-full bg-neon-green px-8 py-4 font-semibold text-black transition hover:scale-[1.02]">
                                {commitmentData.cta}
                            </button>

                            <div>
                                <p className="text-3xl font-bold text-white">
                                    {commitmentData.stat}
                                </p>

                                <p className="text-sm text-gray-400">
                                    {commitmentData.statDescription}
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="mr-30">
                        <div className="rotate-[4deg] rounded-3xl border-2 border-dashed border-neon-green bg-[#242824] px-14 py-16">
                            <div className="flex flex-col items-center">
                                <i className="ri-money-dollar-box-line text-6xl text-neon-green" />

                                <p className="mt-6 text-lg font-semibold text-white">
                                    FULL REFUND
                                </p>

                                <p className="text-xs uppercase tracking-widest text-card-font font-sans">
                                    AFTER 50 DAYS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Game
