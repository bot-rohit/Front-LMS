"use client";
import React from 'react'
import { useMemo, useState } from "react";
const courseData = {
  title: "Personal Finance",
  course: "Trader Stock Fundamentals",
  progress: 45,

  modules: [
    {
      id: 1,
      title: "Module 1 : Market Mechanics",
      lessons: [
        {
          id: 1,
          title: "Introduction to Trading",
          duration: "12:45",
          completed: true,
          locked: false,
        },
        {
          id: 2,
          title: "The Order Book & Liquidity",
          duration: "18:20",
          completed: false,
          locked: false,
          current: true,
        },
        {
          id: 3,
          title: "Psychology of the Market",
          duration: "18:20",
          completed: false,
          locked: true,
        },
      ],
    },
    {
      id: 2,
      title: "Module 2 : Technical Analysis",
      lessons: [
        {
          id: 4,
          title: "Support & Resistance Zones",
          duration: "22:10",
          locked: true,
        },
        {
          id: 5,
          title: "Candlestick Patterns Masterclass",
          duration: "31:40",
          locked: true,
        },
      ],
    },
  ],
};

const initialNotes = [
  {
    id: 1,
    timestamp: "12:45",
    text: "Limit order walls at major psychological levels ($100, $150) act as magnet or repellant. Watch the T&S for aggressive market buying into these walls.",
  },
  {
    id: 2,
    timestamp: "04:22",
    text: "Check correlation with S&P500 futures for extra confluence on stock picks.",
  },
];

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<"content" | "notes">("content");
  const [expandedModules, setExpandedModules] = useState<number[]>([]);
  const [selectedLesson, setSelectedLesson] = useState(2);

  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const currentLesson = useMemo(() => {
    return courseData.modules
      .flatMap((module) => module.lessons)
      .find((lesson) => lesson.id === selectedLesson);
  }, [selectedLesson]);

  const toggleModule = (moduleId: number) => {
    setExpandedModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const addNote = () => {
    if (!newNote.trim()) return;

    setNotes((prev) => [
      {
        id: Date.now(),
        timestamp: currentLesson?.duration || "00:00",
        text: newNote,
      },
      ...prev,
    ]);

    setNewNote("");
  };


  return (
    <>
      <div className=' font-heading w-auto h-full  ml-10 '>

        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="flex h-full w-12 items-start
             justify-center border-r border-[#23340f] bg-[#091300] pt-3"
          >
            <i className="ri-menu-line text-xl text-white"></i>
          </button>
        )}
        <aside
          className={` flex h-full flex-col  bg-[#1C230F]
           
              transition-all duration-300 ${isOpen ? "w-[320px]" : "w-0 overflow-hidden "
            }`}
        >

          <div className="border-b border-[#1b2a0f] px-5 py-4">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-white">
                {courseData.title}
              </p>

              <button onClick={() => setIsOpen(false)}>
                <i className="ri-close-line text-2xl text-white"></i>
              </button>
            </div>
          </div>

          <div className="px-4 mt-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <i className="ri-book-open-line text-neon-green"></i>
              {courseData.course}
            </div>
            <div className="mt-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Course Progress
                </span>

                <span className="text-xs font-sans font-bold text-neon-green">
                  {courseData.progress}%
                </span>
              </div>

              <div className="h-1 overflow-hidden rounded-full bg-black">
                <div
                  className="h-full rounded-full bg-neon-green"
                  style={{
                    width: `${courseData.progress}%`,
                  }}
                />
              </div>
            </div>
          </div>

          <div className=" mt-4">

            <div className="grid grid-cols-2  border-y border-[#1d2b10] bg-[#0d1706] py-2">
              {[
                {
                  id: "content",
                  label: "Course Content",
                },
                {
                  id: "notes",
                  label: "Notes",
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() =>
                    setActiveTab(
                      tab.id as "content" | "notes"
                    )
                  }
                  className={`rounded-lg px-3 py-2 text-xs font-semibold transition-all ${activeTab === tab.id
                    ? "bg-[#141f0b] text-white"
                    : "text-gray-500"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {activeTab === "content" ? (
              <div className="py-4">
                {courseData.modules.map((module) => {
                  const expanded =
                    expandedModules.includes(module.id);

                  return (
                    <div key={module.id}>
                      <button
                        onClick={() =>
                          toggleModule(module.id)
                        }
                        className="flex w-full items-center justify-between px-4 py-4"
                      >
                        <span className="text-[11px] font-bold uppercase tracking-[2px] text-gray-400">
                          {module.title}
                        </span>

                        <i
                          className={`ri-arrow-down-s-line text-gray-400 transition-all ${expanded
                            ? "rotate-180"
                            : ""
                            }`}
                        />
                      </button>

                      {expanded && (
                        <div>
                          {module.lessons.map(
                            (lesson) => (
                              <button
                                key={lesson.id}
                                disabled={
                                  lesson.locked
                                }
                                onClick={() =>
                                  setSelectedLesson(
                                    lesson.id
                                  )
                                }
                                className={`flex w-full items-start gap-3 px-4 py-3 text-left transition-all ${selectedLesson ===
                                  lesson.id
                                  ? "bg-[#4f7208]/50"
                                  : "hover:bg-[#111d08]"
                                  }`}
                              >
                                <div className="mt-1">
                                  {lesson.locked ? (
                                    <i className="ri-lock-line text-xs text-gray-500"></i>
                                  ) : (
                                    <i className="ri-checkbox-circle-line text-[#A6FF00]"></i>
                                  )}
                                </div>

                                <div>
                                  <h4
                                    className={`text-sm ${lesson.locked
                                      ? "text-gray-500"
                                      : "text-white"
                                      }`}
                                  >
                                    {
                                      lesson.title
                                    }
                                  </h4>

                                  {/* <p className="mt-1 text-[10px] text-gray-500">
                                    {lesson.current
                                      ? "Now Playing"
                                      : `Reading · ${lesson.duration}`}
                                  </p> */}
                                </div>
                              </button>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-3 p-4">
                {notes.map((note) => (
                  <div
                    key={note.id}
                    className="rounded-2xl border border-[#1b2a0f] bg-[#101b08] p-4"
                  >
                    <span className="rounded-full bg-[#FF0088]/20 px-2 py-1 text-[10px] font-bold text-red-given">
                      {note.timestamp}
                    </span>

                    <p className="mt-4 text-xs leading-6 text-gray-300">
                      {note.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {activeTab === "notes" && (
            <div className="border-t bg-black border-[#1b2a0f] p-4">
              <div className="rounded-2xl border border-[#1b2a0f] bg-[#111b09] p-3">
                <textarea
                  value={newNote}
                  onChange={(e) =>
                    setNewNote(e.target.value)
                  }
                  placeholder={`Take a private note at ${currentLesson?.duration || "00:00"
                    }...`}
                  className="h-5 w-full resize-none bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
                />

                <div className="mt-3 flex items-center justify-between">
                  <button className="text-gray-500">
                    <i className="ri-image-line"></i>
                  </button>

                  <button
                    onClick={addNote}
                    className="rounded-xl bg-red-given px-4 py-2 text-xs font-semibold text-white"
                  >
                    Save Note
                  </button>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() =>
                    setIsPublic((prev) => !prev)
                  }
                  className="flex items-center gap-2"
                >
                  <div
                    className={`relative h-4 w-8 rounded-full transition-all ${isPublic
                      ? "bg-[#A6FF00]"
                      : "bg-gray-600"
                      }`}
                  >
                    <div
                      className={`absolute top-0.5 h-3 w-3 rounded-full bg-white transition-all ${isPublic
                        ? "left-4"
                        : "left-0.5"
                        }`}
                    />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Public Note
                  </span>
                </button>

                <div className="flex items-center gap-1 text-[10px] text-gray-500">
                  <i className="ri-cloud-line text-blue-500 text-md"></i>
                  Synced
                </div>
              </div>
            </div>
          )}
        </aside>
      </div>
    </>
  )
}

export default SideBar
