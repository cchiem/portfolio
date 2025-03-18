import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface HeaderIconProps {
    source: string
    tooltip: string
    tooltipBg: string
    link: string | '/'
}
const HeaderIcon = ({ source, tooltip, tooltipBg, link }: HeaderIconProps) => {
    return (
        <Link href={link} target="_blank" className="group relative">
            <Image
                src={source}
                alt={source}
                width={20}
                height={20}
                className="size-7 group-hover:cursor-pointer"
            />
            <div
                className={`border-grey-50 absolute w-fit rounded-xl rounded-tl-sm border-1 bg-${tooltipBg} px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-300 ease-in-out select-none group-hover:opacity-100`}
            >
                <p className="text-xm text-gray-200">Chris</p>
                <p className="text-md">{tooltip}</p>
            </div>
        </Link>
    )
}

export default HeaderIcon
