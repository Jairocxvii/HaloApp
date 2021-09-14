import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Menu() {
    const [hiddenMenu, sethiddenMenu] = useState(true);
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
        <div className="flex flex-wrap rounded-md  w-11/12 m-auto mt-5  bg-ligth-blue hover:shadow-ligth-blue-background-neumor-in shadow-ligth-blue-background-neumor-out">
            <div >
                <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 ">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between md:w-auto px-4 md:static md:block md:justify-start">
                            <Link to="/" className="text-xl2 font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-golden-spartan">
                                Halo Stats
                            </Link>
                            <button onClick={handlerClick} className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none" type="button">
                                {hiddenMenu ?
                                    <>
                                        <span className="block relative w-6 h-px rounded-sm bg-ligth-blue-texthover:bg-ligth-blue-hover mt-1"></span>
                                        <span className="block relative w-6 h-px rounded-sm bg-ligth-blue-texthover:bg-ligth-blue-hover mt-1"></span>
                                        <span className="block relative w-6 h-px rounded-sm bg-ligth-blue-texthover:bg-ligth-blue-hover mt-1"></span>
                                    </> : <span className="block relative  rounded-sm  text-ligth-blue-hover "> X </span>}

                            </button>
                        </div>
                        <div className={`flex items-center pl-6 md:flex-grow ${hiddenMenu ? "hidden" : ""} md:block  `} >
                            <ul className="flex flex-col md:flex-row list-none mr-auto">

                                <li className=" md:inline-block">
                                    <Link to="/MetadaMenu" className="lg:p-4 md:p-2  text-ligth-blue-text text-xl hover:text-ligth-blue-hover">Meta Data</Link>
                                </li>
                              
                               
                                <li className=" md:inline-block">
                                    <Link to="/Campaign" className="lg:p-4 md:p-2  text-ligth-blue-text text-xl hover:text-ligth-blue-hover">Campaign</Link>
                                </li>
                                <li className=" md:inline-block">
                                    <Link to="/Aboutme" className="lg:p-4 md:p-2  text-ligth-blue-text text-xl hover:text-ligth-blue-hover">About me</Link>
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
