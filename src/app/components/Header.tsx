import Image from 'next/image'
import React from 'react'
import HeaderIcon from './HeaderIcon'

const Header = () => {
    return (
        <header className="fixed top-10 z-1000 flex items-center rounded-2xl bg-white px-6 py-2 shadow-md ring ring-gray-200">
            <nav className="flex items-center gap-8">
                <a href="#Home">
                    <Image
                        src="/assets/icons/Home.svg"
                        alt="Home"
                        width={20}
                        height={20}
                        className="size-7 transition-transform duration-200 ease-in-out hover:scale-120 hover:cursor-pointer"
                    />
                </a>
                <HeaderIcon
                    source="/assets/icons/LinkedIn.svg"
                    tooltip="Check out my Linkedin!"
                    tooltipBg="bg-blue-400"
                    link="https://www.linkedin.com/in/chris-chiem-uoa/"
                />
                <HeaderIcon
                    source="/assets/icons/github.svg"
                    tooltip="Check out my Github!"
                    tooltipBg="bg-[#242938]"
                    link="https://github.com/cchiem"
                />
                <HeaderIcon
                    source="/assets/icons/email.svg"
                    tooltip="Contact me on Gmail!"
                    tooltipBg="bg-red-400"
                    link="mailto:chris.chiem01@gmail.com"
                />

                <HeaderIcon
                    source="/assets/icons/downloadfolder.svg"
                    tooltip="Get my Resume!"
                    tooltipBg="bg-green-400"
                    link="https://docs.google.com/document/d/1rZshD9CkqeFYrFGOO2-1tUQBQlo74n1GXdNnWGJd3z0/export?format=pdf"
                />
            </nav>
        </header>
    )
}

export default Header
