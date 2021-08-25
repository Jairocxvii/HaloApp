import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Menu() {
    const [hiddenMenu, sethiddenMenu] = useState(false);
    const handlerClick = () => {
        sethiddenMenu(!hiddenMenu);
    }
    useEffect(() => {
        window.addEventListener("resize", () => {
            let width = window.innerWidth;
            width > 768 ? sethiddenMenu(false) : sethiddenMenu(true)
        });
    }, []);
    return (
        <div className="flex flex-wrap ">
            <div className="w-full ">
                <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-spartan">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between md:w-auto px-4 md:static md:block md:justify-start">
                            <p className="text-xl2 font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-golden-spartan">
                                Halo Stats
                            </p>
                            <button onClick={handlerClick} className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none" type="button">
                                {hiddenMenu ?
                                    <>
                                        <span className="block relative w-6 h-px rounded-sm bg-yellow-200 hover:bg-yellow-500 mt-1"></span>
                                        <span className="block relative w-6 h-px rounded-sm bg-yellow-200 hover:bg-yellow-500 mt-1"></span>
                                        <span className="block relative w-6 h-px rounded-sm bg-yellow-200 hover:bg-yellow-500 mt-1"></span>
                                    </> : <span className="block relative  rounded-sm  text-yellow-500 "> X </span>}

                            </button>
                        </div>
                        <div className={`flex items-center pl-6 md:flex-grow ${hiddenMenu ? "hidden" : ""}  `} >
                            <ul className="flex flex-col md:flex-row list-none mr-auto">
                                <li className=" md:inline-block">
                                    <Link href="#" className="lg:p-4 md:p-2  text-yellow-200 text-xl hover:text-yellow-500">Profile</Link>
                                </li>
                                <li className=" md:inline-block">
                                    <Link href="#" className="lg:p-4 md:p-2  text-yellow-200 text-xl hover:text-yellow-500">Multiplayer</Link>
                                </li>
                                <li className=" md:inline-block">
                                    <Link href="#" className="lg:p-4 md:p-2  text-yellow-200 text-xl hover:text-yellow-500">Stats</Link>
                                </li>
                                <li className=" md:inline-block">
                                    <Link href="#" className="lg:p-4 md:p-2  text-yellow-200 text-xl hover:text-yellow-500">Campaing</Link>
                                </li>
                                <li className=" md:inline-block">
                                    <Link href="#" className="lg:p-4 md:p-2  text-yellow-200 text-xl hover:text-yellow-500">Games</Link>
                                </li>
                                <li className=" md:inline-block">
                                    <Link href="#" className="lg:p-4 md:p-2  text-yellow-200 text-xl hover:text-yellow-500">About me</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>
            </div>
        </div >

    )
}

export default Menu
