'use client'
import React from 'react'
import { useState } from "react";

const creatorTypes = [
    {
        id: "educator",
        title: "Individual Educator",
        description: "Solo trader sharing knowledge",
        // icon: RiUserStarLine,
    },
    {
        id: "influencer",
        title: "Influencer",
        description: "Building a broad financial audience",
        // icon: RiMegaphoneLine,
    },
    {
        id: "institute",
        title: "Coaching Institute",
        description: "Organization with multiple educators",
        // icon: RiBuilding2Line,
    },
];

const progress2 = () => {
    const [selected, setSelected] = useState("educator");
    return (
        <div>
            <p className='text-white'>hiakldsj</p>
        

        </div>
    )
}

export default progress2
