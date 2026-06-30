import React from 'react'

const Cards = () => {
    return (
        <div className=' pt-10 font-heading pl-15 pb-10 ' >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 font-heading">
                {widgets.map((widget) => (
                    <div
                        key={widget.id}
                        className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#11150E] p-6 transition-all hover:-translate-y-1 hover:border-neon-green/30 hover:shadow-lg"
                    >
                        <div className="absolute left-0 top-0 h-full w-1 bg-neon-green rounded-full"></div>

                        <div className="flex items-start justify-between">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-neon-green">
                                <i className={`${widget.icon} text-xl`}></i>
                            </div>

                            <span className="rounded-lg border border-neon-green/20 bg-neon-green/10 px-3 py-1 text-[10px] font-medium text-neon-green">
                                {widget.tag}
                            </span>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-xl text-white font-medium">
                                {widget.title}
                            </h3>

                            <p className="mt-3 text-sm leading-relaxed text-white/50 min-h-[60px]">
                                {widget.description}
                            </p>
                        </div>

                        <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-white/10 py-3 text-white transition-all hover:bg-neon-green hover:text-black">
                            <i className="ri-add-line"></i>
                            Add to Course
                        </button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Cards

const widgets = [
    {
        id: 1,
        title: "Calculator",
        description: "Dynamic position sizing and profit calculations.",
        tag: "UTILITY",
        icon: "ri-calculator-line"
    },
    {
        id: 2,
        title: "Option Payoff Visualizer",
        description: "Interactive P&L charts for complex option strategies.",
        tag: "ADVANCED",
        icon: "ri-line-chart-line"
    },
    {
        id: 3,
        title: "Flashcards",
        description: "Quick-fire recognition and memory reinforcement.",
        tag: "MEMORIZATION",
        icon: "ri-stack-line"
    },
    {
        id: 4,
        title: "Quiz Block",
        description: "Validate strategy understanding with assessments.",
        tag: "ASSESSMENT",
        icon: "ri-questionnaire-line"
    },
    {
        id: 5,
        title: "Risk - Reward Tool",
        description: "Visualize trade setups and reward scenarios.",
        tag: "ANALYSIS",
        icon: "ri-scales-3-line"
    },
    {
        id: 6,
        title: "Journal Block",
        description: "Record trade emotions, decisions and executions.",
        tag: "REFLECTION",
        icon: "ri-book-open-line"
    },
    {
        id: 7,
        title: "Strategy Builder",
        description: "Step-by-step framework for building trading systems.",
        tag: "SYSTEMS",
        icon: "ri-git-branch-line"
    },
    {
        id: 8,
        title: "Observation Tracker",
        description: "Log student insights and market observations.",
        tag: "PRACTICE",
        icon: "ri-eye-line"
    },
    {
        id: 9,
        title: "Poll",
        description: "Real-time cohort participation and feedback.",
        tag: "SOCIAL",
        icon: "ri-bar-chart-box-line"
    },
    {
        id: 10,
        title: "Reflection Block",
        description: "Prompt-based exercises for cognitive bias awareness.",
        tag: "PSYCHOLOGY",
        icon: "ri-mental-health-line"
    },
    {
        id: 11,
        title: "Downloadable Checklist",
        description: "Structured pre-trade and compliance checklists.",
        tag: "COMPLIANCE",
        icon: "ri-list-check-3"
    }
];
