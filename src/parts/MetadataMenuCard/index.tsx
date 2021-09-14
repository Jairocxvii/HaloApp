
import React from 'react'
import { Link } from 'react-router-dom'
import {MetadaCard} from '../../models/MetadaCard'
const MetadataMenuCard: React.FC<MetadaCard> = (MetadaCard) => {
    return (
        <Link to={MetadaCard.UrlRedirect}>
            <div className="h-auto m-2 mt-6 flex justify-center items-center">
                <div className="container w-80 mx-auto  bg-white shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 duration-500 shadow-ligth-blue-background-neumor rounded-3xl">
                <img className="w-full" src={MetadaCard.imageUrl} alt="" />
                <div className="text-center relative py-14">
                    <h1 className="mb-1 text-2xl font-sans font-semibold text-gray-700 hover:text-gray-900 cursor-pointer">{MetadaCard.Title}</h1>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default MetadataMenuCard
