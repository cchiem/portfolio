import React from 'react'
import HoverComponent from './HoverComponent'

const Bio = () => {
    return (
        <div className="flex flex-col">
            <h2 className="text-lg font-bold">About Me</h2>
            <p className="relative text-gray-600">
                I&apos;m a Computer Science student at the{' '}
                <span className="font-bold">University of Auckland</span>,
                specializing in full-stack development with
                {/* React Hover */}
                <HoverComponent
                    name="React.js"
                    source="/assets/icons/React-Dark.svg"
                />
                ,{/* Next.js Hover */}
                <HoverComponent
                    name="Next.js"
                    source="/assets/icons/nextjs.svg"
                />
                ,{/* Tailwind Hover */}
                <HoverComponent
                    name="TailwindCSS"
                    source="/assets/icons/tailwind.svg"
                />
                and
                <HoverComponent
                    name="TypeScript"
                    source="/assets/icons/TypeScript.svg"
                />
                . I have a keen eye for detail and a passion for building web
                applications.
            </p>
        </div>
    )
}

export default Bio
