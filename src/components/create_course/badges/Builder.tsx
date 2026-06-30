'use client'
import React from 'react'
import { useState } from 'react';
const icons = [
    "ri-rocket-line",
    "ri-line-chart-line",
    "ri-shield-line",
    "ri-award-line",
    "ri-lightbulb-line"
];

const colors = [
    "#A3FF00",
    "#22D3EE",
    "#EC4899",
    "#FACC15"
];

const Builder = () => {
    const [badgeName, setBadgeName] = useState("");
    const [selectedIcon, setSelectedIcon] = useState("ri-rocket-line");
    const [selectedColor, setSelectedColor] = useState("#A3FF00");
    return (
        <div>
            <div className=" ml-10 rounded-2xl border border-white/10 bg-[#11150E] overflow-hidden font-heading">

                <div className="flex items-center gap-3 border-b border-white/10 px-6 py-5">
                    <i className="ri-medal-line text-2xl text-neon-green"></i>
                    <h2 className="text-3xl font-semibold text-white">Badge Builder</h2>
                </div>

                <div className="p-6 space-y-5">

                    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-gradient-to-br from-neon-green/15 to-white/5 p-6 text-center">
                        <div
                            className="flex h-20 w-32 items-center justify-center rounded-full border-2"
                            style={{ borderColor: selectedColor }}
                        >
                            <i
                                className={`${selectedIcon} text-4xl`}
                                style={{ color: selectedColor }}
                            ></i>
                        </div>

                        <h3 className="mt-4 text-lg font-medium text-white">
                            {badgeName || "Achievement Name"}
                        </h3>

                        <p className="mt-1 text-sm text-white/50">
                            Design your new badge preview here
                        </p>
                    </div>

      
                    <div>
                        <label className="mb-2 block text-xs uppercase tracking-[3px] text-white/60">
                            Badge Name
                        </label>

                        <input
                            value={badgeName}
                            onChange={(e) => setBadgeName(e.target.value)}
                            placeholder="e.g. Bull Market Navigator"
                            className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none transition-all focus:border-neon-green"
                        />
                    </div>

              
                    <div>
                        <label className="mb-3 block text-xs uppercase tracking-[3px] text-white/60">
                            Icon Selector
                        </label>

                        <div className="grid grid-cols-5 gap-3">
                            {icons.map((icon) => (
                                <button
                                    key={icon}
                                    onClick={() => setSelectedIcon(icon)}
                                    className={`flex h-12 items-center justify-center rounded-xl border transition-all ${selectedIcon === icon
                                            ? "border-neon-green bg-neon-green/10 text-neon-green"
                                            : "border-white/10 text-white/70 hover:border-white/20"
                                        }`}
                                >
                                    <i className={`${icon} text-xl`}></i>
                                </button>
                            ))}
                        </div>
                    </div>


                    <div>
                        <label className="mb-3 block text-xs uppercase tracking-[3px] text-white/60">
                            Neon Palette
                        </label>

                        <div className="flex gap-3">
                            {colors.map((color) => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`h-10 w-10 rounded-full border-2 transition-all ${selectedColor === color
                                            ? "scale-110 border-white"
                                            : "border-transparent"
                                        }`}
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    </div>

         
                    <button className="w-full rounded-2xl bg-white/10 py-3 font-medium text-white transition-all hover:bg-neon-green hover:text-black">
                        Save Draft
                    </button>

                </div>
            </div>

        </div>
    )
}

export default Builder
