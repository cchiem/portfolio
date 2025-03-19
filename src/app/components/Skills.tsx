import React from 'react'
import Skill from './Skill'

const Skills = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Skills</h1>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(40px,1fr))] place-items-baseline gap-x-10 gap-y-6">
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
                <Skill name="HTML" source="/assets/icons/HTML.svg" />
                <Skill name="CSS" source="/assets/icons/CSS.svg" />
                <Skill name="Python" source="/assets/icons/python.svg" />
                <Skill name="Node.js" source="/assets/icons/nodejs.svg" />
                <Skill name="Flask" source="/assets/icons/flask.svg" />
                <Skill name="Java" source="/assets/icons/JavaIcon.svg" />
                <Skill name="Clerk" source="/assets/icons/clerk.svg" />
                <Skill name="AWS" source="/assets/icons/aws.svg" />
                <Skill name="MySQL" source="/assets/icons/mysql.svg" />
                <Skill name="MongoDB" source="/assets/icons/mongodb.svg" />
                <Skill name="Vercel" source="/assets/icons/vercel.svg" />
            </div>
        </div>
    )
}

export default Skills
