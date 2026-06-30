'use client'
import { useEffect, useRef } from 'react'
import React from 'react'
import gsap from 'gsap'

const graph = () => {
    const pathRef = useRef(null)
    useEffect(() => {

        const tl = gsap.timeline({
            repeat: -1,
            defaults: {
                duration: 4,
                ease: "sine.inOut"
            }
        })

        tl.to(pathRef.current, {
            attr: {
                d: `M-5 15 
                C5 25, 20 35, 30 35 
                C40 36, 45 20, 60 22  
                C72 24, 80 45, 95 40`
            }
        })

            .to(pathRef.current, {
                attr: {
                    d: `M-5 35 
                C5 40, 20 20, 30 15 
                C40 10, 50 34, 60 40  
                C72 45, 80 20, 95 25`
                }
            })

            .to(pathRef.current, {
                attr: {
                    d: `M-5 40 
                C5 40, 20 32, 30 22 
                C40 12, 50 17, 60 27 
                C70 35, 80 40, 95 10`
                }
            })

    }, [])
    useEffect(() => {
        console.log(pathRef.current)

    }, [])

    return (
        <>
            <svg
            className='w-full h-full'
                width="100%"
                height="300"
                viewBox="0 0 100 50"
                overflow="visible">
                {/* <rect
                    x="0"
                    y="0"
                    width="100"
                    height="50"
                    stroke="red"
                    fill="none"
                /> */}
                <defs>

                    <linearGradient id="lineGradient">
                        <stop offset="0%" stopColor="#7CFF00" />
                        <stop offset="100%" stopColor="#C3FF00" />
                    </linearGradient>

                    <filter
                        id="glow"
                        x="-50%"
                        y="-200%"
                        width="200%"
                        height="400%"
                    >

                        <feGaussianBlur
                            stdDeviation="6"
                            result="coloredBlur"
                        />

                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>

                    </filter>

                </defs>
                <path
                    ref={pathRef}

                    d="M-5 40 C5 40, 20 32, 30 22 C40 12, 50 17, 60 27 C70 35, 80 40, 95 10"
                    stroke="url(#lineGradient)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"

                    style={{
                        filter: "url(#glow)"
                    }}

                />
            </svg>


        </>
    )
}

export default graph

//  C40 10, 50 15, 60 25 C70 35, 80 40, 100 10
// C40 20, 50 35, 60 25 C70 15, 80 5, 100 20