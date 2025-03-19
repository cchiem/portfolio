import Image from 'next/image'
import React from 'react'

interface SectionProps {
    title: string
    subheading: string
    imageSource: string
    date: string
}

const SectionComponent = ({
    title,
    subheading,
    imageSource,
    date,
}: SectionProps) => {
    return (
        <div className="group relative flex items-center gap-3">
            <Image
                src={imageSource}
                alt="University of Auckland"
                width={50}
                height={50}
                className="size-12 rounded-full border-2 border-gray-300"
            />
            <div className="flex w-full justify-between">
                <div>
                    <h1>{title}</h1>
                    <p className="text-sm text-gray-500">{subheading}</p>
                    {/* Tooltip */}
                    {/* <div className="absolute right-0 w-fit rounded-xl rounded-tl-sm border border-gray-50 bg-blue-400 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                        <p className="text-xs text-gray-200">Chris</p>
                        <p className="text-md">This is UOA!</p>
                    </div> */}
                </div>
                <p className="text-gray-500">{date}</p>
            </div>
        </div>
    )
}

export default SectionComponent
