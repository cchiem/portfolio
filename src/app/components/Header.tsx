import Image from 'next/image'
import React from 'react'
import HeaderIcon from './HeaderIcon'

const Header = () => {
    return (
        <header className="fixed top-10 z-1000 flex items-center rounded-2xl bg-white p-2 shadow-md">
            <div className="flex items-center gap-8">
                <Image
                    src="/assets/icons/Home.svg"
                    alt="Home"
                    width={20}
                    height={20}
                    className="size-7"
                />
                <HeaderIcon
                    source="/assets/icons/LinkedIn.svg"
                    tooltip="Check out my Linkedin!"
                    tooltipBg="blue-400"
                    link="https://www.linkedin.com/in/chris-chiem-uoa/"
                />
                <HeaderIcon
                    source="/assets/icons/Github-Dark.svg"
                    tooltip="Check out my Github!"
                    tooltipBg="black"
                    link="https://github.com/cchiem"
                />
                <HeaderIcon
                    source="/assets/icons/Download.svg"
                    tooltip="Get my Resume!"
                    tooltipBg="green-400"
                    link=""
                />
            </div>
        </header>
    )
}

export default Header
