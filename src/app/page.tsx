import Image from "next/image";
import React from "react";

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center h-dvh w-dvw">
            <h1 className="font-bold text-[5rem] text-[#04061D]">
                Chris Chiem
            </h1>
            <Image
                src="/assets/gif/tardis.gif"
                alt="Tardis"
                width={100}
                height={100}
            />
            <Image
                src="/assets/icons/nextjs.svg"
                alt="NextJs Icon"
                width={50}
                height={50}
            />
            <p className="text-lg font-inter">📍 Auckland, New Zealand</p>
        </div>
    );
};

export default Home;
