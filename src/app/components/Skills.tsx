import React from 'react'
import Skill from './Skill'

const Skills = () => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-lg">Skills</h1>
            <div className="flex gap-4">
                <Skill name="Next.js" source="/assets/icons/nextjs.svg" />
                <Skill name="React.js" source="/assets/icons/react.svg" />
                <Skill name="TailwindCSS" source="/assets/icons/tailwind.svg" />
                <Skill
                    name="TypeScript"
                    source="/assets/icons/TypeScript.svg"
                />
                <Skill
                    name="JavaScript"
                    source="/assets/icons/JavaScript.svg"
                />
            </div>
        </div>
    )
}

export default Skills
