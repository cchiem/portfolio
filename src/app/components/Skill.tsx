import Image from 'next/image'
import React from 'react'

const Skill = ({ name, source }: any) => {
    return (
        <div className="flex flex-col items-center gap-1">
            <Image src={source} alt={name} width={50} height={50} />
            <p>{name}</p>
        </div>
    )
}

export default Skill
