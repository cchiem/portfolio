'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

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
            <motion.div
                className="group flex w-full cursor-pointer flex-col overflow-hidden"
                onClick={() => setIsVisible(!isVisible)}
            >
                {/* Title & Arrow */}
                <div className="flex items-center justify-between select-none">
                    <div className="flex flex-row items-center gap-4">
                        <h1 className="text-md">{title}</h1>
                        <motion.div
                            animate={{ rotate: isVisible ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src="/assets/icons/downarrow.svg"
                                alt=""
                                width={20}
                                height={20}
                                className="size-4 opacity-100 transition-opacity duration-300"
                            />
                        </motion.div>
                    </div>
                    <p className="text-sm text-gray-500">{date}</p>
                </div>

                {/* Subheading */}
                <h2 className="text-sm text-gray-500 select-none">
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
                    className="overflow-hidden"
                >
                    <p className="mt-0.5 text-gray-700">{description}</p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default SectionComponent
