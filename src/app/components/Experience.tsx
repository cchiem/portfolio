import React from 'react'
import SectionComponent from './SectionComponent'

const Experience = () => {
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">Experience</h1>
            <div className="flex flex-col gap-3">
                <SectionComponent
                    title="University of Auckland Computer Science Society"
                    subheading="Vice President | Co-Founder"
                    imageSource="/assets/work/UOACS.png"
                    date="Jan 2024 - Current"
                    description={`Leading an executive team of **19** to organize **social** and **career-focused** events for over **300+ members**.  
                    Creating **networking opportunities** for students to connect with __peers__ and __industry professionals__, enhancing their **career** and **network**.`}
                />
                <SectionComponent
                    title="Web Development Consulting Club"
                    subheading="Technical Lead"
                    imageSource="/assets/work/WDCC.jpg"
                    date="Jan 2025 - Current"
                    description={`I manage a team of developers using **Agile methodology**, driving progress through **sprints**, **stand-ups**, and **CI/CD pipelines**.  
                    I oversee **code quality**, **technical architecture**, and key __development decisions__, while also mentoring team members to ensure a **user-friendly platform** that meets __client needs__.`}
                />
                <SectionComponent
                    title="MyUniClub | StartUp"
                    subheading="Software Developer Intern"
                    imageSource="/assets/work/UNICLUB.png"
                    date="Jan 2025 - Current"
                    description={`Contributing to the development of **MyUniClub’s platform** by designing and implementing **software solutions**.  
                    Collaborating with a team to enhance __user experience__ for **student-focused services**.`}
                />
                <SectionComponent
                    title="Grant Thornton"
                    subheading="Consulting Intern"
                    imageSource="/assets/work/GT.svg"
                    date="Jun 2024 - Jul 2024"
                    description={`Worked in a **team of four** under the __mentorship__ of experienced professionals, analyzing the impact of **government budgets** on __professional services__.  
                    Delivered **insights and recommendations** through a **case study presentation** to __senior partners__ at **Grant Thornton**.`}
                />
            </div>
        </div>
    )
}

export default Experience
