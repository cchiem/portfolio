import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface HeaderIconProps {
    source: string
    tooltip: string
    tooltipBg: string // Ensure it's a valid Tailwind class (e.g., 'bg-gray-700')
    link: string
}

const HeaderIcon = ({ source, tooltip, tooltipBg, link }: HeaderIconProps) => {
    return (
        <Link
            href={link}
            target="_blank"
            className="group relative"
            aria-label={tooltip}
        >
            <Image
                src={source}
                alt={tooltip} // More descriptive alt text
                width={20}
                height={20}
                className="size-7 transition-transform duration-200 ease-in-out hover:scale-120 hover:cursor-pointer"
            />
            <div
                className={`absolute left-5 w-fit rounded-xl rounded-tl-sm border ${tooltipBg} px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-300 ease-in-out select-none group-hover:opacity-100`}
            >
                <p className="text-xs text-gray-200">Chris</p>
                <p className="text-sm">{tooltip}</p>
            </div>
        </Link>
    )
}

export default HeaderIcon
