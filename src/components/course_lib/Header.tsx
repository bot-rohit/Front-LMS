'use client'
import React from 'react'

import { useState } from "react";

const categories = [
    "All Categories",
    "Beginner",
    "Technical",
    "Options",
    "Risk Management",
];

const header = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([
        "All Categories",
    ]);

    const toggleCategory = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)
                : [...prev, category]
        );
    };
    return (
        <div className='felx flex-col mx-10 py-10'>


            <div className="flex flex-wrap gap-4 font-heading">
                {categories.map((category) => {
                    const isSelected = selectedCategories.includes(category);

                    return (
                        <button
                            key={category}
                            onClick={() => toggleCategory(category)}
                            className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-200
              ${isSelected
                                    ? "bg-[#A6FF00] text-black"
                                    : "bg-[#243314] text-[#D1D5DB] hover:bg-[#2D4017]"
                                }
            `}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
        </div>
    )
}

export default header
