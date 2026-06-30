import React from 'react'
const referralBenefits = [
    {
        id: 1,
        icon: "ri-checkbox-circle-line",
        title: "Free Access to Premium Workshops",
    },
];

const invite = () => {
    return (
        <div className='px-10 py-5 w-full font-heading'>

            <div className="px-10 py-10  border w-full bg-[#080C00] rounded-4xl">
                <div className="mb-5 inline-flex rounded-full  py-2">
                    <span className="text-xs font-bold uppercase  text-neon-green bg-neon-green/20 px-4 py-1.5 rounded-2xl">
                        Referral Program
                    </span>
                </div>

                <p className="text-4xl font-bold leading-tight text-white md:text-5xl">
                    Invite Friends &
                    <span className="text-neon-green">
                        {" "}
                        Earn Together
                    </span>
                </p>

                <p className="mt-6 max-w-2xl text-lg  text-gray-300">
                    Build your network of traders. Earn{" "}
                    <span className="font-semibold text-neon-green">
                        500 XP
                    </span>{" "}
                    and{" "}
                    <span className="font-semibold text-[#FF0088]">
                        $10 credit
                    </span>{" "}
                    for every successful signup who completes their
                    first module.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                    {referralBenefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="flex items-center gap-2 rounded-2xl border border-[#223512] bg-[#121c08] px-4 py-2"
                        >
                            <i
                                className={`${benefit.icon} text-neon-green`}
                            ></i>

                            <span className="text-sm font-medium text-white">
                                {benefit.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default invite
