'use client'
import { useState } from 'react';
import React from 'react'
const categories = [
  "Trading",
  "Crypto",
  "Investing",
  "Options",
  "Futures",
  "Technical Analysis",
  "Forex",
  "Algo Trading",
];

const levels = [
  "Beginner",
  "Intermediate",
  "Advanced",
];
const BasicInfo = () => {
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const [selectedCategories, setSelectedCategories] = useState([
    "Options",
    "Technical Analysis",
  ]);

  const [difficulty, setDifficulty] = useState("Advanced");

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      }

      if (prev.length >= 3) return prev;

      return [...prev, category];
    });
  };
  return (
    <div>
      <div className=" mt-10 font-heading px-20 pt-5 ">



    
        <div className="rounded-3xl border border-neon-green/10 bg-card-page/40 p-5">

          <h2 className="mb-4 text-xl font-semibold text-white">
            Course Thumbnail
          </h2>

          <label
            className="
                flex h-64 cursor-pointer flex-col items-center justify-center
                rounded-2xl border border-dashed border-zinc-700
                bg-black/10 transition hover:border-neon-green/40
            "
          >
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) =>
                setThumbnail(e.target.files?.[0] || null)
              }
            />

            {thumbnail ? (
              <>
                <i className="ri-image-line text-5xl text-neon-green"></i>

                <p className="mt-4 text-white">
                  {thumbnail.name}
                </p>
              </>
            ) : (
              <>
                <i className="ri-image-add-line text-6xl text-card-font"></i>

                <p className="mt-4 text-lg font-medium text-white">
                  Upload Course Thumbnail
                </p>

                <p className="mt-2 text-card-font">
                  Recommended size: 1280 × 720
                </p>
              </>
            )}
          </label>
        </div>


        <div className="grid grid-cols-2 gap-5 pt-10 ">

          <div className="rounded-3xl border border-neon-green/10 bg-card-page/40 p-5">

            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">
                Course Title *
              </h2>

              <button
                className="
                        rounded-full bg-neon-green/10
                        px-4 py-2 text-sm font-semibold text-neon-green
                    "
              >
                <i className="ri-sparkling-line mr-2"></i>
                AI Generate
              </button>
            </div>

            <input
              placeholder="Master Options Trading in 30 Days"
              className="
                    w-full rounded-xl border border-zinc-800
                    bg-black/20 p-4 text-white outline-none
                "
            />
          </div>

          <div className="rounded-3xl border border-neon-green/10 bg-card-page/40 p-5">

            <h2 className="mb-4 text-xl font-semibold text-white">
              Subtitle
            </h2>

            <input
              placeholder="A catchy one-liner about your course"
              className="
                    w-full rounded-xl border border-zinc-800
                    bg-black/20 p-4 text-white outline-none
                "
            />
          </div>

        </div>


        <div className="rounded-3xl border border-neon-green/10 bg-card-page/40 mt-10 p-5">

          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">
              Course Description *
            </h2>

            <button
              className="
                    rounded-full bg-neon-green/10
                    px-4 py-2 text-sm font-semibold text-neon-green
                "
            >
              <i className="ri-sparkling-line mr-2"></i>
              AI Generate
            </button>
          </div>

          <textarea
            rows={6}
            placeholder="Describe what students will learn and why they should take this course..."
            className="
                w-full resize-none rounded-xl border border-zinc-800
                bg-black/20 p-4 text-white outline-none
            "
          />
        </div>


        <div className="flex gap-5 mt-10">


          <div className="w-[70%] rounded-3xl border border-neon-green/10 bg-card-page/40 p-5">

            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">
                Course Categories
              </h2>

              <p className="text-xs text-card-font">
                Select up to 3
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const active =
                  selectedCategories.includes(category);

                return (
                  <button
                    key={category}
                    onClick={() =>
                      toggleCategory(category)
                    }
                    className={`
                                flex items-center gap-2 rounded-full
                                px-4 py-2 text-sm transition
                                ${active
                        ? "border border-neon-green bg-neon-green/10 text-neon-green"
                        : "bg-zinc-800 text-card-font"
                      }
                            `}
                  >
                    {category}

                    {active && (
                      <i className="ri-check-line"></i>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Difficulty */}
          <div className="w-[30%] rounded-3xl border border-neon-green/10 bg-card-page/40 p-5">

            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">
                Difficulty Level *
              </h2>

              <p className="text-xs text-card-font">
                Select 1
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() =>
                    setDifficulty(level)
                  }
                  className={`
                            rounded-full px-4 py-2 text-sm transition
                            ${difficulty === level
                      ? "border border-neon-green bg-neon-green/10 text-neon-green"
                      : "bg-zinc-800 text-card-font"
                    }
                        `}
                >
                  {level}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default BasicInfo
