'use client'
import React, { useRef } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Bio from './components/Bio'
import Tardis from './components/Tardis'
import Cursor from './components/Cursor'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'

const Home = () => {
    const buttonRefProfilePic = useRef<HTMLDivElement | null>(null)
    const buttonRefBio = useRef<HTMLDivElement | null>(null)

    return (
        <div className="relative flex h-dvh w-dvw items-center justify-center">
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

            <div className="absolute top-40 flex max-w-2xl flex-col gap-8">
                {/* PROFILE SECTION */}
                <section id="Home">
                    <Profile
                        refProfilePic={buttonRefProfilePic}
                        refBio={buttonRefBio}
                    />
                    <Bio />
                </section>

                {/* WORK EXPERIENCE */}
                <section id="Experience">
                    <Experience />
                </section>

                {/* EDUCATION */}
                <section id="Education">
                    <Education />
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
