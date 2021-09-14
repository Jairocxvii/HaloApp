import React from 'react'
import Icampaign from '../../models/ICampign';
const CampaignCard: React.FC<Icampaign> = (campaign) => {
    return (

        <div className="  w-full shadow-md rounded-full my-2 hover:shadow-2xl transform hover:scale-105 duration-300" >
            <div className=" bg-ligth-blue shadow-ligth-blue-background-neumor rounded-3xl">
                <img className="h-1/6 lg:h-1/2 rounded-t-3xl" src={campaign.imageUrl} alt="imgcampaign" />
                <h1 className="bg-ligth-blue-button p-2 text-w truncate ">{campaign.name} {campaign.missionNumber} {campaign.type}</h1>
                <p className=" p-2 text-ligth-blue-text rounded-b-3xl bg-white h-32">{campaign.description}</p>
            </div>

        </div>

    )
}

export default CampaignCard
