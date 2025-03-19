'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Bio from './components/Bio'
import Tardis from './components/Tardis'
import Cursor from './components/Cursor'
import Skills from './components/Skills'

const Home = () => {
    const buttonRefProfilePic = useRef<HTMLDivElement | null>(null)
    const buttonRefBio = useRef<HTMLDivElement | null>(null)

    return (
        <div className="relative flex min-h-screen min-w-full items-center justify-center bg-[url('/assets/background/subtle-dots.png')] bg-[size:60px] bg-top bg-repeat">
            <Tardis />
            <Header />
            <Cursor
                buttonRef={buttonRefProfilePic}
                position="top-right"
                imageUrl="/assets/cursor/designer-cursor.svg"
            />
            <Cursor
                buttonRef={buttonRefBio}
                position="bottom-left"
                imageUrl="/assets/cursor/designer-cursor2.svg"
            />

            <div className="mt-10 flex max-w-2xl flex-col gap-4">
                {/* PROFILE SECTION */}
                <section id="Home">
                    <Profile
                        refProfilePic={buttonRefProfilePic}
                        refBio={buttonRefBio}
                    />
                    {/* ABOUT ME */}
                    <Bio />
                </section>

                {/* WORK EXPERIENCE */}
                <section id="WorkExperience">
                    <h1 className="text-lg">Work Experience</h1>
                </section>

                {/* EDUCATION */}
                <section id="Education">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-500 text-lg">Education</h1>
                        <div className="group relative flex items-center gap-3">
                            <Image
                                src="/assets/icons/UOA-icon.png"
                                alt="University of Auckland"
                                width={50}
                                height={50}
                                className="size-12 rounded-full border-2 border-gray-300"
                            />
                            <div className="flex w-full justify-between">
                                <div>
                                    <h1>University of Auckland</h1>
                                    <p className="text-sm text-gray-500">
                                        Bachelor&apos;s of Computer Science &
                                        Information Technology Management
                                    </p>
                                    {/* Tooltip */}
                                    <div className="absolute right-0 w-fit rounded-xl rounded-tl-sm border border-gray-50 bg-blue-400 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                        <p className="text-xs text-gray-200">
                                            Chris
                                        </p>
                                        <p className="text-md">This is UOA!</p>
                                    </div>
                                </div>
                                <p className="text-gray-500">
                                    Jan 2023 - Current
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section id="Skills">
                    <Skills />
                </section>

                {/* Projects */}
                <section id="Projects">
                    <h1>My Projects</h1>
                </section>
            </div>
        </div>
    )
}

export default Home
