import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">My Projects</h1>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
                <ProjectCard
                    title="SnapMenu"
                    date="2025"
                    text="Designed and Developed an AI Menu Visualiser to help you know what to order."
                    website="https://snapmenu-phi.vercel.app/"
                    github="https://github.com/cchiem/menupic"
                    imgSource="/assets/projects/snapmenu.png"
                    techList={[
                        'React',
                        'TypeScript',
                        'Nextjs',
                        'AWS S3',
                        'LlamaAI',
                        'FLUX.1',
                    ]}
                />
                <ProjectCard
                    title="Podcast Library"
                    date="2024"
                    text="Designed and Developed an Podcast Library with CRUD operations and authentication"
                    website="https://img-984444524408.australia-southeast1.run.app/"
                    github="https://github.com/cchiem/podcast-library-flask"
                    imgSource="/assets/projects/podcastlib.png"
                    techList={['HTML', 'CSS', 'JavaScript', 'Flask']}
                />
            </div>
        </div>
    )
}

export default Projects
