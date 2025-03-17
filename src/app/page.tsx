import Image from 'next/image'
import React from 'react'

const Home = () => {
    // const gridWidth = 50
    // const gridColor = 'blue-200'
    return (
        <div className="relative flex min-h-screen min-w-full flex-col items-center justify-center bg-[url('/assets/background/subtle-dots.png')] bg-[size:40px] bg-top bg-repeat">
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
            <Image
                src="/assets/gif/tardis.gif"
                alt="Tardis"
                width={100}
                height={100}
                className="absolute top-20 left-20"
                unoptimized={true}
            />
            <div className="relative max-w-3xl flex-col gap-4">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-[#04061D]">
                        Hi, I&apos;m Chris 👋
                    </h1>
                    <h2>Software Developer & Student @ UoA</h2>
                    <p className="">📍 Auckland, New Zealand</p>
                </div>

                {/* BG COLORS */}
                <div className="absolute top-0 left-1/3 size-72 -translate-x-1/2 rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
                <div className="absolute top-0 left-1/2 size-72 -translate-x-1/2 rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
                <div className="absolute top-6 left-2/3 size-72 -translate-x-1/2 rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
                <div className="">
                    <h2 className="font-bold">About Me</h2>
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

                {/* Skills */}
                <div>
                    <div className="flex flex-col items-center gap-1">
                        <Image
                            src="/assets/icons/nextjs.svg"
                            alt="NextJs Icon"
                            width={50}
                            height={50}
                        />
                        <p>Nextjs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
