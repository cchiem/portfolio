import Image from 'next/image'
import React from 'react'

const Profile = () => {
    return (
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
                <h1 className="text-4xl font-bold text-[#04061D]">
                    Hi, I&apos;m <span className="shine-text">Chris</span> 👋
                </h1>
                <h2>Software Developer & Student @ UoA</h2>
                <p className="">📍 Auckland, New Zealand</p>
            </div>
            <div className="relative">
                <Image
                    src="/assets/images/Profile.jpeg"
                    alt="Profile Picture"
                    width={200}
                    height={200}
                    className="rounded-full border-2 border-gray-300"
                />
                <div className="absolute right-5 bottom-5">
                    <div className="relative flex items-center justify-center">
                        {/* Ping effect */}
                        <div className="absolute size-6 animate-[ping_2s_linear_infinite] rounded-full bg-green-400 opacity-75"></div>
                        {/* Solid center */}
                        <div className="relative size-6 rounded-full border-2 border-green-200 bg-green-400"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
