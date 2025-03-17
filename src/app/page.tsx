import Image from 'next/image'
import React from 'react'
import Skill from './components/Skill'

const Home = () => {
    // const gridWidth = 50
    // const gridColor = 'blue-200'
    return (
        <div className="relative flex min-h-screen min-w-full flex-col items-center justify-center bg-[url('/assets/background/subtle-dots.png')] bg-[size:60px] bg-top bg-repeat">
            {/* <svg
                className={`absolute inset-0 -z-1 size-full stroke-${gridColor}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id="grid"
                        width={gridWidth}
                        height={gridWidth}
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d={`M ${gridWidth} 0 L ${gridWidth} ${gridWidth}`}
                            strokeWidth="1"
                        />
                        <path
                            d={`M 0 ${gridWidth} L ${gridWidth} ${gridWidth}`}
                            strokeWidth="1"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg> */}

            {/* BG COLORS */}
            {/* Purple Blur */}
            <div className="absolute top-1/4 left-1/4 -z-10 size-90 rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-2xl filter"></div>

            {/* Pink Blur */}
            <div className="absolute top-1/3 right-1/4 -z-10 size-90 rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-2xl filter"></div>

            {/* Yellow Blur */}
            <div className="absolute bottom-1/4 left-1/2 -z-10 size-90 rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-2xl filter"></div>

            <header className="absolute top-10 flex min-w-lg items-center justify-around rounded-2xl bg-white p-2 font-[600] shadow-md">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="size-6"
                >
                    <path d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <div className="flex items-center gap-4">
                    <div>Home</div>
                    <div>Projects</div>
                    <div>Contact</div>
                </div>
                <div className="group relative">
                    <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-pink-700 to-purple-700 opacity-50 blur transition duration-200 group-hover:opacity-100"></div>
                    <button className="relative rounded-xl bg-black px-2 py-1 font-bold text-white">
                        Resume
                    </button>
                </div>
            </header>
            <Image
                src="/assets/gif/tardis.gif"
                alt="Tardis"
                width={100}
                height={100}
                className="absolute top-20 left-20"
                unoptimized={true}
            />
            <div className="relative flex max-w-2xl flex-col gap-4">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-bold text-[#04061D]">
                            Hi, I&apos;m Chris 👋
                        </h1>
                        <h2>Software Developer & Student @ UoA</h2>
                        <p className="">📍 Auckland, New Zealand</p>
                    </div>
                    <Image
                        src="/assets/images/Profile.jpg"
                        alt="Profile Picture"
                        width={200}
                        height={200}
                        className="rounded-full border-2 border-gray-300"
                    />
                </div>
                {/* ABOUT ME */}
                <div className="flex flex-col">
                    <h2 className="text-lg font-bold">About Me</h2>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolores repudiandae
                        <span className="underline">
                            earum tenetur omnis modi
                        </span>
                        , atque exercitationem quisquam,
                        <span className="underline">
                            earum tenetur omnis modi
                        </span>
                        obcaecati similique, delectus molestias at quos sunt
                        quam sint rerum.
                        <span className="underline">
                            earum tenetur omnis modi
                        </span>
                        , voluptatum nostrum quos nulla at rem harum!
                    </p>
                </div>

                <div>
                    <h1 className="text-lg">Work Experience</h1>
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="font-500 text-lg">Education</h1>
                    <div className="flex flex-row gap-3">
                        <Image
                            src="/assets/icons/UOA-icon.png"
                            alt="University of Auckland"
                            width={50}
                            height={50}
                            className="rounded-full border-2 border-gray-300"
                        />
                        <h1>University of Auckland</h1>
                    </div>
                </div>

                {/* Skills */}
                <div>
                    <h1 className="text-lg">Skills</h1>
                    <div className="flex gap-4">
                        <Skill
                            name="NextJS"
                            source="/assets/icons/nextjs.svg"
                        />
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
}

export default Home
