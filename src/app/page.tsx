'use client'
import React, { useRef } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Bio from './components/Bio'
import Cursor from './components/Cursor'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'

const Home = () => {
    const buttonRefProfilePic = useRef<HTMLDivElement | null>(null)
    const buttonRefBio = useRef<HTMLDivElement | null>(null)

    return (
        <div
            className="relative flex min-h-full min-w-full items-center justify-center"
            id="Home"
        >
            <div className="fixed top-0 left-0 z-10 h-16 w-full bg-gradient-to-b from-white to-transparent"></div>

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

            <div className="absolute top-40 flex max-w-2xl flex-col gap-8 pb-40">
                <section>
                    <Profile
                        refProfilePic={buttonRefProfilePic}
                        refBio={buttonRefBio}
                    />
                    <Bio />
                </section>

                <section id="Experience">
                    <Experience />
                </section>

                <section id="Education">
                    <Education />
                </section>

                <section id="Skills">
                    <Skills />
                </section>

                <section id="Projects">
                    <Projects />
                </section>
                <section>
                    <div className="mt-20 flex w-full flex-col items-center gap-3 text-center">
                        <div className="rounded-lg bg-black px-2.5 py-1 text-white">
                            Contact
                        </div>
                        <h1 className="text-5xl font-bold">Get in Touch</h1>
                        <p className="font-400 w-xl text-xl text-gray-400">
                            Want to chat? Just send me a{' '}
                            <a
                                href=""
                                target="_blank"
                                className="text-blue-400 hover:underline"
                            >
                                message on linkedin
                            </a>{' '}
                            and I&apos;ll respond when im online!
                        </p>
                    </div>
                </section>
            </div>
            <div className="fixed bottom-0 left-0 z-10 h-16 w-full bg-gradient-to-t from-white to-transparent"></div>
        </div>
    )
}

export default Home
