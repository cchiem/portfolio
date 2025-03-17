import React from 'react'

const Header = () => {
    return (
        <header className="absolute top-10 flex min-w-lg items-center justify-around rounded-2xl bg-white p-2 font-[600] shadow-md">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="size-6"
            >
                <path d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <div className="flex items-center gap-4 tracking-wide">
                <div>Home</div>
                <div>Projects</div>
                <div>Contact</div>
            </div>
            <div className="group relative">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-pink-700 to-purple-700 opacity-50 blur transition duration-200 group-hover:opacity-100"></div>
                <button className="relative rounded-xl bg-black px-2 py-1 font-bold text-white">
                    CV
                </button>
            </div>
        </header>
    )
}

export default Header
