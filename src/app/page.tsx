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
import ProjectCard from './components/ProjectCard'

const Home = () => {
    const buttonRefProfilePic = useRef<HTMLDivElement | null>(null)
    const buttonRefBio = useRef<HTMLDivElement | null>(null)

    return (
        <div className="relative flex h-dvh w-dvw items-center justify-center">
            <div className="fixed top-0 left-0 z-10 h-16 w-full bg-gradient-to-b from-white to-transparent"></div>

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
                    <div className="flex flex-col gap-4">
                        <h1 className="text-lg font-bold">My Projects</h1>
                        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
                            <ProjectCard
                                title="SnapMenu"
                                date="2025"
                                text="Designed and Developed an AI Menu Visualiser to help you know what to order."
                                website="https://snapmenu-phi.vercel.app/"
                                github="https://github.com/cchiem/menupic"
                                imgSource="/assets/projects/snapmenu.png"
                                techList={[
                                    'React',
                                    'TypeScript',
                                    'Nextjs',
                                    'AWS S3',
                                    'LlamaAI',
                                    'FLUX.1',
                                ]}
                            />
                            <ProjectCard
                                title="Podcast Library"
                                date="2024"
                                text="Designed and Developed an Podcast Library with CRUD operations and authentication"
                                website="https://snapmenu-phi.vercel.app/"
                                github="https://github.com/cchiem/menupic"
                                imgSource="/assets/projects/podcastlib.png"
                                techList={[
                                    'HTML',
                                    'CSS',
                                    'JavaScript',
                                    'Flask',
                                ]}
                            />
                        </div>
                    </div>
                </section>
            </div>
            <div className="fixed bottom-0 left-0 z-10 h-16 w-full bg-gradient-to-t from-white to-transparent"></div>
        </div>
    )
}

export default Home
