import React from 'react'

const Ping = () => {
    return (
        <div className="absolute right-3 bottom-3 flex items-center justify-center">
            {/* Ping effect */}
            <div className="absolute size-6 animate-ping rounded-full bg-green-400 opacity-75"></div>
            {/* Solid center */}
            <div className="relative size-6 rounded-full border-2 border-green-200 bg-green-400"></div>
        </div>
    )
}

export default Ping
