import React, { useState } from "react";

const initialModules = [
    {
        id: 1,
        day: "Day 1",
        title: "Introduction to Options Trading",
        description:
            "Understand the fundamentals of options and call/put basics",
        lessons: 100,
    },
    {
        id: 2,
        day: "Day 2",
        title: "Introduction to Options Trading",
        description:
            "Understand the fundamentals of options and call/put basics",
        lessons: 100,
    },
];

const modules = () => {
    const [modules, setModules] = useState(initialModules);

    const addDay = () => {
        const nextDay = modules.length + 1;

        setModules([
            ...modules,
            {
                id: Date.now(),
                day: `Day ${nextDay}`,
                title: "New Trading Module",
                description: "Add your module description here",
                lessons: 0,
            },
        ]);
    };

    const removeDay = (id:number) => {
        setModules(modules.filter((item) => item.id !== id));
    };

    return (
        <div className="mx-20 mt-10 font-heading w-full">

            <div className="flex items-center justify-between mb-5">
                <div>
                    <h2 className="text-2xl font-semibold text-white">
                        Course Modules
                    </h2>

                 
                </div>

                <span className="text-card-font">
                    {modules.length} Days
                </span>
            </div>

            <div className="space-y-5">

                {modules.map((module) => (
                    <div
                        key={module.id}
                        className="
                    rounded-3xl
                    border border-neon-green
                    bg-card-page/40
                    p-5
                    transition
                    hover:border-neon-green
                "
                    >

                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-3">

                                <i className="ri-draggable text-card-font"></i>

                                <p className="font-semibold text-neon-green">
                                    {module.day}
                                </p>

                            </div>

                            <button
                                onClick={() => removeDay(module.id)}
                                className="text-card-font hover:text-red-400 transition"
                            >
                                <i className="ri-close-line text-lg"></i>
                            </button>

                        </div>

                        <div className="mt-5">

                            <h3 className="text-lg font-semibold text-white">
                                {module.title}
                            </h3>

                            <p className="mt-2 text-card-font text-sm">
                                {module.description}
                            </p>

                        </div>

                        <div className="flex justify-end mt-5">

                            <div className="flex items-center gap-2 text-neon-green">

                                <i className="ri-award-line"></i>

                                <span className="font-medium">
                                    {module.lessons}
                                </span>

                            </div>

                        </div>

                    </div>
                ))}

                <button
                    onClick={addDay}
                    className="
                w-full
                rounded-3xl
                border border-dashed border-zinc-800
                py-5
                flex items-center justify-center gap-3
                text-card-font
                transition
                hover:border-neon-green
                hover:text-neon-green
            "
                >
                    <i className="ri-add-line text-lg"></i>

                    Add Day
                </button>

            </div>

        </div>
    )
}

export default modules
