import React from 'react'
import Link from 'next/link';
const steps = [
    {
        title: "Application Received",
        description:
            "We've received your application and credentials.",
        active: true,
        icon: "ri-checkbox-circle-fill",
    },
    {
        title: "Under Review",
        description:
            "Our team is verifying your trading credentials and experience.",
        active: true,
        icon: "ri-time-line",
    },
    {
        title: "Get Approved",
        description:
            "You'll receive an email once approved and can start creating courses.",
        active: false,
        icon: "ri-magic-line",
    },
];

const stats = [
    { value: "24hrs", label: "Avg. approval time" },
    { value: "85%", label: "Revenue share" },
    { value: "180k+", label: "Potential learners" },
];

const third = () => {
    return (
        <div className=" bg-black text-white flex items-center justify-center px-6 py-10 font-heading">
            <div className="w-full max-w-4xl">

                <div className="flex justify-center">
                    <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-[#1C3000]">
                        <i className="ri-time-line text-5xl text-[#A6FF00]" />
                        <i className="ri-sparkling-line absolute -top-2 -right-2 text-[#A6FF00] text-xl" />
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center mt-8">
                    <h1 className="text-5xl font-bold">
                        Application Submitted!
                    </h1>

                    <p className="mt-4 text-gray-400 max-w-md mx-auto">
                        Your creator application is under review. Most
                        creators are approved within 24 hours.
                    </p>
                </div>

                {/* Timeline Card */}
                <div className="mt-12 rounded-3xl border border-[#232323] bg-[#0E130B] p-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#1C3000] flex items-center justify-center">
                            <i className="ri-file-list-3-line text-[#A6FF00] text-xl" />
                        </div>

                        <div>
                            <h3 className="font-semibold text-xl">
                                What's Next?
                            </h3>
                            <p className="text-sm text-gray-500">
                                Here's what happens while you wait
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        {steps.map((step, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center border ${step.active
                                            ? "border-[#A6FF00]"
                                            : "border-[#4A4A4A]"
                                            }`}
                                    >
                                        <i
                                            className={`${step.icon} ${step.active
                                                ? "text-[#A6FF00]"
                                                : "text-gray-500"
                                                }`}
                                        />
                                    </div>

                                    {index !== steps.length - 1 && (
                                        <div className="w-px h-16 bg-[#3A3A3A]" />
                                    )}
                                </div>

                                <div className="pb-10">
                                    <h4 className="font-semibold">
                                        {step.title}
                                    </h4>

                                    <p className="text-sm text-gray-500 mt-1">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="grid grid-cols-3 gap-4 mt-6 font-sans">
                    {stats.map((item) => (
                        <div
                            key={item.label}
                            className="rounded-2xl border border-[#232323] bg-[#0E130B] p-5"
                        >
                            <h3 className="text-[#A6FF00] text-3xl font-bold">
                                {item.value}
                            </h3>

                            <p className="text-sm text-gray-500 mt-2">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>



                {/* Bottom Banner */}
                <div className="mt-6 rounded-2xl relative border border-[#A6FF00]/30 bg-[#122000] py-6 text-center">
                    <p className='absolute z-1 text-red-given font-bold -top-6'>Clickable</p>
                    <Link href={'/creators/landing'} >
                        <h3 className="text-[#A6FF00] font-semibold">
                            We'll notify you via email
                        </h3>

                        <p className="text-gray-400 text-sm mt-2">
                            Check your inbox for updates on your application
                            status.
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default third
