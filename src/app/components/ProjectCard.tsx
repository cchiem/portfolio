import Image from 'next/image'
import React from 'react'
import Button from './Button'

interface ProjectCardProps {
    title: string
    date: string
    text: string
    imgSource: string
    techList: string[]
    website: string
    github: string
}
const ProjectCard = ({
    title,
    date,
    text,
    imgSource,
    techList,
    website,
    github,
}: ProjectCardProps) => {
    return (
        <div className="flex flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-lg">
            <Image
                src={imgSource}
                alt={title}
                width={1000}
                height={1000}
                className="h-auto w-full shadow-sm"
            />
            <div className="flex h-full flex-col justify-between gap-2 p-4">
                <div>
                    <h1 className="text-lg font-bold">{title}</h1>
                    <h2 className="text-gray-400">{date}</h2>
                    <p className="text-md leading-6 text-gray-500">{text}</p>
                    <div className="flex w-full flex-wrap gap-1">
                        {techList.map((tech, index) => (
                            <div
                                className="r rounded-xl bg-gray-100 px-3 py-1 text-sm text-black"
                                key={index}
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex w-full justify-between">
                    <Button
                        iconSource="/assets/icons/globe.svg"
                        text="Live"
                        link={website}
                        color="bg-black"
                    />
                    <Button
                        iconSource="/assets/icons/github.svg"
                        text="Source"
                        link={github}
                        color="bg-black"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
