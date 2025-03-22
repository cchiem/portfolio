import React from 'react'
import Image from 'next/image'

const Tardis = () => {
    return (
        <div className="group absolute top-10 left-10">
            <Image
                src="/assets/gif/tardis.gif"
                alt="Tardis"
                width={100}
                height={100}
                unoptimized
                className="transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="border-grey-50 absolute -bottom-10 left-15 w-fit rounded-xl rounded-tl-sm border-1 bg-blue-400 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <p className="text-xm text-gray-200">Chris</p>
                <p className="text-md">I made this in minecraft!</p>
            </div>
            <div className="rounded-lg"></div>
        </div>
    )
}

export default Tardis
