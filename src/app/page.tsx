'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import Skill from './components/Skill'
import Header from './components/Header'
import Profile from './components/Profile'
import Bio from './components/Bio'
import Tardis from './components/Tardis'
import Cursor from './components/Cursor'

const Home = () => {
    const buttonRefProfilePic = useRef<HTMLDivElement | null>(null)
    const buttonRefBio = useRef<HTMLDivElement | null>(null)

    return (
        <div className="relative flex min-h-screen min-w-full items-center justify-center bg-[url('/assets/background/subtle-dots.png')] bg-[size:60px] bg-top bg-repeat">
            {/* Fix: Ensure buttonRef is assigned correctly */}
            <Tardis />
            <Header />
            <Cursor
                buttonRef={buttonRefProfilePic}
                position="top-right"
                imageUrl="assets/cursor/designer-cursor.svg"
            />
            <Cursor
                buttonRef={buttonRefBio}
                position="bottom-left"
                imageUrl="assets/cursor/designer-cursor2.svg"
            />

            <div className="mt-30 flex max-w-2xl flex-col gap-4">
                {/* PROFILE SECTION */}
                <section id="Home">
                    <Profile
                        refProfilePic={buttonRefProfilePic}
                        refBio={buttonRefBio}
                    />
                    {/* ABOUT ME */}
                    <Bio />
                </section>

                <div>
                    <h1 className="text-lg">Work Experience</h1>
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="font-500 text-lg">Education</h1>
                    <div className="group relative flex gap-3">
                        <Image
                            src="/assets/icons/UOA-icon.png"
                            alt="University of Auckland"
                            width={50}
                            height={50}
                            className="rounded-full border-2 border-gray-300"
                        />
                        <div className="flex w-full justify-between">
                            <div>
                                <h1>University of Auckland</h1>
                                <p className="text-sm text-gray-500">
                                    Bachelor&apos;s of Computer Science &
                                    Information Technology Management
                                </p>
                                {/* Tooltip should be a direct child of the group */}
                                <div className="absolute right-0 w-fit rounded-xl rounded-tl-sm border border-gray-50 bg-blue-400 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                    <p className="text-xm text-gray-200">
                                        Chris
                                    </p>
                                    <p className="text-md">This is UOA!</p>
                                </div>
                            </div>
                            <p className="text-gray-500">Jan 2023 - Current</p>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div>
                    <h1 className="text-lg">Skills</h1>
                    <div className="flex gap-4">
                        <Skill
                            name="Next.js"
                            source="/assets/icons/nextjs.svg"
                        />
                        <Skill
                            name="React.js"
                            source="/assets/icons/React-Dark.svg"
                        />
                        <Skill
                            name="TailwindCSS"
                            source="/assets/icons/tailwind.svg"
                        />
                        <Skill
                            name="TypeScript"
                            source="/assets/icons/TypeScript.svg"
                        />
                    </div>
                </div>

                <div>
                    <h1>My Projects</h1>
                </div>
            </div>
        </div>
    )
}

export default Home
