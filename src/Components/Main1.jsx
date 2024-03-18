import React from "react";
import uranus from "./uranus.jpg";

const Main = () => {
    return(
        <React.Fragment>
            <div className="main flex flex-col bg-black">
                <div className="header flex justify-between p-3 bg-black shadow-lg py-3 md:py-6">
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-fuchsia-600 shadow-lg">$URANUS Web</h1>
                    <button className="text-white font-semibold rounded-full shadow-md border border-white px-4 py-2 md:px-3 transition-colors duration-300 ease-in-out hover:bg-yellow-400 hover:text-black">
                        <span className="transition-colors duration-300 ease-in-out hover:bg-yellow-400 hover:text-black">Built by Kartikeya</span>
                    </button>
                </div>
                <div>
                    <img src={uranus} alt="" className="w-full h-auto object-cover" />
                </div>
                <div className="down flex flex-col justify-center items-center text-lg text-cyan-300 p-6 md:mr-40 md:ml-40 md:my-6">
                    <p className="my-5">Uranus, the ruler of Aquarius, starts 2024 in retrograde, going direct on Saturday, January 27, then retrogrades again on Sunday, September 1. This suggests ongoing evolution in your home life and personal growth. </p>
                    <p className="my-4">Uranus champions individuality, social justice, and authenticity. During its retrograde, focus on living by your values and perhaps engage more actively in humanitarian efforts.</p>
                    <p className="my-2">In 2024, the location of the Sun on the March equinox is in the constellation of Pisces but also on the border of Aquarius. So, we are slowly moving into a new age, from Pisces to Aquarius.</p>
                    <p className="my-3">Aquarius is ruled by Uranus, the planet that governs innovation, technology, and surprising events. Uranus perfectly mirrors Aquarius distinctive attitude, complementing the nontraditional nature of these visionary air signs.</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Main;