'use client'
import Image from 'next/image'
import React, { useState } from 'react'

interface SectionProps {
    title: string
    subheading: string
    imageSource: string
    date: string
    description: string
}

const SectionComponent = ({
    title,
    subheading,
    imageSource,
    date,
    description,
}: SectionProps) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className="flex gap-3">
            {/* Profile Image */}
            <Image
                src={imageSource}
                alt="University of Auckland"
                width={50}
                height={50}
                className="size-12 rounded-full border-2 border-gray-300"
            />

            {/* Accordion Section */}
            <div
                className="group flex w-full flex-col overflow-hidden hover:cursor-pointer"
                onClick={() => setIsVisible(!isVisible)}
            >
                {/* Title & Arrow */}
                <div className="flex items-center justify-between select-none">
                    <div className="flex flex-row items-center gap-4">
                        <h1 className="text-md">{title}</h1>
                        <Image
                            src="/assets/icons/downarrow.svg"
                            alt=""
                            width={20}
                            height={20}
                            className={`size-4 transition-all duration-500 ease-in-out ${isVisible ? 'rotate-180 opacity-100' : 'rotate-0 opacity-0'} group-hover:opacity-100`}
                        />
                    </div>
                    <p className="text-sm text-gray-500">{date}</p>
                </div>

                {/* Subheading */}
                <h2 className="text-sm text-gray-500 select-none">
                    {subheading}
                </h2>

                {/* Expandable Content */}
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isVisible ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <p className="mt-0.5 text-gray-700">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default SectionComponent
