import Image from 'next/image'
import React from 'react'
import Skill from './components/Skill'
import Header from './components/Header'
import Profile from './components/Profile'
import Bio from './components/Bio'
import Tardis from './components/Tardis'

const Home = () => (
    <div className="relative flex min-h-screen min-w-full items-center justify-center bg-[url('/assets/background/subtle-dots.png')] bg-[size:60px] bg-top bg-repeat">
        <Tardis />

        <Header />
        <div className="mt-30 flex max-w-2xl flex-col gap-4">
            {/* PROFILE SECTION */}
            <Profile />
            {/* ABOUT ME */}
            <Bio />

            <div>
                <h1 className="text-lg">Work Experience</h1>
            </div>

            <div className="flex flex-col gap-2">
                <h1 className="font-500 text-lg">Education</h1>
                <div className="flex gap-3">
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
                        </div>
                        <p className="text-gray-500">Jan 2023 - Current</p>
                    </div>
                </div>
            </div>

            {/* Skills */}
            <div>
                <h1 className="text-lg">Skills</h1>
                <div className="flex gap-4">
                    <Skill name="NextJS" source="/assets/icons/nextjs.svg" />
                    <Skill
                        name="TailwindCSS"
                        source="/assets/icons/tailwind.svg"
                    />
                </div>
            </div>

            <div>
                <h1>My Projects</h1>
            </div>
        </div>
    </div>
)

export default Home
