import React from 'react'

const instructorData = {
    name: "Vipin Kumar",
    designation: "Former Wall Street Quantitative Trader",
    description:
        "With over 15 years of experience in high-frequency trading and portfolio management, Vipin has mentored thousands of aspiring traders and professionals. His expertise lies in market microstructure, institutional order flow, risk management, and building systematic trading frameworks that eliminate emotional decision-making.",
    image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80",
    socials: [
        {
            icon: "ri-linkedin-box-fill",
            link: "#",
        },
        {
            icon: "ri-at-line",
            link: "#",
        },
    ],
};

const instructore = () => {
    return (
        <div className='mt-20 mx-15 font-heading'>
            <section className="w-full rounded-3xl border border-[#1b2a0f] bg-[#030800] p-6 md:p-8">
                <p className="mb-8 text-3xl font-semibold text-white">
                    Meet Your Instructor
                </p>

                <div className="flex flex-col gap-6 md:flex-row">
                    <div className="shrink-0">
                        <div className="overflow-hidden rounded-2xl border border-[#A6FF00]/30 bg-[#0b1204]">
                            <img
                                src={instructorData.image}
                                alt={instructorData.name}
                                className="h-32 w-32 object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-white">
                            {instructorData.name}
                        </h3>

                        <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-neon-green">
                            {instructorData.designation}
                        </p>

                        <p className="mt-4 max-w-6xl  text-card-font">
                            {instructorData.description}
                        </p>

                        <div className="mt-6 flex items-center gap-4">
                            {instructorData.socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    className="text-lg text-[#00A0DC] transition-all hover:scale-110"
                                >
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default instructore
