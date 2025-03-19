import React from 'react'
import SectionComponent from './SectionComponent'

const Education = () => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold">Education</h1>
            <SectionComponent
                title="University of Auckland"
                subheading="Bachelor's of Computer Science & Information Technology Management"
                imageSource="/assets/work/UOA.png"
                date="Jan 2023 - Current"
            />
        </div>
    )
}

export default Education
