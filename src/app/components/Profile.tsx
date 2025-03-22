import Image from 'next/image'
import React from 'react'
import HoverComponent from './HoverComponent'
import Ping from './Ping'

interface ProfileProps {
    refProfilePic: React.RefObject<HTMLDivElement>
    refBio: React.RefObject<HTMLDivElement>
}

const Profile: React.FC<ProfileProps> = ({ refProfilePic, refBio }) => (
    <div className="relative flex h-[200px] flex-row items-center justify-between">
        {/* BIO SECTION */}
        <div className="flex flex-col" ref={refBio}>
            <h1 className="text-6xl font-bold text-[#04061D]">
                Hi, I&apos;m <span className="shine-text-blue">Chris</span>
            </h1>
            <h2>Software Developer & Student @ UoA</h2>
            <HoverComponent
                name="📍 Auckland, New Zealand"
                source="/assets/icons/nzflag.svg"
            />
        </div>

        {/* PROFILE PICTURE SECTION */}
        <div className="absolute right-0" ref={refProfilePic}>
            <Image
                src="/assets/images/Profile.jpeg"
                alt="Profile Picture"
                width={1000}
                height={1000}
                priority
                className="size-40 rounded-full border-2 border-gray-300"
            />
            <Ping />
        </div>
    </div>
)

export default Profile
