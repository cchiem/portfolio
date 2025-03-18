import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <header className="absolute top-10 flex items-center rounded-2xl bg-white p-2 font-[600] shadow-md">
            <div className="flex items-center gap-8 tracking-wide">
                <Image
                    src="/assets/icons/Home.svg"
                    alt="Home"
                    width={20}
                    height={20}
                />
                <div className="group relative size-5">
                    <Image
                        src="/assets/icons/Linkedin.svg"
                        alt="Linkedin"
                        width={20}
                        height={20}
                    />
                    <div className="border-grey-50 zrounded-xl absolute w-fit rounded-tl-sm border-1 bg-blue-400 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-300 ease-in-out select-none group-hover:opacity-100">
                        <p className="text-xm text-gray-200">Chris</p>
                        <p className="text-md"> Check out my linkedin!</p>
                    </div>
                </div>
                <Image
                    src="/assets/icons/Github-Dark.svg"
                    alt="Github"
                    width={20}
                    height={20}
                />
            </div>
        </header>
    )
}

export default Header
