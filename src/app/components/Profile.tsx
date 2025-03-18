import Image from 'next/image'
import React from 'react'

interface ProfileProps {
    refProfilePic: React.RefObject<HTMLDivElement>
    refBio: React.RefObject<HTMLDivElement>
}

const Profile: React.FC<ProfileProps> = ({ refProfilePic, refBio }) => (
    <div className="relative flex h-[200px] flex-row items-center justify-between">
        {/* BIO SECTION */}
        <div className="flex flex-col" ref={refBio}>
            <h1 className="text-6xl font-bold text-[#04061D]">
                Hi, I&apos;m <span className="shine-text">Chris</span> 👋
            </h1>
            <h2>Software Developer & Student @ UoA</h2>
            <p>📍 Auckland, New Zealand</p>
        </div>

        {/* PROFILE PICTURE SECTION */}
        <div className="absolute right-0" ref={refProfilePic}>
            <Image
                src="/assets/images/Profile.jpeg"
                alt="Profile Picture"
                width={200}
                height={200}
                priority
                className="rounded-full border-2 border-gray-300"
            />
            <div className="absolute right-5 bottom-5 flex items-center justify-center">
                {/* Ping effect */}
                <div className="absolute size-6 animate-ping rounded-full bg-green-400 opacity-75"></div>
                {/* Solid center */}
                <div className="relative size-6 rounded-full border-2 border-green-200 bg-green-400"></div>
            </div>
        </div>
    </div>
)

export default Profile
