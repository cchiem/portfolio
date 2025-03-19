import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface SectionProps {
    title: string
    subheading: string
    imageSource: string
    date: string
    link: string
}

const SectionComponent = ({
    title,
    subheading,
    imageSource,
    date,
    link,
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
                    <Link
                        href={link}
                        target="_blank"
                        className="hover:text-blue-500 hover:underline"
                    >
                        {title}
                    </Link>
                    <p className="text-sm text-gray-500">{subheading}</p>
                </div>
                <p className="text-gray-500">{date}</p>
            </div>
        </div>
    )
}

export default SectionComponent
