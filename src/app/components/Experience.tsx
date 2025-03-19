import React from 'react'
import SectionComponent from './SectionComponent'

const Experience = () => {
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">Experience</h1>
            <div className="flex flex-col gap-3">
                <SectionComponent
                    title="Unversity of Auckland Computer Science Society"
                    subheading="Vice President | Co-Founder"
                    imageSource="/assets/work/UOACS.png"
                    date="Jan 2024 - Current"
                />
                <SectionComponent
                    title="Web Development Consulting Club"
                    subheading="Technical Lead"
                    imageSource="/assets/work/WDCC.jpg"
                    date="Jan 2025 - Current"
                />
                <SectionComponent
                    title="MyUniClub | StartUp"
                    subheading="Software Developer Intern"
                    imageSource="/assets/work/UNICLUB.png"
                    date="Jan 2025 - Current"
                />
                <SectionComponent
                    title="Grant Thornton"
                    subheading="Consulting Intern"
                    imageSource="/assets/work/GT.svg"
                    date="Jun 2024 - Jul 2024"
                />
            </div>
        </div>
    )
}

export default Experience
