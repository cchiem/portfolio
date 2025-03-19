import Image from 'next/image'
import React from 'react'

const Skill = ({ name, source }: { name: string; source: string }) => {
    return (
        <div className="flex w-[50px] flex-col items-center gap-2">
            <Image
                src={source}
                alt={name}
                width={50}
                height={50}
                className="rounded-md"
            />
            <p className="text-center text-sm text-gray-500">{name}</p>
        </div>
    )
}

export default Skill
