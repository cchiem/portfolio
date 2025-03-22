'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'

interface SectionProps {
    title: string
    subheading: string
    imageSource: string
    date: string
    description: string
    link?: string
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
        <div className="flex gap-4 rounded-lg transition-all duration-600">
            {/* Profile Image with Hover Animation */}

            <div className="size-12">
                <Image
                    src={imageSource}
                    alt="Profile"
                    width={50}
                    height={50}
                    className="rounded-full border border-gray-300 shadow-md"
                />
            </div>
            {/* Accordion Section */}
            <motion.div className="group flex w-full flex-col overflow-hidden">
                {/* Title & Expand Arrow */}
                <div
                    className="flex cursor-pointer items-center justify-between select-none"
                    onClick={() => setIsVisible(!isVisible)}
                    tabIndex={0}
                    role="button"
                    aria-expanded={isVisible}
                >
                    <div className="flex items-center gap-4">
                        <h1 className="text-md">{title}</h1>
                        <motion.div
                            animate={{ rotate: isVisible ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src="/assets/icons/downarrow.svg"
                                alt="Expand"
                                width={20}
                                height={20}
                                className="size-4 opacity-80 transition-opacity duration-300"
                            />
                        </motion.div>
                    </div>
                    <p className="text-sm text-gray-500">{date}</p>
                </div>

                {/* Subheading */}
                <h2 className="text-sm text-gray-600 select-none">
                    {subheading}
                </h2>

                {/* Expandable Content */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isVisible ? 'auto' : 0,
                        opacity: isVisible ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="flex flex-col gap-4 overflow-hidden"
                >
                    <div className="mt-2 text-sm text-gray-700">
                        <ReactMarkdown>{description}</ReactMarkdown>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default SectionComponent
