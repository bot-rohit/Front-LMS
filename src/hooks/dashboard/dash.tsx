import React from 'react'
import { useState } from 'react';

interface Badge {
    id: number;
    title: string;
    description: string;
    unlocked: boolean;
}

interface dashboard {
    user: {
        id: number;
        level: number;
        name: string;
        status: string;
    }
    xp: number;

    currentModule: {
        title: string;
        progress: number;
    };
    streak: number;
    badges: Badge[];
}
const dash = () => {
    const [dashboard, setDashboard] =
        useState<dashboard>({
            user: {
                id: 1,
                level: 14,
                name: 'Rohit',
                status: 'Elite Trader',
            },

            xp: 14250,

            currentModule: {
                title: 'Technical Analysis III',
                progress: 78,
            },

            streak: 12,

            badges: [],
        });



    return {
        dashboard,

    }


}

export default dash
