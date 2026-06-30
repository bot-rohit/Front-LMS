import React from 'react'
import { useState } from 'react';
const experienceLevels = [
    "1–3 years",
    "3–7 years",
    "7+ years",
];

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

const progress3 = () => {
    const [selectedExperience, setSelectedExperience] =
        useState("3–7 years");

    const [selectedCategories, setSelectedCategories] = useState([
        "Trading",
        "Options",
        "Technical Analysis",
    ]);

    const toggleCategory = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)
                : [...prev, category]
        );
    };

    return (
        <div>
            <div className="w-auto font-heading rounded-3xl border border-lime-500/20 bg-[#090d08] p-8 text-card-font">
                <div>
                    <p className="text-3xl font-bold text-white">
                        Your expertise
                    </p>
                    <p className="mt-2 text-md ">
                        Helps us match you with the right learners.
                    </p>
                </div>

                <div className="mt-10">
                    <p className="mb-5 text-sm font-medium uppercase tracking-wider ">
                        Experience Level
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                        {experienceLevels.map((level) => {
                            const active = selectedExperience === level;

                            return (
                                <button
                                    key={level}
                                    onClick={() => setSelectedExperience(level)}
                                    className={`
                  py-4 rounded-xl border text-lg font-semibold
                  transition-all duration-300
                  ${active
                                            ? "border-lime-400 text-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.25)]"
                                            : "border-zinc-700 bg-zinc-900 text-zinc-300"
                                        }
                `}
                                >
                                    {level}
                                </button>
                            );
                        })}
                    </div>
                </div>


                <div className="mt-10">
                    <p className="mb-5 text-sm font-medium uppercase tracking-wider ">
                        Categories You Teach
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => {
                            const active =
                                selectedCategories.includes(category);

                            return (
                                <button
                                    key={category}
                                    onClick={() => toggleCategory(category)}
                                    className={`
                  rounded-full border px-5 py-2.5
                  text-md font-medium
                  transition-all duration-300
                  ${active
                                            ? "border-lime-400 bg-lime-400/10 text-lime-400"
                                            : "border-zinc-700 bg-zinc-900 text-zinc-300"
                                        }
                `}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default progress3
