import React from 'react'
const packages = [
    {
        id: 1,
        name: "Starter",
        credits: "5,000",
        price: 49,
        bonus: null,
        popular: false,
        button: "Select Plan",
        features: [
            "Core Course Utilities",
            "Standard Support"
        ]
    },
    {
        id: 2,
        name: "Growth",
        credits: "25,000",
        price: 199,
        bonus: "+2,500 Bonus Credits",
        popular: true,
        button: "Get Growth",
        features: [
            "Advanced Analytics",
            "Priority Ecosystem Placement"
        ]
    },
    {
        id: 3,
        name: "Scale",
        credits: "100,000",
        price: 699,
        bonus: "+15,000 Bonus Credits",
        popular: false,
        button: "Go Big",
        features: [
            "VIP Account Manager",
            "Custom Reward Logic"
        ]
    }
];


const Package = () => {
    return (
        <div className='mx-10 mt-15'>
            <div className="font-heading">

                <div className="mb-6 flex items-center justify-between">

                    <h2 className="text-2xl text-white">
                        Select Package
                    </h2>

                    <span className="rounded-full bg-neon-green/10 px-4 py-2 text-xs font-medium text-neon-green">
                        Best Value Included
                    </span>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {packages.map((pkg) => (

                        <div
                            key={pkg.id}
                            className={`relative rounded-2xl border bg-[#11150E] p-6 transition-all hover:-translate-y-1 ${pkg.popular
                                    ? "border-neon-green shadow-[0_0_30px_rgba(163,255,0,0.08)]"
                                    : "border-white/10"
                                }`}
                        >

                            {pkg.popular && (
                                <span className="absolute -top-3 right-5 rounded-full bg-neon-green px-4 py-1 text-[10px] font-semibold uppercase tracking-[2px] text-black">
                                    Most Popular
                                </span>
                            )}

                            <p className={`text-sm uppercase tracking-[2px] ${pkg.popular ? "text-neon-green" : "text-white/60"
                                }`}>
                                {pkg.name}
                            </p>

                            <div className="mt-3 flex items-end gap-2">

                                <h3 className="text-5xl font-semibold text-white font-sans">
                                    {pkg.credits}
                                </h3>

                                <span className="mb-2 text-sm text-white/50">
                                    CRD
                                </span>

                            </div>

                            <div className="mt-6 flex items-end">

                                <span className="text-6xl font-bold text-white font-sans" >
                                    ${pkg.price}
                                </span>

                                <span className="mb-2 text-xl text-white/60">
                                    /one-time
                                </span>

                            </div>

                            {pkg.bonus && (

                                <div className="mt-6 rounded-2xl border border-neon-green/20 bg-neon-green/10 px-4 py-3">

                                    <span className="font-medium text-neon-green font-sans">
                                        {pkg.bonus}
                                    </span>

                                </div>

                            )}

                            <div className="mt-6 space-y-4">

                                {pkg.features.map((feature) => (

                                    <div key={feature} className="flex items-center gap-3">

                                        <i className="ri-checkbox-circle-line text-neon-green"></i>

                                        <span className="text-white/80">
                                            {feature}
                                        </span>

                                    </div>

                                ))}

                            </div>

                            <button
                                className={`mt-10 w-full rounded-2xl py-4 text-lg font-medium transition-all ${pkg.popular
                                        ? "bg-neon-green text-black hover:scale-[1.02]"
                                        : "border border-neon-green text-neon-green hover:bg-neon-green hover:text-black"
                                    }`}
                            >
                                {pkg.button}
                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    )
}

export default Package
