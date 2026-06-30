'use client'
import Link from 'next/link';
import { useState } from 'react';
import React from 'react'
const categories = [
    "Trading",
    "Investing",
    "Options",
    "Futures",
    "Crypto",
    "Technical Analysis",
    "Algo Trading",
    "Forex",
];

const first = () => {
    const [selectedCategories, setSelectedCategories] = useState([
        "Trading",
        "Options",
        "Technical Analysis",
    ]);

    const toggleCategory = (category: string) => {
        setSelectedCategories((prev) => {
            if (prev.includes(category)) {
                return prev.filter((item) => item !== category);
            }

            if (prev.length >= 3) {
                return prev;
            }

            return [...prev, category];
        });
    };

    return (
        <div className='px-10 py-5 flex gap-5 h-full font-heading'>
            <div className='w-[30%] '>
                <div className="w-full">

                    <div className="rounded-3xl border border-neon-green/20 bg-[#030600] p-6">
                        <h2 className="text-2xl font-semibold text-white">
                            Profile photo
                        </h2>

                        <div className="mt-10 flex flex-col items-center">

                            <div className="relative">
                                <div className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-white/10 bg-[#3B3F3A]">
                                    <span className="text-4xl font-bold text-white">
                                        AM
                                    </span>
                                </div>

                                <button className="absolute bottom-1 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-neon-green text-black">
                                    <i className="ri-add-line"></i>
                                </button>
                            </div>

                            <p className="mt-6 text-center text-sm text-[#A1A58E] font-sans">
                                PNG or JPG. Max 4MB. Square recommended.
                            </p>

                            <button className="mt-8 w-full rounded-full border border-neon-green bg-[#2D302C] py-2 text-md font-semibold text-neon-green">
                                Upload Image
                            </button>
                        </div>
                    </div>


                    <div className="flex items-start gap-3 rounded-2xl border border-[#A6FF00]/30 bg-[#030600] mt-10 p-4 bg-neon-green/10 ">
                        <i className="ri-lightbulb-line text-neon-green"></i>
                        <p className="text-[#A6FF00]">
                            Use a clear headshot — face visible and friendly.
                        </p>
                    </div>
                </div>

            </div>
            <div className='w-[70%]'>

                <div className=" rounded-2xl border border-lime-900/50 bg-[#050800] p-6 font-sans">
                    <h2 className="mb-6 text-3xl font-semibold text-white">
                        Basic info
                    </h2>

                    <div className="grid grid-cols-2 gap-5 font-sans">


                        <div>
                            <label className="mb-2 block text-xs uppercase tracking-wider text-[#A3A3A3]">
                                Creator Name
                            </label>
                            <input
                                type="text"
                                placeholder="Aarav Mehta"
                                className="w-full rounded-lg bg-[#2A2D2A] px-4 py-3 text-white outline-none"
                            />
                        </div>


                        <div>
                            <label className="mb-2 block text-xs uppercase tracking-wider text-[#A3A3A3]">
                                Expertise
                            </label>
                            <input
                                type="text"
                                placeholder="Options & Derivatives"
                                className="w-full rounded-lg bg-[#2A2D2A] px-4 py-3 text-white outline-none"
                            />
                        </div>


                        <div>
                            <label className="mb-2 block text-xs uppercase tracking-wider text-[#A3A3A3]">
                                Years Of Experience
                            </label>

                            <div className="relative">
                                <input
                                    type="number"
                                    placeholder="9"
                                    className="w-full rounded-lg bg-[#2A2D2A] px-4 py-3 pr-16 text-white outline-none"
                                />

                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#A3A3A3]">
                                    years
                                </span>
                            </div>
                        </div>


                        <div>
                            <label className="mb-2 block text-xs uppercase tracking-wider text-[#A3A3A3]">
                                Tagline
                            </label>
                            <input
                                type="text"
                                placeholder="Decoding Indian options markets"
                                className="w-full rounded-lg bg-[#2A2D2A] px-4 py-3 text-white outline-none"
                            />
                        </div>


                        <div className="col-span-2">
                            <div className="mb-2 flex items-center justify-between">
                                <label className="block text-xs uppercase tracking-wider text-[#A3A3A3]">
                                    Bio
                                </label>

                                <span className="text-xs text-[#6B7280]">
                                    0 / 500
                                </span>
                            </div>

                            <textarea
                                rows={5}
                                placeholder="I am a full-time options trader and educator..."
                                className="w-full resize-none rounded-lg bg-[#2A2D2A] px-4 py-3 text-white outline-none"
                            />
                        </div>

                    </div>
                </div>

                <div className="rounded-2xl border border-lime-900/50 bg-[#050800] p-5 mt-10">
                    <div className="mb-5 flex items-center justify-between">
                        <h2 className="text-3xl font-semibold text-white">
                            Teaching categories
                        </h2>

                        <p className="text-sm text-zinc-400">
                            Select up to 3
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => {
                            const active = selectedCategories.includes(category);

                            return (
                                <button
                                    key={category}
                                    onClick={() => toggleCategory(category)}
                                    className={`
                        flex items-center gap-2
                        rounded-full px-4 py-2
                        text-sm font-medium
                        transition-all duration-300
                        ${active
                                            ? "border border-lime-400 bg-lime-400/10 text-lime-400"
                                            : "border border-transparent bg-[#2A2D2A] text-zinc-300"
                                        }
                    `}
                                >
                                    {category}

                                    {active && (
                                        <i className="ri-check-line text-sm"></i>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>


                <div className="w-full rounded-3xl border border-[#A6FF00]/20 bg-[#040700] p-8 mt-10 font-sans">
                    <h2 className="mb-8 text-[36px] font-semibold text-white">
                        Social links
                    </h2>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                        {/* YouTube */}
                        <div>
                            <div className="mb-2 flex items-center gap-2 text-xs uppercase text-[#C8D0B8]">
                                <i className="ri-youtube-line text-sm"></i>
                                <span>Youtube</span>
                            </div>

                            <div className="flex h-12 overflow-hidden rounded-xl border border-white/10 bg-[#2B2D2B]">
                                <div className="flex items-center border-r border-white/10 px-4 text-[#7E8378]">
                                    youtube.com/
                                </div>

                                <input
                                    type="text"
                                    placeholder="channelname"
                                    className="w-full bg-transparent px-4 text-white outline-none placeholder:text-[#666A63]"
                                />
                            </div>
                        </div>

                        {/* Instagram */}
                        <div>
                            <div className="mb-2 flex items-center gap-2 text-xs uppercase text-[#C8D0B8]">
                                <i className="ri-instagram-line text-sm"></i>
                                <span>Instagram</span>
                            </div>

                            <div className="flex h-12 overflow-hidden rounded-xl border border-white/10 bg-[#2B2D2B]">
                                <div className="flex items-center border-r border-white/10 px-4 text-[#7E8378]">
                                    @
                                </div>

                                <input
                                    type="text"
                                    placeholder="username"
                                    className="w-full bg-transparent px-4 text-white outline-none placeholder:text-[#666A63]"
                                />
                            </div>
                        </div>

                        {/* Twitter/X */}
                        <div>
                            <div className="mb-2 flex items-center gap-2 text-xs uppercase text-[#C8D0B8]">
                                <i className="ri-twitter-x-line text-sm"></i>
                                <span>Twitter / X</span>
                            </div>

                            <div className="flex h-12 overflow-hidden rounded-xl border border-white/10 bg-[#2B2D2B]">
                                <div className="flex items-center border-r border-white/10 px-4 text-[#7E8378]">
                                    @
                                </div>

                                <input
                                    type="text"
                                    placeholder="handle"
                                    className="w-full bg-transparent px-4 text-white outline-none placeholder:text-[#666A63]"
                                />
                            </div>
                        </div>

                    
                        <div>
                            <div className="mb-2 flex items-center gap-2 text-xs uppercase text-[#C8D0B8]">
                                <i className="ri-global-line text-sm"></i>
                                <span>Website</span>
                            </div>

                            <div className="flex h-12 overflow-hidden rounded-xl border border-white/10 bg-[#2B2D2B]">
                                <div className="flex items-center border-r border-white/10 px-4 text-[#7E8378]">
                                    https://
                                </div>

                                <input
                                    type="text"
                                    placeholder="yourwebsite.com"
                                    className="w-full bg-transparent px-4 text-white outline-none placeholder:text-[#666A63]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-zinc-800 pt-6 mt-10">
                    <div className="flex items-center justify-end gap-10">
                        <button
                            type="button"
                            className="text-md font-medium text-zinc-400 transition hover:text-white"
                        >
                            Skip for now
                        </button>

                        <Link href={"/creators/proof"}
                            type="submit"
                            className="flex items-center gap-2 rounded-full bg-neon-green px-10 py-1 text-sm font-semibold text-black transition hover:scale-[1.02]"
                        >
                            Save Profile
                            <i className="ri-arrow-right-line text-md"></i>
                        </Link>

                    </div>
                </div>



            </div>

        </div>
    )
}

export default first
